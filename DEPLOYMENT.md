# Deployment Guide for VINKS Services LLP Website

## Quick Start

The website is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Prerequisites

- Git installed and configured
- GitHub account with repository access
- Node.js 18.x or higher (for local development)

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The site automatically deploys when you push changes to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Build and deployment**, select **Source: GitHub Actions**

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow progress
   - Once complete, your site will be live at `https://vinksllp.github.io`

### Method 2: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://vinksllp.github.io`

## Development Workflow

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vinksllp/vinksllp.github.io.git
   cd vinksllp.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173`
   - The page will auto-reload when you make changes

### Making Changes

1. **Edit content:**
   - Update components in `src/components/`
   - Modify testimonials in `src/data/testimonials.json`
   - Update team members in `src/data/teamMembers.json`

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## Updating Content

### Adding Testimonials

Edit `src/data/testimonials.json`:

```json
{
  "id": 7,
  "name": "New Client",
  "company": "Company Name",
  "role": "Client Position",
  "testimonial": "The testimonial text goes here...",
  "rating": 5,
  "avatar": "https://ui-avatars.com/api/?name=New+Client&background=0284c7&color=fff&size=128"
}
```

### Adding Team Members

Edit `src/data/teamMembers.json`:

```json
{
  "id": 7,
  "name": "New Team Member",
  "role": "Position Title",
  "bio": "Short bio about the team member...",
  "image": "https://ui-avatars.com/api/?name=New+Member&background=0284c7&color=fff&size=256&bold=true",
  "linkedin": "https://linkedin.com/in/username",
  "email": "email@vinksservices.com"
}
```

## Troubleshooting

### Build Fails

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check for errors:**
   ```bash
   npm run lint
   npm run build
   ```

### Deployment Fails

1. **Check GitHub Actions logs:**
   - Go to Actions tab in your repository
   - Click on the failed workflow
   - Review error messages

2. **Verify GitHub Pages settings:**
   - Settings → Pages → Source should be "GitHub Actions"

3. **Check repository permissions:**
   - Ensure Actions have write permissions
   - Settings → Actions → General → Workflow permissions

### Site Not Updating

1. **Clear browser cache**
2. **Wait 2-3 minutes** for GitHub Pages to update
3. **Check deployment status** in Actions tab
4. **Verify build succeeded** with no errors

## Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS:**
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record pointing to `vinksllp.github.io`

3. **Update in GitHub:**
   - Settings → Pages → Custom domain
   - Enter your domain and save
   - Enable "Enforce HTTPS"

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minified assets
- ✅ Optimized images (using UI Avatars API)
- ✅ Tailwind CSS purging (unused styles removed)

## Security

- All dependencies are kept up to date
- No sensitive data in repository
- HTTPS enabled by default on GitHub Pages
- Content Security Policy headers (if using custom domain with CDN)

## Monitoring

After deployment, verify:
- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Navigation works smoothly
- [ ] Forms are functional (if enabled)
- [ ] Mobile responsiveness
- [ ] Images load properly
- [ ] No console errors

## Support

For issues or questions:
- **Technical Issues:** Create an issue in the repository
- **Content Updates:** Contact the development team
- **Deployment Help:** Refer to GitHub Pages documentation

## Version History

- **v1.0.0** - Initial release with all sections
  - Hero, Services, Domains, About, Testimonials, Team, Footer
  - Responsive design
  - Smooth scrolling
  - JSON-driven content

---

**Last Updated:** December 2025
**Maintained By:** VINKS Services LLP Development Team
