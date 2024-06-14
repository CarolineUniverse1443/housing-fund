import { mainApi } from '@/api/main-api.js';
import { userFormatter } from '@/services/formatters.js';

export default {
	state:
	{
		users: [],
	},
	mutations:
	{
		setUsers(state, users)
		{
			state.users = users;
		}
	},
	actions:
	{
		// тут будет происходить запрос из mainApi для получения инфы юзера
		async GET_USER({ commit }, id)
		{
			try
			{
				const response = await mainApi.getUser(id);
				const users = await response.json();
				const formattedUser = users.map(user => userFormatter(user));
				commit('setUsers', formattedUser);
			}
			catch(e)
			{
				console.log(e);
			}
		}
	}
};