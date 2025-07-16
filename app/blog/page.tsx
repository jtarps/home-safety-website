import { Header } from "@/components/header";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600">Blog page coming soon.</p>
        </div>
      </main>
    </div>
  );
}
 