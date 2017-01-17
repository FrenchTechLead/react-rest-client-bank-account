import React from 'react';
import axios from 'axios';
import myfunction from '../utils/myFunctions'
import $ from 'jquery'
export default class MyInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {email: this.props.email,pass:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    update(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/v1/myinfo',
            headers: {'Authorization': localStorage.getItem("jwt")},
            data: {
                email: this.state.email,
                password:this.state.pass
            },

        }).then(function (response) {
            localStorage.setItem("jwt",response.headers.authorization);
            myfunction.sweetSuccess("Success !", "");
        })
            .catch(function (error) {
                console.log(error);
                myfunction.sweetError('Oops...',error);
            });
    }

    handleChange(event) {
        if(event.target.name === "email")this.setState({email: event.target.value});
        if(event.target.name === "pass")this.setState({pass: event.target.value});
    }


    handleSubmit(event) {
        this.update(event);
        event.preventDefault();
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="col-sm-offset-4 col-sm-4">
                    <br/>
                    <label>Name:</label>
                    <input className="form-control" disabled value={this.props.name} style={{"maxWidth":"350px"}}/><br/>
                    <label>Email:</label>
                    <input type="email" name="email" title="Info"  value={this.state.email} onChange={this.handleChange} className="form-control"  style={{"maxWidth":"350px"}} required="required" autoComplete="new-password"/><br/>
                    <label>Password:</label>
                    <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange} className="form-control" style={{"maxWidth":"350px"}} required="required" pattern=".{4,}" title="4 characters minimum" autoComplete="new-password"/><br/>
                </div>
            </form>);
    }
}