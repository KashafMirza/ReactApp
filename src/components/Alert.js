import React from 'react'

function Alert(props) {
   //to convert first letter of success capital :make function capitalize
    const capitaliez=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
   //give height to div alert for no cls(cummulative layout shift).
 <div style={{height:"50px"}}>   
         { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                  <strong>{capitaliez(props.alert.type)}</strong>: {props.alert.msg}
               </div>}
  </div>
  )
}

export default Alert
