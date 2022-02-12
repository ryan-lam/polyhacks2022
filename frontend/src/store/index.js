import { createStore } from 'vuex'

export default createStore({
	state: {
		person: "Teacher",
		color
	},
	mutations: {
		changePerson(state, person){
			state.person = person;
		}
	},
	actions: {
	},
	modules: {
	}
})
