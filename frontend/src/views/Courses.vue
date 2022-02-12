<template>
	<main>
		<nav class="nav" :style="{'background-color': getColour }">
			<div class="nav__header">
				<img src="../assets/img/profile.png" alt="" class="nav__header--pfp">
				<h2 class="nav__header--name">Jax Wang</h2>
			</div>
			<div class="nav__divider"></div>

			<div class="nav__item">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#d7edff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>
				<p>My Courses</p>
			</div>
			<div class="nav__item">
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#d7edff"><g><rect fill="none" height="20" width="20" y="0"/></g><g><g><path d="M16.5,2h-13C2.67,2,2,2.67,2,3.5v3c0,0.65,0.42,1.2,1,1.41v8.59C3,17.33,3.67,18,4.5,18h11c0.83,0,1.5-0.67,1.5-1.5V7.91 c0.58-0.21,1-0.76,1-1.41v-3C18,2.67,17.33,2,16.5,2z M16.5,6.5h-13v-3h13V6.5z M4.5,16.5V8h11v8.5H4.5z"/><rect height="1.5" width="4" x="8" y="10"/></g></g></svg>
				<p>Course Materials</p>
			</div>
			
		</nav>
		<section></section>
	</main>
</template>
<script>

export default {
	name: "Courses",
	computed:{
		getColour(){
			return this.$store.state.colour;
		},
		getUsername(){
			return this.$store.state.username;
		}
	}
}
</script>
<style lang="scss" scoped>
main{
	width: 100%;
	height: 100%;
}
.nav{
	width: 250px;
	height: 100%;
	float: left;
	overflow: hidden;

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
		background-color: #3f7cb4;
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
			color: #d7edff;
			height: min-content;
			font-size: 18px;
			transition: all 0.3s;
		}
	
		&:hover{
			// background-color: #6bb1f1;
			background-color: #6fb5f7;
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
	
}


</style>

