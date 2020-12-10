import React, { useState } from 'react';

const useActiveToggle = (active = false) => {
  const [ isActive, setIsActive ] = useState(active);
  console.log({ active });
  return [ isActive, setIsActive ];
};

export default useActiveToggle;
