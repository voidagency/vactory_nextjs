import React from "react";
import Head from "next/head";
import { getProviders, getCsrfToken } from "next-auth/react";
import { getTranslations, getMenus, getEnabledMenus } from "@vactory/next";
import { LoginPage } from "./login";

export const UserPageHandler = ({ node, params }) => {
	if (!node) return null;
	return (
		<React.Fragment>
			<Head>
				<link rel="preload" as="image/svg+xml" href="/icons.svg" />
				<title>{node?.title}</title>
			</Head>
			{node.type === "login" && <LoginPage node={node} params={params} />}
		</React.Fragment>
	);
};

export async function getServerSideProps(context) {
	const enabledMenus = getEnabledMenus();
	const { slug, ...query } = context.query;
	const { locale } = context;
	let joinedSlug = Array.isArray(slug) ? slug.join("/") : slug;

	let i18n = await getTranslations(locale);
	let menus = await getMenus(enabledMenus, locale);

	if ("login" === joinedSlug) {
		return {
			props: {
				node: {
					title: "Login page",
					type: "login",
					providers: await getProviders(),
					csrfToken: await getCsrfToken(context),
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		};
	}

	return {
		notFound: true,
	};
}
