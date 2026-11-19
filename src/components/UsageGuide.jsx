import '../styles/UsageGuide.css'

const steps = [
  { id: 1, title: '상품 고르기', text: '마음에 드는 상품을 둘러보고 골라 보세요.' },
  { id: 2, title: '주문하기', text: '수량과 배송 정보를 입력하고 주문해 주세요.' },
  { id: 3, title: '배송받기', text: '재고를 확인해 정성껏 포장해 보내 드려요.' },
]

function UsageGuide() {
  return (
    <section className="usage-guide">
      <div className="usage-guide-inner">
        <h2 className="usage-guide-title">이용 안내</h2>
        <ol className="usage-steps">
          {steps.map((step) => (
            <li key={step.id} className="usage-step">
              <span className="usage-step-number">{step.id}</span>
              <h3 className="usage-step-title">{step.title}</h3>
              <p className="usage-step-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default UsageGuide
