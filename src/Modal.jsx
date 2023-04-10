import { AiFillCloseSquare } from 'react-icons/ai'
import { useGlobalContext } from './context'

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext()
  return (
    <div className={isModalOpen ? 'modal-layout show-modal' : 'modal-layout'}>
      <div className="modal-container">
        <h2>modal content</h2>
        <button onClick={closeModal} className="btn-close-modal" type="button">
          <AiFillCloseSquare className="icon-close-modal" />
        </button>
      </div>
    </div>
  )
}
export default Modal
