import React from "react";

const CardCollection = ({card}) => {
  return (
    <div className="relative w-64 h-96 ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          className="w-64 absolute top-0"
          src="https://dsm01pap007files.storage.live.com/y4m9nkxqdVDQtdK3GgFqcVfbbVYKX0R5muGVxLAjxwkJeyZzm3hFMIpdhe-QWPuu-Uzycwc2_PEzghu3AnT5whG68wmoXI8tav4tUO7XFNXm-Uz1Ghso1Nn1ueKyNod2WWaCYckG2fwRNYK8SIiz2wtiInLJ5w-zWBpNklfd-815qL1B0jcV8iCMVaGbOHFYacj?width=1184&height=1709&cropmode=none"
          alt="Card-Light"
        />
        <img
          className="w-24 z-30"
          src={card.img}
          alt="Card-Light"
        />
      </div>
      <div className="text-white">
        <span className="absolute bottom-10 inset-x-8 flex text-lg font-medium z-30">
          {card.name}
        </span>
        <p className="absolute bottom-10 inset-x-44 flex text-xl font-bold">
          {card.level}
        </p>

        <div className="absolute -top-4 -right-4 bg-purple w-16 h-16 flex justify-center items-center rounded-full text-xl font-bold">
          X {card.quantity}
        </div>
      </div>
    </div>
  );
};

export default CardCollection;
