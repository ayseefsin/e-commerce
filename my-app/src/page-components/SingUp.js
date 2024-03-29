import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: 3,
      store: {
        name: "",
        phone: 0,
        tax_no: "",
        bank_account: "",
      },
    },
  });
  const watchedRole = watch("role_id");
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
      const { confirmPassword, ...postData } = data;
      // Show spinner and disable submit button
      // You can use a loading state to show a spinner
      console.log(postData);
      axios
        .post("https://workintech-fe-ecommerce.onrender.com/signup", postData)
        .then((response) => {
          console.log("response", response);
          toast(response.data.message);
          reset(); // Reset the form after successful submission
          navigate(-1);
        })
        .catch((error) => {
          console.log("error", error);
          toast("Cannot create user!");
        });

      // Redirect user with a message
      // alert("You need to click link in email to activate your account!");
    } catch (error) {
      console.log("Error submitting form:", error);
      // Show error message to the user
      // You can use a state to store error message and display it in the form
    }
  };

  return (
    <form
      className="text-[1.5rem] flex flex-col p-[6vw] mx-[6vw] border-2 border-[#2A7CC7] shadow-lg font-navText text-[#252B42]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col px-[8vw] gap-[1vw] ">
        <div className="flex justify-between ">
          <label>Name: </label>
          <input
            className="w-[40rem] border-2 border-[#2A7CC7] rounded "
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
        </div>

        {errors.name && (
          <p className="text-[red] text-[1rem]">{errors.name.message}</p>
        )}
        <div className="flex justify-between">
          <label>Email: </label>
          <input
            className="w-[40rem] border-2 border-[#2A7CC7] rounded "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        {errors.email && (
          <p className="text-[red] text-[1rem] ">{errors.email.message}</p>
        )}
        <div className="flex justify-between">
          <label>Password: </label>
          <input
            className="w-[40rem] border-2 border-[#2A7CC7] rounded "
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
        </div>

        {errors.password && (
          <p className="text-[red] text-[1rem]">{errors.password.message}</p>
        )}
        <div className="flex justify-between">
          <label>Confirm Password: </label>
          <input
            className="w-[40rem] border-2 border-[#2A7CC7] rounded "
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-[red] text-[1rem]">
            {errors.confirmPassword.message}
          </p>
        )}
        <div className="flex gap-[13.5vw] ">
          <label>Role: </label>
          <select
            className="border-2 border-[#2A7CC7] rounded"
            {...register("role_id")}
          >
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        {watchedRole == 2 && (
          <div className="text-[1.25rem] ml-[2rem] flex flex-col gap-[1vw] ">
            <div className="flex justify-between">
              <label>Store Name: </label>
              <input
                className="w-[42vw] border-2 border-[#2A7CC7] rounded"
                {...register("store.name", { required: true, minLength: 3 })}
              />
            </div>
            {errors.store_name && (
              <span className="text-[red] text-[1rem]">
                This field is required and must be at least 3 characters
              </span>
            )}
            <div className="flex justify-between">
              <label>Store Phone:</label>
              <input
                className="w-[42vw] border-2 border-[#2A7CC7] rounded"
                {...register("store.phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
            </div>
            {errors.store_phone && (
              <span className="text-[red] text-[1rem]">
                Invalid phone number
              </span>
            )}
            <div className="flex justify-between">
              <label>Store Tax ID: </label>
              <input
                className="w-[42vw] border-2 border-[#2A7CC7] rounded"
                {...register("store.tax_no", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
            </div>
            {errors.store_tax_id && (
              <span className="text-[red] text-[1rem]">
                Invalid tax ID (format: TXXXXVXXXXXX)
              </span>
            )}
            <div className="flex justify-between">
              <label>Store Bank Account: </label>
              <input
                className="w-[42vw] border-2 border-[#2A7CC7] rounded"
                {...register("store.bank_account", { required: true })}
              />
            </div>
            {errors.store_bank_account && (
              <span className="text-[red] text-[1rem]">
                This field is required
              </span>
            )}
          </div>
        )}
        <div className="flex items-center">
          <button
            disabled={!isValid}
            className="bg-main-blue w-[25vw] text-[white] font-bold rounded border-2 border-[#2A7CC7] shadow-lg py-[2vw] m-[2vw] align-middle "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
