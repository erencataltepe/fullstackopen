import "../index.css";

function ConfirmMessage({ message }) {
  if (message === null) {
    return null;
  } else {
    return <div className="confirm-message">{message}</div>;
  }
}

export default ConfirmMessage;
