import React from 'react'
import './footer.css';
import amazonLogo from  '../../Assests/amazonLogo.png';

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer">
            <div className="footerContent">
              <div className="footerCont1">
                <div className="contentFooterTitle">Get To Know Us</div>
                <div className="contentFooterSubTitlediv">
                  <div className="contentFooterSubTitleCont">About Us</div>
                  <div className="contentFooterSubTitleCont">Carrers</div>
                  <div className="contentFooterSubTitleCont">Press Releases</div>
                  <div className="contentFooterSubTitleCont">Amazon Science</div>
                </div>
              </div>

              <div className="footerCont1">
                <div className="contentFooterTitle">connect with us</div>
                <div className="contentFooterSubTitlediv">
                  <div className="contentFooterSubTitleCont">Instagram</div>
                  <div className="contentFooterSubTitleCont">Twitter</div>
                  <div className="contentFooterSubTitleCont">Facebook</div>
                </div>
              </div>

              <div className="footerCont1">
                <div className="contentFooterTitle">Make Money With US</div>
                <div className="contentFooterSubTitlediv">
                  <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                  <div className="contentFooterSubTitleCont">Sell under Amazon Accelator</div>
                  <div className="contentFooterSubTitleCont">Protect and build your brand</div>
                  <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                   <div className="contentFooterSubTitleCont">Become an Affilate</div>
                    <div className="contentFooterSubTitleCont">Fulfilment by Amazon</div>
                </div>
              </div>

                <div className="footerCont1">
                <div className="contentFooterTitle">Let US Help You</div>
                <div className="contentFooterSubTitlediv">
                  <div className="contentFooterSubTitleCont">COVID-19 and Amazon</div>
                  <div className="contentFooterSubTitleCont">Your Account</div>
                  <div className="contentFooterSubTitleCont">Returns Centre</div>
                </div>
              </div>

           </div>
            <div className="amazonImg">
                  <img className='amazonImgFooter' src={amazonLogo} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer