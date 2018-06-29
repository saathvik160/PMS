import React, { Component } from 'react';
import { connect } from 'react-redux'

class View extends Component {
  render() {

    var projRow;
    if (this.props.projects) {
      projRow = this.props.projects.map(project =>
        <tr>
          <td>{project.title}</td>
          <td>{project.projid}</td>
        </tr>
      )
    }

    return (
      <div>
        <h3 class="title">PROJECTS CURRENTLY UNDER DEVELOPMENT</h3>
        <center>
        <table id="projtable">
          <tr>
            <th>Project Title</th>
            <th>Project ID</th>
          </tr>
          {projRow}
        </table>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(View)
