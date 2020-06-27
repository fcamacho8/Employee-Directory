import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import Wrapper from "../Wrapper/index"

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
            <Wrapper>
                <div>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                    />
                </div>

            </Wrapper>
        )

    }

}

export default Search;