# Quick Start Guide - Add Your Own Projects

## The Easiest Way to Add Projects

### Step 1: Open the Projects File
Go to: `components/projects.tsx`

### Step 2: Find the Projects Array
Look for this section (around line 40):
```javascript
const projects = [
  {
    id: 1,
    title: 'Stock Market Prediction Model',
    ...
  },
  // ... more projects
]
```

### Step 3: Copy This Template
```javascript
{
  id: 7,
  title: 'Your Amazing Project Name',
  description: 'A brief description explaining what your project does. Keep it short and punchy!',
  tags: ['Python', 'TensorFlow', 'Data Science'],
  github: 'https://github.com/yourname/yourproject',
  live: 'https://yourproject-demo.com',
}
```

### Step 4: Replace the Values
- **title**: Your project name
- **description**: What it does (1-2 sentences)
- **tags**: Technologies used (3-4 tags)
- **github**: Link to GitHub repo
- **live**: Link to live demo/deployed version

### Step 5: Add a Comma!
Make sure each project (except the last one) has a comma after the closing `}`

### Step 6: Done!
Save the file and your new project appears automatically.

---

## Example - Real Project

```javascript
{
  id: 7,
  title: 'Disease Detection Using Deep Learning',
  description: 'CNN-based medical imaging classifier achieving 96% accuracy. Trained on 50,000+ labeled images with TensorFlow and deployed as REST API.',
  tags: ['Python', 'TensorFlow', 'Computer Vision', 'Medical AI'],
  github: 'https://github.com/charishma/disease-detection',
  live: 'https://disease-detection-demo.vercel.app',
}
```

---

## How to Remove a Project
Delete the entire project object from the array. It will disappear automatically.

---

## Other Easy Customizations

### Update Contact Info
File: `components/contact.tsx`
- Search for your email, phone, location
- Replace with your own

### Update About Section
File: `components/about.tsx`
- Find the `<motion.p>` tags
- Replace the text with your own

### Update Skills
File: `components/skills.tsx`
- Find `skillCategories` array
- Add/remove/update skill names

### Change Profile Photo
File: `public/profile.png`
- Replace with your own photo (500x500px recommended)

---

## Need More Help?
See `CUSTOMIZATION_GUIDE.md` for detailed instructions on everything!

---

## Common Issues

### "My project isn't showing!"
- Did you add a comma after the closing `}`?
- Is the `id` number unique?
- Did you save the file?

### "My links aren't working!"
- Make sure URLs start with `https://`
- Check for typos
- Test the link in a new tab

### "The styling looks broken!"
- Hard refresh the page (Ctrl+Shift+R)
- Clear browser cache
- Try a different browser

---

Happy coding! 🚀
