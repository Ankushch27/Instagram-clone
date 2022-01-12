import { Dialog } from '@headlessui/react'
import { FC } from 'react'
import { useUI } from './uiContext'

const Modal: FC = ({ children }) => {
  const {
    state: { displayModal },
    dispatch,
  } = useUI()

  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      open={displayModal}
      onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
      <div className="min-h-screen px-16 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="inline-block w-full my-8 overflow-hidden text-left align-middle 
          transition-all transform bg-white shadow-xl rounded-xl">
          {children}
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
