export default function Footer() {
  return (
    <footer className="bg-black/30 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© 2026 Khóa học Lập trình Web Thực Chiến.</p>
        <nav className="flex gap-6 text-sm">
          <a href="#content" className="hover:text-white">Chương trình</a>
          <a href="#pricing" className="hover:text-white">Bảng giá</a>
          <a href="#register" className="hover:text-white">Liên hệ</a>
        </nav>
      </div>
    </footer>
  );
}
