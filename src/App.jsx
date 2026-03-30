import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Banner from './assets/Components/Banner'
import States from './assets/Components/States'
import MainSection from './assets/Components/MainSection'
import Steps from './assets/Components/Steps'
import Pricing from './assets/Components/Pricing'
import ReadyToStart from './assets/Components/ReadyToStart'
import Footer from './assets/Components/Footer'
import bannerImage from './assets/banner.png'
import playImage from './assets/Play.png'
import userImage from './assets/user.png'
import packageImage from './assets/package.png'
import rocketImage from './assets/rocket.png'
import writingImage from './assets/products/writing_2327400 1.png'
import designToolImage from './assets/products/design-tool.png'
import portfolioImage from './assets/products/portfolio.png'
import operationImage from './assets/products/operation.png'
import socialMediaImage from './assets/products/social-media.png'
import shoppingCartImage from './assets/products/shopping-cart.png'

const assetMap = {
  bannerImage,
  playImage,
  userImage,
  packageImage,
  rocketImage,
  writingImage,
  designToolImage,
  portfolioImage,
  operationImage,
  socialMediaImage,
  shoppingCartImage,
}

function App() {
  const [catalog, setCatalog] = useState({
    products: [],
    steps: [],
    pricingPlans: [],
  })
  const [activeTab, setActiveTab] = useState('products')
  const [cartItems, setCartItems] = useState([])
  const [addedState, setAddedState] = useState({})

  useEffect(() => {
    let cancelled = false

    const loadData = async () => {
      const response = await fetch('/siteData.json')
      const data = await response.json()

      if (cancelled) return

      setCatalog({
        products: data.products.map((product) => ({
          ...product,
          icon: assetMap[product.iconKey],
        })),
        steps: data.steps.map((step) => ({
          ...step,
          icon: assetMap[step.iconKey],
        })),
        pricingPlans: data.pricingPlans,
      })
    }

    loadData()

    return () => {
      cancelled = true
    }
  }, [])

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  )

  const handleAddToCart = (product) => {
    setCartItems((current) => [...current, product])
    setAddedState((current) => ({ ...current, [product.id]: true }))

    window.setTimeout(() => {
      setAddedState((current) => ({ ...current, [product.id]: false }))
    }, 1200)
  }

  const handleRemoveItem = (productId) => {
    setCartItems((current) => {
      const index = current.findIndex((item) => item.id === productId)

      if (index === -1) return current

      return current.filter((_, itemIndex) => itemIndex !== index)
    })
  }

  const handleCheckout = () => {
    setCartItems([])
    setActiveTab('products')
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setActiveTab('cart')}
      />
      <main>
        <Banner heroAssets={{ bannerImage, playImage }} />
        <States />
        <MainSection
          activeTab={activeTab}
          cartItems={cartItems}
          products={catalog.products}
          totalPrice={totalPrice}
          addedState={addedState}
          onSetActiveTab={setActiveTab}
          onAddToCart={handleAddToCart}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
        <Steps steps={catalog.steps} />
        <Pricing pricingPlans={catalog.pricingPlans} />
        <ReadyToStart />
      </main>
      <Footer />
    </div>
  )
}

export default App
