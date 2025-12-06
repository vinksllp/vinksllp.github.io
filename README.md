# VINKS Services LLP - Company Website

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)

A modern, responsive single-page application (SPA) landing page for VINKS Services LLP, showcasing software consulting services across Insurance, Gas Distribution, Government, and International sectors.

## 🌟 Features

- **Modern Tech Stack**: Built with React 19, Vite 7, and Tailwind CSS 3
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **JSON-Driven Content**: Easy-to-update testimonials and team member data
- **Smooth Animations**: Professional transitions and scroll effects
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Optimized**: Lightning-fast load times with Vite
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📁 Project Structure

```
vinksllp.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── vite.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header with smooth scrolling
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── Services.jsx       # Services showcase
│   │   ├── Domains.jsx        # Industry expertise
│   │   ├── About.jsx          # Company information
│   │   ├── Testimonials.jsx   # Client testimonials carousel
│   │   ├── TeamMembers.jsx    # Team members grid
│   │   └── Footer.jsx         # Footer with links and contact
│   ├── data/
│   │   ├── testimonials.json  # Testimonials data
│   │   └── teamMembers.json   # Team members data
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles with Tailwind
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vinksllp/vinksllp.github.io.git
cd vinksllp.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages manually

## 🎨 Customization

### Updating Testimonials

Edit `src/data/testimonials.json`:

```json
{
  "id": 1,
  "name": "Client Name",
  "company": "Company Name",
  "role": "Position",
  "testimonial": "Your testimonial text here...",
  "rating": 5,
  "avatar": "https://..."
}
```

### Updating Team Members

Edit `src/data/teamMembers.json`:

```json
{
  "id": 1,
  "name": "Team Member Name",
  "role": "Position",
  "bio": "Short biography...",
  "image": "https://...",
  "linkedin": "https://linkedin.com/...",
  "email": "email@example.com"
}
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 🌐 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

**Setup Steps:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the `main` branch to trigger deployment

### Manual Deployment

```bash
npm run deploy
```

This will build the project and deploy it using `gh-pages`.

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Static site hosting

## 📊 Sections

1. **Hero** - Eye-catching introduction with key statistics
2. **Services** - Comprehensive list of software services
3. **Domains** - Industry expertise showcase
4. **About** - Company mission, vision, and values
5. **Testimonials** - Interactive client testimonial carousel
6. **Team** - Team member profiles with contact form
7. **Footer** - Quick links, contact info, and social media

## 🔧 Configuration

### Vite Configuration

The project is configured for GitHub Pages deployment in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

### Tailwind Configuration

Custom theme extensions in `tailwind.config.js` include:
- Custom color palette (primary and secondary)
- Custom fonts (Inter and Poppins)
- Custom animations (fade-in, slide-up, slide-down)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 VINKS Services LLP. All rights reserved.

## 🤝 Contributing

This is a private company website. For inquiries, please contact info@vinksservices.com

## 📞 Contact

- **Website**: https://vinksllp.github.io
- **Email**: info@vinksservices.com
- **Phone**: +91 (022) 1234-5678
- **Address**: 123 Business District, Mumbai, Maharashtra 400001, India

---

Built with ❤️ by VINKS Services LLP

