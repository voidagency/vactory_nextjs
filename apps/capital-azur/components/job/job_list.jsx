import React from "react"
import JobCard from "../card/JobCard"

export const jobList = ({ jobs }) => {
	return (
		<div>
			{jobs.map((job) => {
				return (
					<JobCard
						title={job.title}
						excerpt={job.excerpt}
						category={job.category}
						location={job.location}
						date={job.date}
						url={job.url}
					/>
				)
			})}
		</div>
	)
}

export default jobList
