import React from "react";

function SearchForm(props) {
    return (
        <form className="search">
            <div className=" form-group">
                <label htmlFor="language">Search for an Employee: </label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name = "employee"
                    type="text"
                    className="form-control"
                    placeholder="type a name"
                    id="emp"
                />

            </div>
        </form>
    )
}

export default SearchForm;