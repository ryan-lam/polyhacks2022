<template>
    <main class="form">
        <h1>{{logintype}} Log In</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Username">
        <button>Login</button>
        <p>Sign up with:</p>
        <div>
            <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
        </div>
    </main>
   
</template>
<script>

export default {
    name: "Login",
    props:{
        logintype: String,
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
.form{
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 500px;
    height: 500px;
    background-color: red;
}
</style>
