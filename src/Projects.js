import React, { Component } from 'react';
import MainContainer from './MainContainer';
// import axios from 'axios';
import moment from 'moment';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("https://aqueous-fortress-71879.herokuapp.com/projects")
            .then(res => res.json())
            .then(returnedData => {
                this.setState({
                    projects: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sideBar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project, i) => {
                            return (
                                <tr key={i} >
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{moment(project.ProjectStartDate).format("LL")}</td>
                                    <td>{moment(project.ProjectEndDate).isValid()?moment(project.ProjectEndDate).format("LL"):'N/A'}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Projects;