export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="px-8 py-6 border-b border-white/10">
        <span className="text-2xl font-bold tracking-widest uppercase">Suvra</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-7xl sm:text-9xl font-black tracking-tight uppercase">
          Coming<br />Soon
        </h1>
        <p className="text-white/40 text-lg tracking-widest uppercase">Something is brewing</p>
      </main>
    </div>
  );
}
