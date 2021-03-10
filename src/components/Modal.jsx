import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0, .5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 500,
    height: 300,
    padding: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Modal = ({ children, onClose }) => {
  const classes = useStyles();

  const handleOnClose = () => {
    onClose();
  };

  return (
    <div className={classes.backdrop} onClick={handleOnClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
