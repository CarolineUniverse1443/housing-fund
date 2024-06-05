import { mainApi } from '@/api/main-api.js';

export default {
	state:
	{
		users: [],
	},
	mutations:
	{
		setUser(state, users)
		{
			state.users = users;
		}
	},
	actions:
	{
		// тут будет происходить запрос из mainApi для получения инфы юзера
		async GET_USER({ commit })
		{
			try
			{
				const response = await mainApi.getUser();
				const users = await response.json();
				const formattedUsers = users.map((user) =>
				{
					return {
						id: user.id,
						name: user.name,
						nickname: user.username,
						email: user.email,
						phone: user.phone,
					};
				});
				commit('setUser', formattedUsers);
			}
			catch(e)
			{
				console.log(e);
			}
		}
	}
};