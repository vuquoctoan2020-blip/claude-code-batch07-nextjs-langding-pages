const stats = [
  { value: "2.000+", label: "Học viên" },
  { value: "4.9/5", label: "Đánh giá" },
  { value: "90%", label: "Có việc sau khóa" },
];

const reviews = [
  { name: "Minh Anh", text: "Mình từ trái ngành, sau 3 tháng đã đi làm frontend. Mentor rất tận tâm!" },
  { name: "Quang Huy", text: "Dự án thực tế giúp mình tự tin phỏng vấn. Rất đáng tiền." },
  { name: "Thu Trang", text: "Lộ trình rõ ràng, không còn bị lạc giữa hàng trăm tutorial." },
];

export default function SocialProof() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-xl border border-white/10 p-6">
              <blockquote className="text-slate-300">“{r.text}”</blockquote>
              <figcaption className="mt-4 font-semibold">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
