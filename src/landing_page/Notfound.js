// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">
        <button 
          style={{
            padding: '8px 20px',
            marginTop: '20px',
            backgroundColor: '#1a73e8',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
