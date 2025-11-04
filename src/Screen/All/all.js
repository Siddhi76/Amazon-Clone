import React from 'react';
import './all.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const All = () => {
  return (
    <div className='allpage'>
        <div className="left">
            <div className="navbar">
               <div className="navbarEmoji">
                <AccountCircleIcon sx={{fontSize: "24px"}}  />
               </div>
               <div className='navbarfont'><span>Hello, sign in</span></div>

            </div>

        </div>
        <div className="right">

        </div>
    
        </div>


  );
};

export default All;