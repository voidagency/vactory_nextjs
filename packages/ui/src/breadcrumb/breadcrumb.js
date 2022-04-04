/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "../link/link"
import { ThemeContext } from "../context/context"
import { Icon } from "../icon/icon"

export const Breadcrumb = ({
	homeUrl,
	className = "",
	variant = "default",
	pages = [],
}) => {
	const { breadcrumb } = useContext(ThemeContext)
	return (
		<div className={clsx(breadcrumb[variant].wrapper, className)}>
			<ol role="list" className={breadcrumb[variant].list}>
				{homeUrl && (
					<li className={breadcrumb[variant].listElement}>
						<Link href={homeUrl} className={breadcrumb[variant].link}>
							<Icon
								id={breadcrumb[variant].homeIcon.id}
								className={breadcrumb[variant].homeIcon.className}
								width={breadcrumb[variant].homeIcon.width}
								height={breadcrumb[variant].homeIcon.height}
							/>
						</Link>
					</li>
				)}
				{pages.map((page, index) => {
					return (
						<li key={page.id} className={breadcrumb[variant].listElement}>
							{index == 0 && !homeUrl ? null : (
								<Icon
									className={breadcrumb[variant].separateIcon.className}
									id={breadcrumb[variant].separateIcon.id}
									width={breadcrumb[variant].separateIcon.width}
									height={breadcrumb[variant].separateIcon.height}
								/>
							)}

							<Link
								href={page.href}
								className={
									page.current ? breadcrumb[variant].linkActive : breadcrumb[variant].link
								}
								aria-current={page.current ? "page" : undefined}
							>
								{page.name}
							</Link>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
