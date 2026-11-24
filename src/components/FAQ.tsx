const faqs = [
  { q: "Tôi chưa biết gì về lập trình có học được không?", a: "Được. Khóa học bắt đầu từ kiến thức nền tảng nhất." },
  { q: "Mỗi tuần cần dành bao nhiêu thời gian?", a: "Khoảng 8–10 giờ mỗi tuần, học linh hoạt theo lịch của bạn." },
  { q: "Có được hoàn tiền không?", a: "Có, hoàn 100% học phí trong 7 ngày đầu nếu bạn không hài lòng." },
  { q: "Học xong có hỗ trợ tìm việc không?", a: "Gói Pro có hỗ trợ review CV, portfolio và phỏng vấn thử." },
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold">Câu hỏi thường gặp</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-white/10 p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
