// нужен для базовой настройки запросов
// этот класс можно наследовать, поэтому будут доступны все его свойства и методы
export class BaseApi
{
	// урл, куда будут отправляться запросы
	baseUrl = 'https://jsonplaceholder.typicode.com'
	counstuctor() {}

	// устанавливает заголовки для запроса
	getDefaultOptions()
	{
		const headers = {};
		Object.entries({
			"Content-Type": "application/json",
			"Cache": "no-cache",
		}).map(([header,value]) =>
		{
			if (typeof value !== 'undefined')
				headers[header] = value;
		});

		return {
			mode: "cors",
			headers
		};
	}
}