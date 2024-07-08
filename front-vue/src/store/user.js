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
		},

		async FETCH_USERS({ commit })
		{
			try
			{
				const response = await mainApi.fetchUsers();
				const users = await response.json();
				const formattedUsers = users.map(user => userFormatter(user));
				commit('setUsers', formattedUsers);
			}
			catch(e)
			{
				console.log(e);
			}
		}
	}
};