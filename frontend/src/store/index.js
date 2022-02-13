import { createStore } from 'vuex'

export default createStore({
	state: {
		person: 0,
		username: "",
		mode: "light",
		subject: "",
		classID:"081c8e48-7dcb-4ee3-9573-3962df4310cb",
		

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
		},
		changeClassID(state, id){
			state.classID = id;
		}

	},
	actions: {
	},
	modules: {
	}
})
