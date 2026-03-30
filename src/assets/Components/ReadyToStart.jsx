import { FiArrowRight } from 'react-icons/fi'

const ReadyToStart = () => {
  return (
    <section className="pt-6">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center justify-between gap-5 rounded-[2rem] bg-gradient-to-r from-primary to-secondary px-8 py-10 text-center text-primary-content md:flex-row md:text-left">
        <div>
          <span className="badge badge-outline border-white/40 bg-white/10 px-4 py-3 uppercase tracking-[0.2em] text-white">
            Ready To Transform Your Workflow?
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Pick your toolkit, launch faster, and keep every project looking polished.
          </h2>
        </div>
        <a className="btn rounded-full border-none bg-white text-primary hover:bg-white/90" href="#products">
          Explore Collection
          <FiArrowRight />
        </a>
      </div>
    </section>
  )
}

export default ReadyToStart
