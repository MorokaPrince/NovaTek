// CMS integration utilities for NovaTek Consulting

export interface CMSConfig {
  contentful?: {
    spaceId: string;
    accessToken: string;
    previewToken?: string;
  };
  sanity?: {
    projectId: string;
    dataset: string;
    apiVersion: string;
    useCdn: boolean;
  };
  strapi?: {
    apiUrl: string;
    apiToken?: string;
  };
}

// CMS configuration - in a real app, these would come from environment variables
const cmsConfig: CMSConfig = {
  contentful: {
    spaceId: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN || '',
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || '',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: process.env.SANITY_API_VERSION || '2023-01-01',
    useCdn: process.env.NODE_ENV === 'production',
  },
  strapi: {
    apiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
    apiToken: process.env.STRAPI_API_TOKEN || '',
  },
};

// Content types for type safety
export interface CMSContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | undefined;
}

export interface ServiceContent extends CMSContent {
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  isActive: boolean;
  publishedAt?: string | undefined;
}

export interface CaseStudyContent extends CMSContent {
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: {
    url: string;
    alt: string;
  };
  isActive: boolean;
  publishedAt?: string | undefined;
}

export interface BlogPostContent extends CMSContent {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
  featuredImage?: {
    url: string;
    alt: string;
  } | undefined;
  isPublished: boolean;
  publishedAt?: string | undefined;
}

// Generic CMS fetch function
async function cmsFetch<T = unknown>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // This is a generic function that would be implemented based on the chosen CMS
  // For now, we'll return mock data structure

  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.statusText}`);
  }

  return (response.json() as Promise<T>);
}

// Contentful integration functions
export async function getContentfulEntries<T = unknown>(contentType: string): Promise<T[]> {
  if (!cmsConfig.contentful?.spaceId || !cmsConfig.contentful?.accessToken) {
    console.warn('Contentful configuration missing');
    return [];
  }

  const { spaceId, accessToken } = cmsConfig.contentful;
  const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentType}`;

  try {
    return await cmsFetch(endpoint);
  } catch (error) {
    console.error('Contentful fetch error:', error);
    return [];
  }
}

// Sanity integration functions
export async function getSanityContent<T = unknown>(query: string): Promise<T[]> {
  if (!cmsConfig.sanity?.projectId) {
    console.warn('Sanity configuration missing');
    return [];
  }

  const { projectId, dataset, apiVersion } = cmsConfig.sanity;
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await cmsFetch<{ result: T[] }>(endpoint);
    return response.result || [];
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}

// Strapi integration functions
export async function getStrapiContent<T = unknown>(contentType: string, params?: Record<string, string | number | boolean>): Promise<T[]> {
  if (!cmsConfig.strapi?.apiUrl) {
    console.warn('Strapi configuration missing');
    return [];
  }

  const { apiUrl, apiToken } = cmsConfig.strapi;
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
  }
  const endpoint = `${apiUrl}/${contentType}?${searchParams}`;

  const headers: Record<string, string> = {};
  if (apiToken) {
    headers.Authorization = `Bearer ${apiToken}`;
  }

  try {
    return await cmsFetch(endpoint, { headers });
  } catch (error) {
    console.error('Strapi fetch error:', error);
    return [];
  }
}

// Generic content retrieval functions
export async function getServicesFromCMS(): Promise<ServiceContent[]> {
  // Try different CMS providers in order of preference
  try {
    // Try Sanity first
    if (cmsConfig.sanity?.projectId) {
      const query = `*[_type == "service" && isActive == true] | order(_createdAt desc)`;
      return await getSanityContent(query);
    }

    // Try Contentful
    if (cmsConfig.contentful?.spaceId) {
      return await getContentfulEntries('service');
    }

    // Try Strapi
    if (cmsConfig.strapi?.apiUrl) {
      return await getStrapiContent('services', { 'filters[isActive][$eq]': 'true' });
    }
  } catch (error) {
    console.error('CMS services fetch error:', error);
  }

  return [];
}

export async function getCaseStudiesFromCMS(): Promise<CaseStudyContent[]> {
  try {
    if (cmsConfig.sanity?.projectId) {
      const query = `*[_type == "caseStudy" && isActive == true] | order(_createdAt desc)`;
      return await getSanityContent(query);
    }

    if (cmsConfig.contentful?.spaceId) {
      return await getContentfulEntries('caseStudy');
    }

    if (cmsConfig.strapi?.apiUrl) {
      return await getStrapiContent('case-studies', { 'filters[isActive][$eq]': 'true' });
    }
  } catch (error) {
    console.error('CMS case studies fetch error:', error);
  }

  return [];
}

export async function getBlogPostsFromCMS(): Promise<BlogPostContent[]> {
  try {
    if (cmsConfig.sanity?.projectId) {
      const query = `*[_type == "post" && isPublished == true] | order(publishedAt desc)`;
      return await getSanityContent(query);
    }

    if (cmsConfig.contentful?.spaceId) {
      return await getContentfulEntries('blogPost');
    }

    if (cmsConfig.strapi?.apiUrl) {
      return await getStrapiContent('posts', { 'filters[isPublished][$eq]': 'true' });
    }
  } catch (error) {
    console.error('CMS blog posts fetch error:', error);
  }

  return [];
}

// Utility function to transform CMS data to app format
export function transformServiceData(cmsData: Record<string, unknown>): ServiceContent {
  return {
    id: String(cmsData.id || cmsData._id || ''),
    title: String(cmsData.title || ''),
    slug: String(cmsData.slug || ''),
    description: String(cmsData.description || ''),
    features: Array.isArray(cmsData.features) ? cmsData.features.map(String) : [],
    benefits: Array.isArray(cmsData.benefits) ? cmsData.benefits.map(String) : [],
    isActive: Boolean(cmsData.isActive ?? true),
    createdAt: String(cmsData.createdAt || cmsData._createdAt || ''),
    updatedAt: String(cmsData.updatedAt || cmsData._updatedAt || ''),
    publishedAt: cmsData.publishedAt ? String(cmsData.publishedAt) : undefined,
  };
}

export function transformCaseStudyData(cmsData: Record<string, unknown>): CaseStudyContent {
  return {
    id: String(cmsData.id || cmsData._id || ''),
    title: String(cmsData.title || ''),
    slug: String(cmsData.slug || ''),
    client: String(cmsData.client || ''),
    industry: String(cmsData.industry || ''),
    challenge: String(cmsData.challenge || ''),
    solution: String(cmsData.solution || ''),
    results: Array.isArray(cmsData.results) ? cmsData.results.map(String) : [],
    image: (cmsData.image as { url: string; alt: string }) || { url: '', alt: '' },
    isActive: Boolean(cmsData.isActive ?? true),
    createdAt: String(cmsData.createdAt || cmsData._createdAt || ''),
    updatedAt: String(cmsData.updatedAt || cmsData._updatedAt || ''),
    publishedAt: cmsData.publishedAt ? String(cmsData.publishedAt) : undefined,
  };
}

export function transformBlogPostData(cmsData: Record<string, unknown>): BlogPostContent {
  return {
    id: String(cmsData.id || cmsData._id || ''),
    title: String(cmsData.title || ''),
    slug: String(cmsData.slug || ''),
    excerpt: String(cmsData.excerpt || ''),
    content: String(cmsData.content || ''),
    author: String(cmsData.author || ''),
    readTime: String(cmsData.readTime || ''),
    tags: Array.isArray(cmsData.tags) ? cmsData.tags.map(String) : [],
    featuredImage: cmsData.featuredImage as { url: string; alt: string } | undefined,
    isPublished: Boolean(cmsData.isPublished ?? true),
    createdAt: String(cmsData.createdAt || cmsData._createdAt || ''),
    updatedAt: String(cmsData.updatedAt || cmsData._updatedAt || ''),
    publishedAt: cmsData.publishedAt ? String(cmsData.publishedAt) : undefined,
  };
}