// src/app/page.tsx
import ChatInterface from '@/components/ChatInterface'; // Adjust path if needed

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-1">
      <div className="w-[96%] h-[96vh] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <ChatInterface />
      </div>
    </main>
  );
}