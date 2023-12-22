import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;

//test1