import Link from "next/link"
import { FC } from "react"
import cn from "classnames"

interface Props {
	href: string
	type?: "primary" | "secondary"
	size?: "default" | "small"
}

const CustomLink: FC<Props> = ({ href, type = "primary", size = "default", children }) => {
	return (
		<Link href={href} passHref>
			<a
				className={cn(
					"w-[max-content] flex items-center justify-center font-semibold rounded-full border-2 border-primary",
					{
						"bg-primary text-gray-50": type === "primary",
						"bg-transparent text-gray-700": type === "secondary",
						"sm:h-12 h-10 sm:px-7 px-4 sm:text-lg text-sm": size === "default",
						"sm:h-10 h-8 sm:px-7 px-4": size === "small",
					},
				)}>
				{children}
			</a>
		</Link>
	)
}

export default CustomLink
