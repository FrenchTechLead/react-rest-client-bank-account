import React from 'react';

export default class Virement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            amount: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        if(event.target.name === "email")this.setState({email: event.target.value});
        if(event.target.name === "amount")this.setState({amount: event.target.value});


    }

    handleSubmit(event) {
        this.login(event);
        event.preventDefault();
    }

    render() {
        return (
                <div className="col-sm-offset-4 col-sm-4 grey" >
                    <form onSubmit={this.handleSubmit}>
                        <div className="text-center">
                            <i style={{"fontSize":"150px"}} className="fa fa-exchange" aria-hidden="true"></i>
                        </div>
                        <label>Email:</label>
                        <input type="email" placeholder="Email destinataire" name="email" value={this.state.email} onChange={this.handleChange} required="required" className="form-control" autoComplete="new-password"/><br/>
                        <label>Password:</label>
                        <input type="number" placeholder="somme" name="amount" value={this.state.amount} onChange={this.handleChange} required="required" className="form-control" autoComplete="new-password"/><br/><br/>
                        <button className="btn-block btn-default" type="submit"  style={{"fontSize":"30px"}}>Envoyer de l'argent</button>
                    </form>
                </div>
        );
    }
}
