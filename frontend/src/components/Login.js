import React, { Component } from 'react';
import { Route, Redirect , Link} from 'react-router-dom';

class Login extends Component {
    state = {
        redirect: false
      }
  
    pedirToken = (e) =>{
        console.log("pedir token")
        var url = 'http://127.0.0.1:8000/api/api-auth/';
        var formData = new FormData();
        var user = this.state.username;
        var pass = this.state.password;
        formData.append('username', user)
        formData.append('password', pass)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: formData, // data can be `string` or {object}!
             headers:{
              'username': user,
              'password': pass,
              
            } 
          }).then((res) => {
              console.log(res);
              if(res.status == 200){
                console.log("llego al res then del pedir token");
                var js = res.json();
                console.log(js);
                js.then( (rta) => this.setState({token: rta['token'], redirect:true}));
                  
              }
              else{
                  alert("Credenciales Incorrectas");
              }
              
          })
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));

    }
    mandarPost = (e) => {
        let self = this;
       
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
}).then((res) => {
    if(res.status == 201){
        this.setState({username:usernamep, password: passwordp});
        this.pedirToken();
        alert("Ingresó correctamente");
    }
    else{
        alert("Credenciales Incorrectas");
    }
    
})
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
    }

    
    render() {
       if(this.state.redirect)
       {
        return <Redirect to={{
            pathname: '/EventList',
            state: { token: this.state.token }
        }}/>

       }
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
  <Link>  <button  className="btn btn-primary" onClick={this.mandarPost}>Log In</button>
</Link>

  <hr></hr>
  <a href="http://127.0.0.1:8000/Register">Register</a>
            </div>
            
            </div>
        );
    }
}

export default Login;