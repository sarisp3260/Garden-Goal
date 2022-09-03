import React from "react";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

const GreenFooter = () => {
  return (
    <div className="h-max md:min-h-screen flex flex-col justify-between">
      <div className="flex gap-3 flex-wrap items-center justify-center text-center pt-10 md:pt-20">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          Collect all types of plants and cards while your challenge yourself to learn
        </h1>
        <Link to="/login" className="btn-primary">Go to garden</Link>
      </div>

      <div className="h-2/4">
        <div className="relative">
					<img
						className=""
						src="https://dsm01pap007files.storage.live.com/y4maQ8XcTPzSrpL1ER30goNUjU3WGUpDqGbZYFP_TwwQ_VS7bPlg8MgOU-LMBn_HYp8oJWkiOCr4Ot-m0B_yGbQ9g_PX3z2nZmifWGZWyzbGMHUuF-6PAVD4hjC7et1wCcaPngPmy4hunGmYCOzXVAhI5ohOlR_wasVR5b0VxOxPyVfKQtcAt2Je8NmxsCTGVWt?width=1761&height=459&cropmode=none"
						alt="grass"
					/>

					<img className="absolute bottom-0 right-4 w-24 xs:w-36 z-20" src="https://dsm01pap007files.storage.live.com/y4mL6vhCGhU6JYt2brWwwmMMTi7JZM_CmcHTekpEyGacy2cdHwwpOxDCn3P82Dj42VLYYekt8AtkQSl9eNVi6RqL-rSE8VEY9mSSPPP9-CZVZaDTBgi5fO-XEzXDbQx2lQ5z6hLbgB6ZkZcYHpqXeUNg1DA46XXZOPll8lnsDhZ3-GPMYqT2wqS5pW5M8p0xfXs?width=991&height=1589&cropmode=none" alt="rosandra" />

					<img className="absolute bottom-5 left-4 xs:left-1/4 w-10 xs:w-16 z-20" src="https://dsm01pap007files.storage.live.com/y4mQg9DBr4lG0EpGuU0lnGXFVzUxYsRKzvnZ5rmFPfYoYiMYke1Jw6059-JOYN_SWWYetHyRULZBLxHz1W_vlwMcbWaqhaqsxlKVRJf8AcNDo3xhF_T99UPvfN1MrAJLqRMP4l4Ym9BylwtPmqjgqkH4ZF4TNG1oe_gbTOeeXJaXNLgsREALwFeeBqOhZbnVx_v?width=411&height=774&cropmode=none" alt="babyrosandra" />
				</div>

        <div className="relative bg-gradient-to-b from-[#377D00] to-[#54A206] text-white pt-5">
          <div className="absolute -top-5 bg-[#377D00] text-red-600 w-full z-30">
            -
          </div>
          <div className="flex flex-wrap items-center justify-around text-center pb-8">
            <span className="text-2xl font-medium px-2">
              The aim of <strong>Garden Goal</strong> is to help you focus on your goal, so sow your future here.
            </span>
            <div className="flex flex-col items-center gap-4">
              <span className="text-lg font-medium">Social media</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/somoseducamas/"
                  target="_blank"
                  className="rounded-full"
                >
                  <BsFacebook className="text-3xl hover:scale-110 duration-700 hover:text-blueDark/80" />
                </a>
                <a
                  href="https://www.instagram.com/somoseducamas/"
                  target="_blank"
                >
                  <BsInstagram className="text-3xl hover:scale-110 duration-700 hover:text-blueDark/80" />
                </a>
                <a href="https://github.com/programateacademy" target="_blank">
                  <BsGithub className="text-3xl hover:scale-110 duration-700 hover:text-blueDark/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenFooter;
