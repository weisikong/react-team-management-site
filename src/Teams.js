import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
    }
    componentDidMount() {
        axios.get('https://aqueous-fortress-71879.herokuapp.com/teams')
            .then(res => {
                this.setState({
                    teams: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sideBar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, i) => {
                            return (
                                <tr key={i} >
                                    <td>{team.TeamName}</td>
                                    <td>
                                        <ul>{team.Projects.map((project, j) => {
                                            return (
                                                <li key={j} >{project.ProjectName}</li>
                                            )
                                        })}
                                        </ul>
                                    </td>
                                    <td>{team.Employees.length} Employees</td>
                                    <td>{team.TeamLead.FirstName + ' ' + team.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Teams;