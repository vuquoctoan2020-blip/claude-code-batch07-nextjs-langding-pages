const benefits = [
  { icon: "🚀", title: "Đi làm nhanh", desc: "Lộ trình 12 tuần tập trung kỹ năng doanh nghiệp cần." },
  { icon: "🧩", title: "Dự án thực tế", desc: "Xây dựng 5+ sản phẩm hoàn chỉnh cho portfolio." },
  { icon: "👨‍🏫", title: "Mentor 1-1", desc: "Được review code và giải đáp thắc mắc mỗi tuần." },
  { icon: "♾️", title: "Học trọn đời", desc: "Truy cập video và tài liệu cập nhật vĩnh viễn." },
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Bạn nhận được gì?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-white/10 p-6 shadow-sm">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
