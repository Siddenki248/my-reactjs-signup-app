import React from 'react';
const DisplayStatus = (props) => {
    const msg =  (props.value) ? <h1> Thanks for signup!!</h1> : null;
    return(
        <div>
           {msg}
        </div>
   
    )
}

export default DisplayStatus;