import { FiMinus, FiStar, FiUsers } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="mt-6 bg-slate-950 text-slate-100" id="footer">
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-10 px-0 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <a className="text-2xl font-extrabold tracking-tight text-white" href="#hero">
            <span className="text-primary">Digi</span>
            <span>Tools</span>
          </a>
          <p className="max-w-xs leading-7 text-slate-300">
            Premium templates, growth tools, and digital systems designed for modern
            creators.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Product</h4>
          <a className="block text-slate-300 hover:text-white" href="#products">Marketplace</a>
          <a className="block text-slate-300 hover:text-white" href="#pricing">Pricing</a>
          <a className="block text-slate-300 hover:text-white" href="#steps">Resources</a>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h4>
          <a className="block text-slate-300 hover:text-white" href="#hero">About</a>
          <a className="block text-slate-300 hover:text-white" href="#footer">Contact</a>
          <a className="block text-slate-300 hover:text-white" href="#pricing">Plans</a>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Highlights</h4>
          <div className="space-y-3 text-slate-300">
            <span className="flex items-center gap-3">
              <FiUsers />
              Community
            </span>
            <span className="flex items-center gap-3">
              <FiStar />
              Rated 4.9
            </span>
            <span className="flex items-center gap-3">
              <FiMinus />
              Clean UI
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
