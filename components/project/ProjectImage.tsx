import { motion } from "framer-motion";
import React from "react";

export const ProjectImage = (props: {
	url: string;
	animatedUrl?: string;
	alt: string;
	layoutIndex: number;
	type: "card" | "modal";
}) => {
	return (
		<motion.div
			className="rounded-t-md relative min-h-0 overflow-hidden"
			layoutId={`project-card-image-${props.layoutIndex}`}
			style={{ height: props.type === "card" ? 200 : "40%" }}
		>
			<picture>
				<motion.img
					className="w-full object-cover rounded-t-md h-full"
					src={
						props.type === "modal"
							? props.animatedUrl || props.url
							: props.url
					}
					alt={props.alt}
					style={{ maxHeight: 300 }}
				/>
				<source srcSet={`${props.url}.webp`} type="image/webp" />
				<source srcSet={`${props.url}.jpeg`} type="image/jpeg" />
			</picture>
			<div
				className={`bg-gradient-to-t from-white absolute inset-0 ${
					props.type === "card"
						? "dark:from-gray-800"
						: "dark:from-gray-700"
				}`}
			/>
		</motion.div>
	);
};
