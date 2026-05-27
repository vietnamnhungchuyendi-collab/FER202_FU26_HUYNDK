import React, { useEffect } from 'react';

function MyModal({ show, onClose, title, children, footer }) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{
          zIndex: 1040,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          transition: 'all 0.3s ease-in-out'
        }}
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{
          zIndex: 1050,
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
        onClick={onClose} // Clicking on the outer modal container will close it
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          style={{
            transform: 'scale(1)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px' }}>
            {/* Modal Header */}
            <div className="modal-header border-bottom-0 pb-0 pt-4 px-4 d-flex justify-content-between align-items-center">
              <h4 className="modal-title fw-bold text-dark" id="modalLabel">
                {title}
              </h4>
              <button
                type="button"
                className="btn-close bg-light p-2.5 rounded-circle shadow-sm"
                onClick={onClose}
                aria-label="Close"
                style={{
                  transition: 'transform 0.2s ease',
                  border: 'none',
                  outline: 'none'
                }}
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              {children}
            </div>

            {/* Modal Footer */}
            {footer && (
              <div className="modal-footer border-top-0 pt-0 pb-4 px-4">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyModal;
