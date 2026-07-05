// helps while working with z-index css
import { useState } from 'react';
import { createPortal } from 'react-dom';

// 1. The reusable Portal Modal
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <button onClick={onClose} style={{ marginBottom: '15px' }}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

// 2. The main component you will export and use in App.jsx
export default function MyModalComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="component" style={{ padding: '20px' }}>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Fancy Modal</h2>
        <p>This is rendering completely outside the parent container!</p>
      </Modal>
    </div>
  );
}

// --- Basic Styles just to make the modal visible ---
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '8px',
  minWidth: '300px',
  textAlign: 'center',
  color: 'black'
};