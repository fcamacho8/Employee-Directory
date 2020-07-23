import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import Wrapper from "../Wrapper/index"
import API from "../../utils/API"

class Search extends Component {
    state = {
        search: "",
        employees: [{}],
        filteredEmployees: [{}]
    }
    

    handleInputChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.employees.filter(item => {
            // Merge data together, then see if user input is anywhere inside
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        },[]);
   
        this.setState({
            search: event.target.value,
            
            filteredEmployees: filteredList 
        })
    };

    componentDidMount() {
        API.getEmployees().then(results => {
            this.setState({
            
                filteredEmployees: results.data.results,
                employees: results.data.results,
            });
        });
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        employees={this.state.filteredEmployees}
                    />
                </div>

            </Wrapper>
        )

    }

}

export default Search;