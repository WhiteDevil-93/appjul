# Jules UI

![Build Status](https://github.com/sbhavani/jules-app/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

![Session View](public/assets/session-screenshot.png)

**A powerful, self-hosted workspace for Google's Jules AI agent.** Transform standard agent interactions into an engineering command center with live code diffs, real-time activity monitoring, session analytics, and comprehensive terminal output inspection.

## ✨ Key Features

- 🔄 **Real-Time Updates** - Live activity feed with auto-polling
- 📊 **Code Diff Viewer** - Visualize git patches and changes instantly
- 💻 **Terminal Inspector** - Detailed bash output analysis (execution coming soon)
- 📈 **Analytics Dashboard** - Track session metrics and trends
- 🔍 **Smart Search** - Find sessions by repository or title
- 📱 **Mobile-First** - Fully responsive design
- 🔒 **Secure** - API keys stored locally in browser

## 🚀 Quick Start

**Prerequisites:** Node.js 18+, Jules API key from [jules.google.com](https://jules.google.com), and a connected GitHub repository.

```bash
# Clone and install
git clone <your-repo-url>
cd jules-ui
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and enter your Jules API key when prompted. Your key is stored securely in browser localStorage.

## 📸 More Screenshots

![Dashboard View](public/assets/dashboard-screenshot.png)
*Analytics Dashboard - Track session success rates, duration, and activity volume*

## 🛠️ Tech Stack

Built with [Next.js 16](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

## 🔧 Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run linter
npm test         # Run tests
```

## 📚 API Integration

Integrates with Jules API (`https://jules.googleapis.com/v1alpha`) for session management, activity streaming, and real-time updates. See [developers.google.com/jules/api](https://developers.google.com/jules/api) for full documentation.

## 🤝 Contributing

Contributions welcome! Feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for the Jules community
