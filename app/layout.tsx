// app/layout.tsx (server component)
import "./globals.css";
import PwaRegister from "../components/PwaRegister";
import PageLoader from "../components/PageLoader";

export const metadata = {
  title: "SPARKLESHINE MOUNT OMMANEY",
  description: "Sparkleshine Mount Ommaney | Car Wash & Detailing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="google0c18bffadcc1052b"
        />
        <meta
          name="description"
          content="Professional car wash services in Mount Ommaney. Book online now!"
        />
        <meta
          property="og:title"
          content="Sparkle Shine Car Wash – Mount Ommaney"
        />
        <meta
          property="og:description"
          content="Professional car wash services in Mount Ommaney. Book online now!"
        />
        <meta
          property="og:url"
          content="https://sparkleshine-mount-ommaney.vercel.app"
        />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <PageLoader />
        <PwaRegister>{children}</PwaRegister>
      </body>
    </html>
  );
}
