# Deployment Guide - Chael Collective Website

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is made by the creators of Next.js.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js (auto-detected)
     - Root Directory: `./`
     - Build Command: `npm run build` (default)
     - Output Directory: `.next` (default)
   - Add Environment Variables (if any)
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Add environment variables if needed
   - Click "Deploy site"

3. **Configure Next.js**
   - Netlify will automatically detect Next.js
   - Essential plugin will be added automatically

## Deploy to AWS Amplify

1. **Push to GitHub** (same as above)

2. **Deploy to Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Connect to GitHub
   - Select your repository and branch
   - Configure:
     - Framework: Next.js (auto-detected)
     - Build settings: Will be auto-configured
   - Add environment variables
   - Click "Save and deploy"

## Deploy to DigitalOcean App Platform

1. **Push to GitHub** (same as above)

2. **Deploy to DigitalOcean**
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect to GitHub
   - Select repository
   - Configure:
     - Resource Type: Web Service
     - Build Command: `npm run build`
     - Run Command: `npm start`
   - Choose a plan (Basic $5/month recommended for start)
   - Deploy

## Environment Variables

Remember to set these in your deployment platform:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Chael Collective"

# Add any other API keys or secrets
# Never commit these to GitHub!
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Test all forms (contact, newsletter)
- [ ] Test navigation and links
- [ ] Verify SEO meta tags (use tools like metatags.io)
- [ ] Test page load speed (use PageSpeed Insights)
- [ ] Set up SSL certificate (usually automatic)
- [ ] Configure custom domain
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test in multiple browsers
- [ ] Submit sitemap to Google Search Console

## Performance Optimization

After deployment, consider:

1. **Enable Image Optimization**
   - Next.js handles this automatically
   - Use WebP format when possible

2. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - Configure cache headers for static assets

3. **Add Analytics**
   - Google Analytics
   - Vercel Analytics (built-in)
   - Privacy-friendly alternatives: Plausible, Fathom

4. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Monitor Core Web Vitals
   - Set up error tracking (Sentry, etc.)

## SSL/HTTPS

All recommended platforms provide free SSL certificates:
- Vercel: Automatic
- Netlify: Automatic (Let's Encrypt)
- AWS Amplify: Automatic
- DigitalOcean: Automatic (Let's Encrypt)

## Continuous Deployment

Once set up, any push to your main branch will automatically:
1. Trigger a new build
2. Run tests (if configured)
3. Deploy to production
4. Update your live site

## Rollback

If something goes wrong:

**Vercel:**
- Go to Deployments
- Find previous successful deployment
- Click "..." → "Promote to Production"

**Netlify:**
- Go to Deploys
- Find previous successful deploy
- Click "Publish deploy"

## Support

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs

## Estimated Costs

- **Vercel**: Free for hobby/personal projects
- **Netlify**: Free tier available (100GB bandwidth)
- **AWS Amplify**: ~$10-20/month depending on traffic
- **DigitalOcean**: Starting at $5/month

Choose based on:
- Expected traffic
- Budget
- Features needed
- Ease of use preference

For Chael Collective (nonprofit), most platforms offer free or discounted hosting!
