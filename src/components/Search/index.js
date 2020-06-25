import React, { Component } from "react";
import SearchForm from "../SearchForm/index";

class Search extends Component {
    state = {
        search: "",
        results: []
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        })
    };

    render() {
        return (
        <div>
            <SearchForm
                handleInputChange={this.handleInputChange}
            />
        </div>
        )

    }

}

export default Search;