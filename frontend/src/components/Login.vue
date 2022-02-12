<template>
    <main class="form" :style="{'border-color': bordercolour}">
        <h1 :style="{'color': bordercolour}">{{logintype}} LogIn</h1>
        <input type="text" placeholder="Your Username" :style="{'--bgColor': bordercolour}">
        <input type="password" placeholder="Your Password" :style="{'--bgColor': bordercolour}">
        <button class="logbtn">Login</button>
        <p>Sign up with:</p>
        <div class="options">
            <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw"></i> Sign up with Facebook
            </a>
            <a href="#" class="twitter btn">
                <i class="fa fa-twitter fa-fw"></i> Sign up with Twitter
            </a>
            <a href="#" class="google btn">
                <i class="fa fa-google fa-fw"></i> Sign up with Google+
            </a>
        </div>
    </main>
   
</template>
<script>

export default {
    name: "Login",
    props:{
        logintype: String,
        bordercolour: String,
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
h1{
    margin-top: 30px;
}
.form{
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    width: 400px;
    height: 500px;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.247);
    background-color: white;
    border: 4px solid #549adb;
  
}
input{
    display: block;
    margin: auto;

    width: 75%;
    padding: 20px 0px 10px 0px;

    font-size: 20px;
    text-align: left;
    
    
    border-bottom: 2px solid rgb(206, 206, 206);
    transition: all 0.4s;
    &:focus{
        border-color: var(--bgColor);
    }
    
}
.logbtn{
    display: block;
    width: 75%;
    margin: auto;
    margin-top: 30px;
    
    background: rgb(172,125,240);
    background: linear-gradient(344deg, rgba(172,125,240,1) 0%, rgba(84,154,219,1) 100%);

    &:hover{
        background: rgb(138,88,207);
        background: linear-gradient(344deg, rgba(138,88,207,1) 0%, rgba(63,124,180,1) 100%);
    }
}

p{
    margin-top: 20px;

}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}
.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}

.options{
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
}
</style>
