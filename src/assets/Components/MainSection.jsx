import { FiCheck, FiGrid, FiShoppingCart, FiStar, FiTrash2 } from 'react-icons/fi'

const accentStyles = {
  violet: 'from-violet-500/15 to-fuchsia-500/10',
  orange: 'from-orange-500/15 to-amber-500/10',
  teal: 'from-teal-500/15 to-cyan-500/10',
  green: 'from-emerald-500/15 to-lime-500/10',
  pink: 'from-pink-500/15 to-rose-500/10',
  blue: 'from-sky-500/15 to-indigo-500/10',
}

const tagStyles = {
  popular: 'badge-primary',
  best: 'badge-warning',
  new: 'badge-success',
}

const Products = ({ products, addedState, onAddToCart }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="rounded-[0.9rem] border border-[#e8e3f6] bg-white p-4 shadow-[0_10px_22px_rgba(21,20,39,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(21,20,39,0.06)]"
        >
          <div className={`flex h-20 items-center justify-center rounded-[0.75rem] bg-gradient-to-br ${accentStyles[product.accent] || accentStyles.blue}`}>
            <img src={product.icon} alt="" aria-hidden="true" className="h-12 w-12 object-contain" />
          </div>

          <div className="mt-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold leading-5">{product.name}</h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-base-content/60">
                <FiStar className="fill-warning text-warning" />
                <span>{product.rating} rating</span>
              </div>
            </div>
            <span className={`badge h-6 rounded-full px-2 text-[10px] ${tagStyles[product.tagType] || 'badge-neutral'}`}>
              {product.tag}
            </span>
          </div>

          <p className="mt-3 text-[12px] leading-5 text-base-content/68">{product.description}</p>

          <ul className="mt-3 space-y-1.5">
            {product.features.slice(0, 2).map((feature) => (
              <li key={feature} className="flex items-center gap-1.5 text-[11px] text-base-content/75">
                <FiCheck className="text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <span className="text-xl font-black text-primary">${product.price}</span>
              <p className="text-[10px] uppercase tracking-[0.18em] text-base-content/50">{product.period}</p>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className={`btn min-h-8 rounded-full px-4 text-[10px] uppercase tracking-[0.16em] ${addedState[product.id] ? 'btn-success' : 'btn-primary'}`}
            >
              {addedState[product.id] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

const Cart = ({ cartItems, totalPrice, onRemoveItem, onCheckout }) => {
  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FiShoppingCart className="text-2xl" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Your cart is empty</h3>
        <p className="mt-3 text-sm leading-7 text-base-content/70">
          Add a few tools from the collection and they will appear here instantly.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl rounded-[0.8rem] border border-[#ebe6f8] bg-white p-6 shadow-[0_18px_30px_rgba(30,27,75,0.05)] md:p-8">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-base-content/55">Your Cart</h3>
      <div className="mt-4 space-y-3">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-3 rounded-[0.7rem] border border-[#eee9fb] px-3 py-3"
          >
            <img src={item.icon} alt="" aria-hidden="true" className="h-10 w-10 rounded-lg bg-[#f7f4ff] p-2 object-contain" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{item.name}</p>
              <p className="text-[11px] text-base-content/60">${item.price} / {item.period}</p>
            </div>
            <button
              type="button"
              onClick={() => onRemoveItem(item.id)}
              className="btn btn-ghost btn-xs text-error"
              aria-label={`Remove ${item.name}`}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#eee9fb] pt-4">
        <span className="text-[11px] uppercase tracking-[0.2em] text-base-content/50">Total</span>
        <strong className="text-lg font-black text-base-content">${totalPrice}</strong>
      </div>

      <button type="button" onClick={onCheckout} className="btn btn-primary mt-5 min-h-9 w-full rounded-full text-[11px] uppercase tracking-[0.18em]">
        Proceed to Checkout
      </button>
    </div>
  )
}

const MainSection = ({
  activeTab,
  cartItems,
  products,
  totalPrice,
  addedState,
  onSetActiveTab,
  onAddToCart,
  onRemoveItem,
  onCheckout,
}) => {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-12 md:py-16" id="products">
      <div className="rounded-none border-2 border-sky-400 bg-white p-1">
        <div className="border border-dashed border-sky-300 p-5 md:p-6">
          <div className="mx-auto mb-7 max-w-2xl border border-dashed border-sky-300 p-4 text-center">
            <h2 className="text-[1.9rem] font-bold tracking-tight text-base-content md:text-[2.2rem]">Premium Digital Tools</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center">
            <span className="badge badge-primary rounded-full px-4 py-3 text-[10px] uppercase tracking-[0.2em]">
              Live Catalog
            </span>
          </div>
          <div className="mb-6 flex justify-center">
            <div className="join rounded-full border border-[#ebe6f8] bg-white p-1 shadow-sm">
              <button
                type="button"
                className={`btn join-item min-h-8 rounded-full px-4 text-[11px] uppercase tracking-[0.16em] ${activeTab === 'products' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => onSetActiveTab('products')}
              >
                <FiGrid />
                Products
              </button>
              <button
                type="button"
                className={`btn join-item min-h-8 rounded-full px-4 text-[11px] uppercase tracking-[0.16em] ${activeTab === 'cart' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => onSetActiveTab('cart')}
              >
                <FiShoppingCart />
                Cart
                <span className={`badge badge-sm ${activeTab === 'cart' ? 'badge-neutral' : 'badge-primary'}`}>
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
          {activeTab === 'products' ? (
            <Products products={products} addedState={addedState} onAddToCart={onAddToCart} />
          ) : (
            <Cart
              cartItems={cartItems}
              totalPrice={totalPrice}
              onRemoveItem={onRemoveItem}
              onCheckout={onCheckout}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default MainSection
