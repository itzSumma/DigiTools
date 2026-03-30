import {
  sectionCopy,
  sectionHeadingWrap,
  sectionTitle,
  sectionWidth,
  surfaceCard,
} from './uiStyles'

const Steps = ({ steps }) => {
  return (
    <section className="bg-[#f7f8fc] py-20 md:py-24" id="steps">
      <div className={sectionWidth}>
        <div className={`${sectionHeadingWrap} max-w-[40rem]`}>
          <h2 className={sectionTitle}>Get Started In 3 Steps</h2>
          <p className={sectionCopy}>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            return (
              <article
                key={step.title}
                className={`${surfaceCard} group relative px-6 py-10 text-center transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(28,30,53,0.10)]`}
              >
                <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-xs font-semibold text-white">
                  0{index + 1}
                </span>
                <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#f2ebff] text-[#7a38f5] transition duration-300 group-hover:scale-110 group-hover:bg-[#ede4ff]">
                  <img
                    src={step.iconSrc}
                    alt={step.title}
                    className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-7 text-[1.85rem] font-bold tracking-[-0.04em] text-[#1d2438] transition duration-300 group-hover:text-[#6f3df4]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#8b95a9]">{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
