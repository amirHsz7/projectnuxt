<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <NuxtLink class="nav-link" to="/">Vue-SPA</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/Users">Users</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/posts">Posts</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name : "Header"
};
</script>

<style scoped>
header{position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1;
}
.NuxtLink-active {
  height: 100%;
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
  background-color:rgba(233, 233, 233, 0.9) !important ;
}
</style>