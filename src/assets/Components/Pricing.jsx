import { FiCheckCircle } from 'react-icons/fi'

const Pricing = ({ pricingPlans }) => {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20" id="pricing">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="badge badge-primary badge-outline rounded-full px-4 py-3 uppercase tracking-[0.2em]">
          Flexible Plans
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Simple, Transparent Pricing</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`card border shadow-sm ${
              plan.featured ? 'border-primary bg-primary text-primary-content' : 'border-base-300 bg-base-100'
            }`}
          >
            <div className="card-body p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p
                    className={`mt-1 text-sm leading-7 ${
                      plan.featured ? 'text-primary-content/80' : 'text-base-content/70'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>
                {plan.featured ? <span className="badge badge-warning rounded-full">Most Popular</span> : null}
              </div>

              <strong className="mt-6 inline-block text-5xl font-black tracking-tight">{plan.price}</strong>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm ${
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
                className={`btn mt-6 w-full rounded-full ${plan.featured ? 'btn-neutral' : 'btn-primary'}`}
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
