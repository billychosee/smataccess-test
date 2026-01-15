# SmatAccess Website

A modern, responsive website for SmatAccess - Smart Access Control for Homes, Offices & Enterprises.

## Features

- Modern Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design for all devices
- Heroicons for beautiful icons
- Custom Google Fonts (Sofia Sans, Inter, Geist Mono)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── hardware/          # Hardware page
│   ├── industries/        # Industries page
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── use-cases/         # Use cases page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Footer.tsx         # Footer component
│   └── Navbar.tsx         # Navigation component
├── public/                # Static assets
└── config files           # Next.js, TypeScript, Tailwind configs
```

## Dependencies

### Production Dependencies

- **React** ^18.2.0 & **React-DOM** ^18.2.0 - Core React library
- **Next.js** ^14.0.0 - React framework
- **@heroicons/react** ^2.0.18 - Beautiful SVG icons

### Development Dependencies

- **TypeScript** ^5.2.2 - Type safety
- **@types/react** & **@types/react-dom** - Type definitions
- **Tailwind CSS** ^3.3.5 - Utility-first CSS framework
- **@tailwindcss/typography** - Typography plugin for Tailwind
- **Autoprefixer** & **PostCSS** - CSS processing
- **ESLint** & **eslint-config-next** - Code linting

## Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **Custom Google Fonts** (Sofia Sans, Inter, Geist Mono)
- **Responsive design** that works on all screen sizes
- **Modern gradient backgrounds** and animations

## Development

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your content
3. Update the navigation in `components/Navbar.tsx`

### Modifying Styles

- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom colors and fonts are configured in `tailwind.config.js`

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Static Export (Optional)

To create a static export for hosting on platforms like Netlify or Vercel:

1. Update `next.config.js` to include:

   ```javascript
   const nextConfig = {
     output: "export",
     // ... other config
   };
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. The static files will be generated in the `out/` directory

## License

This project is proprietary software owned by SmatAccess.

## Support

For questions or support, contact:

- Email: info@smatechgroup.com
- Phone: +27 10 786 0259
- Address: 12 Riversands Road, Beverly, Sandton, South Africa, 2191
