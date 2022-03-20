import React from "react";
import { config } from "../data";

export const NowSection = () => (
	<div className="container min-h-screen mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-5 md:gap-10 p-5 md:p-10 items-center">
		<div>{config.now.doing}</div>
	</div>
);
