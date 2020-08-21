import React, { Component } from 'react';

class Login extends Component {

 
    mandarPost() {
        let self = this
       
        var url = 'http://127.0.0.1:8000/api/login/';
        var data = {};
        var formData = new FormData();
        var usernamep = document.getElementById("usernamel").value;
        var passwordp = document.getElementById("passwordl").value;
        formData.append('username', usernamep)
        formData.append('password', passwordp)



fetch(url, {
  method: 'POST', // or 'PUT'
  body: formData, // data can be `string` or {object}!
  /* headers:{
    'Content-Type': 'application/json'
  } */
}).then(res => (res.status ==201)?  self.setState({log:true}): alert("Credenciales Incorrectas"))
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
    }

    
    render() {
        return (
            <div>
                
            <div style={{width: "800px", marginTop:"150px", marginLeft:"300px"}}>
               <h2>Log In</h2>
                <div className="form-group">
    <label htmlFor="exampleInputEmail1">User Name</label>
    <input type="text" className="form-control" id="usernamel"></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="passwordl"></input>
  </div>
  
  <button  className="btn btn-primary" onClick={this.mandarPost}>Log In</button>

                
            </div>
            </div>
        );
    }
}

export default Login;