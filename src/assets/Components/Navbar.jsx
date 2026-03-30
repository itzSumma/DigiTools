import { FiMenu, FiShoppingCart } from 'react-icons/fi'

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-base-300/70 bg-base-100/90 backdrop-blur">
      <div className="navbar mx-auto min-h-18 w-[min(1120px,calc(100%-1.5rem))] px-0">
        <a className="text-xl font-extrabold tracking-tight md:text-2xl" href="#hero">
          <span className="text-primary">Digi</span>
          <span>Tools</span>
        </a>

        <nav
          className="mx-auto hidden items-center gap-6 text-sm text-base-content/70 lg:flex"
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
            className="btn btn-circle btn-ghost relative border border-base-300"
            onClick={onOpenCart}
            aria-label={`Cart with ${cartCount} items`}
          >
            <FiShoppingCart className="text-lg" />
            <span className="badge badge-primary badge-sm absolute -top-2 -right-2 min-w-5">
              {cartCount}
            </span>
          </button>
          <a href="#products" className="btn btn-primary hidden rounded-full px-6 lg:inline-flex">
            Explore Tools
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
