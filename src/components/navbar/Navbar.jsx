import "./navbar.css";
import { AuthContext } from "../../context/authcontext";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { WishListState } from "../../context/wishlistContext";
import { CartListState } from "../../context/cartContext";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CartState } from "../../context/productsContext";
import { toast } from "react-toastify"

export default function Navbar() {
  const {
    dispatch,
    state: { token },
  } = AuthContext();
  const {
    state: { cart },
  } = CartListState();
  const { filterDispatch } = CartState();
  const {
    value: { wishlist },
  } = WishListState();
  const searchEventHandler = (e) => {
    filterDispatch({ type: "SEARCH", payload: e.target.value });
  };

  const logoutHandler = ()=>{
    dispatch({ type: "LOGOUT" })
    toast("You have been logged out")


  }
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            {/* <Brand /> */}
            <NavLink to="/">
              {" "}
              <h2>
                <span>k</span>leren
              </h2>{" "}
            </NavLink>
          </div>
          <div className="input-wrapper">
            <AiOutlineSearch />
            <input
              className="search-input"
              type="text"
              placeholder="search your fav products"
              onChange={searchEventHandler}
            />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/products">
                  Explore <MdOutlineExplore />
                </NavLink>
              </li>

              <li>
                {" "}
                <NavLink to="/wishlist">
                  WishList
                  {token && wishlist?.length}
                </NavLink>
              </li>

              <li>
          
                <NavLink to="/profile">
                  {" "}
                  <RiAccountCircleFill
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FaShoppingCart
                    style={{ color: "black", fontSize: "25px" }}
                  />
                  {token && cart?.length}
                </NavLink>
              </li>

              {token && (
                <li>
                  {" "}
                  <div onClick={ logoutHandler}>
                    Log out
              
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
