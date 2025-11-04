import React from 'react'
import './products.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import productDetail from './Products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) =>
  {
    toast.success("succesfully added in cart",
    {
      position: "bottom-right"
    })
    dispatch(addToCart(item));
  }
  return (
    <div className='productPage'>
      <div className="productTopBanner">
        <div className="productTopBannerItems">
          Electronics
        </div>
        <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
        <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemsSubMenu">Office & Stationary</div>

      </div>

      <div className="productsPageMain">
        <div className="productPageMainLeftCategory">
          <div className="productPageMainLeftCategoryTitle">Category</div>
          <div className="productPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Computers & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingRightBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingRightBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

          </div>

        </div>
        <div className="productPageMainRight">
          <div className="productPageMainRightTopBanner">
            1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'> Macbooks </span>
          </div>

          <div className='itemsImageProductPage'>
            {
              productDetail.product.map((item, index) => {
                return (
                  <div className="itemsImageProductPageOne " key={item.id} >
                    <div className="imgBlockitemsImageProductPageOne">
                      <img src={item.imageUrl} className="productImageProduct" />
                    </div>

                    <div className="productNameProduc">
                      <div>
                        <div>{item.name}</div>
                        <div className="productNameProductRating" />
                      </div>
                      <div className="priceProductDetailPage">
                        <div className="CurrencyText">₹</div>
                        <div className="rateHomeDetail">
                          <div className="rateHomeDetailPrice">{item.price}</div>
                          <div className="addtobasketBtn" onClick={() =>{handleAddToCart(item)}}>Add To Cart</div>
                        </div>
                      </div>
                      <div className="offProductPage">Upto 10% off on select cards</div>
                      <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                    </div>
                  </div>
                );

              })
            }
            

          </div>


        </div>


      </div>
   <ToastContainer/>
    </div>





  )
}

export default Products