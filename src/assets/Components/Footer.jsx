import { FiFacebook, FiGlobe, FiTwitter } from 'react-icons/fi'

const socialLinkClass = 'flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#11192f] transition duration-300 hover:-translate-y-1 hover:bg-[#7a38f5] hover:text-white hover:shadow-[0_12px_24px_rgba(122,56,245,0.28)]'

const Footer = () => {
  return (
    <footer className="bg-[#11192f] py-16 text-white" id="footer">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-[2.2rem] font-extrabold tracking-[-0.05em]">DigiTools</h3>
            <p className="mt-5 max-w-[18rem] text-sm leading-7 text-white/65">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Product</h4>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <a className="block hover:text-white" href="#steps">Features</a>
              <a className="block hover:text-white" href="#pricing">Pricing</a>
              <a className="block hover:text-white" href="#products">Templates</a>
              <a className="block hover:text-white" href="#products">Integrations</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <a className="block hover:text-white" href="#hero">About</a>
              <a className="block hover:text-white" href="#footer">Blog</a>
              <a className="block hover:text-white" href="#footer">Careers</a>
              <a className="block hover:text-white" href="#footer">Press</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <a className="block hover:text-white" href="#footer">Documentation</a>
              <a className="block hover:text-white" href="#footer">Help Center</a>
              <a className="block hover:text-white" href="#footer">Community</a>
              <a className="block hover:text-white" href="#footer">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Social Links</h4>
            <div className="mt-5 flex items-center gap-3">
              <a href="#footer" className={socialLinkClass}>
                <FiGlobe />
              </a>
              <a href="#footer" className={socialLinkClass}>
                <FiFacebook />
              </a>
              <a href="#footer" className={socialLinkClass}>
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#footer">Privacy Policy</a>
            <a href="#footer">Terms of Service</a>
            <a href="#footer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
