import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Event from "./Event";
class EventList extends Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { events: [] };
  }
  componentDidUpdate() {
    console.log(this.state.events);
  }
  componentDidMount = (e) => {
    console.log(this.props.location.state.token);
    let tk = this.props.location.state.token;
    var str = "Token " + tk;
    console.log(str);
    if (this.props.location.state.token) {
      var url = "http://127.0.0.1:8000/api/events/";
      fetch(url, {
        method: "GET", // or 'PUT'
        headers: {
          Authorization: str,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            console.log("llego al res de pdir la lista");
            var js = res.json();
            console.log(js);
            js.then((rta) => {
              this.setState({ events: rta });
            });
          } else {
            alert("Fall pedir la lista de eventos");
          }
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    }
  };
  logout = (e) => {
    console.log("logout");
    window.history.replaceState(null, "");
    this.setState({ log: false });
  };

  crear = (e) => {
    var url = "http://127.0.0.1:8000/api/events/";
    let tk = this.props.location.state.token;
    var str = "Token " + tk;

    var formData = new FormData();
    var event_name = document.getElementById("event_name").value;
    var event_category = document.getElementById("event_category").value;
    var event_place = document.getElementById("event_place").value;
    var event_address = document.getElementById("event_address").value;
    var event_initial_date = document.getElementById("event_initial_date")
      .value;
    var event_final_date = document.getElementById("event_final_date").value;
    var event_type = document.getElementById("event_type").value;
    var thumbnail = document.getElementById("thumbnail").value;
    formData.append("event_name", event_name);
    formData.append("event_category", event_category);
    formData.append("event_place", event_place);
    formData.append("event_address", event_address);
    formData.append("event_initial_date", event_initial_date);
    formData.append("event_final_date", event_final_date);
    formData.append("event_type", event_type);
    formData.append("thumbnail", thumbnail);
    console.log("formdata");
    console.log(formData);
    fetch(url, {
      method: "POST", // or 'PUT'
      body: formData,
      headers: {
        Authorization: str,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          console.log("llego al res crear evento");
          var js = res.json();
          console.log(js);
          js.then((rta) => console.log(rta));
          this.setState({rta: true});
        } else {
          alert("Falla al crear el evento");
        }
      })
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
      this.forceUpdate();
  };
  render() {
    if (!this.props.location.state) {
      console.log("notienetoken");
      return <Redirect to="/Login" />;
    }
    return (
      <div>
        <div style={{ width: "800px", marginTop: "65px", marginLeft: "300px" }}>
          <h2>Create Event</h2>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Event Name</label>
            <input type="text" className="form-control" id="event_name"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category</label>
            <input
              type="text"
              className="form-control"
              id="event_category"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Place</label>
            <input
              type="text"
              className="form-control"
              id="event_place"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Adress</label>
            <input
              type="text"
              className="form-control"
              id="event_address"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Initial Date</label>
            <input
              type="text"
              className="form-control"
              id="event_initial_date"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Final Date</label>
            <input
              type="text"
              className="form-control"
              id="event_final_date"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Type</label>
            <input type="text" className="form-control" id="event_type"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Thumbnail</label>
            <input type="text" className="form-control" id="thumbnail"></input>
          </div>
          <button className="btn btn-primary" onClick={this.crear}>
            Crear
          </button>
          
      
        </div>
        <div>
          <div
            
            style={{
              
              marginTop: "65px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <div className="row">
              <h2>Event List</h2>
            </div>
            <div className="row">
            {this.state.events.map((e, index) => (
                <div className="col-4">
                  <Event key={index} e={e} token={this.props.location.state.token}></Event>
                </div>
              ))}
            </div>
             
           
          </div>
        </div>
        <Link to="/login">
          <button className="btn btn-primary" onClick={this.logout}>
            Log Out
          </button>
        </Link>
      </div>
    );
  }
}

export default EventList;
