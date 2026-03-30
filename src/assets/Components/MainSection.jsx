import {
  FiCheck,
  FiShoppingCart,
} from 'react-icons/fi'

const tagStyles = {
  'best-seller': 'bg-[#fff0cc] text-[#d48806]',
  popular: 'bg-[#efe7ff] text-[#8e61ff]',
  new: 'bg-[#e7faec] text-[#2ab36b]',
}

const formatPeriod = (period) => {
  if (period === 'one-time') return '/One-Time'
  if (period === 'yearly') return '/Year'
  return '/Mo'
}

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="rounded-[1.15rem] border border-[#ece8f7] bg-white p-5 shadow-[0_12px_30px_rgba(28,30,53,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f0ebfb] bg-white shadow-sm">
          <img
            src={product.iconSrc}
            alt={product.name}
            className="h-7 w-7 object-contain"
          />
        </div>
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tagStyles[product.tagType]}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="mt-5 text-[1.7rem] font-bold tracking-[-0.04em] text-[#1d2438] md:text-[1.75rem]">
        {product.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#8b95a9]">{product.description}</p>

      <div className="mt-4 flex items-end gap-1">
        <strong className="text-[2rem] font-extrabold tracking-[-0.05em] text-[#1d2438]">${product.price}</strong>
        <span className="pb-1 text-sm text-[#8b95a9]">{formatPeriod(product.period)}</span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-[#7c869d]">
            <FiCheck className="text-[#52d67f]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(122,56,245,0.18)]"
      >
        Buy Now
      </button>
    </article>
  )
}

const CartSection = ({ cartItems, totalPrice, onRemoveItem, onCheckout }) => {
  if (cartItems.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-[#ece8f7] bg-white px-6 py-14 text-center shadow-[0_12px_30px_rgba(28,30,53,0.04)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ebff] text-[#7a38f5]">
          <FiShoppingCart className="text-xl" />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#1d2438]">Your cart is empty</h3>
        <p className="mt-3 text-sm text-[#8b95a9]">Click Cart any time to review the products you select.</p>
      </div>
    )
  }

  return (
    <div className="rounded-[1.5rem] border border-[#ece8f7] bg-white p-6 shadow-[0_12px_30px_rgba(28,30,53,0.04)] md:p-8">
      <h3 className="text-[2rem] font-bold tracking-[-0.04em] text-[#1d2438]">Your Cart</h3>

      <div className="mt-6 space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-4 rounded-[1rem] bg-[#f8f8fd] px-4 py-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#efebf8] bg-white">
              <img src={item.iconSrc} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-semibold text-[#1d2438]">{item.name}</p>
              <p className="mt-1 text-sm text-[#8b95a9]">${item.price}</p>
            </div>
            <button
              type="button"
              onClick={() => onRemoveItem(item.id, index)}
              className="text-sm font-semibold text-[#ff4a7b]"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-[#8b95a9]">
        <span>Total:</span>
        <strong className="text-[2rem] font-extrabold tracking-[-0.04em] text-[#1d2438]">${totalPrice}</strong>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(122,56,245,0.18)]"
      >
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
  onSetActiveTab,
  onAddToCart,
  onRemoveItem,
  onCheckout,
}) => {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-20 md:py-24" id="products">
      <div className="mx-auto max-w-[42rem] text-center">
        <h2 className="text-[2.6rem] font-extrabold tracking-[-0.05em] text-[#1d2438] md:text-[4rem]">
          Premium Digital Tools
        </h2>
        <p className="mx-auto mt-4 max-w-[38rem] text-base leading-7 text-[#8b95a9]">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-[#ece8f7] bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => onSetActiveTab('products')}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-white shadow-[0_8px_24px_rgba(122,56,245,0.18)]'
                : 'text-[#5f6781]'
            }`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onSetActiveTab('cart')}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              activeTab === 'cart'
                ? 'bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-white shadow-[0_8px_24px_rgba(122,56,245,0.18)]'
                : 'text-[#5f6781]'
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

      <div className="mt-12">
        {activeTab === 'products' ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <CartSection
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
