import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";

const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }

  return (
    <div className="section is-fullheight">
      {loggedIn && <Redirect to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1 style={{color: '#FFF', marginBottom: '1rem'}}>Login Assigment Asuransi Astra</h1>
            <form onSubmit={handleSubmit} noValidate>
            <div className="parrentForm">
              <div className="field">
                <label style={{color: '#FFF'}} className="label">Email Address</label>
                <div style={{marginTop: '0.5rem'}} className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p style={{color: 'red',fontSize: '12px'}} className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label style={{color: '#FFF'}} className="label">Password</label>
                <div style={{marginTop: '0.5rem'}} className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  {errors.password && (
                  <p style={{color: 'red', fontSize: '12px'}} className="help is-danger">{errors.password}</p>
                )}
                </div>
              </div>
              <button
              style={{background: '#265EFF', padding: '0.5rem'}}
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
