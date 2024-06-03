// создание основного стора
import { createStore } from "vuex";
import user from './user.js';

// при добавлении нового стора, указываем его имя в списке модулей
export default createStore({
	modules:
	{
		user
	}
});