import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Food Delivery App</h1>
      <img 
        src="./img.jpg" 
        alt="Food Delivery" 
        style={{
          width: '80%',          // Increase the image width
          maxWidth: '1000px',    // Limit maximum size
          height: 'auto',        // Maintain aspect ratio
          display: 'block',
          margin: '20px auto',   // Center the image
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',  // Add subtle shadow
          borderRadius: '12px'   // Rounded corners for a modern look
        }}
      />
    </div>
  );
};

export default Home;

