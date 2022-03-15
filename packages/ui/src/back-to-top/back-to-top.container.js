import React from "react";
import { BaseBackToTop } from "./back-to-top";
import { Icon } from "@vactory/ui/icon";

export const BackToTop = ({ icon, ...rest }) => {
	let buttonIcon = <Icon id="chevron-up-arrow" width="36" height="36" />;
	if (icon) {
		buttonIcon = icon;
	}
	return (
		<BaseBackToTop
			showOnScrollUp={true}
			showAt={40}
			speed={1500}
			easing="easeInOutQuint"
			className=" border border-gray-50 bg-white bottom-10 fixed hover:text-blue-500 ltr:right-10 p-3 rounded-full rtl:left-10 shadow-2xl transition"
			{...rest}
		>
			{buttonIcon}
		</BaseBackToTop>
	);
};

export { BaseBackToTop };
