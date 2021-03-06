import React, { useState } from "react";
import "./App.css";
import countries from './assets/countries.json';
import states from './assets/states.json'

function App() {
  function Form(){
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      addressLine1: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      submitted: false
    });

    const handleChange = e =>{
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = e =>{
      e.preventDefault();
      setValues({
        ...values,
        submitted: true
      })
    }
    
    return(
      <form className="container mt-4" onSubmit={handleSubmit}>
      {}
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.addressLine1}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" 
          value={values.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select id="state" name="state" className="form-control"
          value={values.states}
          onChange={handleChange}>
        {states.map((states, index)=>(
            <option value={states} name={states}>{states}</option>
          
        ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={values.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control"
          value={values.country}
          onChange={handleChange}>
        {countries.map((countries, index)=>(
            <option value={countries}>{countries}</option>
          
        ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {values.submitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {
              <>
              <li>{values.firstName}</li>
              <li>{values.lastName}</li>
              <li>{values.addressLine1}</li>
              <li>{values.city}</li>
              <li>{values.state}</li>
              <li>{values.postalCode}</li>
              <li>{values.country}</li>
              </>
            }
          </ul>
        </div>
      )}
    </form>
    );
  }
  
  
  return (
    Form()
  );
}

export default App;
