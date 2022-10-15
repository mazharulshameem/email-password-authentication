import React from 'react';


const register = () => {
  return (

    <div>
      
     <div>
       <form onSubmit={handleRegister}>
      <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Email' />
      <br></br>
      <input onBlur={handlePasswordBlur} type="password" name="" id="password" placeholder='Enter Your Password' />
      <br></br>
      <input type="submit" value="Register" />
     </form>
     </div>
    </div>
  );
};

export default register;