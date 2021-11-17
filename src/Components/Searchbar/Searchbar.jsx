import React, { Component } from "react";
import { VscSearch } from "react-icons/vsc";
import s from "../Searchbar/Searchbar.module.css";

export class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleFormChange = (event) => {
    this.setState({
      imageName: event.currentTarget.value.toLowerCase(),
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();

    if (this.state.imageName.trim() === "") {
      alert("Enter images and photos");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handelSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>
              <VscSearch size="2em" />
            </span>
          </button>

          <input
            className={s.input}
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleFormChange}
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
