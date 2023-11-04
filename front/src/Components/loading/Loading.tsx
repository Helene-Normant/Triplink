import React from "react";
import './loading.css';

const Loading = () => {
    return (
        <div className="loading-container" data-testid = 'loading'>
        <span className="loading-2">
          <span></span>
        </span>
      </div>
    )
  }
  
  export default Loading;