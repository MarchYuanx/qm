import React,{ Component } from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => (
  <div className="loader">
    <img alt="Loading ..." src="/images/ball.svg"/>
    <h2>{props.message}</h2>
  </div>
);

Loader.PropTypes = {
  message: PropTypes.string
}

export default Loader;