export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url) => {
	if (typeof window !== "undefined" && typeof window.dataLayer !== "undefined") {
		window.dataLayer.push({
			event: "pageview",
			page: url,
		});
	}
};
