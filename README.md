# Recreation Map Poland

A Next.js application that displays recreational places in Poland on an interactive map. This project was created based on a mockup and can be compiled into a static site for easy deployment.

## Features

- Interactive map with hotel markers
- Responsive design with Tailwind CSS
- Static site generation for easy deployment
- Polish language interface
- Hotel information cards
- Zoom controls and location features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd recreational-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

### Static Export

To build the project as a static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory. You can deploy these files to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

### Build Output

The build process creates:
- `out/` - Static files ready for deployment
- `out/index.html` - Main page
- `out/_next/` - Next.js assets

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
└── components/
    ├── Header.tsx      # Navigation header
    ├── Introduction.tsx # Andrzej's introduction
    ├── Map.tsx         # Interactive map with markers
    └── HotelCard.tsx   # Hotel information card
```

## Technologies Used

- **Next.js 15** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Icon library
- **Google Fonts** - Plus Jakarta Sans font

## Customization

### Adding New Hotels

To add new hotel markers, edit the `Map.tsx` component and add new marker elements with appropriate positioning.

### Styling

The project uses Tailwind CSS with custom CSS variables. The primary color is defined as `#3d99f5` and can be modified in `tailwind.config.ts`.

### Images

Replace the placeholder images in the components with your own hotel and profile images.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `out/` directory to your web server
3. Configure your server to serve `index.html` for all routes

## License

This project is open source and available under the [MIT License](LICENSE).
