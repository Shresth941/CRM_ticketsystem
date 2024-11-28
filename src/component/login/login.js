import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleonchange, email, pass,handleOnSubmit,formswitcher }) => {
    
  return (
    <form onSubmit={handleOnSubmit}>
      <h3>
        <b style={{ color: 'grey' }}>Client Login</b>
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
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" style={{ marginRight: '135px', marginBottom: '7px', marginTop: '7px' }}>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={pass}
          onChange={handleonchange}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1" style={{ marginRight: '70px', marginBottom: '7px' }}>
          Check me out
        </label>
      </div>
      <label style={{ marginBottom: '10px' }}>
        <a href="#/" style={{ fontSize: '15px' }} onClick={()=>{formswitcher('reset')}}>
          Forget Password
        </a>
      </label>
      <div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

Login.propTypes = {
  handleonchange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
  formswitcher:PropTypes.isRequired,

};

export default Login;
