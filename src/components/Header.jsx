import { Link } from 'react-router-dom'
import '../styles/Header.css'

// 메뉴 화면은 아직 없어서, 눌러도 이동하지 않는 버튼으로 둔다.
const menus = ['상품 목록', '주문하기', '관리자']

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          미니 쇼핑몰
        </Link>
        <nav className="header-nav">
          {menus.map((menu) => (
            <button key={menu} type="button" className="header-menu">
              {menu}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
