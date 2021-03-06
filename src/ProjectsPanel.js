import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

class ProjectsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
    componentDidMount() {
        axios.get('https://aqueous-fortress-71879.herokuapp.com/projects')
            .then(res => {
                this.setState({
                    projects: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Projects</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    {this.state.projects.map((project, i) => {
                                        var now = moment();
                                        var projectDate = moment(project.ProjectStartDate);
                                        var diff = now.diff(projectDate, 'days');
                                        return (
                                            <tr key={i} >
                                                <td>{project.ProjectName}</td>
                                                <td>Active {diff} Days</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsPanel;