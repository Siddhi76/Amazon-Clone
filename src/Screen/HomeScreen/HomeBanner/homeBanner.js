import React from 'react'
import './homeBanner.css';
import homeBannerItemProduct from '../../../homeProduct.json';

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
      <img className='homeBannerimg' src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg" />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {
          homeBannerItemProduct.product.map((elem, idx) => {
            return (

              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">{elem.itemTitle}</div>
                <div className="imageHomeBannerItemDivCard">
                  {
                    elem.imgs.map((it,ind) =>
                    {
                      return (
                    <div className="imgBannerHomeDiv">
                    <img className="imgBannerHomeDivImg" src={it} />
                    <div className="imgBannerImgName">Home Decor</div>
                  </div>

                      );
                    })
                  }

            

                </div>

                <div className='seeMoreHomeBanner'>See More</div>
              </div>

            );

          })
        }


      </div>
    </div>


  )
}

export default HomeBanner