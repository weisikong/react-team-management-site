import React, { Component } from 'react';
import axios from 'axios';

class EmployeesPanel extends Component {
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
                console.log(returnedData);
                this.setState({
                    employees: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((employee, i) => {
                                    return (
                                        <tr key={i} >
                                            <td>{employee.FirstName + ' ' + employee.LastName}</td>
                                            <td>{employee.Position.PositionName}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <a href="/teams" className="btn btn-primary form-control">View All Team Data</a>
                </div>
            </div>
        )
    }
}

export default EmployeesPanel;