import React from "react"

export const Pagination = (props) => {
    const { total, pageSize, current, onChange } = props;
    const count = Math.ceil(total / pageSize);
    return (
		<nav className="mt-20 mx-20 border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
			<div className="-mt-px w-0 flex-1 flex">
                <button
                    disabled={current - 1 < 1}
                    onClick={() => onChange(current - 1)}
					className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
				>
					{/* <!-- Heroicon name: arrow-narrow-left --> */}
					<svg
						className="ltr:mr-3 rtl:ml-3 h-5 w-5 text-gray-400 transform rtl:-scale-x-100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Previous
				</button>
			</div>
			<div className="hidden md:-mt-px md:flex">
				{Array(count)
					.fill()
					.map((_, i) => (
                        <button
                            key={i+1}
                            onClick={() => onChange(i+1)}
							className={`${
								i+1 === current
									? "border-indigo-500 text-indigo-600" // current
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" // default
							} border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
						>
							{i+1}
						</button>
					))}
			</div>
			<div className="-mt-px w-0 flex-1 flex justify-end">
                <button
                    disabled={current + 1 > count}
                    onClick={() => onChange(current + 1)}
					className="border-t-2 border-transparent pt-4 ltr:pl-1 rtl:pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
				>
					Next
					{/* <!-- Heroicon name: arrow-narrow-right --> */}
					<svg
						className="ltr:ml-3 rtl:mr-3 h-5 w-5 text-gray-400 transform rtl:-scale-x-100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};
