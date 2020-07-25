<template>
  <div>
    <Header></Header>
    <main role="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/styles/default.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
	name: "LayoutPage",
	components: {
		Header,
		Footer
	}
};
</script>