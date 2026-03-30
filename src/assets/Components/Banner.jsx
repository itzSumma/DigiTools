import { FiStar, FiZap } from 'react-icons/fi'

const Banner = ({ heroAssets }) => {
  return (
    <section
      className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-8 py-10 lg:grid-cols-[1.02fr_.82fr] lg:items-center lg:py-14"
      id="hero"
    >
      <div>
        <span className="badge badge-primary badge-outline rounded-full border-[#d9ccff] bg-[#f7f3ff] px-3 py-2 text-[10px] uppercase tracking-[0.18em]">
          AI-Powered Resource Hub
        </span>
        <h1 className="mt-4 max-w-md text-[2.2rem] font-black leading-[0.95] tracking-tight md:text-[3.35rem]">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-base-content/65">
          Discover polished toolkits for content, design, automation, and growth.
          Built to help you ship faster and look more professional.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary min-h-9 rounded-full px-5 text-[11px] uppercase tracking-[0.18em]" href="#products">
            Explore Tools
          </a>
          <button type="button" className="btn btn-outline min-h-9 rounded-full border-[#e5defd] px-4 text-[11px] uppercase tracking-[0.18em]">
            <img src={heroAssets.playImage} alt="" aria-hidden="true" className="h-3.5 w-3.5 object-contain" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[18rem] rounded-[0.3rem] bg-[#f8f6ff] p-3 shadow-[0_10px_35px_rgba(140,93,255,0.10)]">
          <div className="absolute inset-3 rounded-[0.2rem] bg-gradient-to-br from-primary/10 via-white to-white" />
          <img
            src={heroAssets.bannerImage}
            alt="Digital workflow banner"
            className="relative z-10 aspect-[4/5] w-full rounded-[0.15rem] object-cover"
          />
          <div className="badge badge-primary absolute top-6 right-0 z-20 -translate-y-1/2 rounded-full px-3 py-2 text-[10px] shadow-sm">
            <FiZap />
            Fast setup
          </div>
          <div className="badge badge-outline absolute bottom-6 left-0 z-20 translate-y-1/2 rounded-full bg-base-100 px-3 py-2 text-[10px] shadow-sm">
            <FiStar className="text-warning" />
            4.9 average rating
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
