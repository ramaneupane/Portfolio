# Rama Neupane - Portfolio Website

A modern, responsive professional portfolio website built with HTML5, CSS3, and vanilla JavaScript. Showcasing IT expertise, technical skills, professional experience, and career achievements.

## 👤 About

This portfolio represents **Rama Neupane**, a Systems Support Specialist and IT professional with expertise in:
- Windows and Linux infrastructure
- Cloud platforms (AWS, Azure)
- Python-based automation and development
- Cybersecurity and network administration
- Software testing and quality assurance

## ✨ Features

- 🎨 **Modern Design** - Professional UI with gradient accents and smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - No dependencies, pure vanilla JavaScript
- 🎯 **Smooth Animations** - Engaging scroll animations and transitions
- 📧 **Contact Form** - Fully functional contact form with validation
- 🔍 **SEO Friendly** - Properly structured HTML with semantic tags
- ♿ **Accessible** - WCAG compliant markup
- 🌓 **Professional Color Scheme** - Blue and cyan gradient theme

## 📑 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional summary and key statistics
3. **Skills** - Technical skills organized by category (OS, Networking, Cloud, Programming, Databases, Tools)
4. **Experience** - Professional timeline with three positions:
   - Software Development Engineer in Test at Discover Financial Services
   - Software Developer at Yeti Technologies
   - Quality Assurance Tester at ASML
5. **Education & Certifications** - Academic background and industry certifications
6. **Contact** - Get in touch form and social media links

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local server for testing

### Installation

1. Clone this repository or download the files:
```bash
git clone <repository-url>
cd Portfolio
```

2. Open `index.html` directly in your browser, or use a local server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (if http-server is installed):**
```bash
http-server
```

**Using VS Code Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

3. Visit the appropriate URL in your browser:
- Direct file: `file:///path/to/Portfolio/index.html`
- Python server: `http://localhost:8000`
- Live Server: `http://127.0.0.1:5500`

## 🎨 Customization

### Updating Personal Information

#### 1. Basic Information (index.html)
- Update the title tag with your name
- Modify hero section text with your headline
- Update contact information in the contact section

#### 2. Skills (index.html)
- Add or remove skills in the Skills section
- Organize skills by category

#### 3. Experience (index.html)
- Update job titles, companies, and dates
- Modify job descriptions and achievements
- Add or remove positions

#### 4. Colors (styles.css)
Customize the color scheme by updating CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #0066ff;      /* Main brand color */
    --secondary-color: #00d4ff;    /* Accent color */
    --dark-bg: #0a0e27;            /* Dark background */
    --light-bg: #f5f7fa;           /* Light background */
    --text-dark: #1a1a2e;          /* Dark text */
    --text-light: #888;            /* Light text */
}
```

### Adding More Sections

1. Create a new section in `index.html`
2. Add styling in `styles.css`
3. Add navigation link in the navbar
4. Update the menu with the new section link

## 📞 Contact Information

- **Email:** ramaneupane483@gmail.com
- **Phone:** 626-620-1441
- **Location:** Round Rock, TX
- **LinkedIn:** linkedin.com/in/ramaneupan

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - Interactivity and form validation
- **Responsive Design** - Mobile-first approach

## 📝 Form Handling

The contact form includes:
- Real-time validation
- Email format checking
- User-friendly error messages
- Success notifications
- Client-side processing (for demo purposes)

**Note:** To send emails actually, you'll need to set up a backend service (e.g., using Node.js, Python Flask/Django, or a service like Formspree, EmailJS).

## ♿ Accessibility

This portfolio follows WCAG 2.1 guidelines:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Responsive text sizing

## 📊 Performance

- Optimized CSS and JavaScript
- No external dependencies (except fonts)
- Efficient animations using CSS transforms
- Lazy loading support for images
- Debounced scroll events

## 🔒 Security

- No sensitive information stored in client-side code
- Form inputs validated before submission
- No external trackers or analytics enabled by default

## 🚀 Deployment

### GitHub Pages
1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your portfolio will be available at `https://username.github.io/Portfolio`

### Other Hosting Options
- Netlify (drag & drop deployment)
- Vercel
- AWS S3 + CloudFront
- Traditional web hosting (FTP/SFTP)

## 📄 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript interactivity
├── README.md           # This file
└── .git/               # Git repository
```

## 🔄 Updates & Maintenance

To keep your portfolio current:
- Update experience dates regularly
- Add new skills as you learn them
- Update certifications and education
- Refresh project descriptions
- Monitor and test on different devices

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Performance**: Minimize large images and use compression
2. **SEO**: Update meta tags for better search engine visibility
3. **Analytics**: Consider adding Google Analytics for tracking
4. **Forms**: Use a backend service or form handler for actual email delivery
5. **Version Control**: Commit changes regularly to git
6. **Testing**: Test on multiple devices and browsers

## 🤝 Contributing

This is a personal portfolio, but improvements are welcome! Feel free to fork and customize.

## 📄 License

Personal portfolio - All rights reserved to Rama Neupane

## 👋 Questions?

Contact: ramaneupane483@gmail.com | Phone: 626-620-1441

---

**Last Updated:** May 2026

### Update Your Information

Edit `index.html` to personalize your portfolio:

- Replace `[Your Name]` with your actual name
- Update the hero subtitle and description
- Add your own project details and links
- Fill in your experience timeline
- Add your contact information and social links

### Styling

All styles are in `style.css`. You can customize:

- **Colors**: Edit the CSS variables at the top of the file
- **Fonts**: Change the font-family in the body selector
- **Spacing**: Adjust padding/margin values
- **Breakpoints**: Modify media query breakpoints for responsive design

### Colors (CSS Variables)
```css
--primary-color: #6366f1;      /* Main accent color */
--secondary-color: #8b5cf6;    /* Gradient color */
--dark-bg: #0f172a;            /* Dark background */
--light-bg: #f8fafc;           /* Light background */
```

## Features Explained

### Contact Form
The contact form includes:
- Basic validation for required fields
- Email format validation
- Success/error notifications
- Note: Currently logs to console. To send emails, integrate with a backend service like Formspree, EmailJS, or your own API.

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Grid layouts that adapt to screen size
- Optimized touch targets for mobile

### Smooth Scrolling
- Smooth scroll behavior for navigation links
- Scroll-triggered animations for sections
- Active link highlighting based on scroll position

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Option 1: GitHub Pages
1. Push your files to a GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your portfolio will be live at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build settings (no build command needed)
3. Deploy

### Option 3: Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 4: Traditional Hosting
Upload files to any web hosting service via FTP or file manager

## Project Structure

```
Portfolio/
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # JavaScript functionality
├── README.md        # This file
└── assets/          # (Optional) Images and other assets
    ├── images/
    └── documents/
```

## Optimization Tips

1. **Images**: Optimize and compress images before adding them
2. **Performance**: Minify CSS and JavaScript for production
3. **SEO**: Update meta tags and add meta descriptions
4. **Analytics**: Consider adding Google Analytics
5. **Forms**: Integrate with a service for email notifications

## Enhancement Ideas

- Add a blog section
- Implement dark mode toggle
- Add case studies for projects
- Create a testimonials section
- Add downloadable resume/CV
- Implement email notifications for contact form
- Add a filter for projects by category
- Include a skills proficiency bar chart

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! Don't forget to customize this template with your own information.** 🚀

