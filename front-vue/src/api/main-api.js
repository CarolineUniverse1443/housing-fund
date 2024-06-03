import { BaseApi } from './base-api.js';

//наследуется от класса BaseApi, поэтому можно вызвать его метод
class MainApi extends BaseApi
{
	getUser()
	{
		return fetch(this.baseUrl,{
			...this.getDefaultOptions(),
			method: 'GET'
		});
	}
}
export const mainApi = new MainApi();