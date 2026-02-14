# Chael Collective - Complete Project Structure

## 📁 Directory Structure

```
chael-collective/
│
├── components/                 # Reusable React Components
│   ├── Navbar.js              # Navigation bar with mobile menu
│   ├── Footer.js              # Footer with links and social media
│   ├── Hero.js                # Homepage hero section
│   ├── Layout.js              # Wrapper component with Navbar + Footer
│   ├── FeatureCard.js         # Card component for features
│   └── BlogCard.js            # Card component for blog posts
│
├── pages/                     # Next.js Pages (Routes)
│   ├── _app.js               # Custom App component (global config)
│   ├── _document.js          # Custom Document component
│   ├── index.js              # Homepage (/)
│   ├── about.js              # About page (/about)
│   ├── blog.js               # Blog listing page (/blog)
│   ├── contact.js            # Contact page (/contact)
│   ├── privacy.js            # Privacy Policy (/privacy)
│   ├── terms.js              # Terms of Service (/terms)
│   └── blog/
│       └── [slug].js         # Dynamic blog post pages (/blog/[slug])
│
├── styles/                    # Global Styles
│   └── globals.css           # Global CSS with Tailwind directives
│
├── public/                    # Static Assets
│   └── README.md             # Instructions for adding favicon
│
├── package.json              # Project dependencies and scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## 🎨 Design System

### Color Palette

- **Primary Text**: #491f00 (dark brown)
- **Accent**: #fbb9c2 (soft pink)
- **Background**: #faf8f6 (off-white)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## 🚀 Key Features

- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags
- ✅ Accessible with ARIA labels
- ✅ Fast performance with Next.js
- ✅ 8 complete pages
- ✅ Blog with dynamic routing
- ✅ Contact form with validation
- ✅ Newsletter signup
- ✅ Social media integration

## 📱 Pages Included

1. **Homepage** - Hero, features, gallery, blog preview, CTAs
2. **About** - Mission, team, timeline, impact
3. **Blog Listing** - Posts with category filtering
4. **Blog Post** - Dynamic individual articles
5. **Contact** - Form and contact information
6. **Privacy Policy** - Complete privacy policy
7. **Terms of Service** - Complete terms

## 💻 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 🌐 Deployment

Deploy to Vercel (recommended):
1. Push to GitHub
2. Import to Vercel
3. Automatic deployment

---

**Built with 💗 for Chael Collective**
