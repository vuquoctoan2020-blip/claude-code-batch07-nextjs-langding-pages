export default function CTA() {
  return (
    <section id="register" className="bg-primary py-20 text-background">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold">Sẵn sàng bắt đầu sự nghiệp lập trình?</h2>
        <p className="mt-4 text-background/80">Đăng ký hôm nay để nhận ưu đãi giảm 20% cho 50 học viên đầu tiên.</p>
        <a
          href="mailto:hello@example.com?subject=Đăng ký khóa học"
          className="mt-8 inline-block rounded-lg bg-background px-8 py-3 font-semibold text-primary hover:bg-black"
        >
          Đăng ký ngay
        </a>
      </div>
    </section>
  );
}
