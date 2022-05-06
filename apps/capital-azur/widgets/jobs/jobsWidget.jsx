import React from "react"

import JobFilter from "../../components/job/job_filter"
import JobList from "../../components/job/job_list"
import { jobs } from "./data"

export const JobsWidget = () => {
	return (
		<div>
			<JobFilter />
			<JobList jobs={jobs} />
		</div>
	)
}

export default JobsWidget
