# Portfolio Customization Guide

Welcome! This guide shows you exactly how to customize your portfolio to add your own projects, experiences, skills, and more.

## Quick Navigation
- [Adding/Removing Projects](#projects)
- [Updating Experience](#experience)
- [Changing Skills](#skills)
- [Updating Contact Info](#contact)
- [Personalizing Content](#content)
- [Design Customization](#design)

---

## Projects

### Location
File: `components/projects.tsx`

### How to Add a New Project

Open `components/projects.tsx` and find the `projects` array. Add a new object following this structure:

```javascript
{
  id: 7,                                                    // Increment from the highest existing id
  title: 'Your Project Title',                             // Max ~50 characters
  description: 'Brief description of your project...',     // Max ~150 characters
  tags: ['Technology1', 'Technology2', 'Technology3'],    // Array of tech stack
  github: 'https://github.com/yourname/project-name',     // GitHub repository URL
  live: 'https://your-project-demo.com',                  // Live demo/deployed URL
}
```

### Complete Example

```javascript
{
  id: 7,
  title: 'Disease Detection Model',
  description: 'CNN-based medical imaging classifier using TensorFlow. Achieved 96% accuracy on test dataset of 50,000 images.',
  tags: ['Python', 'TensorFlow', 'Computer Vision', 'Medical AI'],
  github: 'https://github.com/charishma/disease-detection',
  live: 'https://disease-detection-demo.vercel.app',
}
```

### How to Remove a Project
Simply delete the entire object from the `projects` array. The grid will automatically adjust.

### How to Update a Project
Find the project in the array and edit its properties. Changes will reflect immediately.

### Tips
- Keep descriptions concise (1-2 sentences)
- Use tech tags that match your skills section for consistency
- All URLs should start with `https://`
- Projects are displayed in a 3-column grid (responsive on mobile)
- The grid shows all projects in order

---

## Experience

### Location
File: `components/experience.tsx`

### How to Add Experience

Find the `experiences` array and add:

```javascript
{
  id: 4,
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Jan 2024 - Present',
  description: 'Brief description of your role and responsibilities.',
  highlights: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
}
```

### Complete Example

```javascript
{
  id: 4,
  title: 'Machine Learning Engineer',
  company: 'Tech Innovations Inc',
  period: 'Jul 2024 - Present',
  description: 'Developing and deploying machine learning solutions for enterprise clients. Leading model optimization and feature engineering initiatives.',
  highlights: [
    'Reduced model inference time by 60%',
    'Built automated data pipeline serving 100k+ daily predictions',
    'Mentored 2 junior engineers on ML best practices',
  ],
}
```

### Adding Certifications

Find the `certifications` array and add:

```javascript
{
  title: 'Certification Name',
  issuer: 'Issuing Organization',
  date: 'Month Year',
}
```

---

## Skills

### Location
File: `components/skills.tsx`

### How to Update Skills

Find the `skillCategories` array and modify each category:

```javascript
{
  category: 'Your Category Name',
  skills: ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5', 'Skill6'],
}
```

### Example

```javascript
{
  category: 'Cloud & DevOps',
  skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
}
```

### Tips
- Keep skill names short (1-3 words)
- Each category can have 4-6 skills for clean layout
- Reorder categories by moving them in the array
- Skill names should match tags in your projects when possible

---

## Contact Information

### Location
File: `components/contact.tsx`

### Update Email, Phone, and Location

Search for these lines in the `Contact` function:

```javascript
// Email
href="mailto:charishma@example.com"
// Change to your email

// Phone
href="tel:+1234567890"
// Change to your phone (keep tel: format)

// Location
<p className="text-foreground font-medium">San Francisco, CA</p>
// Change to your location

// Social Links
href="https://github.com/charishma"
href="https://linkedin.com/in/charishma"
// Update your GitHub and LinkedIn URLs
```

---

## Personal Content

### Location Files
- Hero section: `components/hero.tsx`
- About section: `components/about.tsx`
- Footer: `components/footer.tsx`

### How to Update

Open each file and find the text content. Look for:
- `<p>` tags for paragraphs
- `<h2>` or `<h3>` tags for headings
- Any text within these tags can be edited directly

### Example: Update About Section

In `components/about.tsx`, find:
```javascript
<motion.p>
  I&apos;m a passionate Computer Science student with a deep interest in data science...
</motion.p>
```

And replace with your own text.

---

## Design Customization

### Colors

Edit `app/globals.css` to change the theme colors:

```css
:root {
  --background: #0a0a0a;      /* Black background */
  --primary: #d4af37;         /* Gold accent color */
  --foreground: #f5f5f5;      /* Light gray text */
  /* Other colors... */
}
```

### Main Colors
- **Background**: `#0a0a0a` (Dark black)
- **Primary/Gold**: `#d4af37` (Accent color)
- **Foreground**: `#f5f5f5` (Text color)
- **Cards**: `#1a1a1a` (Slightly lighter black)

### Change the Theme Example
To create a blue theme:
```css
--primary: #00d9ff;           /* Cyan blue */
--foreground: #f0f0f0;
```

### Fonts

Edit `app/layout.tsx` to change fonts. Current fonts are Google Fonts (Geist).

---

## Profile Photo

Your profile photo is located at: `public/profile.png`

To replace it:
1. Save your new photo as `profile.png`
2. Place it in the `public/` folder
3. The image will automatically update on the site

**Recommended specs:**
- Size: 500x500px or larger
- Format: PNG, JPG, or WebP
- Aspect ratio: 1:1 (square)

---

## Deploying Your Portfolio

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy" - that's it!

### Option 2: Other Hosting
Works with Netlify, AWS, Google Cloud, etc. Just push your code to your hosting provider.

---

## Troubleshooting

### Projects not showing?
- Check that all required fields (id, title, description, tags, github, live) are present
- Ensure proper comma placement in the array

### Links not working?
- Verify URLs start with `https://`
- Check for typos in the URL

### Styling looks off?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R)

### Need help?
- Check component files directly for commented sections
- Search for "TODO" or "CUSTOMIZE" comments in files

---

## File Structure

```
components/
├── navbar.tsx           # Navigation bar
├── hero.tsx            # Hero/landing section
├── about.tsx           # About section
├── skills.tsx          # Skills section
├── contact.tsx         # Contact form & info
├── projects.tsx        # Projects showcase
├── experience.tsx      # Experience & certifications
└── footer.tsx          # Footer

app/
├── page.tsx            # Main page (imports all components)
├── layout.tsx          # HTML structure & fonts
└── globals.css         # All styling & theme colors

public/
└── profile.png         # Your profile photo
```

---

## Pro Tips

1. **Consistency**: Keep tech names consistent across Skills and Projects
2. **Recent First**: List experiences and projects in reverse chronological order
3. **Keep it Short**: Descriptions should be 1-2 sentences max
4. **Use Real Links**: Always link to actual GitHub repos and live demos
5. **Update Regularly**: Add new projects every few months to keep it fresh

---

Enjoy your portfolio! 🚀
