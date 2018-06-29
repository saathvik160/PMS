import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

class Add extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      alert: ''
    }
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    var title_letters = /^[0-9a-zA-Z ]+$/;
    var projid_letters = /^[0-9a-zA-Z]+$/;
    var spaces = /^[ ]+$/;

    if (!this.refs.title.value.match(spaces) && this.refs.title.value.match(title_letters) && this.refs.projid.value.match(projid_letters)) {
      const index = this.props.projects.findIndex(project => project.projid.toLowerCase() === this.refs.projid.value.toLowerCase());
      
      if (index === -1) {
        this.props.addProject(this.refs.title.value, this.refs.projid.value);
        this.refs.title.value = '';
        this.refs.projid.value = '';
        this.setState(state => ({
          showModal: true,
          alert: 'Project Added !'
        }));
      }
      
      else {
        this.refs.projid.value = '';
        this.setState(state => ({
          showModal: true,
          alert: 'Project with this ID already exists !'
        }));
      }
    }
    
    else {
      this.refs.title.value = '';
      this.refs.projid.value = '';
      this.setState(state => ({
        showModal: true,
        alert: 'Please enter valid inputs !'
      }));
    }
  }

  render() {
    return (
      <div>
        <h3 class="title">ADD A NEW PROJECT</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <center>
            <table id="formtable">
              <tr>
                <td>Enter Project Title</td>
                <td><input type="text" ref="title" /></td>
              </tr>
              <tr>
                <td>Enter Project ID</td>
                <td><input type="text" ref="projid" /></td>
              </tr>
            </table>
            <br />
            <input type="submit" value="Add" id="formsubmit" />
          </center>
        </form>
        <Modal open={this.state.showModal} onClose={this.handleCloseModal} little>
          <p class="alert">{this.state.alert}</p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (title, projid) => {
      dispatch({
        type: 'ADD_PROJECT',
        payload: {
          title,
          projid
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
