import '../styles/Footer.css'

// 연락처와 이메일은 가상 값이다.
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">미니 쇼핑몰</p>
        <p className="footer-info">연락처 010-0000-0000</p>
        <p className="footer-info">이메일 hello@example.com</p>
        <p className="footer-copy">© 2026 미니 쇼핑몰. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
