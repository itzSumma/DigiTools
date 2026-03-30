import { FiCheck } from 'react-icons/fi'
import {
  primaryButton,
  sectionCopy,
  sectionHeadingWrap,
  sectionTitle,
  sectionWidth,
  surfaceCard,
} from './uiStyles'

const PricingCard = ({ plan }) => {
  const isFeatured = plan.featured

  const cardContent = (
    <div
      className={`relative rounded-[1.25rem] px-6 py-6 transition duration-300 ease-out ${
        isFeatured
          ? 'bg-gradient-to-br from-[#6f3df4] via-[#7c23ff] to-[#bb16ff] text-white shadow-[0_22px_48px_rgba(111,61,244,0.22)]'
          : `${surfaceCard} animated-border-inner bg-[#f9faff] text-[#1d2438] group-hover:shadow-[0_22px_48px_rgba(28,30,53,0.12)]`
      }`}
    >
      {isFeatured ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe59a] px-4 py-1 text-xs font-semibold text-[#a26400]">
          Most Popular
        </span>
      ) : null}

      <h3 className="text-[1.85rem] font-bold tracking-[-0.04em] transition duration-300 group-hover:translate-x-1">
        {plan.name}
      </h3>
      <p className={`mt-2 text-sm ${isFeatured ? 'text-white/80' : 'text-[#8b95a9]'}`}>
        {plan.subtitle}
      </p>

      <div className="mt-6 flex items-end gap-1">
        <strong className="text-[2.4rem] font-extrabold tracking-[-0.05em]">{plan.price}</strong>
        <span className={`pb-1 text-sm ${isFeatured ? 'text-white/80' : 'text-[#8b95a9]'}`}>
          {plan.period}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-center gap-2 text-sm ${isFeatured ? 'text-white/90' : 'text-[#6f7a92]'}`}
          >
            <FiCheck className="text-[#52d67f]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 group-hover:-translate-y-0.5 ${
          isFeatured ? 'bg-white text-[#6f3df4]' : primaryButton
        }`}
      >
        {plan.cta}
      </button>
    </div>
  )

  if (isFeatured) {
    return (
      <article className="group relative transition duration-300 ease-out hover:-translate-y-2">
        {cardContent}
      </article>
    )
  }

  return (
    <article className="animated-border-shell group relative transition duration-300 ease-out hover:-translate-y-2">
      {cardContent}
    </article>
  )
}

const Pricing = ({ pricingPlans }) => {
  return (
    <section className="py-20 md:py-24" id="pricing">
      <div className={sectionWidth}>
        <div className={`${sectionHeadingWrap} max-w-[44rem]`}>
          <h2 className={sectionTitle}>Simple, Transparent Pricing</h2>
          <p className={sectionCopy}>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
