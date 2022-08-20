//has prop - onSubmit(func)
import React from "react";
import { Component } from "react";
import "styles/style.css";
import { FcBinoculars } from "react-icons/fc";
import propTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        search: ''
    }

    takeInputVal = (e) => {
        this.setState({ search: e.target.value });
    }

    addSearch = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' });
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.addSearch} >
                    <button type="submit" className="SearchForm-button">
                        <FcBinoculars className="FcBinoculars" />
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.takeInputVal}
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: propTypes.func,
}