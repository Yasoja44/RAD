import React, {Component} from 'react';
import axios from "axios";

class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstname:'',
            lastname:''
        }

    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.setState({
                user: null
            });
            return;
        }
        this.setState({
            token: token
        })
        axios({
            method: 'get',
            url: '/users/',
            headers: {
                Authorization: token
            },
            data: {}
        }).then(res => {
            this.setState({
                firstname: res.data.firstName,
                lastname: res.data.lastName,
                id:res.data._id,
                isLoggedIn:true
            })
        }).catch(err => {
            console.log(err.message);
        });
    }
    render() {
        return (
            <div>
                <br/>  <br/>  <br/>  <br/>
                <h1 className="page_role" style={{textTransform:"uppercase",textAlign:"center",color:"red", letterSpacing:"6px"}}>WELCOME DOCTOR</h1>
                <h1 style={{textTransform:"uppercase",textAlign:"center",fontStyle:"italic",fontWeight:"bold"}}>{this.state.firstname+ " " +this.state.lastname}</h1>
                <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
                <br/> <br/>
            </div>
        );
    }
}


export default User;