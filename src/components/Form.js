import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter a name"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(18),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Fullname" {...register("fullname")} />
        </div>
        <p>{errors.fullName?.message}</p>
        <div>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="number" placeholder="Age" {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            {...register("password2")}
          />
          <p>{errors.password2?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
