<template>
  <nav class="header bg-slate-200 tw-flex tw-justify-between">
    <NuxtLink
      class="main-name nav-link tw-text-2xl tw-font-bold tw-leading-7 tw-text-gray-900 tw-sm:text-3xl tw-sm:truncate"
      to="/"
      >Vue-SPA</NuxtLink
    >
    <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
    <!-- <div
        class="tw-text-blue-600 tw-flex tw-flex-col tw-justify-between tw-items-center"
      ></div> -->
    <!-- / -->
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="hidden sm:block">
        <NuxtLink
          to="/"
          class="nav-link tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-white tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
        >
          Home
        </NuxtLink>
      </span>

      <span class="hidden sm:block ml-3">
        <NuxtLink
          to="/users"
          class="nav-link tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-white tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
        >
          Users
        </NuxtLink>
      </span>

      <span class="sm:ml-3">
        <NuxtLink
          to="/posts"
          class="nav-link tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-white tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
        >
          Posts
        </NuxtLink>
      </span>

      <!-- Dropdown -->
    </div>
    <!-- / -->
    <!-- <div class="collapse navbar-collapse" id="navbarNav">
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
        </div> -->
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.main-name {
  color: black;
}
.header {
  padding: 10px;
  /* background-color: rgba(149, 213, 233, 0.993); */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
/* .nuxt-link-active {
  height: 100%;
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
  background-color: rgba(233, 233, 233, 0.9) !important ;
} */
</style>
