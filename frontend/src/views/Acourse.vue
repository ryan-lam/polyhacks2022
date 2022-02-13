<template>
	
		<nav class="nav" :style="{'background-color': colours[drkmode].maincolour[getPerson] }">
			<div class="nav__header">
				<img src="../assets/img/profile.png" alt="" class="nav__header--pfp">
				<h2 class="nav__header--name">Jax Wang
					<p v-if="getPerson == 0">Teacher</p>
				<p v-else>Student</p>
				</h2>
			</div>
			<div class="nav__divider" :style="{'background-color': colours[drkmode].maincontrast[getPerson]}"></div>

			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}" @click="changePage('discussion')">
                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg>
				<p :style="{'color': unhighlight[getPerson]}">Discussion</p>
			</div>
			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}" v-if="getPerson == 0" @click="changePage('upload')">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8,15.01 l1.41,1.41L11,14.84V19h2v-4.16l1.59,1.59L16,15.01L12.01,11L8,15.01z"/></g></g></svg>
				<p :style="{'color': unhighlight[getPerson]}">Upload</p>
			</div>
			<div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}" v-if="getPerson == 1" @click="changePage('video')">
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><polygon points="9.5,7.5 9.5,16.5 16.5,12"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"/></g></g></svg>
				<p :style="{'color': unhighlight[getPerson]}">Video</p>
			</div>
			<!-- <div class="nav__item" :style="{'--hoveritem': colours[drkmode].hovercolour[getPerson]}">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" :fill="unhighlight[getPerson]"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>
				<p :style="{'color': unhighlight[getPerson]}">Notes</p>
			</div> -->
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
		<main :style="{'background-color': colours[drkmode].bgcolour}" class="discussion" v-if="page == 'discussion'">
			<h1 :style="{'color': colours[drkmode].titlecolour[getPerson]}">{{subject}} Discussion</h1>
		</main>

        <main :style="{'background-color': colours[drkmode].bgcolour}" class="upload" v-else-if="page == 'upload'">
			<h1 :style="{'color': colours[drkmode].titlecolour[getPerson]}" >Upload video for {{subject}}</h1>

            <section class="upload__form">
                <input type="file" class="upload__form--file" name="file" required>
                <button class="upload__form--button" @click="uploadFile()">Convert to Mp3</button>
            </section>

			<video :src="videoUrl" class="teachervideo" autoplay controls>

			</video>

			<footer></footer>
			<p :style="{'color': colours[drkmode].textcolour[getPerson]}">Text: {{videotext}}</p>
			<p :style="{'color': colours[drkmode].textcolour[getPerson]}">Confidence Level: {{confidence}}%</p>

			<footer></footer>

			<section class="chapter" v-for="(item, index) in chapters" :style="{'background-color': colours[drkmode].bgcourse[getPerson]}">
				<h2 class="chapter__title" :style="{'color': colours[drkmode].textcolour[getPerson]}">Chapter {{index}} - {{item.headline}}</h2>
				<p class="chapter__desc" :style="{'color': colours[drkmode].textcolour[getPerson]}">{{item.summary}}</p>
				<p class="chapter__timestamp" :style="{'color': colours[drkmode].textcolour[getPerson]}">Timestamp: {{item.start}}s - {{item.end}}s</p>
				<input type="checkbox">
			</section>


			<input type="text" placeholder="Input Title" v-model="teachertitle">
			<input type="textbox" placeholder="Input description" v-model="teacherdesc">
			<button>Submit</button>
			<footer></footer>
		</main>

		<main :style="{'background-color': colours[drkmode].bgcolour}" class="discussion" v-if="page == 'video'">
			<h1 :style="{'color': colours[drkmode].titlecolour[getPerson]}">{{subject}} Video</h1>
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
        getSubject(){
            return this.$store.state.subject;
        }
	
	},
	data(){
		return{
			drkmode: "light",
			checked: "false",
            subject: this.$store.state.subject,
            page: "discussion",
			videoUrl: "",
			chapters:[{
      end: 15650,
      start: 13010,
      gist: "Oh that's what's the same",
      summary: "Oh, that's. Oh, that's. Oh, that's. Oh, that. ’ s oh, that. ’ s.",
      headline: "Oh that's."
    }],
			videotext: "",
			confidence: 0,
			teachertitle:"",
			teacherdesc:"",
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
			
		},
        changePage(page){
            this.page = page;
        },
		uploadFile(){
		
			let input = document.getElementsByClassName("upload__form--file");
		
			let fd = new FormData();
		
    		fd.append('file', input[0].files[0]);
		
			fetch('http://localhost:3000/uploadcontent/convert', {
			
        		method: 'POST',
        		body: fd
    		}).then(res => res.json()).then(json => {
				console.log(json);
				console.log(json.data.fileURL);
				this.videoUrl = json.data.fileURL;
				this.videotext = json.data.text;
				this.confidence = json.data.confidence*100;
				json.data.chapters.forEach(element => {
					element.start = Math.floor(element.start/1000);
					element.end = Math.floor(element.end/1000);
					this.chapters.push(element);
				});
			})
			.catch(err => console.error(err));
		}
	
	},
	mounted(){
		this.drkmode = this.$store.state.mode;
        console.log("Mode is currently " + this.drkmode);
		if(this.drkmode == "dark"){
            console.log("ACTIVATED BEING CHEKCED");
			this.checked = "true";
		}else{
            console.log("ACTIVATED BEING CHEKCED");
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
			position: relative;
			& > p{
			color: white;
			position: absolute;
			top: 30px;
			left: 0px;
			font-size: 15px;
		}
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

.upload{
    &__form{
        &--button{
			background: rgb(172,125,240);
    		background: linear-gradient(344deg, rgba(172,125,240,1) 0%, rgba(84,154,219,1) 100%);
			color: white;
			&:hover{
				background: rgb(138,88,207);
        		background: linear-gradient(344deg, rgba(138,88,207,1) 0%, rgba(63,124,180,1) 100%);
			}
		}
    }
	
	
	& > input{
		padding: 10px 20px;
		text-align: left;
		display: block;
		width: 500px;
		margin: auto;
		margin-top: 20px;

	}
	&> input:nth-child(2){
		height: 60px;
	}

	&>button{
		margin-top: 20px;
		background: rgb(172,125,240);
		background: linear-gradient(344deg, rgba(172,125,240,1) 0%, rgba(84,154,219,1) 100%);
		color: white;
		&:hover{
			background: rgb(138,88,207);
			background: linear-gradient(344deg, rgba(138,88,207,1) 0%, rgba(63,124,180,1) 100%);
		}
		width: 200px;

	}
}

footer{
	height: 100px;
	width: 100%;
	visibility: hidden;
}

.teachervideo{
	background-color: blue;
	
	display: block;
	margin: auto;
	
	margin-top: 50px;

}

.chapter{
	
	background-color: aqua;
	width: 80%;
	margin: auto;
	position: relative;

	&__title{
		text-align: left;
		padding: 10px 20px;
	}

	&__desc{
		text-align: left;
		padding: 10px 20px;
	}
	&__timestamp{
		text-align: left;
		padding: 5px 20px;
	}
	&> input{
		position: absolute;
		top: 50%;
		left: 100%;
		transform: translate(-50px, -50%);
		width: 20px;
		height: 20px;
	}

}

footer{
	height: 50px;
	width: 100%;
	visibility: hidden;
}
</style>

