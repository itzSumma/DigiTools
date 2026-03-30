import { FiArrowRight } from 'react-icons/fi'

const ReadyToStart = () => {
  return (
    <section className="pt-4">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center justify-between gap-4 bg-gradient-to-r from-primary to-secondary px-8 py-8 text-center text-primary-content md:flex-row md:text-left">
        <div>
          <h2 className="max-w-2xl text-lg font-bold tracking-tight md:text-xl">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mt-2 text-[12px] text-primary-content/80">Explore polished tools built for fast digital execution.</p>
        </div>
        <a className="btn min-h-9 rounded-full border-none bg-white px-5 text-[11px] uppercase tracking-[0.18em] text-primary hover:bg-white/90" href="#products">
          Explore Collection
          <FiArrowRight />
        </a>
      </div>
    </section>
  )
}

export default ReadyToStart
