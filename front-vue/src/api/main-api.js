import { BaseApi } from './base-api.js';

//наследуется от класса BaseApi, поэтому можно вызвать его метод
class MainApi extends BaseApi
{
	getUser(id)
	{
		return fetch(`${this.baseUrl}?id=${id}`,{
			...this.getDefaultOptions(),
			method: 'GET'
		});
	}
}
export const mainApi = new MainApi();