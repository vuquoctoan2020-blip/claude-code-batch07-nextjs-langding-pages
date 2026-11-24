const problems = [
  "Học nhiều tutorial nhưng không tự làm được dự án.",
  "Không biết bắt đầu từ đâu, lộ trình rối rắm.",
  "Kiến thức rời rạc, thiếu portfolio để xin việc.",
  "Học một mình, gặp lỗi không ai hỗ trợ.",
];

export default function Problem() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Bạn có đang gặp những vấn đề này?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p}
              className="flex gap-4 rounded-xl border border-red-500/20 bg-red-500/10 p-6"
            >
              <span className="text-xl text-red-500">✕</span>
              <p className="text-slate-300">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
