<template>
  <div>
    <form class="form-signin">
      <div class="text-center">
        <img class="mb-4" src="../assets/images/logo.png" alt="" height="100px">
      </div>
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label class="sr-only">Name</label>
      <input type="text" name="name" v-model="input.name" class="form-control" placeholder="Name" required autofocus>
      <label class="sr-only">Email address</label>
      <input type="email" name="email" v-model="input.email" class="form-control" placeholder="Email address" required autofocus>
      <label class="sr-only">Password</label>
      <input type="password" name="password" v-model="input.password"  class="form-control" required>
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="register()">Sign up</button>
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="go()">Sign in</button>

			<p> {{response}} </p>
      <p class="mt-5 mb-3 text-muted">&copy; 2020-2020</p>
    </form>
  </div>
</template>
<script>

import axios from "axios/dist/axios";
import CONFIG_APP from "../config";

const ADD_USER = `
   mutation register($name: String!, $email: String!, $password: String!) {
     register(name: $name, email: $email, password: $password) {
			 token
			 token_refresh
     }
   }
 `;
 
export default {
	name: "SignUp",
	components: {
	},
	data: function () {
		return {
			response: "....",
			input: {
				name: "Pedro",
				email: "teste@teste.com.br",
				password: "123"
			}
		};
	},
	methods: {
		go() {
			this.$router.push({path: "sign-in"});
		},
		register() {
			if(this.input.email != "" && this.input.password != "") {
				axios({
					url: CONFIG_APP.URL_API,
					method: "post",
					data: {
						query: ADD_USER,
						variables: {
							name: this.input.name,	
							email: this.input.email,		
							password: this.input.password,		
						}
					}
				}).then((result) => {
					let data = result.data.data;
					console.log(data.register);
					localStorage.setItem(CONFIG_APP.LOCAL_STORAGE_KEY, JSON.stringify(data.register));
					// this.$router.push({path: "/"});
				}).catch((error) => {
					console.log(error);
				});
			} else {
				console.log("A email and password must be present");
			}
		}
	},
};
</script>