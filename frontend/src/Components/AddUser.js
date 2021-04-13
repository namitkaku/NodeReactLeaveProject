import {React,Component} from 'react';
import axios from 'axios';

class AddUser extends Component {

    state = {
        email:"",
        password:"",
        email_error:"",
        password_error:""
    }
    handleInput = (event) =>{
        this.setState({
          [event.target.name] : event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.email == "" && this.state.password == "")
        {
          this.setState({
              email_error: "Please enter Email",
              password_error : "Please enter password"
          })
          return false;
        }
        else if(this.state.email == "")
        {
            this.setState({
                email_error: "Please enter email",
                password_error: ""
            })
            return false;
        }
        else if(this.state.password == "")
        {
            this.setState({
              password_error: "Please enter password",
              email_error:""
            })
            return false;
        }
        else
        {
            this.setState({
                email_error:"",
                password_error:""
            });

            axios.post('http://localhost:3002/api/add-user',this.state).then(response =>{
                console.log(response);
            })
            .catch(err =>{
                console.log('Error from ShowBookList');
              })
        }
    }
    render() {
        return (
            <div className="loginBox">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-7">
                            <h4>Add User</h4>
                            <form>
                                <div className="form-group">
                                    <label>Enter Email:</label>
                                    <input type="email" value={this.state.email} onChange={this.handleInput} name="email" className="form-control" />
                                    <span className="error">{this.state.email_error}</span>
                                </div>
                                <div className="form-group">
                                    <label>Enter Password:</label>
                                    <input type="text" value={this.state.password} onChange={this.handleInput} name="password" className="form-control" />
                                    <span className="error">{this.state.password_error}</span>
                                </div>
                                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Add User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AddUser;