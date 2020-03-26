import React from 'react';
import * as action from "../actions/read"
import * as deleteaction from '../actions/delete'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import './read.css'

class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            display: false,
            username:'',
            value: '',
            id:''
        }
    }

    componentWillMount = () => {

        let userdate = this.props.values.getUsers();
        this.setState({
            data: userdate
        })

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

    onDelete = (item) => {
        this.props.deleteuser.deleteuser(item);
    }

    onEdit = (item) => {
              
        document.getElementById('edit').style.display = 'block'
        this.setState({
            username: item.Name,
            value: item.Nationality,
            id: item._id
        })
    }

    onCancel = () => {
        document.getElementById('edit').style.display = 'none'
    }

    onUpdate = () =>{
        var regex = /^[a-zA-Z0-9]+$/;
        var nameTest = regex.test(this.state.username)
        if(nameTest){
            this.props.deleteuser.edituser(this.state);
            document.getElementById('edit').style.display = 'none'
        }else{
          alert('Name should access only AlphaNumeric')
        }
        
    }

    renderTableData = () => {
        return this.props.getUserValues.users.data ? this.props.getUserValues.users.data.map((item, index) => {
            const { _id, Name, Nationality } = item //destructuring
            return (
                <tr key={_id}>
                    <td>{Name}</td>
                    <td>{Nationality}</td>
                    <td>
                        <button onClick={() => this.onEdit(item)}>Edit</button>&nbsp;
                        <button onClick={() => this.onDelete(item)}>Delete</button>
                    </td>
                </tr>
            )
        }) : ""
    }

    render() {
        return (
            <div>
                <h1 id='title'>Displaying Users</h1>
                <table id='users'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th></th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>

                <div className="modal" id='edit'>
                    <div className="createpopup">
                        <h2>Please Edit the details</h2>
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
                        <br />
                        <br />
                        <button onClick={this.onUpdate}>Submit</button>
                        <button onClick={this.onCancel}>Cancel</button>
                    </div>
                   
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    getUserValues: state.getReducers,
    deleteuser: state.deleteReducers
})

const mapDispatchToProps = dispatch => ({
    values: bindActionCreators(action, dispatch),
    deleteuser: bindActionCreators(deleteaction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Read);