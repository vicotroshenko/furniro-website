import classNames from 'classnames';
import { ReactNode, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface IModal {
  visible?: boolean;
  children: ReactNode;
  toggle: () => void;
}

const Modal: React.FC<IModal> = memo(
  ({ visible = false, children, toggle }) => {
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Escape') {
          toggle();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [toggle]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget === event.target) {
        toggle();
      }
    };

    return createPortal(
      <div
        className={classNames('backdrop', {
          show: visible,
          hide: !visible,
        })}
        onClick={handleBackdropClick}
      >
        <div className="modal-container">{children}</div>
      </div>,
      modalRoot
    );
  }
);

export default Modal;
