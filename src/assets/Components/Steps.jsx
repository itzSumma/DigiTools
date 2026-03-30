import { FiBox, FiRocket, FiUser } from 'react-icons/fi'

const iconMap = {
  userImage: FiUser,
  packageImage: FiBox,
  rocketImage: FiRocket,
}

const Steps = ({ steps }) => {
  return (
    <section className="bg-[#f7f8fc] py-20 md:py-24" id="steps">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <div className="mx-auto max-w-[40rem] text-center">
          <h2 className="text-[2.6rem] font-extrabold tracking-[-0.05em] text-[#1d2438] md:text-[4rem]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-base text-[#8b95a9]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const StepIcon = iconMap[step.icon] || FiBox

            return (
              <article
                key={step.title}
                className="relative rounded-[1.25rem] border border-[#ece8f7] bg-white px-6 py-10 text-center shadow-[0_10px_24px_rgba(28,30,53,0.04)]"
              >
                <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-xs font-semibold text-white">
                  0{index + 1}
                </span>
                <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#f2ebff] text-[#7a38f5]">
                  <StepIcon className="text-[2rem]" />
                </div>
                <h3 className="mt-7 text-[1.85rem] font-bold tracking-[-0.04em] text-[#1d2438]">
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
