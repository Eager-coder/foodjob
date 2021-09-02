import { FC } from "react"
import Logo from "../icons/Logo"
import Link from "next/link"
const Header: FC = () => {
	return (
		<header className="flex justify-between items-center	">
			<div>
				<Logo />
			</div>
			<div>
				<Link href="/login" passHref>
					<a className="text-lg font-bold text-gray-700">Войти</a>
				</Link>
			</div>
		</header>
	)
}
export default Header
