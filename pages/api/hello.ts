import type { NextApiRequest, NextApiResponse } from "next"
import db from "../../config/db"

type Data = {
	name: string
}

export default async function hello(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const data = await db(`INSERT INTO users (email, password) VALUES  (?, ?) `, ["asdf", 12345])
		console.log(data)
		res.status(200).json({ name: "John Doe" })
	} catch (error) {
		console.log(error.message)
		res.status(500).end("Something went wrong")
	}
}
