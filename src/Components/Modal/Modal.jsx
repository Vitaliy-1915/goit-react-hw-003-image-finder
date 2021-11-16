import { React, Component } from "react";
import { createPortal } from "react-dom";
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.hendelKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hendelKeydown);
  }

  hendelKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={this.props.image.src} alt={this.props.image.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
