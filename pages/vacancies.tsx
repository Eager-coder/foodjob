import { NextPage } from "next"
import Image from "next/image"
import CustomLink from "../components/common/CustomLink"
import Layout from "../components/common/Layout"
import HeartIcon from "../components/icons/HeartIcon"
import SearchIcon from "../components/icons/SearchIcon"

const Vacancies: NextPage = () => {
	return (
		<Layout>
			<div className="mt-16">
				<h1 className="text-2xl sm:text-4xl font-bold mb-6">Актуальные вакансии</h1>
				<div>
					<div className="mb-6">
						<div className="h-10 w-52 flex items-center px-3 py-2 border border-gray-300 rounded-lg bg-white">
							<SearchIcon className="w-4 h-4 text-gray-500 mr-3" />
							<input className="border-none w-full h-full" placeholder="Поиск" type="text" />
						</div>
						{/* TODO: select boxes */}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from(Array(15).keys()).map(key => (
							<VacancyCard key={key} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Vacancies

const VacancyCard = () => (
	<div className="flex justify-between w-full bg-white rounded-2xl shadow-md p-5">
		<div>
			<h2 className="mb-4 text-gray-700 text-lg font-semibold">Старший официант</h2>
			<ul className="mb-6 list-disc list-inside text-[14px] text-gray-600">
				<li>Полный день</li>
				<li>Полный день</li>
				<li>Полный день</li>
			</ul>
			<CustomLink href="/" type="secondary" size="small">
				Подробно
			</CustomLink>
		</div>
		<div className="flex flex-col items-end">
			<HeartIcon className="text-gray-500 mb-4 cursor-pointer" />
			<div className="mb-2 rounded-full border border-primary w-10 h-10 overflow-hidden">
				<Image src="/images/image 2.png" width={40} height={40} />
			</div>
			<p className="text-gray-600 font-light text-sm">
				Ресторан <span className="font-medium">Vivoro</span>
			</p>
			<span className="mt-auto text-sm text-gray-500">2 дня назад</span>
		</div>
	</div>
)
