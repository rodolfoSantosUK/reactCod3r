import React, {cloneElement} from "react" ;


export default props => {
    console.log()
    return (
        <div>
            { React.Children.map(props.children, (child) => {
                 return cloneElement(child, props);
            })} 

            {/** Ou pode tambem ser feito dessa forma.*/
             props.children.map((child) =>{
                 return cloneElement(child, props);
             })}
        </div>
    )

}