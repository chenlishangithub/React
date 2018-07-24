import React from 'react'

function LoadingComponent({ error, pastDelay }) {
  if(error) {
    return <div>ERROR!</div>
  } else if (pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
};

export default LoadingComponent;