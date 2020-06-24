import React from "react" ;
import FamiliaMembro from "./FamiliaMembro" ;



export default props => {

    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}  />
            <FamiliaMembro nome="Ana" idade={23}  {...props}   />
            <FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />
        </div>
    )

}