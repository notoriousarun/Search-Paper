import React from 'react';
import PropTypes from 'prop-types';

const QueryForm = ({ handleSubmit }) => {
    return (
        <form className="queryForm" onSubmit={event => handleSubmit(event)}>

          <div className="inputField">
            <label htmlFor="query">
              Query
            </label>
            <input id="query" placeholder="Please Enter your Query Details" type="text"/>
          </div>

          <div className="inputField">
            <label htmlFor="fromYear">
              From Year
            </label>
            <input id="fromYear" placeholder="From Year" type="text"/>
          </div>

          <div className="inputField">
            <label htmlFor="toYear">
              To Year
            </label>
            <input id="toYear" placeholder="To Year" type="text"/>
          </div>
          
          <div className="inputField">
            <label htmlFor="pageSize">
              Page Size
            </label>
            <input id="pageSize" placeholder="How many Response wanted?" type="text"/>
          </div>
          
          <button type="submit">
            Submit
          </button>
        </form>
    );
};

export default QueryForm;
