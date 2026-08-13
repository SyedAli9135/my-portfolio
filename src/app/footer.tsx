export default function Footer() {
  return (
    <footer className="border-t border-[#e4e4e3]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Syed Muhammad Ali Akhtar</p>
        <p>Backend, data &amp; AI systems consulting</p>
      </div>
    </footer>
  );
}
