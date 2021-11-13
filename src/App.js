import "./App.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
import Loader from "./Components/Loader/Loader";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";

export class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    console.log(imageName);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
