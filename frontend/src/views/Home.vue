<template>
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
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";

nav{
	
	width: 100%;
	height: 80px;
	background-color: red;
	position: relative;

	& > h1{
	
		position: absolute;
		transform: translate(0, -50%);
		top: 50%;
		left: 40px;
		vertical-align: middle;
		background-color: blue;
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

	&__item{
		width: 100px;
		background-color: aqua;

		& > a{
			padding-top: 20px;
			text-decoration: none;

		}
		

	}
	
}
</style>
