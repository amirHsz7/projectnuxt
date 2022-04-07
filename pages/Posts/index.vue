<template>
  <div class="container mt-5">
    <div>
      <NuxtLink class="btn btn-dark mb-3" :to="{ name: 'CreatePost' }">
        Create Post
      </NuxtLink>
    </div>
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4 mb-2" v-for="post in posts" :key="post.id">
        <div class="card">
          <NuxtLink
            style="text-decoration: none; color: black"
            :to="{ name: 'Posts-id', params: { id: post.id } }"
            class="card-header"
          >
            <div>
              {{ post.title }}
            </div>
          </NuxtLink>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ post.body }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  async asyncData({ $axios }) {
    const temp = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return { temp };
  },

  data() {
    return {
      temp: [],
      posts: [],
      loading: true,
    };
  },
  methods: {
    showPosts() {
      this.posts = this.temp;
      this.loading = false;
    },
  },
  created() {
    this.showPosts();
  },
};
</script>

<style></style>
