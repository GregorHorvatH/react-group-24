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

const Modal = ({ text, onOk, onCancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h2>Do you really want to delete:</h2>
        <p>{text}</p>

        <div className="bnuttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onOk}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
