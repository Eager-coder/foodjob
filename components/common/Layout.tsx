import { FC } from "react"
import Header from "./Header"

const Layout: FC = ({ children }) => {
	return (
		<div className="max-w-7xl mx-auto sm:px-8 px-4">
			<Header />
			<main>{children}</main>
		</div>
	)
}
export default Layout
