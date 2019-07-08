import React, { Component } from 'react';
import MainContainer from './MainContainer';
// import axios from 'axios';
import moment from 'moment';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        fetch("https://aqueous-fortress-71879.herokuapp.com/employees")
            .then(res => res.json())
            .then(returnedData => {
                this.setState({
                    employees: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sideBar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name & Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, i) => {
                            return (
                                <tr key={i} >
                                    <td>{employee.FirstName + ' ' + employee.LastName
                                        + ' - ' + employee.Position.PositionName}</td>
                                    <td>{employee.AddressStreet + ', ' + employee.AddressCity
                                        + ' ' + employee.AddressState + ', ' + employee.AddressZip}
                                    </td>
                                    <td>{employee.PhoneNum}</td>
                                    <td>{moment(employee.HireDate).format("LL")}</td>
                                    <td>$ {employee.SalaryBonus}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Employees;