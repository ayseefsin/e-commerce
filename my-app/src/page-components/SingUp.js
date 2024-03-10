import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";

export const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState(1);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const watchedRole = watch("role");
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/roles"
        );
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Show spinner and disable submit button
      // You can use a loading state to show a spinner

      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        data
      );
      // Redirect user with a message
      alert("You need to click link in email to activate your account!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error message to the user
      // You can use a state to store error message and display it in the form
    }
  };

  const changeHandler = (event) => {
    setRole(event.target.value);
  };

  return (
    <form
      className="text-[1.5rem] flex flex-col p-[6vw] mx-[6vw] border-2 border-[#2A7CC7] shadow-lg font-navText text-[#252B42]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label className="w-[100vw]">
          Name:
          <input
            className="w-[50vw]"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
        </label>

        {errors.name && (
          <p className="text-[red] text-[1rem]">{errors.name.message}</p>
        )}

        <label>
          Email:
          <input
            className="w-[50vw]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
        </label>

        {errors.email && (
          <p className="text-[red] text-[1rem] ">{errors.email.message}</p>
        )}

        <label>
          Password:
          <input
            className="w-[50vw]"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8, // Minimum length is 8 characters
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/|.,><`~\[\]\\\-]).{8,}$/,
                message:
                  "Password must include at least one number, one lowercase letter, one uppercase letter, and one special character",
              },
            })}
          />
        </label>

        {errors.password && (
          <p className="text-[red] text-[1rem]">{errors.password.message}</p>
        )}

        <label>
          Confirm Password:
          <input
            className="w-[50vw]"
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
        </label>

        {errors.confirmPassword && (
          <p className="text-[red] text-[1rem]">
            {errors.confirmPassword.message}
          </p>
        )}

        <label>
          Role:
          <select {...register("role")} onChange={changeHandler}>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
        {watchedRole === 2 && (
          <>
            <label>
              Store Name:
              <input
                {...register("store_name", { required: true, minLength: 3 })}
              />
              {errors.store_name && (
                <span>
                  This field is required and must be at least 3 characters
                </span>
              )}
            </label>
            <label>
              Store Phone:
              <input
                {...register("store_phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              {errors.store_phone && <span>Invalid phone number</span>}
            </label>
            <label>
              Store Tax ID:
              <input
                {...register("store_tax_id", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
              {errors.store_tax_id && (
                <span>Invalid tax ID (format: TXXXXVXXXXXX)</span>
              )}
            </label>
            <label>
              Store Bank Account:
              <input {...register("store_bank_account", { required: true })} />
              {errors.store_bank_account && <span>This field is required</span>}
            </label>
          </>
        )}
        <div className="flex items-center">
          <button
            className="bg-main-blue w-[25vw] text-[white] font-bold rounded border-2 border-[#2A7CC7] shadow-lg py-[2vw] m-[2vw] align-middle "
            type="submit "
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
