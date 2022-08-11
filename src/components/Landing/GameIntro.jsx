import React from "react";

const GameIntro = () => {
  return (
    <>
      <div className="bg-purple grid place-items-center grid-cols-1 py-5 px-5 md:px-10 md:grid-cols-2 text-white font-montserrat">
				<picture className="w-1/2">
					<img src="https://dsm01pap007files.storage.live.com/y4mB-akb9m5aHTJe27ZqkjD2R23jc6VlgeRjjzaBQxe3GDwQGoIwnxk7hBa7OTGEXc7VDtLdPEaOsczDawHL9KK0M0M1_iCH1LH9fyWblEsrIs4h491Nsy2xDo_f3_zuQ21eKO1pA5s1ikACxDOky4f2ZngFh5J7eYepPTxNgCenBqlj-ebUfVxidriao4sEUqZ?width=495&height=375&cropmode=none" alt="" />
				</picture>
				<div className="">
					<h1 className="text-4xl pb-2">Welcome to the game</h1>
					<p>
						This is a game where you can play as a character and explore the world.
						You can move around the world and interact with different characters.
						You can also interact with different items.
					</p>
				</div>
			</div>

      <div className="relative grid place-items-center grid-cols-1 py-5 px-5 md:px-10 md:grid-cols-2 text-white font-montserrat" style={{backgroundImage: 'url("https://dsm01pap007files.storage.live.com/y4mlwIrmt4sKsDBo_EY6KhJQwKmkF4g3-agTBoBxfUvyI5aG2DMpQ716FsBjqZOozu1YFrQxZTWMW233ZKXb0UP34KsRbzFJcfk6cnhD9Gw8gTn-tjsbRlm4cvmHcC18wVXZTqcGnqjg-ECE5M0mZgfUabRBUMk9DMWTflH7gt6TskhMkvw44ryrjF-209vWGs_?width=1354&height=471&cropmode=none")'}}>
				<div className="absolute inset-0 bg-gradient-to-t from-purple to-primary bg-cover -z-10">
				</div>
					<div>
						<p>
							This is a game where you can play as a character and explore the world.
							You can move around the world and interact with different characters.
							You can also interact with different items.
							This is a game where you can play as a character and explore the world.
							You can move around the world and interact with different characters.
							You can also interact with different items.
						</p>
					</div>
					<picture className="w-1/2">
						<img src="https://dsm01pap007files.storage.live.com/y4mgN6g0DNTcV1WdGJcQNhm9vfpY_wojSYwP4u9oqRlVdS35qsXfDJ_U3p_xstOt_LJ170H-s9YCtI8mKxy8zairLOOVAg-OuKRgppEbPyRuQhoE4w7Uplnm_4ihhUO9IJM480iYTHgvW-40IVthXnrE7YxhT_nGpgFgeRhKbVLJ-bNKkhBvjfHRBK2Oqdjn9Oq?width=490&height=404&cropmode=none" alt="" />
					</picture>
			</div>
    </>
  );
};

export default GameIntro;
