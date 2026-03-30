import { FiCheckCircle } from 'react-icons/fi'

const Pricing = ({ pricingPlans }) => {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-14 md:py-16" id="pricing">
      <div className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">Simple, Transparent Pricing</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`card border shadow-sm ${
              plan.featured ? 'border-primary bg-primary text-primary-content' : 'border-[#ece7fb] bg-white'
            }`}
          >
            <div className="card-body p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p
                    className={`mt-1 text-[12px] leading-6 ${
                      plan.featured ? 'text-primary-content/80' : 'text-base-content/70'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>
                {plan.featured ? <span className="badge badge-warning h-6 rounded-full text-[10px]">Most Popular</span> : null}
              </div>

              <strong className="mt-5 inline-block text-4xl font-black tracking-tight">{plan.price}</strong>

              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-[12px] ${
                      plan.featured ? 'text-primary-content/80' : 'text-base-content/70'
                    }`}
                  >
                    <FiCheckCircle className={plan.featured ? 'text-primary-content' : 'text-primary'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn mt-5 min-h-9 w-full rounded-full text-[11px] uppercase tracking-[0.18em] ${plan.featured ? 'btn-neutral' : 'btn-primary'}`}
              >
                {plan.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
