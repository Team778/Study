<template>
    <div class="login">
        <input type="text" v-model='email' placeholder="Email"><br>
        <input type="password" v-model='password' placeholder="Password"><br>
        <button v-on:click="login">Connection</button>
        <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link> </p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function(){
                alert('Well done! You are now connected');
            })
            .catch(function(error){
                alert(error.message);
                console.log(error);
            });
            this.$router.replace('Home');
        }
    }
}
</script>

<style scoped>
.login {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>