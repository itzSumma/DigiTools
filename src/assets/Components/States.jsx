const States = () => {
  return (
    <section className="bg-linear-to-r from-primary to-secondary text-primary-content">
      <div className="stats stats-vertical mx-auto grid w-[min(1120px,100%)] rounded-none bg-transparent py-1 shadow-none md:stats-horizontal md:grid-cols-3">
        <div className="stat border-b border-white/15 py-4 text-center md:border-r md:border-b-0">
          <div className="stat-value text-3xl font-black">50K+</div>
          <div className="stat-desc text-[11px] uppercase tracking-[0.18em] text-primary-content/80">Active Users</div>
        </div>
        <div className="stat border-b border-white/15 py-4 text-center md:border-r md:border-b-0">
          <div className="stat-value text-3xl font-black">200+</div>
          <div className="stat-desc text-[11px] uppercase tracking-[0.18em] text-primary-content/80">Premium Tools</div>
        </div>
        <div className="stat py-4 text-center">
          <div className="stat-value text-3xl font-black">4.9</div>
          <div className="stat-desc text-[11px] uppercase tracking-[0.18em] text-primary-content/80">Rating</div>
        </div>
      </div>
    </section>
  )
}

export default States
