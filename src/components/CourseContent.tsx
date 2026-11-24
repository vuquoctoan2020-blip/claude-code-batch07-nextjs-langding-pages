const modules = [
  { title: "Module 1: HTML, CSS & Tailwind CSS", lessons: "Nền tảng giao diện, responsive, utility-first" },
  { title: "Module 2: JavaScript & TypeScript", lessons: "Cú pháp hiện đại, async, kiểu dữ liệu" },
  { title: "Module 3: React căn bản", lessons: "Component, state, props, hooks" },
  { title: "Module 4: Next.js App Router", lessons: "Routing, SSR/SSG, API routes, tối ưu SEO" },
  { title: "Module 5: Dự án cuối khóa & triển khai", lessons: "Làm sản phẩm hoàn chỉnh, deploy lên Vercel" },
];

export default function CourseContent() {
  return (
    <section id="content" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold">Chương trình học</h2>
        <ol className="mt-12 space-y-4">
          {modules.map((m, i) => (
            <li key={m.title} className="flex gap-4 rounded-xl bg-surface p-5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-background">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-sm text-slate-400">{m.lessons}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
