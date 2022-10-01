import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordWatch = watch("password");
  const confirmPasswordWatch = watch("confirmpassword");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="FormularioRegistro m-auto flex flex-col py-5 gap-5 items-center justify-around bg-[#B4A4FC16] w-full md:w-3/5 h-auto rounded-3xl"
    >
      <h1 className="text-blueDark text-xl font-semibold ">Register</h1>

      <div className="flex flex-col gap-5 w-10/12">
        <div>
            <input
            {...register("name", {
                require: "This file is required",
                maxLength: { value: 20, message: "The name is too long" },
            })}
            className={`input-light ${errors?.name?.message &&	"border-red-400 focus:ring-red-400"}`}
            type="text"
            placeholder="Name"
            />
            <p className="text-blueDark text-sm font-bold pt-1">{errors?.name?.message}</p>
        </div>

        <div>    
            <input
            {...register("email", {
                require: "This file is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                }
            })}
            className={`input-light ${errors?.email?.message &&	"border-red-400 focus:ring-red-400"}`}
            type="email"
            placeholder="E-mail"
            />
            <p className="text-blueDark text-sm font-bold pt-1">{errors?.email?.message}</p>
        </div>

        <div className="relative">
            <input
            {...register("password", {
                require:"This file is required",
                minLength: { value: 8, message: "The password is too short" },
            })}
            className={`input-light ${errors?.password?.message &&	"border-red-400 focus:ring-red-400"}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            />
            {passwordWatch && (
            <span className="absolute right-0 inset-y-4 mr-4 text-primary"
            onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ?
                <RiEyeFill className="icon-eye" />
                :
                <RiEyeCloseLine className="icon-eye" />
              }
            </span>
            )}
            <p className="text-blueDark text-sm font-bold pt-1">{errors?.password?.message}</p>
        </div>

        <div className="relative">
            <input
            {...register("confirmpassword", {
                require:"This file is required",
                minLength: { value: 8, message: "The password is too short" },
                /* validate: (value) => value === watch("password") || "Passwords do not match", */
            })}
            className={`input-light ${errors?.confirmpassword?.message &&	"border-red-400 focus:ring-red-400"}`}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            />
            
            {confirmPasswordWatch && (
              <span className="absolute right-0 inset-y-4 mr-4 text-primary"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {
                showConfirmPassword ?
                <RiEyeFill />
                :
                <RiEyeCloseLine />
              }
            </span>
            )}
            <p className="text-blueDark text-sm font-bold pt-1">{errors?.confirmpassword?.message}</p>
        </div>
      </div>

      <button className="btn-primary duration-300">Register</button>
      <b className="text-base text-blueDark text-center hover:opacity-90">
        Do you have any account?
      </b>
    </form>
  );
};

export default RegisterForm;
