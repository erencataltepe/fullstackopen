import "../index.css";

function ConfirmMessage({ message }) {
  if (message === null) {
    return null;
  } else if (!message.isError) {
    return <div className="confirm-message">{message.text}</div>;
  } else {
    return <div className="error-message">{message.text}</div>;
  }
}

export default ConfirmMessage;
