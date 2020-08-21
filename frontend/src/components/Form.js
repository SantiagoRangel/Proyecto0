import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div style={{width: "800px", marginTop:"150px", marginLeft:"300px"}}>
                <form>
                <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="first_name"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="last_name"></input>
  </div>
                <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    } 
}

export default Form;