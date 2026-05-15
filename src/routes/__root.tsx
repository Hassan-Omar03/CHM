import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import tailwindCss from "../index.css?url";
import appCss from "./styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-white purple-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-white purple-glow"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:bg-surface-2 transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CHEMfix Construction Chemicals — Advanced Construction Chemical Solutions" },
      { name: "description", content: "CHEMfix delivers high-performance construction chemicals, waterproofing, industrial flooring, concrete repair and road safety solutions across the UK, Pakistan and Nigeria." },
      { name: "author", content: "CHEMfix Construction Chemicals" },
      { property: "og:title", content: "CHEMfix Construction Chemicals" },
      { property: "og:description", content: "Advanced construction chemicals, waterproofing systems and industrial protection — engineered since 2005." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CHEMfix" },
      { property: "og:url", content: "https://www.chemfix.org" },
      { property: "og:image", content: "https://www.chemfix.org/image.png" },
      { name: "twitter:title", content: "CHEMfix Construction Chemicals" },
      { name: "twitter:description", content: "Advanced construction chemicals, waterproofing systems and industrial protection — engineered since 2005." },
      { name: "twitter:image", content: "https://www.chemfix.org/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#111113" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: tailwindCss },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Schema.org JSON-LD Structured Data for Google Rich Snippets
const schemaOrgJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.chemfix.org/#organization",
      "name": "CHEMfix Construction Chemicals",
      "url": "https://www.chemfix.org",
      "logo": "https://www.chemfix.org/image.png",
      "description": "Delivering high-performance construction chemicals, waterproofing, industrial flooring, concrete repair and road safety solutions across the UK, Pakistan and Nigeria.",
      "address": [
        {
          "@type": "PostalAddress",
          "addressCountry": "UK",
          "addressLocality": "London"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "Pakistan",
          "addressLocality": "Karachi"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "Nigeria",
          "addressLocality": "Lagos"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.chemfix.org/#website",
      "url": "https://www.chemfix.org",
      "name": "CHEMfix",
      "publisher": { "@id": "https://www.chemfix.org/#organization" }
    }
  ]
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
