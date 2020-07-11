<template>
  <div>
    <Header></Header>
    <main role="main">
      <!-- <Home></Home>
      <DevListBox></DevListBox> -->
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./assets/styles/default.css";

// import DomainList from "./components/DomainList";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
	name: "app",
	components: {
		Header,
		Footer
	}
};
</script>

<style>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}
#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
