import React, { Component } from 'react';
import axios from 'axios';

class TeamsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
    }

    componentDidMount() {
        fetch("https://aqueous-fortress-71879.herokuapp.com/teams-raw")
            .then(res => res.json())
            .then(returnedData => {
                this.setState({
                    teams: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, i) => {
                                    return (
                                        <tr key={i} >
                                            <td>{team.TeamName}</td>
                                            <td>{team.Employees.length} Employees</td>
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

export default TeamsPanel;