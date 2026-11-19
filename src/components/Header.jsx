import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

// 메뉴 화면은 아직 없어서, 눌러도 이동하지 않는 버튼으로 둔다.
const menus = ['상품 목록', '주문하기', '관리자']

function Header() {
  // 좁은 화면에서 메뉴가 펼쳐져 있는지 여부 (넓은 화면에서는 쓰이지 않는다)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          미니 쇼핑몰
        </Link>
        <button
          type="button"
          className="header-toggle"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          aria-controls="header-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="header-toggle-bar"></span>
          <span className="header-toggle-bar"></span>
          <span className="header-toggle-bar"></span>
        </button>
        <nav
          id="header-nav"
          className={isOpen ? 'header-nav is-open' : 'header-nav'}
        >
          {menus.map((menu) => (
            <button
              key={menu}
              type="button"
              className="header-menu"
              onClick={() => setIsOpen(false)}
            >
              {menu}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
