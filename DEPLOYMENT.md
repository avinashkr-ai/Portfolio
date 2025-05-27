# Portfolio Deployment Guide

## 🚀 Quick Deployment

### For GitHub Pages

1. **Build for GitHub Pages:**
   ```bash
   npm run build:github
   ```

2. **Deploy to GitHub Pages:**
   - Push the `docs` folder to your repository
   - Go to GitHub repository settings
   - Enable GitHub Pages with source set to `docs` folder
   - Your portfolio will be available at: `https://yourusername.github.io/portfolio/`

### Manual Build Commands

If you prefer manual control:

```bash
# Build with static configuration
ng build --configuration=static --output-path docs --base-href /portfolio/

# Move files to correct location for GitHub Pages
cp -r docs/browser/* docs/
rm -rf docs/browser docs/server docs/prerendered-routes.json docs/3rdpartylicenses.txt
```

## 📁 Generated Files

After building, the `docs` folder will contain:
- `index.html` - Main application file
- `main-*.js` - Application JavaScript bundle (409KB)
- `styles-*.css` - Compiled styles (348KB)
- `polyfills-*.js` - Browser compatibility polyfills (35KB)
- `portfolio-data.json` - Portfolio data
- `profile.jpg` - Profile image
- `favicon.ico` - Website icon
- `manifest.json` - PWA manifest
- `media/` - Additional assets

## 🔧 Configuration Notes

- **Base Href**: Set to `/portfolio/` for GitHub Pages
- **Output Mode**: Uses `static` configuration for deployment
- **No SSR**: Server-side rendering disabled for static hosting
- **Assets**: All files from `public/` folder are included
- **Bundle Size**: ~791KB total (153KB compressed)

## ✅ Build Test Results

**Last Successful Build:**
- ✅ Build completed successfully
- ✅ All assets properly copied
- ✅ Base href correctly set to `/portfolio/`
- ✅ Files properly structured for GitHub Pages
- ⚠️ Minor warnings (safe to ignore):
  - Sidebar component styles exceed budget by 233 bytes
  - Bootstrap CSS selector warnings

## 🌐 Other Hosting Options

### Netlify
1. Build: `npm run build:github`
2. Deploy the `docs` folder
3. Set base directory to `docs`

### Vercel
1. Build: `npm run build:github`
2. Deploy the `docs` folder
3. Configure output directory as `docs`

### Custom Server
1. Build: `npm run build:github`
2. Serve the `docs` folder with any static file server
3. Ensure proper routing for SPA

## 📝 Technical Details

- **Angular Version**: 19.2.x with standalone components
- **Build Configuration**: Custom `static` configuration
- **Mobile Optimized**: Responsive design with touch interactions
- **PWA Ready**: Includes manifest.json and service worker support
- **SEO Friendly**: Proper meta tags and structured data
- **Performance**: Optimized bundles with tree shaking

## 🐛 Troubleshooting

### Build Issues
- **Prerendering errors**: Use `static` configuration to disable SSR
- **Path issues**: Ensure base href matches deployment URL
- **Asset loading**: Verify all files are in `public/` folder

### Runtime Issues
- **404 on refresh**: Configure server for SPA routing
- **Assets not loading**: Check base href and file paths
- **Mobile issues**: Test responsive design on actual devices

### Performance
- **Large bundle size**: Expected due to rich UI components
- **Loading speed**: Use CDN for faster asset delivery
- **Caching**: Configure proper cache headers for static assets 