import React from "react";

function Table({data}){
    return(
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map(element => (
                    <tr>
                        <td><img src={element.picture.large} alt ="img"></img></td>
                        <td>{element.name.first} {element.name.last}</td>
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 
export default Table;