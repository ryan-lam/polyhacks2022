import { createStore } from 'vuex'

export default createStore({
	state: {
		person: 0,
		username: "",
		mode: "light",
		

	},
	mutations: {
		changePerson(state, person){
			state.person = person;
		},
		changeUsername(state, name){
			state.username = name;
		},
		changeMode(state, mode){
			state.mode = mode;
		}

	},
	actions: {
	},
	modules: {
	}
})
