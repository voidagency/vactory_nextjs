import React from "react"

import JobFilter from "../../components/job/job-filter"
import JobList from "../../components/job/job-list"

const jobs = [
	{
		title: "Contrôleur de gestion",
		excerpt:
			"Budget et contrôle budgétaire, Participer à la procédure budgétaire et aux estimés de la banque, Procéder à l'actualisation des plans d’actions (contrat entreprise) et des estimés budgétaires, Analyser les écarts réalisations/objectifs, Production des reporting locaux et suivi d’activité, Participer à l’élaboration des reporting d’activité, Contrôler les règles de passage entre",
		category: "FINANCE, COMPTABILITÉ ET CONTRÔLE DE GESTION",
		location: "CASABLANCA",
		date: "10/12/2021",
		url: "/about",
	},
	{
		title: "Contrôleur de gestion",
		excerpt:
			"Budget et contrôle budgétaire, Participer à la procédure budgétaire et aux estimés de la banque, Procéder à l'actualisation des plans d’actions (contrat entreprise) et des estimés budgétaires, Analyser les écarts réalisations/objectifs, Production des reporting locaux et suivi d’activité, Participer à l’élaboration des reporting d’activité, Contrôler les règles de passage entre",
		category: "FINANCE, COMPTABILITÉ",
		location: "CASABLANCA",
		date: "10/12/2021",
		url: "/about",
	},
]

export const JobsWidget = () => {
	return (
		<div>
			<JobFilter />
			<JobList jobs={jobs} />
		</div>
	)
}

export default JobsWidget
