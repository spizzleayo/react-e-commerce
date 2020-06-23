import React, { Component } from "react";

export default class Search extends Component {
    render() {
       return (
            <form className="container"> 
                <div className="form-row">
                    <div className="col-md-8 mb-3">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <button className="btn btn-outline-success my-sm-0" type="submit"><i className="fas fa-search"></i></button> 
                    </div>
                </div>
            </form>
       )
    }
}
