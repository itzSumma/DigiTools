const ReadyToStart = () => {
  return (
    <section className="mt-8 bg-linear-to-r from-[#5b2ef2] via-[#7f2fff] to-[#be16ff] py-20 text-center text-white md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <h2 className="text-[2.5rem] font-extrabold tracking-[-0.05em] md:text-[3.4rem]">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-base leading-7 text-white/85">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6f3df4]"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="inline-flex rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-sm text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default ReadyToStart
