# Yiyuan Ltd - Landing Page

A modern, professional landing page for Yiyuan Ltd (邑沅有限公司), an environmental education consultancy.

## Features

- ✨ **Modern Design**: Clean and professional UI with forest green and mint color palette
- 🎨 **Responsive Layout**: Fully mobile-friendly design
- ✅ **Smooth Animations**: Framer Motion scroll animations for premium feel
- 🌊 **Custom SVG Illustration**: Nature-inspired wave and leaf patterns
- 📱 **Mobile Navigation**: Responsive navbar with mobile menu
- 🎯 **Multi-Section Layout**: Navbar, Hero, Services, Projects, Partners, Footer
- 💼 **Professional Components**: Service cards, project timeline, partner grid

## Tech Stack

- **React 18**: UI framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for scroll effects
- **Lucide React**: Modern icon library
- **Vite**: Fast build tool

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\yiyuan"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with mobile menu
│   ├── HeroSection.jsx      # Hero section with CTA
│   ├── ServicesSection.jsx  # 4-column service cards
│   ├── ProjectsSection.jsx  # Timeline-style project showcase
│   ├── PartnersSection.jsx  # Partner logo grid
│   └── Footer.jsx           # Footer with contact & links
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css               # Global styles

```

## Color Palette

- **Forest Green**: `#2D5A27` (Primary)
- **Mint Green**: `#F0F9F1` (Secondary Background)
- **Ocean Blue**: `#0077B6` (Accent)
- **Sand**: `#F5F5DC` (Optional)

## Components Overview

### Navbar
- Fixed navigation with logo
- Mobile hamburger menu
- Quick links and CTA button
- Smooth animations on scroll

### Hero Section
- Large heading and subheading
- CTA buttons (Primary & Secondary)
- Custom SVG wave illustration
- Floating icon animation

### Services Section
- 4-column grid (responsive)
- Service cards with icons
- Hover effects and transitions
- Detail badges

### Projects Section
- Timeline-style project cards
- Year badges and status indicators
- Project details with tags
- Call-to-action at bottom

### Partners Section
- Grid layout for partner logos
- Gradient background cards
- Partner names and abbreviations
- Trust statement section

### Footer
- Company info and description
- Quick links section
- Contact information with icons
- Social media links
- Legal links and disclaimer

## Responsive Design

The layout is fully responsive with breakpoints for:
- Mobile (default)
- Tablet (md: 768px)
- Desktop (lg: 1024px)

## Customization

### Adding New Services
Edit `src/components/ServicesSection.jsx` and add items to the `services` array.

### Updating Content
- Navbar links: `src/components/Navbar.jsx`
- Contact info: `src/components/Footer.jsx`
- Projects: `src/components/ProjectsSection.jsx`

### Colors
Modify color values in `tailwind.config.js` under the `theme.extend.colors` section.

## Performance Optimizations

- Code splitting with Vite
- Optimized animations with Framer Motion
- Lazy loading with intersection observer (whileInView)
- Tailwind CSS purging for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Professional content for Yiyuan Ltd. All rights reserved.

## Contact

For inquiries, contact:
- Email: info@yiyuan.com.tw
- Phone: +886 2 1234 5678
