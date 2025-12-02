# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
npm run build
vercel --prod
```

3. **Custom Domain** (optional):
```bash
vercel domains add your-domain.com
vercel alias your-deployment-url.vercel.app your-domain.com
```

## Alternative: Deploy via Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

## Alternative: Netlify

1. **Build**:
```bash
npm run build
```

2. **Deploy**:
- Drag and drop the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
- Or connect your GitHub repo

## Environment Setup

### Development
```bash
npm install
npm run dev
# Open http://localhost:5173
```

### Production Test
```bash
npm run build
npm run preview
# Test production build locally
```

## Post-Deployment Checklist

- [ ] Resume PDF uploaded to `/public/resume.pdf`
- [ ] All external links working (GitHub, LinkedIn, Dev.to)
- [ ] Mobile responsiveness tested
- [ ] Contact form/email links functional
- [ ] Site loads in <3 seconds
- [ ] SEO meta tags verify (view source)

## Custom Domain Setup

### Vercel
```bash
vercel domains add yourdomain.com
vercel alias deployment-url.vercel.app yourdomain.com
```

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed

## Performance Optimization

✅ **Already Optimized:**
- Tailwind CSS purging
- Vite bundling optimization
- Optimized Google Fonts loading
- Minimal JavaScript bundle

## Security Headers (Optional)

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Maintenance

- Update dependencies quarterly: `npm update`
- Monitor Core Web Vitals via Google PageSpeed Insights
- Backup project before major updates

---

**Ready to deploy? Your cybersecurity portfolio is built for speed and impact.**