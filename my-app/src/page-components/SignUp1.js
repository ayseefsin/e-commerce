import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import axios from "axios";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const password = watch("password", "");

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
    setLoading(true);
    try {
      await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        data
      );
      // Assuming successful submission redirects to a different page
      alert("You need to click link in email to activate your account!");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, show error message to user, etc.
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register("name", { required: true, minLength: 3 })} />
        {errors.name && errors.name.type === "required" && (
          <span>Name is required.</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span>Name must be at least 3 characters long.</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span>Email is required.</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Invalid email address.</span>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span>Password is required.</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Password must be at least 8 characters long.</span>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <span>
            Password must include at least one number, one lowercase letter, one
            uppercase letter, and one special character.
          </span>
        )}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password,
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <span>Confirm password is required.</span>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <span>Passwords do not match.</span>
          )}
      </div>
      <div>
        <label>Role:</label>
        <select {...register("role_id")}>
          {roles.map((role) => (
            <option
              key={role.id}
              value={role.id}
              selected={role.name === "Müşteri"}
            >
              {role.name}
            </option>
          ))}
        </select>
      </div>
      {watch("role_id") === "Mağaza" && (
        <>
          {/* If role_id is "Mağaza", render the following JSX */}
          <div>
            <label>Store Name:</label>
            <input
              {...register("store.name", { required: true, minLength: 3 })}
            />
            {errors.store?.name && errors.store.name.type === "required" && (
              <span>Store name is required.</span>
            )}
            {errors.store?.name && errors.store.name.type === "minLength" && (
              <span>Store name must be at least 3 characters long.</span>
            )}
          </div>
          <div>
            <label>Store Phone:</label>
            <input
              {...register("store.phone", {
                required: true,
                pattern: /^(0\d{2,3})-\d{3}-\d{4}$/,
              })}
            />
            {errors.store?.phone && errors.store.phone.type === "required" && (
              <span>Store phone is required.</span>
            )}
            {errors.store?.phone && errors.store.phone.type === "pattern" && (
              <span>Invalid phone number.</span>
            )}
          </div>
        </>
      )}
    </form>
  );
};
