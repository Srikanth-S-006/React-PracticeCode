import React from "react";


function Ternaryexample(){
    let num=10;
    return(
        <div>
            <p>10 is not greater than 20 </p>
            <h4 style={{color:'darkgoldenrod'}}>{num>20 ? 'true':'false'}</h4>
        </div>
    )

}

export default Ternaryexample