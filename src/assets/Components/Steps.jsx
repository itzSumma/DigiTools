const Steps = ({ steps }) => {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-14 md:py-16" id="steps">
      <div className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-[1.95rem] font-bold tracking-tight md:text-[2.3rem]">Get Started In 3 Steps</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="card border border-[#ece7fb] bg-white shadow-sm">
            <div className="card-body items-start p-6">
              <span className="badge badge-primary h-6 rounded-full px-2 text-[10px]">0{index + 1}</span>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <img src={step.icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
              </div>
              <h3 className="mt-3 text-base font-bold">{step.title}</h3>
              <p className="text-[12px] leading-6 text-base-content/70">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Steps
