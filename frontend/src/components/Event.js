import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }
    componentDidMount = (e) => {
       // console.log(this.props.value);
    }
    delete = (e) => {
        var url = "http://127.0.0.1:8000/api/events/" + this.props.e.id;
      fetch(url, {
        method: "DELETE", // or 'PUT'
        headers: {
          Authorization: 'Token ' + this.props.token,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status == 204) {
            console.log("borro el evento");
            this.forceUpdate()
          } else {
            alert("No pudo borrar el evento");
          }
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => alert("Borro el evento")
        );
    }
  render() {
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
         
          <div className="card-body">
    <h4>{this.props.e.event_name}</h4>
            <p className="card-text">
              Address: {this.props.e.event_address}
            </p>
            <a  className="btn btn-info" data-toggle="modal" data-target={"#modal"+this.props.e.event_name}>
              Detail
            </a>
            <a  className="btn btn-danger" onClick={this.delete}>
              Delete
            </a>
          </div>
        </div>





<div class="modal fade" id={"modal"+this.props.e.event_name} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{this.props.e.event_name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Address: {this.props.e.event_address}</p>
      </div>
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Category: {this.props.e.event_category}</p>
      </div>
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Place: {this.props.e.event_place}</p>
      </div>
      
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Initial Date: {this.props.e.event_initial_date}</p>
      </div>
      
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Final Date: {this.props.e.event_final_date}</p>
      </div>
      
      <div className="row" style={{marginLeft:"5px"}}>
     <p>Type: {this.props.e.event_type}</p>
      </div>
     
      
      </div>
      
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Event;
