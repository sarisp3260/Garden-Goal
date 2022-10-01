import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { RiEyeCloseLine, RiEyeFill, RiPlantLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordWatch = watch("password");

  const onSubmit = (data) => {
    localStorage.setItem("login", true)
    console.log("Ingreso con exito");
    navigate(`/game/${data.username}/garden`)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto h-auto flex flex-col gap-5 py-5 items-center justify-around bg-[#B4A4FC16] w-full md:w-3/5 rounded-3xl"
    >
      <h1 className="text-white text-xl font-semibold">Log in</h1>

      <div className="flex flex-col gap-5 w-10/12">
        <div>
          <input
            {...register("username", {
              required: true,
              maxLength: { value: 20, message: "The username is too long" },
            })}
            className={`input-border ${errors?.username?.message &&	"border-red-400 focus:ring-red-400"}`}
            type="text"
            placeholder="Username"
          />
          <p className="text-white text-sm font-bold pt-1">{errors?.username?.message}</p>
        </div>

        <div className="relative">
          <input
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "The password is too short" },
            })}
            className={`input-border ${errors?.password?.message &&	"border-red-400 focus:ring-red-400"}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          {passwordWatch && (
            <span className="absolute right-0 inset-y-4 mr-4 text-white"
            onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ?
                <RiEyeFill className="icon-eye" />
                :
                <RiEyeCloseLine className="icon-eye" />
              }
            </span>
          )}
          <p className="text-white text-sm font-bold pt-1">{errors?.password?.message}</p>
        </div>
      </div>

      <button className="btn-white flex items-center gap-3 text-black hover:bg-white/70 hover:text-black">
        Go <RiPlantLine/>
      </button>
      <a href="!/" className="text-white text-center hover:text-purple duration-700">Forgot your password?</a>
    </form>
  );
};

export default AuthForm;
