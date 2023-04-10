import { useGlobalContext } from './context'
import { GiHamburgerMenu } from 'react-icons/gi'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} className="btn-open-sidebar" type="button">
        <GiHamburgerMenu className="menu-icon" />
      </button>
      <button onClick={openModal} className="btn-open-modal" type="button">
        show modal
      </button>
    </main>
  )
}
export default Home
