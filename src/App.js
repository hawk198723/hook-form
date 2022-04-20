import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "", lastName: "" },
  });
  const onSubmit = (data) => console.log(data);
  const firstName = watch("firstName");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "type field can not be empty",
          })}
          placeholder="First Name"
        />
        <p>{firstName}</p>
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: "type field can not be empty",
            minLength: { value: 4, message: "min length is 4" },
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
