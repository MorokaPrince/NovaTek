# NovaTek Consulting - Professional Consulting Website

A modern, production-ready consulting website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases NovaTek Consulting's services, case studies, and thought leadership through a responsive, SEO-optimized platform.

## 🚀 Project Information

**Company:** NovaTek Consulting
**Domain:** [morokaandassociates.com](https://morokaandassociates.com)
**Description:** Professional consulting website with modern design and comprehensive business solutions

## 🛠 Technologies Used

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Deployment:** Production-ready with Vercel optimization
- **Performance:** Turbopack for fast development builds
- **Testing:** Jest for unit tests, Playwright for E2E tests
- **CMS:** Multi-provider support (Contentful, Sanity, Strapi)
- **SEO:** Next-sitemap integration with meta optimization

## ✨ Key Features

### 🎨 Design & User Experience
- **Responsive Design:** Mobile-first approach with custom breakpoints
- **Custom Design Tokens:** Brand-specific color palette and typography
  - Primary: `#0B4F6C` (Professional blue)
  - Accent: `#E94F37` (Energetic orange)
  - Background: `#F7F9FC` (Clean neutral)
- **Modern Typography:** Inter font family with custom spacing
- **Smooth Animations:** Fade-in and slide-in effects

### 🔗 Dynamic Routing
- **Services:** `/services/[slug]` - Individual service pages
- **Case Studies:** `/case-studies/[slug]` - Project showcases
- **Blog:** `/blog/[slug]` - Thought leadership content
- **Contact:** Dedicated contact page with form validation

### 🔍 SEO Optimization
- **Sitemap Generation:** Automated XML sitemap creation
- **Meta Tags:** Dynamic meta descriptions and titles
- **Image Optimization:** WebP/AVIF formats with responsive sizing
- **Security Headers:** Production-ready security configuration
- **Performance:** Optimized bundle splitting and caching

### 📝 Content Management
- **CMS Integration Ready:** Support for multiple providers
  - Contentful: Enterprise-grade content platform
  - Sanity: Headless CMS with GROQ queries
  - Strapi: Open-source Node.js CMS
- **Type-Safe Content:** Full TypeScript interfaces for all content types

### 🛡 Production Ready
- **Security Headers:** XSS protection, CSRF prevention, HSTS
- **Error Handling:** Comprehensive error boundaries
- **Performance Monitoring:** Core Web Vitals optimization
- **Bundle Optimization:** Vendor chunking and tree shaking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/novatek-consulting.git
   cd novatek-consulting
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables in `.env.local`:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # CMS Configuration (choose one)
   # Contentful
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token

   # Sanity
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production

   # Strapi
   STRAPI_API_URL=http://localhost:1337/api
   STRAPI_API_TOKEN=your_api_token

   # API Configuration
   NEXT_PUBLIC_API_URL=https://api.novatekconsulting.com
   ```

## 💻 Development

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code for quality
npm run lint

# Run unit tests
npm run test

# Run end-to-end tests
npm run e2e
```

### Development Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Code Quality:**
   ```bash
   # Check for linting issues
   npm run lint

   # Run tests
   npm run test
   ```

## 📁 Project Structure

```
novatek-consulting/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── robots.txt         # SEO robots file
│   └── *.svg              # Icon files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Site header
│   │   ├── Footer.tsx     # Site footer
│   │   └── Layout.tsx     # Page layout wrapper
│   ├── lib/               # Utility libraries
│   │   ├── api.ts         # API functions
│   │   └── cms.ts         # CMS integration
│   ├── pages/             # Page components (Pages Router)
│   │   ├── services/[slug].tsx    # Service pages
│   │   ├── case-studies/[slug].tsx # Case study pages
│   │   ├── blog/[slug].tsx        # Blog post pages
│   │   └── contact.tsx            # Contact page
│   ├── styles/            # Style files
│   │   └── tailwind.css   # Tailwind styles
│   └── utils/             # Utility functions
├── .gitignore             # Git ignore rules
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

### Component Architecture

- **Layout Components:** `Header`, `Footer`, `Layout` for consistent structure
- **Page Components:** Individual pages for services, case studies, blog
- **Utility Libraries:** API integration and CMS abstraction
- **Type Definitions:** Comprehensive TypeScript interfaces

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- **Image Optimization:** Configured domains and formats
- **Security Headers:** XSS protection and content security
- **Bundle Optimization:** Vendor chunking and Turbopack
- **SEO:** Sitemap generation and meta optimization

### Tailwind Configuration (`tailwind.config.js`)
- **Custom Colors:** Brand-specific color palette
- **Typography:** Inter font with custom spacing
- **Animations:** Fade-in and slide-in effects
- **Responsive Design:** Mobile-first breakpoints

### TypeScript Configuration (`tsconfig.json`)
- **Strict Mode:** Enhanced type checking
- **Path Mapping:** Convenient import aliases
- **Performance:** Incremental compilation
- **ESNext:** Modern JavaScript features

## 🧪 Testing

### Unit Tests (Jest)
```bash
npm run test
```

### End-to-End Tests (Playwright)
```bash
npm run e2e
```

## 🚢 Deployment

### Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **The build output includes:**
   - Optimized JavaScript bundles
   - Generated CSS files
   - Static assets
   - XML sitemap

### Environment Variables for Production

Required environment variables:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://morokaandassociates.com

# Choose your CMS provider
CONTENTFUL_SPACE_ID=your_production_space_id
CONTENTFUL_ACCESS_TOKEN=your_production_token
# OR
SANITY_PROJECT_ID=your_production_project_id
# OR
STRAPI_API_URL=https://your-production-strapi.com/api

NEXT_PUBLIC_API_URL=https://api.novatekconsulting.com
```

### Deployment Platforms

**Recommended: Vercel**
- Automatic deployments from Git
- Global CDN distribution
- Built-in analytics
- Zero-configuration setup

**Alternative: Docker**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

## 🔒 Security Features

- **Content Security Policy:** XSS protection
- **HTTPS Enforcement:** HSTS headers in production
- **XSS Protection:** Browser-level protection
- **CSRF Prevention:** Token-based form validation
- **Input Sanitization:** Server-side validation

## 📈 Performance Features

- **Image Optimization:** WebP/AVIF with responsive sizing
- **Bundle Splitting:** Vendor and application code separation
- **Code Splitting:** Route-based code loading
- **Caching:** Optimized cache headers
- **Compression:** Gzip/Brotli compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Quality Standards

- **ESLint:** Configured for Next.js and TypeScript
- **TypeScript:** Strict mode with comprehensive type checking
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** Core Web Vitals optimization

## 📄 License

This project is proprietary software for NovaTek Consulting.

## 📞 Support

For support and inquiries, please contact:
- **Email:** info@novatekconsulting.com
- **Phone:** Contact form available on the website
- **Address:** Available through the contact page

---

**Built with ❤️ by NovaTek Consulting Team**
