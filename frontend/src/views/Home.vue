<template>
	<div class="shadow" v-show="showed" @click="close"></div>
	<main>
		<nav>
			<h1>COURODE</h1>
			<section class="links">
				<div class="links__item">
					<a href="#">Home</a>
				</div>
				<div class="links__item">
					<a href="#">Features</a>
				</div>
				<div class="links__item">
					<a href="#">Resources</a>
				</div>
				<div class="links__item">
					<a href="#">Contact</a>
				</div>

			</section>
		</nav>
		
		<section class="content">
			<h1 class="content__title">Revolutionizing the Education System with AI.</h1>
			<p class="content__subtitle">Transfer speech to text including a range of other useful tools</p>
			<div class="content__buttons">
				<button class="content__buttons--teacher" v-on:click="teacherLogin()">Teacher Login</button>
				<button class="content__buttons--student" v-on:click="studentLogin()">Student Login</button>
			</div>
		</section>
		<img src="../assets/img/bg15-2.png" alt="banner" class="imgone">
	</main>
	<Login v-show="showed" :logintype="this.person" :bordercolour="this.bcolour"/>

</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
	name: 'Home',
	components: {
		Login
	},
	data(){
		return{
			showed: false,
			person: "Teacher",
			bcolour: "#549adb"
		}
	},
	methods:{
		teacherLogin(){
			this.showed = true;
			this.person = "Teacher";
			this.bcolour = "#549adb";
		},
		studentLogin(){
			this.showed = true;
			this.person = "Student";
			this.bcolour = "#ac7df0";
		},
		close(){
			this.showed = false;
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";

nav{
	position: relative;
	width: 100%;
	height: 80px;

	& > h1{
	
		position: absolute;
		transform: translate(0, -50%);
		top: 50%;
		left: 80px;
		vertical-align: middle;

		font-size: 2rem;
	}

	& > section{
		float: right;
		
	}
}

.links{
	display: flex;
	align-items: stretch;
	justify-content: stretch;
	height: 100%;
	margin-right: 80px;
	&__item{
		width: 120px;
		& > a{
			margin-top: 25px;
			display: block;
		
			text-decoration: none;
			font-size: 20px;

			&:hover{
				color: $secondary-colour-hover;
			}

		}
	}
}

main{
	position: relative;
	height: 100vh;
	background-color: $bgcolour;

}

.content{
	
	width: 50%;
	position: absolute;
	top: 50%;
	z-index: 2;
	transform: translate(80px, -50%);
	&__title{
		font-size: 50px;
		text-align: left;
	}
	&__subtitle{
		font-size: 25px;
		text-align: left;
		
	}
	&__buttons{
		margin-top: 40px;

		height: 50px;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: flex-start;
		gap: 40px;
		align-items: stretch;

		&--teacher{
			background-color: $primary-colour;
			&:hover{
				background-color: $primary-colour-hover;
			}
		}
		&--student{
			background-color: $secondary-colour;
			&:hover{
				background-color: $secondary-colour-hover;
			}
		}
		
	}

}
.imgone{
	width: 500px;
	display: block;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(-80px, -55%);
	z-index: 1;

}
.shadow{
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.233);
	position: absolute;
	z-index: 4;

}
</style>
