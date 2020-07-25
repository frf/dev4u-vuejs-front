<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm d-flex flex-column flex-md-row align-items-center p-2 px-md-4  bg-white border-bottom box-shadow">
        <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" class="img-fluid logo" ></a>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-dark" href="#">Home</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
            <router-link to="/sign-in">
            <span class="nav-link text-dark" href="#">Sign In</span>
            </router-link>
            <a class="btn btn-outline-primary" href="#">Sign up</a>
          </form>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
	name: "Header",
};
</script>