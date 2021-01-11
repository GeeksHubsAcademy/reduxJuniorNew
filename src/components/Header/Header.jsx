
import React from "react";

import './Header.css';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class Header extends React.Component {
    
    constructor (props) {
        super(props);
        
    };
    
    render() {
        return(
            <div className="header">
                Hola {this.props.nombreUser}
            </div>
        );
    };
    
    
};


const mapStateToProps = state => {
    // ese state es de redux

    return {
        //conexion inicial con Redux , nombreUser tiene el valor inicial
        //que tiene el estado de redux en reducer.js, concretamente state.nombreUser        
        nombreUser: state.nombreUser
    };
};

export default connect(mapStateToProps)(withRouter(Header));