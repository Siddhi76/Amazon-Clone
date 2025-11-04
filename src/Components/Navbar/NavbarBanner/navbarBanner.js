// NavbarBanner.js
import React from 'react';
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';


const NavbarBanner = () => {
  

  const options = [
    { "name": "Fresh" }, { "name": "Amazon MiniT" }, { "name": "Sell" },
    { "name": "Best Sellers" }, { "name": "Today's Deals" }, { "name": "Mobiles" },
    { "name": "Electronics" }, { "name": "Prime" }, { "name": "Customer Service" },
    { "name": "Fashion" }, { "name": "Home & kitchen" },{"name": "Amazon pay "}, {"name": "Computers"},
    {"name": "Books"}, {"name": "Home Improvement"}

  ]
  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptionsLeft'>
        <Link to={'/all'} className='optionsNavbarBanner'>
          < MenuIcon sx={{ fontSize: "24px" }} />
          <div  className='allOptionsNavbarBanner'>All</div>
        </Link>
        {
          options.map((elem, idx) => {
            return (
              <Link to={'/products'} className='optionsNavbarBanner' key={idx}>
                <div className="allOptionsNavbarBanner">{elem.name}</div>
              </Link>
            );

          })
        }

      </div>
    </div>
  )
}

export default NavbarBanner;
