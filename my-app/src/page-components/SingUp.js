import { useState } from "react";

export const SignUp = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const nameInputHandler = (event) => {
    setNameInputValue(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEmailInputValue(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setPasswordInputValue(event.target.value);
  };
  return (
    <div>
      <label>
        name:
        <input type="text" value={nameInputValue} onChange={nameInputHandler} />
      </label>
      <label>
        email:
        <input
          type="text"
          value={emailInputValue}
          onChange={emailInputHandler}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          value={passwordInputValue}
          onChange={passwordInputHandler}
        />
      </label>
    </div>
  );
};
