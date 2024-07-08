export const userFormatter = (user) =>
{
	return {
		id: user.id,
		name: user.name,
		nickname: user.username,
		email: user.email,
		phone: user.phone,
	};
};
