<template>
  <div>
    <div class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Developer registration</h1>
        <p class="lead">Join this community list at no cost. This site suggested the need to find a developer and not know where to look. There are several job sites but not a specific place with developers.</p>
      </div>
    </div>

    <DevListBox></DevListBox>

  </div>
</template>
<script>
import DevListBox from "../pages/DevListBox";

export default {
	name: "Home",
	components: {
		DevListBox
	}
};
</script>