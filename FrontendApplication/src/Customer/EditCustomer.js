import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Customer/AddCustomer.css'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  

    this.onChangeFirstName = this.onChangeFirstName.bind(this);  
    this.onChangeLastName = this.onChangeLastName.bind(this);  
    this.onChangeUserName = this.onChangeUserName.bind(this);  
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);  
    this.onChangeAge = this.onChangeAge.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);  

         this.state = {  
            FirstName: '',  
            LastName: '',  
            UserName: '',  
            EmailAddress: '',
            DateOfBirth: '',
            Age: ''
        }  
    }  

  componentDidMount() {  
      axios.get('http://localhost:7077/api/customers/{customerId}'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                FirstName: response.data.FirstName,   
                LastName: response.data.LastName,  
                UserName: response.data.UserName,  
                EmailAddress: response.data.EmailAddress,
                DateOfBirth: response.data.DateOfBirth,   
                Age: response.data.Age,  
                DateCreated: response.data.DateCreated,  
                DateEdited: response.data.DateEdited,
                IsDeleted: response.data.IsDeleted });  

          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  

    onChangeFirstName(e) {  
        this.setState({  
            Name: e.target.value  
        });  
    }  
    onChangeLastName(e) {  
        this.setState({  
            RollNo: e.target.value  
        });    
    }  
    onChangeUserName(e) {  
        this.setState({  
            Class: e.target.value  
    });  
    }  
    onChangeEmailAddress(e) {  
        this.setState({  
            Address: e.target.value  
        });  
    }
    onChangeDateOfBirth(e) {  
        this.setState({  
            Address: e.target.value  
        });  
    }  
    onChangeAge(e) {  
        this.setState({  
            Name: e.target.value  
        });  
    }  


    onSubmit(e) {  
        debugger;  
        e.preventDefault();  
        const obj = {  
            Id:this.props.match.params.id,  
            FirstName: this.state.FirstName,  
            LastName: this.state.LastName,  
            UserName: this.state.UserName,  
            EmailAddress: this.state.EmailAddress,
            DateOfBirth: this.state.DateOfBirth,  
            Age: this.state.Age,
            DateCreated: this.state.DateCreated,
            DateEdited: this.state.DateEdited,  
            IsDeleted: this.state.IsDeleted,
        };  
        axios.post('http://localhost:7077/api/customer', obj)  
            .then(res => console.log(res.data));  
            debugger;  
            this.props.history.push('/CustomerList')  
    }  
    render() {  
        return (  
            <Container className="App">  

             <h4 className="PageHeading">Update Customer Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="FirstName" sm={2}>Firstname</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChangeFirstName}  
                                placeholder="Enter Firstname" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="LastName" sm={2}>Lastname</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="LastName" value={this.state.LastName} onChange={this.onChangeLastName} 
                                placeholder="Enter Lastname" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="UserName" sm={2}>Username</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="UserName" value={this.state.UserName} onChange={this.onChangeUserName} 
                                placeholder="Enter Username" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="EmailAddress" sm={2}>Email Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="EmailAddress"value={this.state.EmailAddress} onChange={this.onChangeEmailAddress} 
                                placeholder="Enter EmailAddress" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="Age" sm={2}>Age</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Age" value={this.state.Age} onChange={this.onChangeAge} 
                                placeholder="Enter Age" />  
                            </Col>  
                        </FormGroup>    
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  

}  

export default Edit; 