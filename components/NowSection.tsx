import React from "react";
import { config } from "../data";

export const NowSection = () => (
	<div className="absolute container min-h-screen mx-auto items-center right-0 overflow-hidden">
		<div>{config.now.doing}</div>
	</div>
);
