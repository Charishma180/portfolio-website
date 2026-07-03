# Charishma's Premium Portfolio

A modern, professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a sleek black and gold theme with glassmorphism effects, smooth animations, and a recruiter-friendly design.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Premium Design**: Black & gold theme with glassmorphism effects
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **Smooth Animations**: Scroll-triggered reveals and hover effects using Framer Motion
- **Easy to Customize**: Simple array-based project system (copy-paste friendly)
- **Professional Sections**: Hero, About, Skills, Contact (middle), Projects, Experience, Footer
- **Apple-Inspired**: Clean typography and elegant transitions
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page (section order)
│   ├── layout.tsx            # HTML structure & fonts
│   └── globals.css           # All styling & theme colors
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── hero.tsx              # Hero section with profile photo
│   ├── about.tsx             # About me section
│   ├── skills.tsx            # Technical skills
│   ├── contact.tsx           # Contact form & info (MIDDLE)
│   ├── projects.tsx          # Projects showcase
│   ├── experience.tsx        # Work experience & certifications
│   └── footer.tsx            # Footer with quick links
├── public/
│   └── profile.png           # Your profile photo
├── QUICK_START.md            # Fast customization guide
├── CUSTOMIZATION_GUIDE.md    # Detailed customization
├── PORTFOLIO_SUMMARY.md      # Feature summary
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Add Your Profile Photo
Replace `public/profile.png` with your professional headshot (500x500px ideal)

### 2. Update Contact Information
Edit `components/contact.tsx` and find:
- Email: `mailto:charishma@example.com`
- Phone: `tel:+1234567890`
- Location: `San Francisco, CA`
- LinkedIn: Update URL
- GitHub: Update URL

### 3. Add Your Projects
Edit `components/projects.tsx` and add to the `projects` array:

```javascript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Brief description of your project...',
  tags: ['Technology1', 'Technology2', 'Technology3'],
  github: 'https://github.com/yourname/project',
  live: 'https://project-demo.com',
}
```

### 4. Update Your Bio
Edit `components/about.tsx` and replace the bio text

### 5. Update Skills
Edit `components/skills.tsx` and update the `skillCategories` array

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Fast reference for adding projects
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Complete customization guide
- **[PORTFOLIO_SUMMARY.md](./PORTFOLIO_SUMMARY.md)** - Feature overview

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)
- **Language**: TypeScript

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
--primary: #d4af37;        /* Gold accent - change this */
--background: #0a0a0a;     /* Dark background */
--foreground: #f5f5f5;     /* Light text */
```

### Change Fonts
Edit `app/layout.tsx` and `app/globals.css` to use different Google Fonts

### Modify Animations
Edit individual component files and adjust Framer Motion variants

### Section Order
Edit `app/page.tsx` to rearrange sections:
```javascript
<Hero />
<About />
<Skills />
<Contact />      {/* Currently in middle */}
<Projects />
<Experience />
<Footer />
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Single column layout, optimized tap targets
- **Tablet**: 2-column layout for most sections
- **Desktop**: 3-column grid for projects, optimized typography

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Go to vercel.com
# Import your repository
# Click Deploy
```

### Other Platforms
Works with Netlify, AWS Amplify, Google Cloud, etc.

```bash
# Build for production
npm run build

# Deploy the .next folder
```

## 📝 Content Guide

### Projects
- **Title**: Keep under 50 characters
- **Description**: 1-2 sentences, max 150 characters
- **Tags**: 3-4 relevant technologies
- **Links**: Must be valid GitHub and deployed URLs

### Skills
- Keep consistent with project tech tags
- 4-6 skills per category
- Use industry-standard names

### Experience
- List in reverse chronological order (newest first)
- Include 3-5 highlights per role
- Add date range for each position

## 🔍 SEO & Meta Tags

The portfolio includes:
- Proper meta descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly viewport
- Structured data ready

Edit `app/layout.tsx` to update metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Job Title',
  description: 'Your professional description',
  // ... more meta tags
}
```

## ♿ Accessibility

The site includes:
- ARIA labels on interactive elements
- Semantic HTML (nav, section, article, etc.)
- Keyboard navigation support
- Proper color contrast ratios
- Alt text on images

## 🐛 Troubleshooting

**Projects not showing?**
- Check all required fields are filled
- Verify commas between objects
- Ensure unique `id` numbers

**Styling looks broken?**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Try a different browser

**Links not working?**
- Ensure URLs start with `https://`
- Test links directly
- Check for typos

## 📞 Support

Check the documentation files for detailed help:
- Quick questions? → `QUICK_START.md`
- Detailed help? → `CUSTOMIZATION_GUIDE.md`
- Feature overview? → `PORTFOLIO_SUMMARY.md`

## 🎯 Next Steps

1. ✅ Update profile photo
2. ✅ Update contact information
3. ✅ Customize about section
4. ✅ Add your skills
5. ✅ Add your projects
6. ✅ Update experience
7. ✅ Deploy on Vercel
8. ✅ Share with recruiters!

## 📄 License

This portfolio template is yours to use and customize!

---

**Last Updated**: 2026
**Built with**: Next.js 16, Tailwind CSS, Framer Motion
**Theme**: Premium Black & Gold

Good luck with your portfolio! 🚀
