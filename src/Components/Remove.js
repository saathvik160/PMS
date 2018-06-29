import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

class Remove extends Component {

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
    
    if (this.refs.projid.value === '') {
      this.setState(state => ({
        showModal: true,
        alert: 'Please enter an ID !'
      }));
    }
    
    else {
      const index = this.props.projects.findIndex(project => project.projid === this.refs.projid.value);
      
      if (index === -1) {
        this.refs.projid.value = '';
        this.setState(state => ({
          showModal: true,
          alert: 'Please enter a valid ID !'
        }));
      }
      
      else {
        this.props.removeProject(this.refs.projid.value);
        this.refs.projid.value = '';
        this.setState(state => ({
          showModal: true,
          alert: 'Project Removed !'
        }));
      }
    }

  }

  render() {
    return (
      <div>
        <h3 class="title">REMOVE AN EXISTING PROJECT</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <center>
            <table id="formtable">
              <tr>
                <td>Enter Project ID</td>
                <td><input type="text" ref="projid" /></td>
              </tr>
            </table>
            <br />
            <input type="submit" value="Remove" id="formsubmit" />
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
    removeProject: (projid) => {
      dispatch({
        type: 'REMOVE_PROJECT',
        payload: {
          projid
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Remove)
