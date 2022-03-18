import React , {useState } from "react"
import { Pagination } from "./pagination"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {

	const [pager, setPager] = useState(1);
	const handlePaginationChange = (selected) => {
		setPager(selected);
	  };
	  
	return (
		<div className="relative">
			<PlaceholderSections />
			<Pagination
         		 total={12}
          		 defaultPageSize={9}
                 pageSize={9}
                 current={pager}
          		 onChange={handlePaginationChange}
        />
		</div>
	)
}

export default {
	title: "Components/Pagination",
}