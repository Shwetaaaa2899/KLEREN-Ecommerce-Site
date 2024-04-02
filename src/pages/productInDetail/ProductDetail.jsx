import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CartState } from "../../context/productsContext";
import { CartListState } from "../../context/cartContext";
import { AuthContext } from "../../context/authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./productDetail.css";
import { ClipLoader } from "react-spinners";
import { WishListState } from "../../context/wishlistContext";
const ProductDetail = () => {
  const { productID } = useParams();
  const {
    state: { token, isloggedIn },
  } = AuthContext();

  const {
    state: { loading, ProductToBeDetailed },
    
    getProductByID,
  } = CartState();
  const { removeProductToWishList, addProductToWishList, handlewishlistCheck } =
    WishListState();

  const { handlecartlistCheck, addProductToCart } = CartListState();

  const WishListHandler = (product) => {
    if (token === null) {
      toast("Please login first to shop your fav products");
      navigate("/auth");
    } else if (handlewishlistCheck(product)) {
      removeProductToWishList(product);
    } else {
      addProductToWishList(product);
    }
  };
  const navigate = useNavigate();

  const CartListHandler = (product) => {
    if (token === null) {
      toast("Please login first to add in cart products");
      navigate("/auth");
    } else {
      addProductToCart(product);
    }
  };

  useEffect(() => {
    getProductByID(productID);
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader loading={true} />
      ) : (
        ProductToBeDetailed && (
          <div className="main-div">
            <div className="left-div">
              <div class="image">
                <img src={ProductToBeDetailed.image} />
              </div>

              <div className="action-button-section">
                <button onClick={() => CartListHandler(ProductToBeDetailed)}>
                  {handlecartlistCheck(ProductToBeDetailed)
                    ? "Remove From Cart"
                    : "Add to Cart"}
                </button>

                <button onClick={() => WishListHandler(ProductToBeDetailed)}>
                  {handlewishlistCheck(ProductToBeDetailed)
                    ? "Remove From WishList"
                    : "Add to WishList"}
                </button>
              </div>
            </div>
            <div className="right-div">
              <div className="product-details">
                <h1>{ProductToBeDetailed.title}</h1>
                <small> {ProductToBeDetailed.categoryName}'s wear</small>
              </div>
              <div className="price-info">
                <p>Rating: {ProductToBeDetailed.star} ⭐</p>

                <p>Price:₹ {ProductToBeDetailed.price}</p>

                <p>
                  <span className="mrp">
                    MRP :₹
                    {ProductToBeDetailed.price + 1000}
                  </span>{" "}
                  (50% off)
                </p>
              </div>
              <div className="description">
                <p>
                  <strong>Description: </strong>

                  {ProductToBeDetailed.description}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default ProductDetail;
