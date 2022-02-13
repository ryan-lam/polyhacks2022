import { createStore } from 'vuex'

export default createStore({
	state: {
		person: 0,
		colour: "#549adb",
		username: "",
	},
	mutations: {
		changePerson(state, person){
			state.person = person;
		},
		changeColour(state, colour){
			state.colour = colour;
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
