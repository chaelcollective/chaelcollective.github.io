# Chael Collective Website

A modern, mobile-first Next.js website for Chael Collective - a nonprofit community dedicated to breaking the stigma around acne.

## 🌸 Features

- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Modern Stack**: Built with Next.js 14, React, and Tailwind CSS
- **SEO Optimized**: Proper meta tags, semantic HTML, and clean structure
- **Accessible**: WCAG-compliant with proper ARIA labels and alt text
- **Fast Performance**: Optimized images and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chael-collective
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
chael-collective/
├── components/          # Reusable React components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Layout.js
│   ├── FeatureCard.js
│   └── BlogCard.js
├── pages/              # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js        # Homepage
│   ├── about.js
│   ├── blog.js
│   ├── contact.js
│   ├── privacy.js
│   ├── terms.js
│   └── blog/
│       └── [slug].js   # Dynamic blog post pages
├── public/             # Static assets
├── styles/             # Global styles
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎨 Design System

### Colors

- **Background**: `#faf8f6` (off-white)
- **Primary Text**: `#491f00` (dark brown)
- **Accent**: `#fbb9c2` (soft pink)

### Typography

- Font Family: Inter (Google Fonts)
- Responsive font sizes with mobile-first approach

### Components

All components are built with Tailwind CSS utility classes and follow a consistent design system.

## 📱 Pages

1. **Home** (`/`) - Hero, features, gallery, blog preview, CTAs
2. **About** (`/about`) - Mission, team, timeline, impact
3. **Resources** (`/blog`) - Blog posts with category filtering
4. **Blog Post** (`/blog/[slug]`) - Individual article pages
5. **Contact** (`/contact`) - Contact form and information
6. **Privacy** (`/privacy`) - Privacy policy
7. **Terms** (`/terms`) - Terms of service

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Web fonts

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build

### Deploy to Other Platforms

You can deploy to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Heroku

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://chaelcollective.com
```

### Tailwind Configuration

Customize colors, fonts, and other design tokens in `tailwind.config.js`.

## 📝 Content Management

Currently, blog posts are stored in the code. For production, consider integrating:

- Contentful
- Sanity
- Strapi
- WordPress (headless)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For questions or support, please:

- Email: hello@chaelcollective.com
- Join our Discord: discord.gg/chaelcollective
- Visit: [Contact Page](/contact)

## 🙏 Acknowledgments

- Design inspiration from modern health and wellness communities
- Icons and emojis from Unicode Consortium
- Built with love for the Chael Collective community

---

**Made with 💗 by the Chael Collective team**
