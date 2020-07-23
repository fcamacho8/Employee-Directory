import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="center">
            <form className="search">
                <div className="form-inline">
                    <label htmlFor="employee">Search for an Employee: </label>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="employee"
                        type="text"
                        className="form-control tab"
                        placeholder="Type a name ..."
                        id="emp"
                    />
                    <button type="submit" onClick={props.handleInputChange} className="btn btn-info tab">
                        Search
                </button>

                </div>
            </form>
        </div>
    )
}

export default SearchForm;