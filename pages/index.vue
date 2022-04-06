<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>This is a very simple project for practice VueJs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
        </p>

      </div>
    </div>
    <NuxtLink  style="text-decoration:none;color:black;" class="btn btn-light" :to="{name:'Posts'}">See all Posts</NuxtLink>
    <div class="row mt-3">
      
        <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4 mb-3" v-for="post in posts" :key="post.id">
    <div class="card">
      <NuxtLink style="text-decoration:none;color:black;" :to="{ name: 'Posts-id', params: { id: post.id } }" class="card-header">
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
// import axios from "axios";
// import { arrayBuffer } from "stream/consumers";
// import { ref } from "vue";

export default {
  name : "Home",
  async asyncData({ $axios }) {
  const temp = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
  
  return { temp }
  },
  data (){
    return {
      posts : [],
      temp : [],
      loading : true
    }
  },
  
  methods : {
    showPosts(){
      for(let i = 0 ; i<=5;i++){
            this.posts.push(this.temp[i]);
            if(i==5) return this.loading = false
          }

    }

},
created () {
  this.showPosts()
}
}
</script>

<style>
.linkIcon{
background-color: rgba(243, 243, 243, 0.596);
}
</style>