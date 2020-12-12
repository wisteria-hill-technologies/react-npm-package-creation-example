import React from 'react';
import './hello_world.css';

import useActiveToggle from './use-active-toggle';

export const HelloWorld = ({ name }) => {
  return (
    <div>
      <h1 className="myColor">Hello, { name ? name : 'World' }!!</h1>
    </div>
  );
};

export default useActiveToggle;