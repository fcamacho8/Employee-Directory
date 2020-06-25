import React, {useState, useEffect} from "react";
import API from "../utils/API"
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron"
import Table from "../components/Table"
import Search from "../components/Search";

function Home() {
    const [employees, setEmployees] = useState([])
    

    useEffect(() => {
        loadEmployees();
    }, [])

    const loadEmployees = () => {
        API.getEmployees()
        .then(res => {
            setEmployees(res.data.results)
        })
    
    }

    return (
        <div>
            <Wrapper>
                <Jumbotron/>
                <Search/>
                <Table data = {employees}>
                </Table>
            </Wrapper>
        </div>
    );
}

export default Home;