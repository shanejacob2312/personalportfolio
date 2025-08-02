Shane Jacob - Personal Portfolio Website

A modern, interactive personal portfolio website showcasing skills, projects, and experience with stunning animations and visual effects.

Visual & Interactive Elements
Three.js Background: Dynamic 3D particle system in the hero section
GSAP Animations: Smooth scroll-triggered animations throughout the site
Parallax Effects: Floating elements with parallax scrolling
Typing Animation: Dynamic text typing effect in the hero section
Counter Animations: Animated statistics counters
Hover Effects: Interactive skill cards and project cards
Responsive Design: Fully responsive across all devices

Technical Features
Project Gallery: Featured projects with detailed descriptions
Contact Form: Functional contact form with validation
SEO Optimized: Proper meta tags and semantic HTML
Performance Optimized: Efficient animations and lazy loading

Sections

Introduction: Eye-catching introduction with 3D background
About: Personal story and statistics
Skills: Interactive skill showcase organized by category
Projects: Featured projects with hover effects
Contact: Contact information and functional form

Technology Stack

Frontend
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

Installation & Setup
Quick Start
1. Clone or Download the project files
2. Open index.html in your web browser
3. Enjoy the interactive portfolio!

Local Development
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

Project Structure

```
personalportfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

Design Features
Color Palette
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

## 🔧 Development Notes

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

## 📈 Future Enhancements

Potential improvements and additions:
- **Blog Section**: Add a blog to showcase thoughts and tutorials
- **Portfolio Gallery**: Image gallery for project screenshots
- **Dark Mode**: Toggle between light and dark themes
- **Multi-language**: Internationalization support
- **CMS Integration**: Easy content management
- **Analytics**: Track visitor interactions

## 🤝 Contributing

This is a personal portfolio project. Feel free to:
- **Fork** the project for your own use
- **Customize** the design and content
- **Improve** the code and features
- **Share** your modifications

## 📞 Contact

For questions or suggestions about this portfolio template:
- **Email**: shane.jacob@example.com
- **LinkedIn**: linkedin.com/in/shanejacob
- **GitHub**: github.com/shanejacob

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern web technologies** 

## 📧 Contact Form Functionality

The contact form is currently set up with multiple options for email delivery:

### **Current Setup (Simulated)**
- **Status**: Working with simulated email sending
- **Features**: Form validation, error handling, success messages
- **Behavior**: Shows success message and logs form data to console

### **Option 1: EmailJS Integration (Recommended)**
To enable real email sending:

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create** an email service (Gmail, Outlook, etc.)
3. **Create** an email template
4. **Update** the JavaScript with your credentials:

```javascript
// In script.js, update these values:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: name,
    from_email: email,
    message: message,
    to_name: 'Shane Jacob'
}, 'YOUR_USER_ID')
```

5. **Add** EmailJS script to HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_USER_ID');
</script>
```

### **Option 2: Formspree Integration**
1. **Sign up** at [Formspree](https://formspree.io/)
2. **Create** a new form
3. **Update** the form action in HTML:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### **Option 3: Netlify Forms**
If deploying to Netlify:
1. **Add** `netlify` attribute to form
2. **Configure** form handling in Netlify dashboard

### **Form Features**
- ✅ **Real-time validation**
- ✅ **Email format validation**
- ✅ **Loading states**
- ✅ **Success/Error messages**
- ✅ **Form reset after submission**
- ✅ **Accessibility features**

### **Testing the Form**
1. **Fill out** the contact form
2. **Submit** and check browser console
3. **Verify** validation messages appear
4. **Confirm** success message shows

The form is fully functional with simulated email sending and ready for real email integration! 

## 🚀 Netlify Deployment

This portfolio is optimized for Netlify deployment with built-in form handling.

### **Quick Deploy to Netlify**

1. **Push to GitHub**: Upload your files to a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
3. **Deploy**: Netlify will automatically deploy your site

### **Manual Deployment**

1. **Build Settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)

2. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

### **Contact Form Setup**

The contact form is already configured for Netlify Forms:

#### **Form Configuration**
- ✅ **Netlify Forms**: Enabled with `data-netlify="true"`
- ✅ **Spam Protection**: Honeypot field included
- ✅ **Form Validation**: Client-side validation
- ✅ **Success Handling**: User feedback on submission

#### **Form Fields**
- **Name**: Required text input
- **Email**: Required email input with validation
- **Message**: Required textarea
- **Bot Field**: Hidden honeypot for spam protection

#### **Netlify Dashboard Setup**
1. **Go to** your site's Netlify dashboard
2. **Navigate to** "Forms" tab
3. **Verify** the "contact" form is detected
4. **Configure** notifications (optional):
   - Email notifications
   - Slack integration
   - Webhook notifications

#### **Form Notifications**
- **Email**: Receive form submissions via email
- **Slack**: Get notifications in Slack channel
- **Webhooks**: Integrate with other services

### **Custom Domain Setup**

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

### **Performance Optimization**

The site includes:
- ✅ **Caching Headers**: Optimized for static assets
- ✅ **Security Headers**: XSS protection, frame options
- ✅ **Compression**: Automatic gzip compression
- ✅ **CDN**: Global content delivery network

### **Form Testing**

1. **Local Testing**:
   - Run `python -m http.server 8000`
   - Test form submission
   - Check browser console for logs

2. **Production Testing**:
   - Deploy to Netlify
   - Submit test form
   - Check Netlify Forms dashboard
   - Verify email notifications

### **Troubleshooting**

#### **Form Not Working**
- Check Netlify Forms dashboard
- Verify form has `data-netlify="true"`
- Ensure form name is "contact"
- Check browser console for errors

#### **Build Issues**
- Verify all files are in root directory
- Check `netlify.toml` configuration
- Review build logs in Netlify dashboard

#### **Domain Issues**
- Verify DNS settings
- Check SSL certificate status
- Contact Netlify support if needed

### **Advanced Configuration**

#### **Custom Headers**
The `netlify.toml` file includes:
- Security headers
- Cache optimization
- Performance settings

#### **Environment Variables**
Add in Netlify dashboard:
- `NODE_VERSION`: Set to "18"
- Custom variables as needed

#### **Build Hooks**
- Set up build hooks for automatic deployments
- Integrate with CI/CD pipelines

Your portfolio is now ready for Netlify deployment with a fully functional contact form! 