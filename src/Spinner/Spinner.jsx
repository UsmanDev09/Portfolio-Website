import React from "react";
import { Discuss } from 'react-loader-spinner';

function Spinner() {
  return (
    <Discuss
      visible
      height='80'
      width='10'
      ariaLabel='comment-loading'
      wrapperStyle={{
        position: 'absolute',
        top: '40%',
        left: '45%',
        width: '100px',
        color: '#00C8A1'
      }}
      color='#00C8A1'
      backgroundColor='#00C8A1'
    />
  );
}

export default Spinner;
