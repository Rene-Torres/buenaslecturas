import React from 'react';
import axios from 'axios';

const Logout = (props) => {

let request = axios.get(`/api/logout`)
  .then(request =>{
    setTimeout(()=>{
      props.history.push('/')
    },3000)

  })
  return (
    <div className="loginout">

    <div>Cerrando Sesión<p>Regresa pronto! :)</p></div>
    </div>
  );
};

export default Logout;