# Image Guide for Portfolio Website

## Required Images

To make your portfolio fully functional, please add the following images to the `public` folder:

### 1. Profile Image
- **Path:** `/public/profile.jpg`
- **Usage:** Used in sidebar, home section, and about section
- **Recommended Size:** 500x500px minimum
- **Format:** JPG, PNG, or WebP

### 2. Project Images
Add 6 project images in the `/public/projects/` folder:

- **project1.jpg** - Siderian Cloud (Cloud Application)
- **project2.jpg** - AI Growth Platform (Cloud Application)
- **project3.jpg** - DNK Ecommerce (Ecommerce)
- **project4.jpg** - Angular Events (Business)
- **project5.jpg** - AI EdTech Platform (Cloud Application)
- **project6.jpg** - Chat Application (Business)

**Recommended Size:** 800x600px minimum
**Format:** JPG, PNG, or WebP

## Placeholder Images

If you don't have images ready yet, you can use placeholder services:

1. **Unsplash** - https://source.unsplash.com/800x600/?technology
2. **Lorem Picsum** - https://picsum.photos/800/600
3. **Placeholder.com** - https://via.placeholder.com/800x600

## Quick Setup

```bash
# Add your profile image
cp /path/to/your/photo.jpg public/profile.jpg

# Add project images
cp /path/to/project1.jpg public/projects/project1.jpg
cp /path/to/project2.jpg public/projects/project2.jpg
# ... and so on
```

## Next Steps

After adding your images, restart the development server to see the changes:

```bash
npm run dev
```
