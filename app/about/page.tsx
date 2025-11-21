export const metadata = {
  title: 'About — My App',
  description: 'About page for My App',
};

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4">This page is server-rendered for SEO.</p>
    </main>
  );
}
