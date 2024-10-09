const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-[70%] p-6">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
