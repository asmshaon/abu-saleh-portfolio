# Portfolio Website - Md. Rifat Hossain

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4. Features a dark theme design with smooth animations and hash-based navigation.

## Features

- **Single Page Application** with hash-based navigation (#home, #about, #resume, etc.)
- **Dark Theme** with cyan accent colors
- **Fully Responsive** design that works on all devices
- **Animated Background** on the home section
- **Portfolio Gallery** with category filtering
- **Contact Form** with Google Maps integration
- **Smooth Scrolling** between sections
- **Modern UI/UX** with hover effects and transitions

## Pages/Sections

1. **Home** - Hero section with animated background
2. **About** - Personal information and statistics
3. **Resume** - Education and professional experience
4. **Portfolio** - Project showcase with filtering
5. **Services** - Service offerings with testimonials
6. **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Customization

### 1. Add Your Images

Add the following images to the `public` folder:
- `/public/profile.jpg` - Your profile photo (500x500px)
- `/public/projects/project1.jpg` through `project6.jpg` - Your project screenshots (800x600px)

See [public/IMAGE_GUIDE.md](public/IMAGE_GUIDE.md) for details.

### 2. Update Personal Information

Edit the components to update your personal information:

- **Sidebar.tsx** - Name and social media links
- **Home.tsx** - Name and title
- **About.tsx** - Bio, personal info, and statistics
- **Resume.tsx** - Education and work experience
- **Portfolio.tsx** - Project details and categories
- **Services.tsx** - Your services and testimonials
- **Contact.tsx** - Contact information and form

### 3. Customize Colors

Edit [app/globals.css](app/globals.css) to change the color scheme:

```css
:root {
  --background: #0f172a;     /* Dark blue background */
  --foreground: #e2e8f0;     /* Light text */
  --sidebar-bg: #1e293b;     /* Sidebar background */
  --accent: #06b6d4;         /* Cyan accent */
  --accent-hover: #0891b2;   /* Darker cyan */
  --card-bg: #1e293b;        /* Card background */
  --border: #334155;         /* Border color */
}
```

### 4. Update Social Links

Edit [app/components/Sidebar.tsx](app/components/Sidebar.tsx) and replace the placeholder URLs with your actual social media profiles.

## Navigation

The website uses hash-based navigation. Users can navigate by:
- Clicking navigation items in the sidebar
- Using direct URLs like `https://yoursite.com/#contact`
- The hash in the URL automatically updates as users scroll

## Technology Stack

- **Framework:** Next.js 16.0.5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** SVG icons (embedded)
- **Deployment:** Vercel, Netlify, or any static hosting

## Project Structure

```
abu-saleh-portfolio/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx      # Sidebar navigation
│   │   ├── Home.tsx         # Home section
│   │   ├── About.tsx        # About section
│   │   ├── Resume.tsx       # Resume section
│   │   ├── Portfolio.tsx    # Portfolio section
│   │   ├── Services.tsx     # Services section
│   │   └── Contact.tsx      # Contact section
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/
│   ├── projects/            # Project images
│   └── profile.jpg          # Profile photo
└── package.json
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

## Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop:** 1024px+ (full sidebar, 3-column grids)
- **Tablet:** 768px - 1024px (narrower sidebar, 2-column grids)
- **Mobile:** < 768px (top navigation, single column)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design inspiration from iPortfolio template
- Built with Next.js and Tailwind CSS
- Icons embedded as SVG

## Support

For issues or questions, please open an issue on GitHub.
