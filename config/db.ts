import mysql from "serverless-mysql"
const conn = mysql({
	config: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		ssl: {
			rejectUnauthorized: false,
		},
	},
})

const db = async (query: string, values: (string | number)[] | string | number = []) => {
	console.log(process.env.DB_NAME)

	let results = await conn.query(query, values)
	await conn.end()
	return results
}
export default db
