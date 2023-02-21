import _ from "lodash";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart, fetchUser } from "../../state/creators";
import { Cart } from "../../state/types";
import { FormEvent, useEffect, useState } from "react";
import "./Pay.css";

const mapState = (state: RootState) => ({
  auth: state.auth,
  cart: state.cart[0],
  user: state.user,
});

const connector = connect(mapState, { fetchUserCart, fetchUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Pay = (props: PropsFromRedux) => {
  const auth: any = props.auth;
  const cart: Cart = props.cart;
  const user: any = props.user;
  const isLogged: boolean = _.hasIn(auth, "id");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [CVVCode, setCVVCode] = useState("");
  const [cardExpire, setCardExpire] = useState("");

  useEffect(() => {
    if (isLogged) {
      props.fetchUserCart(auth.id);
      props.fetchUser(auth.id);
    }
  }, []);

  if (!cart) {
    return <h1>Dont have a card</h1>;
  }

  const onPayFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = {
      firstName,
      lastName,
      cardNumber,
      CVVCode,
      cardExpire,
      total: cart.discountedTotal,
    };
    console.log(form);
  };

  return (
    <form className="payment" onSubmit={onPayFormSubmit}>
      <div className="payment_total">
        <h1>Total</h1>
        <h1>
          $ {cart.discountedTotal} <span className="payment_usd">USD</span>
        </h1>
      </div>
      <div className="payment_fullname">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="payment_card">
        <input
          type="text"
          placeholder="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={CVVCode}
          onChange={(e) => setCVVCode(e.target.value)}
        />
        <div></div>
        <input
          type="text"
          placeholder="MM/YY"
          value={cardExpire}
          onChange={(e) => setCardExpire(e.target.value)}
        />
      </div>
      <button className="payment_submit" type="submit">
        Submit payment
      </button>
    </form>
  );
};

export default connector(Pay);
