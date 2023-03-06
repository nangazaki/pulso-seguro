
import axios from "axios"

const config = {
	'headers': {
		"Accept": "application/json, text/plain, */*",
		"Authorization": `Bearer 74|7wTIudzGqG0qsZhynjChaMSGzJgCjhRBkphrxhnE`
	}
}



axios.get("http://localhost:8000/api/medicos", config).then(res => {
	const dados = Object.values(res.data)

	const docotor = dados.filter((doc) => { return doc.municipio == 'Luanda' })

	console.log(docotor)
})