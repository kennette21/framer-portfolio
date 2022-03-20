import { motion } from "framer-motion";
import React from "react";
import { animationProps } from "./svg-animations";

export const ArrowRight = (props: { onClick: () => void }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-10 w-10 -rotate-90 text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-100 transition-colors"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		rotate="90"
		onClick={props.onClick}
	>
		<motion.path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			rotate="90deg"
			d="M19 14l-7 7m0 0l-7-7m7 7V3"
			{...animationProps}
		/>
	</svg>
);
