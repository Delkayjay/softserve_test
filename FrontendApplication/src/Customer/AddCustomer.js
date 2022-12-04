import React from 'react';  
import axios from 'axios';  
import '../Customer/AddCustomer.css'  
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addcustomer extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
FirstName:'',  
LastName:'',  
UserName:'',  
EmailAddress:'',
DateOfBirth:'',
Age:0,
DateCreated:'',
DateEdited:'',
IsDeleted:''  
}  
}   
Addcustomer=()=>{  
  axios.post('http://localhost:7077/api/customer', {
  FirstName:this.state.FirstName,
  LastName:this.state.LastName,  
  UserName:this.state.UserName, 
  EmailAddress:this.state.EmailAddress, 
  DateOfBirth:this.state.DateOfBirth, 
  Age:this.state.Age, 
  DateCreated:this.state.DateCreated, 
  DateEdited:this.state.DateEdited,
  IsDeleted:this.state.IsDeleted
})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/CustomerList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/CustomerList')  
}  
})  
}  

handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  

render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Customer Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="Firstname" sm={2}>Firstname</Label>  
          <Col sm={10}>  
            <Input type="text" name="Firstname" onChange={this.handleChange} value={this.state.FirstName} 
            placeholder="Enter FirstName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Lastname" sm={2}>Lastname</Label>  
          <Col sm={10}>  
            <Input type="text" name="Lastname" onChange={this.handleChange} value={this.state.LastName} 
            placeholder="Enter LastName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Username" sm={2}>Username</Label>  
          <Col sm={10}>  
            <Input type="text" name="Username" onChange={this.handleChange} value={this.state.UserName} 
            placeholder="Enter UserName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="EmailAddress" sm={2}>Email Address</Label>  
          <Col sm={10}>  
            <Input type="text" name="EmailAddress" onChange={this.handleChange} value={this.state.EmailAddress} 
            placeholder="Enter EmailAddress" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="DateOfBirth" sm={2}>Date of Birth</Label>  
          <Col sm={10}>  
            <Input type="text" name="DateOfBirth" onChange={this.handleChange} value={this.state.DateOfBirth} 
            placeholder="Enter Date of Birth" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Age" sm={2}>Age</Label>  
          <Col sm={10}>  
            <Input type="text" name="Age" onChange={this.handleChange} value={this.state.Age} 
            placeholder="Enter Age" />  
          </Col>  
        </FormGroup>
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addcustomer} className="btn btn-success">Submit</button>  
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

export default Addcustomer; 