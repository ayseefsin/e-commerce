import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const {
    handleSubmit,

    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

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

  return (
    <form
      className="text-[2vw] flex flex-col p-[6vw]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name</label>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <label>Role</label>
      <select aria-placeholder="Müşteri" {...register("role_id")}>
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};
