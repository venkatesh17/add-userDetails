import React from "react";
import * as action from "../actions/create.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "India",
      username: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  selectChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onclick = e => {
    e.preventDefault();
    var regex = /^[a-zA-Z0-9]+$/;
    var nameTest = regex.test(this.state.username)
    if(nameTest){
      this.props.values.createUsers({
          ...this.state    
        }
      );
      this.setState({
        username: "",
        value: "India"
      });
    }else{
      alert('Name should access only AlphaNumeric')
    }
  };

  render() {
    return (
      <div className="create">
        <h2>Please Provide the details</h2>
        <p>Please enter the Name</p>
        <input
          type="text"
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
          placeholder="name"
        />
        <br />
        <p>Please select the Nation</p>
        <select onChange={this.selectChange} value={this.state.value}>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="America">America</option>
          <option value="Canada">Canada</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
        </select>
        <br/>
        <br />
        <button onClick={this.onclick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  createReducer: state.createReducer
});

const mapDispathToProps = dispatch => ({
  values: bindActionCreators(action, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Create);
