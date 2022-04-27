import React from "react"
import { Banner } from "./banner"
import bannerImg from "../../public/img/banner/banner.png"

const data = {
	id: 1,
	image: bannerImg,
	title: "Résultats de la recherche",
}

export const Default = () => <Banner data={data} />

export default {
	title: "Dynamic Fields/Banner",
}
