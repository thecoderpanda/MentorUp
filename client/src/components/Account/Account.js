import React, { Component } from "react";
import {withRouter} from 'react-router';
import "./Account.css";
import axios from 'axios';
import { withUser } from '../../services/withUser';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountID : this.props.match.params.userID
        }
    }
    componentWillMount() {
        axios.get("/api/user/" + this.state.accountID).then((res) =>{
            console.log(res.data);
            this.setState({userInfo: res})
        })
    }
    render() {
        return (
            <div>
            <h1>
                Account Page
            </h1>
            <p>User: { this.props.match.params.userID } </p>
            </div>
        )
    }
}

export default withUser(withRouter(Account));
