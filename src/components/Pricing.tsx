const plans = [
  { name: "Cơ bản", price: "1.990.000đ", features: ["Video trọn đời", "Tài liệu & source code", "Cộng đồng hỗ trợ"], highlight: false },
  { name: "Pro", price: "3.990.000đ", features: ["Tất cả gói Cơ bản", "Mentor review code 1-1", "Chứng nhận hoàn thành", "Hỗ trợ xin việc"], highlight: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold">Bảng giá</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 ${
                p.highlight ? "bg-primary text-background shadow-xl" : "border border-white/10 bg-surface"
              }`}
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 text-4xl font-bold">{p.price}</div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href="#register"
                className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold ${
                  p.highlight ? "bg-background text-primary hover:bg-black" : "bg-primary text-background hover:bg-primary-dark"
                }`}
              >
                Chọn gói này
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
