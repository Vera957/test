import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import '../styles/style.css';
import { Component } from "react";
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    search: '',
  }

  newSearch = (val) => {
    this.setState({ search: val });
  }

  render() {
    return (
    <div className="App" id='up'>
        <Searchbar onSubmit={this.newSearch} />
        {this.state.search !== '' && <ImageGallery search={this.state.search} />}
    </div>
  );}
};

//no props
