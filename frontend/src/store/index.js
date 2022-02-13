import { createStore } from 'vuex'

export default createStore({
	state: {
		person: 0,
		username: "",
		

	},
	mutations: {
		changePerson(state, person){
			state.person = person;
		},
		changeUsername(state, name){
			state.username = name;
		},

	},
	actions: {
	},
	modules: {
	}
})
