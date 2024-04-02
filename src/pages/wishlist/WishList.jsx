import { WishListState } from "../../context/wishlistContext";
import { useNavigate } from "react-router-dom";
import { CartListState } from "../../context/cartContext";
// import "./css/MainContainer.css"
import "./WishList.css";
import Product from "../../components/productCard/Product";
export default function WishList() {
  const navigate = useNavigate();

  const {
    value: { wishlist },
    addProductToWishList,
  } = WishListState();

  return (
    <div className="wishlist-wrapper">
      {wishlist?.length > 0 ? (
        wishlist?.map((product) => (
          <Product key={product._id} product={product} wishlist={1} />
        ))
      ) : (
        <div>
          {" "}
          <h3>No data in wishlist as of now</h3>
          <button className="button" onClick={() => navigate("/products")}>
            Let's Explore
          </button>
        </div>
      )}
    </div>
  );
}
