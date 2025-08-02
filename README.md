# Shane Jacob - Personal Portfolio Website

A modern, interactive personal portfolio website showcasing skills, projects, and experience with stunning animations and visual effects.

## Features

### Visual & Interactive Elements
- **Three.js Background**: Dynamic 3D particle system in the hero section
- **GSAP Animations**: Smooth scroll-triggered animations throughout the site
- **Parallax Effects**: Floating elements with parallax scrolling
- **Typing Animation**: Dynamic text typing effect in the hero section
- **Counter Animations**: Animated statistics counters
- **Hover Effects**: Interactive skill cards and project cards
- **Responsive Design**: Fully responsive across all devices

### Modern UI/UX
- **Clean Design**: Modern, minimalist design with gradient accents
- **Smooth Navigation**: Fixed navbar with smooth scrolling
- **Mobile-First**: Optimized for mobile devices with hamburger menu
- **Loading States**: Smooth loading animations and transitions
- **Interactive Elements**: Hover effects and micro-interactions

### Technical Features
- **MERN Stack Showcase**: Highlighting your expertise in React, Node.js, MongoDB
- **Project Gallery**: Featured projects with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Efficient animations and lazy loading

## Sections

1. **Hero Section**: Eye-catching introduction with 3D background
2. **About**: Personal story and statistics
3. **Skills**: Interactive skill showcase organized by category
4. **Projects**: Featured projects with hover effects
5. **Contact**: Contact information cards (Email, LinkedIn, GitHub)

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional animations and scroll triggers
- **Three.js**: 3D graphics and particle systems

### Libraries & Dependencies
- **GSAP**: Animation library for smooth transitions
- **Three.js**: 3D graphics library
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## Installation & Setup

### Prerequisites
- Modern web browser
- Local development server (optional)

### Quick Start
1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Enjoy** the interactive portfolio!

### Local Development
For the best experience, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors & Theme
The website uses CSS custom properties for easy theming. Edit the `:root` variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... other variables */
}
```

### Content Updates
- **Personal Information**: Update the hero section and about content in `index.html`
- **Projects**: Add your projects to the projects section
- **Skills**: Modify the skills grid to match your expertise
- **Contact**: Update contact information in the contact cards

### Animations
- **GSAP Animations**: Modify animation parameters in `script.js`
- **Three.js Background**: Adjust particle count and behavior
- **Scroll Triggers**: Customize scroll animation triggers

## Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Performance Features

- **Optimized Animations**: Efficient GSAP animations
- **Lazy Loading**: Images and heavy content load on demand
- **Smooth Scrolling**: Native smooth scrolling behavior
- **Mobile Optimization**: Touch-friendly interactions

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Project Structure

```
personalportfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── _redirects          # Netlify redirects
├── netlify.toml        # Netlify configuration
└── README.md          # Project documentation
```

## Design Features

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Cyan (#06b6d4)
- **Text**: Dark gray (#1f2937)
- **Background**: White and light gray

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scalable font sizes

### Animations
- **Entrance**: Fade-in and slide-in effects
- **Hover**: Scale and color transitions
- **Scroll**: Triggered animations on scroll
- **Background**: 3D particle system

## Development Notes

### GSAP Integration
- ScrollTrigger plugin for scroll-based animations
- Timeline animations for complex sequences
- Stagger effects for multiple elements

### Three.js Implementation
- WebGL renderer with alpha transparency
- Particle system with custom geometry
- Responsive canvas sizing

### Performance Considerations
- Efficient animation loops
- Optimized particle count
- Mobile-friendly interactions
- Reduced motion support

## Future Enhancements

Potential improvements and additions:
- **Blog Section**: Add a blog to showcase thoughts and tutorials
- **Portfolio Gallery**: Image gallery for project screenshots
- **Dark Mode**: Toggle between light and dark themes
- **Multi-language**: Internationalization support
- **CMS Integration**: Easy content management
- **Analytics**: Track visitor interactions

## Contributing

This is a personal portfolio project. Feel free to:
- **Fork** the project for your own use
- **Customize** the design and content
- **Improve** the code and features
- **Share** your modifications

## Contact

For questions or suggestions about this portfolio template:
- **Email**: shane.jacob@example.com
- **LinkedIn**: linkedin.com/in/shanejacob
- **GitHub**: github.com/shanejacob

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with modern web technologies**

## Netlify Deployment

This portfolio is optimized for Netlify deployment.

### Quick Deploy to Netlify

1. **Push to GitHub**: Upload your files to a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
3. **Deploy**: Netlify will automatically deploy your site

### Manual Deployment

1. **Build Settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)

2. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

### Contact Section

The contact section features direct contact information:
- **Email**: Direct email contact
- **LinkedIn**: Professional networking
- **GitHub**: Code repository and projects

### Custom Domain Setup

1. **Add Custom Domain**:
   - Go to "Domain settings" in Netlify dashboard
   - Click "Add custom domain"
   - Enter your domain name

2. **DNS Configuration**:
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers

3. **SSL Certificate**:
   - Netlify provides free SSL certificates
   - Automatically configured for custom domains

### Performance Optimization

The site includes:
- **Caching Headers**: Optimized for static assets
- **Security Headers**: XSS protection, frame options
- **Compression**: Automatic gzip compression
- **CDN**: Global content delivery network

### Testing

1. **Local Testing**:
   - Run `python -m http.server 8000`
   - Test all sections and animations
   - Check browser console for logs

2. **Production Testing**:
   - Deploy to Netlify
   - Test all functionality
   - Verify contact links work

### Troubleshooting

#### Build Issues
- Verify all files are in root directory
- Check `netlify.toml` configuration
- Review build logs in Netlify dashboard

#### Domain Issues
- Verify DNS settings
- Check SSL certificate status
- Contact Netlify support if needed

### Advanced Configuration

#### Custom Headers
The `netlify.toml` file includes:
- Security headers
- Cache optimization
- Performance settings

#### Environment Variables
Add in Netlify dashboard:
- `NODE_VERSION`: Set to "18"
- Custom variables as needed

#### Build Hooks
- Set up build hooks for automatic deployments
- Integrate with CI/CD pipelines

Your portfolio is now ready for Netlify deployment with a clean, professional contact section! 