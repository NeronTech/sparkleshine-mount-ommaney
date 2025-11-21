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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
      </head>

      <body>
        <PageLoader />
        <PwaRegister>{children}</PwaRegister>
      </body>
    </html>
  );
}
