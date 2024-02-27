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
    <div className=" flex flex-col items-center gap-[2vw] ">
      <div className="flex gap-[5rem]  ">
        <label className="text-[2vw]">
          name:
          <input
            className="rounded border border-[#23A6F0]"
            type="text"
            value={nameInputValue}
            onChange={nameInputHandler}
          />
        </label>
      </div>

      <div>
        <label className="text-[2vw]">
          email:
          <input
            className="rounded border border-[#23A6F0]"
            type="text"
            value={emailInputValue}
            onChange={emailInputHandler}
          />
        </label>
      </div>

      <div>
        <label className="text-[2vw]">
          password:
          <input
            className="rounded border border-[#23A6F0]"
            type="password"
            value={passwordInputValue}
            onChange={passwordInputHandler}
          />
        </label>
      </div>
      <button
        className="bg-[#23A6F0] rounded px-[4vw] py-[2vw] text-[2vw] text-[#ffffff] font-bold "
        type="submit"
      >
        Register
      </button>
    </div>
  );
};
