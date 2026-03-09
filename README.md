# SafeGuard SL 🛡️

> A free, interactive training tool to help Sri Lankans spot and avoid scams

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🎯 About SafeGuard SL

SafeGuard SL is a digital security awareness platform dedicated to empowering Sri Lankans with the knowledge and skills to recognize and protect themselves from online scams. Through interactive educational content and engaging games, we're building a safer digital environment for everyone.

### Key Features

- 🎮 **Interactive Games** - Learn while playing with "Spot the Trap" challenge game
- 📚 **Educational Content** - Comprehensive guides on common scams and prevention strategies
- 🌍 **Localized Resources** - Tailored content for the Sri Lankan context
- 🎨 **Dark Mode Support** - Comfortable viewing in any lighting condition
- 📱 **Fully Responsive** - Works seamlessly across all devices
- ♿ **Accessible Design** - Built with inclusivity in mind

---

## 📋 Pages & Features

| Page | Purpose |
|------|---------|
| **Home** | Hero section with statistics, feature overview, and call-to-action |
| **Spot the Trap** | Interactive game to test your scam-spotting skills |
| **Common Scams** | Detailed information about prevalent scam types |
| **Get Help** | Resources and support information for scam victims |
| **About** | Learn more about SafeGuard SL and our mission |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pamodmalith/safeguard-sl.git
   cd safeguard-sl
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org) - React framework with built-in optimization
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe development
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) & [Radix UI](https://radix-ui.com) - Accessible component library
- **Animations**: [Motion](https://motion.dev) - Smooth, modern animations
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Light/dark mode support
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful, consistent icon set

### Development Tools
- **Linting**: [ESLint 9](https://eslint.org)
- **Build Tool**: [Turbopack](https://turbo.build/pack) (built into Next.js 16)

---

## 📁 Project Structure

```
safeguard-sl/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── common-scams/             # Common scams guide
│   ├── get-help/                 # Help & support page
│   ├── spot-the-trap/            # Interactive game page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Footer component
│   ├── hero-section.tsx          # Home hero
│   ├── features.tsx              # Features showcase
│   ├── stats.tsx                 # Statistics section
│   ├── spot-the-trap-game.tsx    # Game component
│   ├── theme-provider.tsx        # Theme wrapper
│   ├── mode-toggle.tsx           # Dark/light mode toggle
│   └── logo.tsx                  # Logo component
├── lib/                          # Utility functions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.mjs               # Next.js configuration
```

---

## 🎨 Styling & Customization

### Theme Configuration

The project uses Tailwind CSS with next-themes for dark mode support. Customize the theme in:
- `tailwind.config.ts` - Tailwind CSS configuration
- `app/globals.css` - Global styles and CSS variables

### Color Scheme

SafeGuard SL uses a modern color palette with support for both light and dark modes:
- Primary colors optimized for clarity and accessibility
- Dark mode enabled by default
- Smooth transitions between themes

---

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy SafeGuard SL is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Your site goes live with a single click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pamodmalith/safeguard-sl)

### Other Deployment Options

SafeGuard SL can be deployed to any platform that supports Node.js:
- **Netlify** - Supports Next.js with minimal configuration
- **Railway** - Simple deployment with GitHub integration
- **Self-hosted** - Docker containers or traditional servers

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes SafeGuard SL better.

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your work (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📚 Resources & Learning

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

---

## 📞 Support & Feedback

Have questions or feedback? We'd love to hear from you!

- 📧 Email us for support
- 🐛 Report bugs on [GitHub Issues](https://github.com/pamodmalith/safeguard-sl/issues)
- 💬 Start a discussion in the [Discussions](https://github.com/pamodmalith/safeguard-sl/discussions) tab

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- Thanks to all contributors who have helped shape SafeGuard SL
- Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide React](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)

---

**Stay Safe Online. Stay Informed. Stay SafeGuard.** 🛡️

