import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductList from '../components/ProductList.jsx'
import UsageGuide from '../components/UsageGuide.jsx'
import FaqSection from '../components/FaqSection.jsx'

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductList />
      <UsageGuide />
      <FaqSection />
    </>
  )
}

export default Home
