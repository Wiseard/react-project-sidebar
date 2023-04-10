import { AiFillCloseSquare } from 'react-icons/ai'
import { useGlobalContext } from './context'
import { links, social } from './data'
import logo from './logo.svg'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
      <header className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          onClick={closeSidebar}
          type="button"
          className="btn-close-sidebar"
        >
          <AiFillCloseSquare className="close-menu-icon" />
        </button>
      </header>
      <nav className="links-container">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <footer className="footer-container">
        <ul className="footer-links">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </footer>
    </aside>
  )
}
export default Sidebar
