// API utility functions for NovaTek Consulting

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.novatekconsulting.com';

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      data,
      success: true,
    };
  } catch (error) {
    console.error('API request error:', error);
    return {
      data: null as T,
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Contact form submission
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<{ id: string }>> {
  return apiRequest<{ id: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Get all services
export async function getServices(): Promise<ApiResponse<ServiceData[]>> {
  return apiRequest<ServiceData[]>('/services');
}

// Get service by slug
export async function getServiceBySlug(slug: string): Promise<ApiResponse<ServiceData>> {
  return apiRequest<ServiceData>(`/services/${slug}`);
}

// Get all case studies
export async function getCaseStudies(): Promise<ApiResponse<CaseStudyData[]>> {
  return apiRequest<CaseStudyData[]>('/case-studies');
}

// Get case study by slug
export async function getCaseStudyBySlug(slug: string): Promise<ApiResponse<CaseStudyData>> {
  return apiRequest<CaseStudyData>(`/case-studies/${slug}`);
}

// Get all blog posts
export async function getBlogPosts(): Promise<ApiResponse<BlogPostData[]>> {
  return apiRequest<BlogPostData[]>('/blog');
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<ApiResponse<BlogPostData>> {
  return apiRequest<BlogPostData>(`/blog/${slug}`);
}

// Newsletter subscription
export async function subscribeNewsletter(
  email: string
): Promise<ApiResponse<{ id: string }>> {
  return apiRequest<{ id: string }>('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}