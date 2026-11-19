import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

// id="product-list" : Hero banner 의 '상품 보러 가기' 버튼이 이동하는 위치
function ProductList() {
  return (
    <section id="product-list" className="product-list">
      <div className="product-list-inner">
        <h2 className="product-list-title">상품 목록</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
