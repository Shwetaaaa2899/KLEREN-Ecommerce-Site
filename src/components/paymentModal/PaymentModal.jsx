import "../address/AdressModal";
import { useNavigate } from "react-router-dom";

import { CartListState } from "../../context/cartContext";
export const PaymentModal = ({ closePlaceOrderModal }) => {
  const navigate = useNavigate();
  const closeModalHandler = (e) => {
    if (
      e?.target.className === "modal-wrapper" ||
      e.target.className === "modal-container"
    ) {
      closePlaceOrderModal();
    }
  };
  const { cartdispatch } = CartListState();

  const emptyCart = (e) => {
    e.preventDefault();
    cartdispatch({ type: "EMPTY-CART" });
    closePlaceOrderModal();
    navigate("/products");
  };
  return (
    <>
      <div className="modal-wrapper" onClick={closeModalHandler}></div>
      <div className="modal-container" onClick={closeModalHandler}>
        <div className="modal">
          <button className="cancel-btn" onClick={closePlaceOrderModal}>
            &times;
          </button>
          <div className="form-login">
            <p> Yayyy !! You have successfully placed the order</p>
            <button onClick={emptyCart}>Okay</button>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
