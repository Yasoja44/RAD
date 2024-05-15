import React, { Component } from 'react';
import axios from 'axios';
import './show.css';
import {Col, Row} from "react-bootstrap";

class showRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records:[],
            recordId:'',
            record_name: '',
            record_description: '',
            record_field1: '',
            record_field2:'',
            record_field3:'',
            record_user:''
        }
    }

    componentDidMount() {

        const urlParts = window.location.pathname.split('/');
        const userId = urlParts[2]; 
        this.setState({
            record_user: userId
        })

        axios.get(`/records/${this.state.record_user}`)
            .then(response => {
                this.setState({ records: response.data.data });

            })

    }



    render() {
        return (
                <div>
                    <div className=" container" style={{width: '80%'}}>
                        <div className="card" style={{width: '100%'}}>
                            <br/>
                            <h1 style={{textTransform:"uppercase",textAlign:"center"}} >Records</h1>
                            <br/>
                           <Row>
                               {this.state.records.length > 0 && this.state.records.map((item, index) => (
                                   <Col className=" col-md-12">
                                       <div key={index} className="card">
                                           <div className="p-3 " >
                                               <div className="card-title">
                                                   <h2 className="workout_title">{item.record_name}</h2>
                                               </div>
                                               <div className="card-body">
                                                   <h3>{item.record_description}</h3>
                                                   <h5>{item.record_field1 }</h5>
                                                   <h5>{item.record_field2 }</h5>
                                                   <h5>{item.record_field3 }</h5>
                                               </div>
                                           </div>
                                           {/*<div className="card-footer">
                                               <button className="btn btn-warning" onClick={() => this.updateWorkout(item._id)}>Update</button>
                                               &nbsp;
                                               <button className="btn btn-danger" onClick={() => this.deleteWorkout(item._id)}>Delete</button>
                                           </div>*/}
    
                                           {/*</div>*/}
                                       </div>
                                   </Col>
                               ))}
                           </Row>
                        </div>
                    </div>
                </div>
            )
    }
}

export default showRecord;