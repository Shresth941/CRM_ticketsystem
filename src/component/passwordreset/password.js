import React from 'react';
import PropTypes from 'prop-types';

const Passwordreset = ({ handleonchange, email,handelOnResetSubmitt,formswitcher }) => {
    
  return (
    <form onSubmit={handelOnResetSubmitt}>
      <h3>
        <b style={{ color: 'grey' }}>Reset Password</b>
      </h3>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" style={{ marginRight: '110px', marginBottom: '7px' }}>
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleonchange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      
     
      <label style={{ marginBottom: '10px' }}>
        <a href="#\" style={{ fontSize: '15px' }} onClick={()=>{formswitcher('Login')}}>
          Login Now?
        </a>
      </label>
      <div>
        <button type="submit" className="btn btn-primary">
        Reset Password
        </button>
      </div>
    </form>
  );
};

Passwordreset.propTypes = {
  handleonchange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  formswitcher:PropTypes.func.isRequired,
  handelOnResetSubmitt:PropTypes.func.isRequired,
};

export default Passwordreset;
