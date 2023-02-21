import _ from "lodash";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart, fetchUser } from "../../state/creators";
import { Cart } from "../../state/types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  isDigit,
  checkExpireWrite,
  checkNumber,
  checkCVVCode,
  checkExpire,
} from "./Validator";
import "./Pay.css";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    if (_.hasIn(user, "id")) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setCardNumber(user.bank.cardNumber);
      setCardExpire(user.bank.cardExpire);
    }
  }, [user]);

  const onChangeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    const lastDigit = number[number.length - 1];
    if (
      number.length <= 16 &&
      (isDigit(lastDigit) || lastDigit === undefined)
    ) {
      setCardNumber(number);
    }
  };

  const onChangeCVVCode = (event: ChangeEvent<HTMLInputElement>) => {
    const code = event.target.value;
    const lastDigit = code[code.length - 1];
    if (code.length <= 3 && (isDigit(lastDigit) || lastDigit === undefined)) {
      setCVVCode(code);
    }
  };

  const onChangeExpire = (event: ChangeEvent<HTMLInputElement>) => {
    const expire = event.target.value;
    if (expire === "" || checkExpireWrite(expire)) {
      setCardExpire(expire);
    }
  };

  const navigate = useNavigate();

  const onPayFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      checkNumber(cardNumber) &&
      checkCVVCode(CVVCode) &&
      checkExpire(cardExpire)
    ) {
      const form = {
        firstName,
        lastName,
        cardNumber,
        CVVCode,
        cardExpire,
        total: cart.discountedTotal,
      };
      console.log(form); // here can be api for pay
      navigate("/confirm");
    }
  };

  if (!cart) {
    return <h1>Dont have a card</h1>;
  }

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
          className={
            cardNumber == "" || checkNumber(cardNumber) ? "" : "wrong_input"
          }
          type="text"
          placeholder="Card number"
          value={cardNumber}
          onChange={onChangeCardNumber}
        />
        <input
          className={
            CVVCode == "" || checkCVVCode(CVVCode) ? "" : "wrong_input"
          }
          type="text"
          placeholder="CVV"
          value={CVVCode}
          onChange={onChangeCVVCode}
        />
        <div></div>
        <input
          className={
            cardExpire == "" || checkExpire(cardExpire) ? "" : "wrong_input"
          }
          type="text"
          placeholder="MM/YY"
          value={cardExpire}
          onChange={onChangeExpire}
        />
      </div>
      <button className="payment_submit" type="submit">
        Submit payment
      </button>
    </form>
  );
};

export default connector(Pay);
