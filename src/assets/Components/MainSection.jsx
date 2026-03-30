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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className={`flex h-32 items-center justify-center rounded-[1.25rem] bg-gradient-to-br ${accentStyles[product.accent] || accentStyles.blue}`}>
            <img src={product.icon} alt="" aria-hidden="true" className="h-20 w-20 object-contain" />
          </div>

          <div className="mt-5 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
                <FiStar className="fill-warning text-warning" />
                <span>{product.rating} rating</span>
              </div>
            </div>
            <span className={`badge rounded-full ${tagStyles[product.tagType] || 'badge-neutral'}`}>
              {product.tag}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-base-content/70">{product.description}</p>

          <ul className="mt-4 space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-base-content/75">
                <FiCheck className="text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <span className="text-2xl font-black text-primary">${product.price}</span>
              <p className="text-xs uppercase tracking-[0.2em] text-base-content/50">{product.period}</p>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className={`btn rounded-full px-5 ${addedState[product.id] ? 'btn-success' : 'btn-primary'}`}
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
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold">Your Cart</h3>
      <div className="mt-6 space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-4 rounded-[1.25rem] border border-base-300 px-4 py-3"
          >
            <img src={item.icon} alt="" aria-hidden="true" className="h-12 w-12 rounded-xl bg-base-200 p-2 object-contain" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{item.name}</p>
              <p className="text-sm text-base-content/60">${item.price} / {item.period}</p>
            </div>
            <button
              type="button"
              onClick={() => onRemoveItem(item.id)}
              className="btn btn-ghost btn-sm text-error"
              aria-label={`Remove ${item.name}`}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-base-300 pt-5">
        <span className="text-sm uppercase tracking-[0.2em] text-base-content/50">Total</span>
        <strong className="text-2xl font-black text-primary">${totalPrice}</strong>
      </div>

      <button type="button" onClick={onCheckout} className="btn btn-primary mt-6 w-full rounded-full">
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
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20" id="products">
      <div className="rounded-[2rem] border border-base-300 bg-base-100/90 p-6 shadow-sm md:p-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline rounded-full px-4 py-3 uppercase tracking-[0.2em]">
            Curated Collection
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Premium Digital Tools</h2>
          <p className="mt-4 text-base leading-8 text-base-content/70">
            Browse ready-to-use resources that help creators, freelancers, and
            business teams move quickly.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="join rounded-full border border-base-300 bg-base-100 p-1 shadow-sm">
            <button
              type="button"
              className={`btn join-item rounded-full ${activeTab === 'products' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => onSetActiveTab('products')}
            >
              <FiGrid />
              Products
            </button>
            <button
              type="button"
              className={`btn join-item rounded-full ${activeTab === 'cart' ? 'btn-primary' : 'btn-ghost'}`}
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
    </section>
  )
}

export default MainSection
