import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-3 col-md-2  sidebar">
                    <ul className="nav nav-sidebar">
                        <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
                    </ul>
                    <ul className="nav nav-sidebar">
                        <li className={(this.props.highlight === "Projects"?'active':'')}><a href="/projects">Projects</a></li>
                        <li className={(this.props.highlight === "Teams"?'active':'')}><a href="/teams">Teams</a></li>
                        <li className={(this.props.highlight === "Employees"?'active':'')}><a href="/employees">Employees</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;