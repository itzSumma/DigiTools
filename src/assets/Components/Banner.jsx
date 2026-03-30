import { FiStar, FiZap } from 'react-icons/fi'

const Banner = ({ heroAssets }) => {
  return (
    <section
      className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20"
      id="hero"
    >
      <div>
        <span className="badge badge-primary badge-outline rounded-full px-4 py-3 uppercase tracking-[0.2em]">
          AI-Powered Resource Hub
        </span>
        <h1 className="mt-5 max-w-lg text-5xl font-black leading-none tracking-tight md:text-6xl">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-base-content/70">
          Discover polished toolkits for content, design, automation, and growth.
          Built to help you ship faster and look more professional.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="btn btn-primary rounded-full px-6" href="#products">
            Explore Tools
          </a>
          <button type="button" className="btn btn-outline rounded-full px-6">
            <img src={heroAssets.playImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-sm rounded-[2rem] border border-primary/10 bg-white p-4 shadow-lg shadow-primary/10">
          <div className="absolute inset-4 rounded-[1.6rem] bg-gradient-to-br from-primary/10 via-transparent to-white" />
          <img
            src={heroAssets.bannerImage}
            alt="Digital workflow banner"
            className="relative z-10 aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
          <div className="badge badge-primary absolute top-8 right-0 z-20 -translate-y-1/2 rounded-full px-4 py-3 shadow-md">
            <FiZap />
            Fast setup
          </div>
          <div className="badge badge-outline absolute bottom-8 left-0 z-20 translate-y-1/2 rounded-full bg-base-100 px-4 py-3 shadow-md">
            <FiStar className="text-warning" />
            4.9 average rating
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
