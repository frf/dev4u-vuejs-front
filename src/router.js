import Vue from "vue";
import Router from "vue-router";
// import { isAuthenticated } from '@/auth/auth'
// import { signOut } from '@/auth/auth'
import Home from "./pages/Home";

console.log(process.env);
// console.log(process.env.production.VUE_APP_TITLE)
// console.log(process.env.development.VUE_APP_TITLE)

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/home",
			component: Home
		},
		{
			path: "/",
			redirect: "/home"
		}
	]
});

export default router;