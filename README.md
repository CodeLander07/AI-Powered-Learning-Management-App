# PathWise – AI-Powered Course Companion Platform

PathWise is an AI-assisted learning management experience that helps students stay on track with personalized course companions, adaptive study sessions, and conversational support. The app is built on Next.js App Router and combines Clerk, Supabase, and Vapi to offer secure accounts, persistent progress, and voice-first tutoring.

## Highlights

- AI companions tailored to subjects, topics, and skill levels
- Session histories, filters, and dashboards backed by Supabase
- Reusable UI primitives powered by Tailwind CSS, Radix UI, and shadcn
- Clerk authentication protecting companion creation and usage limits
- Voice-enabled tutoring via Vapi for multimodal study flows
- Observability with Sentry instrumentation for server and edge runtimes

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Styling | Tailwind CSS 4, Radix UI, shadcn/ui, Lucide icons |
| Forms & Validation | React Hook Form, Zod, @hookform/resolvers |
| Authentication | Clerk (@clerk/nextjs) |
| Data & Storage | Supabase (Postgres, Row Level Security) |
| AI & Voice | Vapi AI Web SDK |
| Monitoring | Sentry for server and edge traces |

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── sentry-example-api/route.ts
│   ├── companion/
│   │   ├── [id]/page.tsx
│   │   └── new/page.tsx
│   ├── my-journey/page.tsx
│   ├── subscription/page.tsx
│   ├── sign-in/[[...sign-in]]/page.tsx
│   ├── sentry-example-page/page.tsx
│   ├── global-error.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── components/
│   ├── CompanionCards.tsx
│   ├── CompanionForm.tsx
│   ├── CompanionsList.tsx
│   ├── CTA.tsx
│   ├── BottomFooter.tsx
│   ├── navbar.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── textarea.tsx
├── constants/
│   ├── index.ts
│   └── soundwaves.json
├── lib/
│   ├── supabse.ts
│   ├── utils.ts
│   ├── vapi.sdk.ts
│   └── actions/
│       └── companion.actions.ts
├── public/
│   └── images/
├── types/
│   ├── index.d.ts
│   └── vapi.d.ts
├── middleware.ts
├── instrumentation.ts
└── package.json
```

## Environment Variables

Create a `.env.local` file and populate it with your secrets:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

NEXT_PUBLIC_VAPI_TOKEN=...

# Optional: enable Sentry error reporting
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=...
SENTRY_PROJECT=...
```

Consult the Clerk, Supabase, Vapi, and Sentry dashboards to obtain the correct values. Never commit secrets to version control.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Check code quality** (optional but recommended)

   ```bash
   npm run lint
   ```

3. **Run the app locally**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

PathWise uses Next.js App Router server actions, so ensure your development environment is on Node.js 18.18 or newer.

## Key Workflows

- **Companion creation** lives in `app/companion/new/page.tsx` and persists via `lib/actions/companion.actions.ts` into Supabase.
- **Session history** is fetched with server actions (`getRecentSessions`, `getUserSessions`) and rendered through `components/CompanionsList.tsx`.
- **Voice tutoring** hooks into `lib/vapi.sdk.ts`, allowing UI components to start conversations with AI-powered voice agents.
- **Authentication & authorization** are enforced by Clerk middleware (`middleware.ts`) and plan-based permission checks in `newCompanionPermissions`.

## Testing and Quality

- Run `npm run lint` to execute ESLint with Next.js defaults.
- Sentry hooks (`instrumentation.ts`) capture runtime errors for observability across server and edge environments.

## License

This project is currently distributed for portfolio and demonstration purposes. Add license terms here if you plan to share or commercialize the application.