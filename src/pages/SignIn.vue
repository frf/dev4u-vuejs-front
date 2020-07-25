<template>
  <div>
    <form class="form-signin">
      <div class="text-center">
        <img class="mb-4" src="../assets/images/logo.png" alt="" height="100px">
      </div>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" name="email" v-model="input.email" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" name="password" v-model="input.password"  class="form-control" required>
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="login()">Sign in</button>
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="go()">Sign up</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2020-2020</p>
    </form>
  </div>
</template>
<script>

export default {
	name: "SignIn",
	components: {
	},
	data: function () {
		return {
			input: {
				email: "fabio2@fabiofarias.com.br",
				password: "1233"
			}
		};
	},
	methods: {
		go() {
			this.$router.push({path: "sign-up"});
		},
		login() {
			// if(this.input.email != "" && this.input.password != "") {
			// 	axios({
			// 		url: "http://localhost:4000/graphql",
			// 		method: "post",
			// 		data: {
			// 			query: `
			//             mutation {
			//               login(email:"fabio3@fabiofarias.com.br",password:"1233") {
			//                 token
			//                 token_refresh
			//               }
			//             }
			//           `
			// 		}
			// 	}).then((result) => {
			// 		console.log(result.data);
			// 	});

			// 	console.log(this.input);
			// } else {
			// 	console.log("A username and password must be present");
			// }
		}
	},
};
</script>