<template>
  <div class="container-fluid ">
    <nav class="navbar navbar-expand-md navbar-light  bg">
      <a class="navbar-brand ml-2" href="#">
        <router-link to="/">
          <img
            src="../assets/logo.png"
            height="40px"
            style="border-radius:10px"
          />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon primary--text"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link" href="#"
                >الرئيسية<span class="sr-only"></span
              ></a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="about">
              <a class="nav-link" href="#">من نحن </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="Services">
              <a class="nav-link" href="#">خدماتنا</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="JoinUs">
              <a class="nav-link" href="#"> انضم الينا </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="QA">
              <a class="nav-link" href="#">الاسئلة الشائعة </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="ContactUs">
              <a class="nav-link" href="#"> اتصل بنا </a>
            </router-link>
          </li>
        </ul>

        <v-spacer></v-spacer>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2 text-center"
            type="search"
            placeholder="البحث"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-light orange--text my-2 my-sm-0 mx-1"
            type="submit"
          >
            <v-icon class="mdi mdi-magnify orange--text"></v-icon>
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.bg {
  background-image: linear-gradient(
    to right,
    rgb(31, 5, 1),
    rgb(46, 32, 30),
    white,
    white,
    white
  );
  font-size: 20px;
  opacity: 0.9;
}
@media only screen and (max-width: 689px) {
  .bg {
    background-color: rgb(31, 5, 1);
  }
}
</style>
<script>
export default {
  name: "Navbar",
};
</script>
