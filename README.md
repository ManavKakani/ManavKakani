# DevOps Engineer Portfolio

A modern, responsive portfolio website for a DevOps Engineer, built with HTML, CSS, and JavaScript.

## Features

- Fully responsive design that works on all devices
- Modern and clean UI with smooth animations
- Interactive sections for showcasing skills, experience, projects, and education
- Project filtering functionality
- Contact form
- Mobile-friendly navigation
- Animated skill bars
- Timeline for work experience
- Preloader animation

## Sections

1. **Hero Section** - Introduction with animated tech icons
2. **About Me** - Personal information and background
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work history with timeline
5. **Projects** - Portfolio projects with filtering
6. **Education** - Academic background and certifications
7. **Contact** - Contact form and information

## Technologies Used

- HTML5
- CSS3 (with CSS variables and flexbox/grid layouts)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts

## How to Use

1. Clone this repository
2. Add your photos to the appropriate directories (see "Required Photos" section below)
3. Open `index.html` in your browser
4. Customize the content in the HTML file to match your information
5. Modify the styles in `styles.css` to match your preferred color scheme
6. Update the projects in the Projects section
7. Deploy to your preferred hosting service

## Required Photos

The portfolio requires several images to be placed in specific directories:

### Profile Photo
- File: `assets/images/profile/profile.jpg`
- Size: 400x500px (recommended)
- Description: Your professional headshot or portrait

### Project Screenshots
- Files: 
  - `assets/images/projects/project1.jpg`
  - `assets/images/projects/project2.jpg`
  - `assets/images/projects/project3.jpg`
  - `assets/images/projects/project4.jpg`
  - `assets/images/projects/project5.jpg`
  - `assets/images/projects/project6.jpg`
- Size: 600x400px (recommended)
- Description: Screenshots or illustrations of your projects

### Background Images (Optional)
- Files:
  - `assets/images/background/hero-bg.jpg`
  - `assets/images/background/pattern.jpg`
- Sizes: 
  - Hero background: 1920x1080px (recommended)
  - Pattern: 500x500px (tileable)

### Generating Placeholder Images

If you don't have all the required images yet, you can use the included placeholder generator:

1. Open `generate_placeholders.html` in your browser
2. Click "Generate All Images" to create all placeholders
3. Download each image using the "Download" buttons
4. Place the downloaded images in their respective directories

For more details about the required photos, see `required_photos.txt`.

## Customization

### Colors

The color scheme can be easily customized by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --gray-color: #64748b;
    /* ... other variables ... */
}
```

### Content

Update the personal information, skills, experience, projects, and education sections in the `index.html` file to reflect your own background and expertise.

### Images

Replace the placeholder images with your own photos:
- Profile picture in the About section
- Project screenshots in the Projects section
- Background images (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- [Placeholder.com](https://placeholder.com/) for placeholder images

---

Created by [Your Name] | [Your Website/GitHub] 