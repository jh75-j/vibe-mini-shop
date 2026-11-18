import '../styles/HeroBanner.css'

// '상품 보러 가기' 버튼이 이동할 위치 이름.
// 다음에 만들 상품 목록 영역에 id="product-list" 를 붙이면 그곳으로 이동한다.
const PRODUCT_LIST_ID = 'product-list'

function HeroBanner() {
  // HashRouter 를 쓰므로 href="#..." 대신 스크립트로 부드럽게 이동한다.
  const handleClick = () => {
    const target = document.getElementById(PRODUCT_LIST_ID)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <h2 className="hero-title">이번 주 새로 들어 온 상품</h2>
        <p className="hero-desc">
          작은 가게들이 정성껏 준비한 새 상품을 가장 먼저 만나 보세요.
        </p>
        <button type="button" className="hero-btn" onClick={handleClick}>
          상품 보러 가기
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
