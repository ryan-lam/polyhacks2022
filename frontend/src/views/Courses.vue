<template>
	
		<nav class="nav" :style="{'background-color': colours[drkmode].maincolour[getPerson] }">
			<div class="nav__header">
				<img src="../assets/img/profile.png" alt="" class="nav__header--pfp">
				<h2 class="nav__header--name">Jax Wang</h2>
			</div>
			<div class="nav__divider" :style="{'background-color': colours[drkmode].maincontrast[getPerson]}"></div>

			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>
				<p :style="{'color': unhighlight[getPerson]}">My Courses</p>
			</div>
			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}">
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" :fill="unhighlight[getPerson]"><g><rect fill="none" height="20" width="20" y="0"/></g><g><g><path d="M16.5,2h-13C2.67,2,2,2.67,2,3.5v3c0,0.65,0.42,1.2,1,1.41v8.59C3,17.33,3.67,18,4.5,18h11c0.83,0,1.5-0.67,1.5-1.5V7.91 c0.58-0.21,1-0.76,1-1.41v-3C18,2.67,17.33,2,16.5,2z M16.5,6.5h-13v-3h13V6.5z M4.5,16.5V8h11v8.5H4.5z"/><rect height="1.5" width="4" x="8" y="10"/></g></g></svg>
				<p :style="{'color': unhighlight[getPerson]}">Course Materials</p>
			</div>
			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>
				<p :style="{'color': unhighlight[getPerson]}">Notes</p>
			</div>
			<div class="switch">
				<label class="theme-switch" for="checkbox">
					<input type="checkbox" id="checkbox" v-model="checked" @click="changeMode()"/>
					<div class="slider round"></div>
				</label>
				<p :style="{'color': unhighlight[getPerson]}">Dark Mode</p>
			</div>
			<div class="nav__item" :style="{'--hoveritem': hovercolour[getPerson]}" @click="home()">
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
				<p :style="{'color': unhighlight[getPerson]}">Logout</p>
			</div>
			
		</nav>
		<main :style="{'background-color': colours[drkmode].bgcolour}">
			<h1 :style="{'color': colours[drkmode].titlecolour[getPerson]}">My Courses</h1>
			<section class="container">
				<div class="container__courses" :style="{'background-color': colours[drkmode].bgcourse[getPerson]}">
					<div class="container__courses--image"></div>
					
					<h2 class="container__courses--title" :style="{'color': colours[drkmode].textcolour[getPerson]}">Linear Algebra</h2>
					<p class="container__courses--desc" :style="{'color': colours[drkmode].textcolour[getPerson]}">Linear algebra is the study of lines and planes, vector spaces and mappings that are required for linear transforms.</p>
				</div>
				<div class="container__courses">
					<h2>Sports Trickshots</h2>
				</div>
				<div class="container__courses">
					<h2>English Literature</h2>
				</div>
				<div class="container__courses">
					<h2>Physics</h2>
				</div>

			</section>
			<footer></footer>
			
		</main>
	
</template>
<script>
import styles from "@/assets/styles.json";

export default {
	name: "Courses",
	computed:{
		getColour(){
			return this.$store.state.colour;
		},
		getUsername(){
			return this.$store.state.username;
		},
		getPerson(){
			return this.$store.state.person;
		},
	
	},
	data(){
		return{
			drkmode: "light",
			checked: "false",
			colours:{
				light: {
					maincolour: [styles.main_light_teacher, styles.main_light_student],
					unhighlight: ["#d7edff", "#ecd7ff"],
					hovercolour: ["#6fb5f7", "#bb92f7"],
					maincontrast: [styles.main_dark_teacher, styles.main_dark_student],
					titlecolour: ["#2c3e50", "#2c3e50"],
					bgcourse: ["#fff", "#fff"],
					textcolour: ["#2c3e50", "#2c3e50"],
					bgcolour: styles.light_background,

				},
				dark:{
					bgcolour: styles.dark_background,
					maincolour: [styles.main_dark_teacher, styles.main_dark_student],
					titlecolour: ["#6fb5f7", "#bb92f7"],
					maincontrast: [styles.main_light_teacher, styles.main_light_student],
					bgcourse: [styles.main_dark_teacher, styles.main_dark_student],
					textcolour: ["#fff", "#fff"],
					hovercolour: [styles.main_light_teacher, styles.main_light_student],
				}
			},
			maincolour: ["#549adb", "#ac7df0"],
			unhighlight: ["#d7edff", "#ecd7ff"],
			hovercolour: ["#6fb5f7", "#bb92f7"],
			maindark: ["#3f7cb4", "#8a58cf"]
		}
	},
	methods:{
		home(){
			this.$router.push("/");
		},
		changeMode(){
			if(this.drkmode == "light"){

				this.$store.commit("changeMode", "dark");
				this.drkmode = "dark";
				
			}else{
			
				this.$store.commit("changeMode", "light");
				this.drkmode = "light";
			}
			
		}
	
	},
	activated(){
		this.drkmode = this.$store.state.mode;
		if(this.drkmode == "dark"){
			this.checked = "true";
		}else{
			this.checked = "false";
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";
@import "../assets/courses.scss";

.nav{
	width: 300px;
	height: 100%;
	float: left;
	overflow: hidden;
	position: relative;
	&__header{
		
		display: flex;
		align-items: center;
		gap: 20px;
		padding-top: 50px;
		&--pfp{
			width: 50px;
			
			margin-left: 20px;

		}
		&--name{
			color: white;
		}


	}

	&__divider{
		width: 90%;
		height: 2px;
		
		margin: auto;
		margin-top: 20px;
	}
	& > div:nth-child(3){
		margin-top: 20px;
	}
	
	
	&__item{
		display: flex;
		
		
		align-items: center;
		gap: 20px;
		padding: 15px 0px;
		transition: all 0.3s;
	

		& > svg{
			margin-left: 20px;
			transition: all 0.3s;
		}

		& > p{
			height: min-content;
			font-size: 18px;
			transition: all 0.3s;
			user-select: none;
		}
	
		&:hover{
			// background-color: #6bb1f1;
			background-color: var(--hoveritem);
			cursor: pointer;
			

		}
		&:hover p{
			color: white;
			transform: translateX(10px);

		}
		&:hover svg{
			transform: translateX(10px);
			filter: brightness(116%) 
		}
	}

	& > div:last-child{
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		transform: translateY(-80px);

	}
	
}

main{
	height: 100%;
	float: right;
	width: calc(100% - 300px);
	overflow: scroll;
	background-color: $bgcolour;
	& > h1{
		text-align: left;
		font-size: 2rem;
		padding: 20px 80px;
	}

}

.container{
	
	width: calc(100% - 160px);
	margin: auto;
	height: min-content;
	display: flex;
	justify-content: center;
	gap: 40px 40px;
	flex-wrap: wrap;
	flex-direction: row;
	
	

	&__courses{
		background-color: white;
		border-radius: 20px;
		width: 450px;
		height: 300px;
		box-shadow: 0px 0px 10px 1px rgba(134, 134, 134, 0.26);
		overflow: hidden;
		transition: all 0.4s;
		&:hover{
			cursor: pointer;
			
			
		}

		&:active{
			transform: scale(.96);
		}

		&:hover .container__courses--image{
			filter: brightness(80%);
			height: 150px;
		}

		&:hover .container__courses--desc{
			height: 100px;
		}

		&--image{
			transition: all 0.4s;
			width: 100%;
			height: 250px;
			background-image: url("../assets/img/courses/math.jpeg");
			background-position: center;
			background-size: cover;
			
		}

		&--title{
			text-align: left;
			padding: 10px 20px;
			user-select: none;

		}
		&--desc{
			text-align: left;
			padding: 5px 20px;
			height: 0px;
			user-select: none;
		}


	}

}

.courses{

}

footer{
	height: 100px;
	width: 100%;
	visibility: hidden;
}
</style>

