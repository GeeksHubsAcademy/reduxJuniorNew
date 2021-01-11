
import React from "react";

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { rdx_addInfo, madrid_clima_add, rdx_usuarioInfo } from '../../services/redux/action';

class Home extends React.Component {
    
    constructor (props) {
        super(props);
        
    };

    llenaRedux(){

        let valorVariable = "Hola buenos dias";

        //ejecucion de la accion de redux importada, en este caso rdx_addInfo
        rdx_addInfo(valorVariable);

        

        let nombre = "Elena";
        //ejecucion de la accion de redux importada, en este caso rdx_usuarioInfo
        rdx_usuarioInfo(nombre);

    }
    
    render() {
        return(

            <div>
                <pre>
                    {/* la etiqueta pre muestra texto preformateado, mostramos el valor de infoRedux que REDUX nos ha
                    guardado en las props. */}
                    {
                        JSON.stringify(this.props, null, 2)
                     
                    }
                </pre>

                <button onClick={()=>this.llenaRedux()}>Llena Redux</button>
            </div>
        );
    };
    
    
};


const mapStateToProps = state => {
    // ese state es de redux

    return {
        //resultados de info desde redux, ahora disponibles en infoRedux que mostraremos en el render a tiempo real
        infoRedux: state.info,
        nombreUser: state.nombreUser
    };
};

export default connect(mapStateToProps)(withRouter(Home));