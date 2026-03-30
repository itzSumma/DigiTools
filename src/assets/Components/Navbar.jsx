import { FiMenu, FiShoppingCart } from 'react-icons/fi'

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ede7ff] bg-white/95 backdrop-blur">
      <div className="navbar mx-auto min-h-16 w-[min(1120px,calc(100%-1.5rem))] px-0">
        <a className="text-lg font-extrabold tracking-tight md:text-xl" href="#hero">
          <span className="text-primary">Digi</span>
          <span>Tools</span>
        </a>

        <nav
          className="mx-auto hidden items-center gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-base-content/55 lg:flex"
          aria-label="Primary"
        >
          <a className="hover:text-primary" href="#hero">Home</a>
          <a className="hover:text-primary" href="#products">Products</a>
          <a className="hover:text-primary" href="#pricing">Pricing</a>
          <a className="hover:text-primary" href="#steps">Process</a>
          <a className="hover:text-primary" href="#footer">About</a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="btn btn-circle btn-ghost relative h-10 min-h-10 w-10 border border-[#ece7fb] bg-white"
            onClick={onOpenCart}
            aria-label={`Cart with ${cartCount} items`}
          >
            <FiShoppingCart className="text-base" />
            <span className="badge badge-primary badge-sm absolute -top-2 -right-2 min-w-5 border-0 text-[10px]">
              {cartCount}
            </span>
          </button>
          <a href="#products" className="btn btn-primary hidden min-h-9 rounded-full px-5 text-[11px] uppercase tracking-[0.18em] lg:inline-flex">
            Get Started
          </a>
          <button
            type="button"
            className="btn btn-circle btn-ghost border border-base-300 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
