export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-sm font-medium text-primary">
          Khóa học mới · Khai giảng tháng này
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Trở thành <span className="text-primary">lập trình viên</span> trong 8
          buổi
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Làm chủ Next.js và Tailwind CSS qua các dự án thực tế, sẵn sàng đi làm
          chỉ sau 12 tuần.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-background shadow hover:bg-primary-dark"
          >
            Đăng ký ngay
          </a>
          <a
            href="#content"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/5"
          >
            Xem chương trình học
          </a>
        </div>
      </div>
    </section>
  );
}
