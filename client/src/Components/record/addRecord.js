import React, { Component} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
import swat from "sweetalert2";
import {Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import './record.css'

const initialState = {
    record_name: '',
    record_description: '',
    record_field1: '',
    record_field2:'',
    record_field3:'',
    record_user:'',
    touched: {
        record_name: false,
        record_description: false,
        record_field1: false,
        record_field2:false,
        record_field3: false
    }
}

const SubmissionAlert = () => {
    swat.fire({
        position: 'center',
        icon: 'success',
        title: 'Record Created Successfully!',
        showConfirmButton: false,
        timer: 3000
    });
}

const SubmissionFail = () => {
    swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Submission Error!'
    })
}

const SubmissionFail2 = (message) => {
    swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
    })
}

class addRecord extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {

        const urlParts = window.location.pathname.split('/');
        const userId = urlParts[2]; 
        this.setState({
            record_user: userId
        })

        //this.state.record_user = "6644c268f967d1131472b7b7";

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate =(record_name,record_description,record_field1,record_field2,record_field3)=> {
        const errors = {
            record_name: '',
            record_description: '',
            record_field1: '',
            record_field2:'',
            record_field3:'',

        };
        /*if (this.state.touched.workout_name && workout_name.length < 3)
            errors.workout_name = 'Name should be >= 3 characters';

        if (this.state.touched.workout_theme && workout_theme.length < 3)
            errors.workout_theme = 'Theme should be >= 3 characters';

        if (this.state.touched.workout_description && workout_description.length < 3)
            errors.workout_description = 'Description should be >= 3 characters';

        if (this.state.touched.workout_schedule && workout_schedule.length < 3)
            errors.workout_schedule = 'Schedule should be >= 3 characters';
        
        if (this.state.touched.workout_diet && workout_diet.length < 3)
            errors.workout_diet = 'Diet should be >= 3 characters';

        if (this.state.touched.workout_price && parseInt(workout_price) <= 0)
            errors.workout_price = 'Price shoule be a valid number';*/

        return errors;
    }

    onSubmit(e) {
        e.preventDefault();
        let record = {
            record_user:this.state.record_user,
            record_name:this.state.record_name,
            record_description:this.state.record_description,
            record_field1: this.state.record_field1,
            record_field2: this.state.record_field2,
            record_field3: this.state.record_field3
        };
        /*if (this.state.record_name.length < 3 || this.state.record_description.length < 3 ||
            this.state.workout_description.length < 3 || this.state.workout_schedule.length < 3  ||
            this.state.workout_diet.length < 3 || this.state.workout_price <= 0 ){
            this.validate(this.state.workout_name,this.state.workout_theme,this.state.workout_description,this.state.workout_schedule,
                this.state.workout_diet,this.state.workout_price)
            let message = "Workout Creation Failed"
            SubmissionFail2(message);
        } else {*/
            console.log('DATA TO SEND', record)
            axios.post('/records/',record)
                .then(response => {
                    SubmissionAlert();

                })
                .catch(error => {
                    console.log(error.message);
                    SubmissionFail();
                })
            //}
    }

    render() {
        const errors=this.validate(this.state.record_name,this.state.record_description,this.state.record_field1,this.state.record_field2
            ,this.state.record_field3);

        return (
            <div className="workout_wrapper" style={{ borderTop: "10px solid black"}}>
                <br/><br/>
                <Form onSubmit={this.onSubmit}>
                    <h1 className="workout_title">ADD RECORD</h1>
                    &nbsp;
                   <div className="row justify-content-md-center">
                       <FormGroup >
                           <Label for="record_name">Name</Label>
                           <div>
                           <Input
                               type="text"
                               name="record_name"
                               id="record_name"
                               size="100"
                               value={this.state.record_name}
                               onChange={this.onChange}
                               valid={errors.record_name === ''}
                                invalid={errors.record_name !== ''}
                                onBlur={this.handleBlur('record_name')}
                                />
                                <FormFeedback>{errors.record_name}</FormFeedback>
                            </div>
                       </FormGroup>
                   </div>
                   <div className="row justify-content-md-center">
                       <FormGroup >
                           <Label for="record_description">Description</Label>
                           <div>
                           <Input
                               type="text"
                               name="record_description"
                               id="record_description"
                               size="100"
                               value={this.state.record_description}
                               onChange={this.onChange}
                               valid={errors.record_description === ''}
                                invalid={errors.record_description !== ''}
                                onBlur={this.handleBlur('record_description')}
                                />
                                <FormFeedback>{errors.record_description}</FormFeedback>
                            </div>
                       </FormGroup>
                   </div>
                   <div className="row justify-content-md-center">
                       <FormGroup >
                           <Label for="record_field1">Field 1</Label>
                           <div>
                           <Input
                               type="text"
                               name="record_field1"
                               id="record_field1"
                               size="160"
                               value={this.state.record_field1}
                               onChange={this.onChange}
                               valid={errors.record_field1 === ''}
                                invalid={errors.record_field1 !== ''}
                                onBlur={this.handleBlur('record_field1')}
                                />
                                <FormFeedback>{errors.record_field1}</FormFeedback>
                            </div>
                       </FormGroup>
                   </div>
                   <div className="row justify-content-md-center">
                       <FormGroup >
                           <Label for="record_field2">Field 2</Label>
                           <div>
                           <Input
                               type="text"
                               name="record_field2"
                               id="record_field2"
                               size="160"
                               value={this.state.record_field2}
                               onChange={this.onChange}
                               valid={errors.record_field2 === ''}
                                invalid={errors.record_field2 !== ''}
                                onBlur={this.handleBlur('record_field2')}
                                />
                                <FormFeedback>{errors.record_field2}</FormFeedback>
                            </div>
                       </FormGroup>
                   </div>
                   <div className="row justify-content-md-center">
                       <FormGroup >
                           <Label for="record_field3">Field 3</Label>
                           <div>
                           <Input
                               type="text"
                               name="record_field3"
                               id="record_field3"
                               size="160"
                               value={this.state.record_field3}
                               onChange={this.onChange}
                               valid={errors.record_field3 === ''}
                                invalid={errors.record_field3 !== ''}
                                onBlur={this.handleBlur('record_field3')}
                                />
                                <FormFeedback>{errors.record_field3}</FormFeedback>
                            </div>
                       </FormGroup>
                   </div>
                    &nbsp;

                    <button className="workout_button btn btn-primary">SUBMIT</button>
                </Form>

            </div>
        )
    }
}

export default addRecord;