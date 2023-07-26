import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

export default function Navbar() {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        backgroundColor: 'transparent',
        color: 'white',
        padding: '0 20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: "250px",  }}>
       
        <img
          src="/Logo.png"
          alt="Logo"
          style={{ width: '100%', }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: "7rem" }}>
      <AiOutlineMenu style={{fontSize: "30px"}} color='black'/>
      
      </div>
    </div>
  );
}
