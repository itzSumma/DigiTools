import React from 'react';

const MainSection = ({activeTab,
  cartItems,
  products,
  totalPrice,
  addedState,
  onSetActiveTab,
  onAddToCart,
  onRemoveItem,
  onCheckout,}) => {
    return (
         <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20" id="products">
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
    </section>
    );
};

export default MainSection;