# Quick Reference - What's Where

## Page Order (Recruiter Optimized)
1. Hero - "Open to Internships" button
2. About
3. Skills (Badges - No progress bars)
4. Projects (CineBook, Amarism, etc.)
5. Internships & Achievements
6. Certifications (6 items)
7. Contact (End of page)

## File Locations

### Update Hero Section
**File:** `components/hero.tsx`
- Line ~65: Update subtitle "Computer Science Student | Aspiring Data Scientist | AI & Machine Learning Enthusiast"
- Line ~85: Update CTA button text

### Update Projects
**File:** `components/projects.tsx` (Lines ~40-80)
- CineBook (id: 1)
- Amarism Website (id: 2)
- Visiting Card Scanner (id: 3)
- Advanced ML Project (id: 4)
- Data Analytics Dashboard (id: 5)
- NLP Sentiment Analyzer (id: 6)

Edit the projects array:
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Brief description...',
  tags: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  live: 'https://...',
}
```

### Update Experience
**File:** `components/experience.tsx` (Lines ~8-40)
Current entries:
1. Google Cloud Career Launchpad (2024 - Present)
2. NeoSkillz Internship (Jul - Sep 2024)
3. GFG Campus Mantri (2023 - Present)

### Update Certifications
**File:** `components/experience.tsx` (Lines ~49-80)
6 certifications listed with dates

### Update Skills
**File:** `components/skills.tsx`
Categories:
- Programming Languages
- Data Science & ML
- Web Development
- Tools & Platforms

### Update Contact Info
**File:** `components/contact.tsx`
- Email: charishma@example.com
- Phone: +1 (234) 567-890
- Location: San Francisco, CA
- GitHub: https://github.com/charishma
- LinkedIn: https://linkedin.com/in/charishma

### Update About Section
**File:** `components/about.tsx`
- Bio text
- Education details
- Focus areas

## Key Features

✓ Professional black & gold theme
✓ Glassmorphic design
✓ Responsive layout (mobile-optimized)
✓ Smooth animations
✓ Profile photo display
✓ Skills badges (no progress bars)
✓ 6 featured projects
✓ 3 internships/achievements
✓ 6 certifications
✓ Contact form with validation
✓ Download resume button
✓ GitHub & LinkedIn links

## Deployment

1. Update all personal info in components
2. Push to GitHub: `git add . && git commit -m "Portfolio updates" && git push`
3. Auto-deploys to Vercel (if connected)
4. Custom domain setup in Vercel dashboard

## Common Edits

### Change Project
Find the project in `components/projects.tsx` projects array and edit:
- title
- description
- tags array
- github link
- live link

### Add Skill Badge
In `components/skills.tsx`, find the category and add to tags array

### Update Dates
Edit period field in experience or certification objects

### Change Profile Photo
Replace `/public/profile.png` with new image (keep same filename)

## Files Reference
```
app/
  ├── page.tsx          ← Main page order
  ├── layout.tsx        ← Metadata
  └── globals.css       ← Styling

components/
  ├── hero.tsx          ← Intro + Open to Internships
  ├── about.tsx         ← About
  ├── skills.tsx        ← Skill badges
  ├── projects.tsx      ← Your projects
  ├── experience.tsx    ← Internships + certifications
  ├── contact.tsx       ← Contact at end
  ├── footer.tsx        ← Footer
  └── navbar.tsx        ← Navigation

public/
  └── profile.png       ← Your photo
```

## Need Help?
- See CHANGES_IMPLEMENTED.md for detailed explanations
- See CUSTOMIZATION_GUIDE.md for advanced options
- All components have inline comments
