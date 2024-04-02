import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducer/cartreducer";
import { useEffect } from "react";
import { AuthContext } from "./authcontext";
import { toast } from "react-toastify";
export const CartListProviderKey = createContext();

const CartListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const {
    state: { token },
  } = AuthContext();

  //  api call to get the cart data

  const cartListCall = async () => {
    try {
      const sendreq = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
      });

      const response = await sendreq.json();
      
      dispatch({ type: "GET-CART", payload: response.cart });
    } catch (e) {
    //   console.log(e);
    }
  };

  useEffect(() => {
    token && cartListCall();
  }, [token]);

  //api call to add product to wishlist
  const IsQuantityGreaterThanOne = (product) => {
    return product.qty > 1 ? product.qty : 1;
  };
  const handlecartlistCheck = (product) => {
    return state?.cart?.some((item) => product._id === item._id);
  };
  const addProductToCart = async (product) => {
    const products = product;

    if (!handlecartlistCheck(product)) {
      try {
        const passobj = { product };

        const sendreq = await fetch("/api/user/cart", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify(passobj),
        });

        if (sendreq.status === 200 || sendreq.status === 201) {
          const response = await sendreq.json();

          dispatch({
            type: "ADD-TO-CART",
            payload: { product, cart: response.cart },
          });
          toast("Product added in cart");
        }
      } catch {}
    } else {
      // console.log("remove case in context called")

      RemoveProductFromcart(products);
    }
  };
  const RemoveProductFromcart = async (product) => {
    try {
      const sendreq = await fetch(`/api/user/cart/${product._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
      });

      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
        dispatch({ type: "REMOVE-FROM-CART", payload: response?.cart });

        toast("Product removed from cart");
      }
    } catch (e) {}
  };

  //add quantity of product in cart

  const AddProductQuantIncart = async ({ product, type }) => {
   

    try {
      const requestedbody = { action: { type } };
      const sendreq = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      });
    
      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
    

        dispatch({ type: "INCREASE-QUANTITY", payload: response?.cart });
      }
      // .then((data) =>  data. json())
      //an array inside  one product is present
    } catch (e) {}
  };

  //remove quantity for product based on id
  const RemoveProductQuantIncart = async ({ product, type }) => {
    //   const filtered =  state?.cart.includes(product) &&
    //   state?.cart.map((prod)  => prod._id ===product._id ? {...prod,qty:prod.qty -1}:prod)

    try {
      const requestedbody = { action: { type } };
      const sendreq = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedbody),
      });
    
      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
      

        dispatch({ type: "DECREASE-QUANTITY", payload: response?.cart });
      }
   } catch (e) {}

  
  };

  //function to checkout for payment
  const CheckForPaymentHandler = () => {
    const total = state?.cart.reduce(
      (acc, product) => (acc += product.price),
      0
    );
    dispatch({ type: "GET-TOTAL-PRICE", payload: total });
  };

  const cartdispatch = dispatch;
  const valueToBePassed = {
    state,
    cartdispatch,
    addProductToCart,
    RemoveProductFromcart,
    cartListCall,
    handlecartlistCheck,
    AddProductQuantIncart,
    RemoveProductQuantIncart,
    IsQuantityGreaterThanOne,
    CheckForPaymentHandler,
  };

  return (
    <CartListProviderKey.Provider value={valueToBePassed}>
      {children}
    </CartListProviderKey.Provider>
  );
};
export default CartListProvider;
export const CartListState = () => useContext(CartListProviderKey);
