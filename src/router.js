import Vue from "vue";
import Router from "vue-router";
// import { isAuthenticated } from '@/auth/auth'
// import { signOut } from '@/auth/auth'
import LayoutPage from "./components/LayoutPage";
import LayoutLogin from "./components/LayoutLogin";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

console.log(process.env);
// console.log(process.env.production.VUE_APP_TITLE)
// console.log(process.env.development.VUE_APP_TITLE)

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/",
			component: LayoutPage,
			children: [
				{
					path: "",
					component: Home
				}
			]
		},
		{
			path: "/sign-in",
			component: LayoutLogin,
			children: [
				{
					path: "",
					component: SignIn
				}
			]
		}
	]
});

export default router;