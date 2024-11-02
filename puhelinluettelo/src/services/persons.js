import axios from 'axios'

const url = '/api/persons'

const getAll = () => {
	const request = axios.get(url)
	return request.then(response => response.data)
}

const create = (newObject) => {
	const request = axios.post(url, newObject)
	return request.then(response => response.data)
}

const remove = (id) => {
	const request = axios.delete(`${url}/${id}`)
	return request.then(response => response.data)
}

const update = (changedPerson, id) => {
	const request = axios.put(`${url}/${id}`, changedPerson)
	return request.then(response => response.data)
}

export default { getAll, create, remove, update }
