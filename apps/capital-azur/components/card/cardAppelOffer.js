import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "@vactory/ui/link"
import { ThemeContext } from "@vactory/ui/theme-context"

const Card = ({
	variant = "appelOffre",
	title,
	excerpt,
	image,
	urlTag,
	url,
	urlContent,
	icon,
	className,
	category,
	...props
}) => {
	const { card } = useContext(ThemeContext)
	return (
		<div className={clsx(card[variant].wrapper, className)} {...props}>
			<div className={card[variant].image}>{image}</div>
			<div className={card[variant].body}>
				<Link href={url} className="block">
					<>
						{title && <h3 className={card[variant].title}>{title}</h3>}
						{urlTag ? (
							<Link href={urlTag} className={card[variant].tag}>
								{category}
							</Link>
						) : (
							<p>
								<span className={card[variant].tag}>{category}</span>
							</p>
						)}
						{excerpt && (
							<p>
								<span className={card[variant].excerpt}>{excerpt}</span>
							</p>
						)}
					</>
				</Link>
				{url && urlContent && (
					<Link href={url} className={card[variant].link}>
						{urlContent}
					</Link>
				)}
			</div>
		</div>
	)
}

export { Card }
