import { createStore } from 'vuex'

export default createStore({
	state: {
		person: 0,
		username: "",
		mode: "light",
		subject: "",
		

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
		},
		changeSubject(state, subject){
			state.subject = subject;
		}

	},
	actions: {
	},
	modules: {
	}
})
