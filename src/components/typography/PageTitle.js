import React from 'react';
import "./typography.css";

const PageTitle = (props) => (
  <h1 className='title'>{props.children}</h1>
);

export { PageTitle };