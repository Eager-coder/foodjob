import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import CustomLink from "../components/common/CustomLink"
import Layout from "../components/common/Layout"
import HeroImage from "../public/images/hero.svg"

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="lg:flex justify-between items-center mt-20">
				<div className="lg:max-w-md lg:w-1/2 lg:mb-0 mb-9">
					<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-800 font-bold mb-6">
						Найдите лучшую работу в сфере общественного питания
					</h1>
					<div className="max-w-md flex sm:space-x-6 space-x-3">
						<CustomLink href="/vacancies" type="primary">
							Найти работу
						</CustomLink>
						<CustomLink href="/" type="secondary">
							Подать объявление
						</CustomLink>
					</div>
				</div>
				<div className="lg:max-w-[calc(50%-50px)] lg:block flex justify-center">
					<Image src={HeroImage} width={608} height={442} />
				</div>
			</div>
		</Layout>
	)
}

export default Home
