import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Form extends Component {
  mandarPost() {
    console.log("goaskdad");

    var url = "http://127.0.0.1:8000/api/create-user/";
    var formData = new FormData();
    var username = document.getElementById("username").value;
    var first_name = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var emailp = document.getElementById("email").value;
    var passwordp = document.getElementById("password").value;
    formData.append("username", username);
    formData.append("first_name", first_name);
    formData.append("last_name", lname);
    formData.append("email", emailp);
    formData.append("password", passwordp);
    console.log(formData);
   

    fetch(url, {
      method: "POST", // or 'PUT'
      body: formData, // data can be `string` or {object}!
      /* headers:{
    'Content-Type': 'application/json'
  } */
    })
      .then((res) => (res.status == 201 ? alert("Usuario Creado!") : ""))
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }

  render() {
    return (

      <div style={{ width: "800px", marginTop: "150px", marginLeft: "300px" }}>
        <h2>Register</h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input type="text" className="form-control" id="username"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input type="text" className="form-control" id="first_name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input type="text" className="form-control" id="last_name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password"></input>
        </div>
        <Link to='/Login'>
        <button className="btn btn-primary" onClick={this.mandarPost}>
          Submit
        </button>
        </Link>
        <hr></hr>
        <a href="http://127.0.0.1:8000/Login">Already have an account?</a>
      </div>
    );
  }
}

export default Form;
