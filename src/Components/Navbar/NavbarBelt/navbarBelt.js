import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assests/amazonLogo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import india from '../../../Assests/india.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navbarBelt = () => {
  return (
    <div className='navbarBelt'>
        <div className='leftnavBelt'>
           <div className='leftnavBeltLogo' >
           <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
           <span className='navbar_inLogo'>.in</span>
           </div>
           <div className="navbarBeltLocation">
            <div className="navbarBeltLocationImg">
              < LocationOnIcon className='navbarBeltLocationImgIcon' sx ={{fontSize: "22px"}} />
            </div>
            <div className='navbarBeltLocationPlace'>
              <div className='navbarBeltLocationTop'>Delivering to pune 411032</div>
              <div className='navbarBeltLocationBottom'>Update Location</div>
            </div>
           </div>
        </div>
        <div className='navbarBeltSearchBox'>
          <div className='navbarBeltSearchBoxDiv'>
            <div className="navbarBeltSearchBoxAll">
              <div className="navbarBeltSearchBoxAllText">All</div>
              <ArrowDropDownIcon sx={{fontSize: "20px"}} />
            </div>
            <input type="text" className="navbarBeltInputSearchBox" placeholder='search Amazon.in' />
            <div className="searchIconNavbarBelt">
              <SearchIcon sx={{fontSize:"26px"}} className="searchIconNavbarBeltIcon"  />
            </div>
          </div>
        </div>
        <div className='rightnavBelt'>
          <div className="indianFlagCode">
            <img src={india} alt="indiaFlag" />
            <div className="indiaCodeNavbarBelt">EN<ArrowDropDownIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}}
             className='indiaCodeNavbarBeltDrp' /></div>
          </div>
          <div className="helloSignInNavbarBelt">
            <div className="helloTopNavbarBelt">Hello, User</div>
            <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
          </div>
           <div className="helloSignInNavbarBelt">
            <div className="helloTopNavbarBelt">Returns</div>
            <div className="indiaCodeNavbarBelt">& Orders</div>
          </div>
          <div className="helloSignInNavbarBelt">
            <span className="cartItemNumberNavbarBelt">2</span>
            <div className="helloTopNavbarBelt"><ShoppingCartIcon /><span className='cartTitle'>Cart</span></div>
          </div>
          
        </div>

    </div>
  )
}

export default navbarBelt