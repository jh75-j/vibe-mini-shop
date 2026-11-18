function ProductCard({ product }) {
  return (
    <article className="product-card">
      {/* 실제 사진 대신 회색 빈 상자 */}
      <div className="product-card-image" aria-hidden="true"></div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">
          {product.price.toLocaleString('ko-KR')}원
        </p>
      </div>
    </article>
  )
}

export default ProductCard
