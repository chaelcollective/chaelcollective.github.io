# 🚀 Chael Collective - Quick Start Guide

## What You Have

A complete, production-ready Next.js website with:
- ✅ 8 fully functional pages
- ✅ Mobile-first responsive design
- ✅ SEO optimization
- ✅ Custom color scheme (#491f00, #fbb9c2, #faf8f6)
- ✅ Blog with dynamic routing
- ✅ Contact forms and newsletter signup
- ✅ Social media integration

## 🏃 Get Running in 3 Steps

### 1. Install Dependencies
```bash
cd chael-collective
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to: http://localhost:3000

That's it! Your site is running locally.

## 📂 What's Inside?

```
chael-collective/
├── components/        # Reusable UI components
├── pages/            # Website pages (routes)
│   ├── index.js      # Homepage
│   ├── about.js      # About page
│   ├── blog.js       # Blog listing
│   ├── contact.js    # Contact page
│   └── blog/[slug].js # Individual blog posts
├── styles/           # Global CSS
└── public/           # Static assets
```

## 🎨 Customize Your Site

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'chael-brown': '#491f00',   // Your primary color
  'chael-pink': '#fbb9c2',    // Your accent color
  'chael-bg': '#faf8f6',      // Your background
}
```

### Update Content
- **Homepage**: Edit `pages/index.js`
- **About**: Edit `pages/about.js`
- **Blog Posts**: Edit `pages/blog/[slug].js`
- **Contact**: Edit `pages/contact.js`

### Add Your Logo
Place your logo in `public/` folder and update `components/Navbar.js`

### Add Blog Posts
Edit the `posts` object in `pages/blog/[slug].js` to add more articles.

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live with automatic SSL and CDN.

### Option 2: Netlify
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### Before Going Live
- [ ] Replace placeholder content with real content
- [ ] Add your actual logo and favicon
- [ ] Update social media links in Footer.js
- [ ] Set up email service for newsletter
- [ ] Add Google Analytics or analytics tool
- [ ] Test on mobile devices
- [ ] Run through all forms and CTAs

## 📝 Key Files to Customize

1. **pages/index.js** - Homepage hero text, statistics, features
2. **components/Footer.js** - Social media links, contact info
3. **pages/about.js** - Team members, mission statement
4. **pages/blog/[slug].js** - Blog post content
5. **tailwind.config.js** - Colors and design tokens

## 🔧 Common Tasks

### Add a New Page
1. Create `pages/newpage.js`
2. Use Layout component
3. Add link in Navbar.js

### Modify Navigation
Edit `components/Navbar.js` - update the `navLinks` array

### Change Typography
Edit `tailwind.config.js` - update fontFamily

### Add Images
1. Place images in `public/images/`
2. Reference as `/images/yourimage.jpg`

## 💡 Pro Tips

1. **Mobile Testing**: Always test on real mobile devices
2. **Performance**: Use Next.js Image component for images
3. **SEO**: Update meta tags in each page's Head component
4. **Forms**: Connect to Formspree or Netlify Forms for production
5. **Analytics**: Add Google Analytics in `pages/_app.js`

## 🆘 Need Help?

### Development Issues
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Build Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## ✅ Checklist for Launch

- [ ] Replace all placeholder content
- [ ] Add real team photos and bios
- [ ] Write actual blog posts
- [ ] Add favicon and logo
- [ ] Update social media links
- [ ] Set up newsletter backend
- [ ] Configure contact form
- [ ] Add analytics tracking
- [ ] Test all links and buttons
- [ ] Mobile responsiveness check
- [ ] SEO meta tags review
- [ ] Legal pages review (privacy, terms)
- [ ] Set up custom domain
- [ ] SSL certificate (auto with Vercel/Netlify)
- [ ] Test in multiple browsers

## 🎉 You're Ready!

Your Chael Collective website is fully functional and ready to customize. Start by updating the content to match your vision, then deploy to production.

Good luck building an amazing community! 💗

---

**Questions?** Check the main README.md for detailed documentation.
