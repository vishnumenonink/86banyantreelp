# 86 Banyan Tree

A modern web application built with Next.js using the App Router architecture.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS (if applicable)
- **Package Manager**: npm/yarn/pnpm

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm, yarn, or pnpm

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Planagit/86banyantree.git
cd 86banyantree
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build for Production

To create an optimized production build:

```bash
# Using npm
npm run build
npm start

# Using yarn
yarn build
yarn start

# Using pnpm
pnpm build
pnpm start
```

## Project Structure

```
86banyantree/
├── app/                # App Router directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── ...            # Other routes
├── components/         # Reusable components
├── public/            # Static assets
├── styles/            # Global styles
├── .env.local         # Environment variables (not committed)
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies
└── README.md          # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- ⚡ Next.js App Router for optimal performance
- 🎨 Modern UI/UX design
- 📱 Fully responsive
- 🔒 Type-safe with TypeScript
- ⚙️ Optimized for production



1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Next.js team for the amazing framework
- All contributors who help improve this project