// NavbarBanner.js
import React from 'react';
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';


const NavbarBanner = () => {
  

  const options = [
    { "name": "Fresh" }, { "name": "Amazon MiniT" }, { "name": "Sell" },
    { "name": "Best Sellers" }, { "name": "Today's Deals" }, { "name": "Mobiles" },
    { "name": "Electronics" }, { "name": "Prime" }, { "name": "Customer Service" },
    { "name": "Fashion" }, { "name": "Home & kitchen" }

  ]
  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptionsLeft'>
        <div className='optionsNavbarBanner'>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>
        {
          options.map((elem, idx) => {
            return (
              <div className='optionsNavbarBanner' key={idx}>
                <div className="allOptionsNavbarBanner">{elem.name}</div>
              </div>


            );

          })
        }

      </div>


      <div className='navbarBannerOptionsRight'>




      </div>
    </div>
  )
}

export default NavbarBanner;
