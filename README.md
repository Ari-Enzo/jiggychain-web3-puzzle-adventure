# JiggyChain Puzzle

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ari-Enzo/jiggychain-web3-puzzle-adventure)

A full-stack web application built with React, TypeScript, Tailwind CSS, and Cloudflare Workers. This project combines a modern React frontend with a Hono-powered API backend, deployed seamlessly on Cloudflare's edge network. Designed for high performance, scalability, and developer experience.

## Features

- **React + Vite**: Fast development and hot module replacement.
- **TypeScript**: Full type safety across frontend and backend.
- **Tailwind CSS + shadcn/ui**: Beautiful, customizable UI components with dark mode support.
- **Cloudflare Workers**: Serverless API routes with zero-cold-start latency.
- **React Router + TanStack Query**: Robust routing and data fetching.
- **Immer + Zustand**: Efficient state management.
- **Sonner Toasts + Lucide Icons**: Polished notifications and icons.
- **Sidebar Layout**: Responsive app layout with collapsible sidebar.
- **Error Boundaries**: Production-ready error handling and reporting.
- **Theme Toggle**: Light/dark mode with localStorage persistence.
- **Cloudflare Pages + Workers**: Single-command deployment for full-stack apps.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Framer Motion, Lucide React
- **Backend**: Cloudflare Workers, Hono, TypeScript
- **State/UI**: Zustand, Immer, Sonner, Headless UI, Radix UI
- **Dev Tools**: Bun, ESLint, Wrangler, Cloudflare Vite Plugin
- **Other**: Recharts, Date-fns, UUID, Zod

## Quick Start

1. **Clone & Install**:
   ```bash
   git clone <repository-url>
   cd jiggychain-puzzle-cvyjyxgtdz7z-hwokpsnf
   bun install
   ```

2. **Development**:
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or `$PORT`).

3. **Build**:
   ```bash
   bun run build
   ```

## Installation

This project uses **Bun** as the package manager and runtime.

```bash
# Install dependencies
bun install

# Generate Cloudflare types (one-time)
bunx wrangler types
```

**Note**: Ensure you have [Bun](https://bun.sh/) installed and [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) configured with your Cloudflare account.

## Usage

### Frontend Development
- Edit pages in `src/pages/`.
- Add UI components from shadcn/ui (`src/components/ui/`).
- Customize layout in `src/components/layout/AppLayout.tsx`.
- API calls go to `/api/*` routes handled by the Worker.

### Backend Development (Workers API)
- Add routes in `worker/userRoutes.ts`.
- Core Worker entrypoint: `worker/index.ts` (do not modify).
- Test API endpoints locally with `bun run dev`.

### Custom Routes Example
```typescript
// worker/userRoutes.ts
app.get('/api/users/:id', async (c) => {
  const id = c.req.param('id');
  return c.json({ id, name: 'User' });
});
```

### State Management Example
```typescript
// src/stores/exampleStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useExampleStore = create(
  immer((set) => ({
    count: 0,
    increment: () => set((state) => { state.count += 1; }),
  }))
);
```

## Development Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start dev server (frontend + Workers proxy) |
| `bun run build` | Build for production |
| `bun run lint` | Lint code |
| `bun run preview` | Preview production build |
| `bun run cf-typegen` | Generate Worker types |
| `bun run deploy` | Build + deploy to Cloudflare |

## Deployment

Deploy to Cloudflare Pages (frontend) + Workers (backend) with a single command:

```bash
bun run deploy
```

This uses **Wrangler** under the hood. Ensure `wrangler.jsonc` is configured with your Cloudflare account.

### Prerequisites
1. Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `bunx wrangler@latest`.
2. Login: `wrangler login`.
3. Configure bindings/secrets in `wrangler.jsonc` if needed (e.g., KV, D1).

### Custom Domain & Observability
- Set custom domains in Cloudflare dashboard.
- Observability is enabled by default (metrics, logs).

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ari-Enzo/jiggychain-web3-puzzle-adventure)

## Project Structure

```
├── src/              # React frontend
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities
│   ├── pages/        # Route pages
│   └── main.tsx      # App entrypoint
├── worker/           # Cloudflare Workers API
│   ├── index.ts      # Core Worker (do not modify)
│   └── userRoutes.ts # Add your API routes here
├── public/           # Static assets
├── vite.config.ts    # Vite + Cloudflare config
└── wrangler.jsonc    # Workers config
```

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.