import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart, fetchUser } from "../../state/creators";
import { Cart, User } from "../../state/types";
import { useEffect } from "react";
import "./Pay.css"

const mapState = (state: RootState) => ({
  auth: state.auth,
  cart: state.cart[0],
  user: state.user,
});

const connector = connect(mapState, { fetchUserCart, fetchUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Pay = (props: PropsFromRedux) => {
  const auth:any = props.auth;
  const cart : Cart = props.cart;
  const user : any = props.user;

  useEffect(() => {
    if(auth) {
        props.fetchUserCart(auth.id)
        props.fetchUser(auth.id)
    }
  }, [])

  if(!cart) {
    return <h1>Dont have a cart</h1>
  }

  return (
    <form className="payment">
      <div className="payment_total">
        <h1>Total</h1>
        <h1>$ {cart.total} <span className="payment_usd">USD</span></h1>
      </div>
      <div className="payment_fullname">
        <input type="text" placeholder="First name" value={user ? user.firstName : ""}/>
        <input type="text" placeholder="Last name" value={user ? user.lastName : ""}/>
      </div>
      <div className="payment_card">
        <input type="text" placeholder="Card number" value={user ? user.bank.cardNumber : ""}/>
        <input type="text" placeholder="CVV"/>
        <div></div>
        <input type="text" placeholder="MM/YY" value={user ? user.bank.cardExpire : ""}/>
      </div>
      <button className="payment_submit" type="submit">Submit payment</button>
    </form>
  );
};

export default connector(Pay);
