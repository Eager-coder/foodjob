import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/common/Layout"
import FacebookIcon from "../components/icons/FacebookIcon"
import GoogleIcon from "../components/icons/GoogleIcon"

const Register: NextPage = () => {
	return (
		<Layout>
			<div className="max-w-5xl flex mx-auto md:bg-white mt-16 p-0 md:p-14 md:shadow-md mdLrounded-xl md:space-x-14">
				<div className="hidden md:block w-1/2 relative">
					<Image src="/images/woman-and-phone.svg" width={380} height={373} />
				</div>
				<div className="w-full md:w-1/2">
					<h1 className="text-center md:text-left font-bold text-2xl mb-4">Войти</h1>
					<p className="text-sm text-gray-400 mb-4">
						Впервые в FoodJobs?
						<Link href="/register">
							<a className="text-primary ml-2">Зарегистрироваться</a>
						</Link>
					</p>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="email">
							Email адрес
						</label>
						<input className="w-full h-10 pl-3 border border-gray-300 rounded-md" type="email" id="email" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium text-sm mb-2" htmlFor="password">
							Password
						</label>
						<input className="w-full h-10 pl-3 border border-gray-300 rounded-md" type="password" id="password" />
					</div>
					<button className="w-full h-10 bg-primary rounded-full text-center font-bold text-lg text-gray-50">
						Войти
					</button>
					<div className="w-full h-[1px] bg-gray-300 my-6"></div>
					<div className="flex space-x-3">
						<div className="w-1/2 h-10 flex justify-center items-center border border-gray-300 rounded-md">
							<FacebookIcon />
							<span className="text-xs md:text-sm font-semibold ml-3">Войти с Facebook</span>
						</div>
						<div className="w-1/2 h-10 flex justify-center items-center border border-gray-300 rounded-md">
							<GoogleIcon />
							<span className="text-xs md:text-sm font-semibold ml-3">Войти с Google</span>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Register
