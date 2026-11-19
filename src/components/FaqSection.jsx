import '../styles/FaqSection.css'

// 자주 묻는 질문 가상 데이터. 질문을 바꾸거나 늘리려면 이 목록만 고치면 된다.
// 연락처와 이메일은 가상 값이며, Footer 와 같은 값을 쓴다.
const faqs = [
  {
    id: 1,
    question: '배송은 얼마나 걸리나요?',
    answer: '주문 확인 후 2~3일 안에 보내 드립니다. 수제 상품은 제작 때문에 하루 이틀 더 걸릴 수 있어요.',
  },
  {
    id: 2,
    question: '교환·환불이 되나요?',
    answer: '상품을 받은 날부터 7일 안에 연락해 주시면 확인 후 교환이나 환불을 도와 드립니다.',
  },
  {
    id: 3,
    question: '문의는 어디로 하나요?',
    answer: '연락처 010-0000-0000 또는 이메일 hello@example.com 으로 편하게 문의해 주세요.',
  },
]

// 질문을 누르면 답이 펼쳐지는 목록. 브라우저 기본 기능(details)을 써서 스크립트가 필요 없다.
function FaqSection() {
  return (
    <section className="faq">
      <div className="faq-inner">
        <h2 className="faq-title">자주 묻는 질문</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.id} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
