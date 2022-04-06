<template>
<div class="container mt-5">
<div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div id="container" v-else class="col-md-5">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ post.body }}</li>
      </ul>
      <div class="card-footer">
        <button @click="deletePost" class="btn btn-sm btn-danger me-4">
          Delete
        </button>
        <NuxtLink
          class="btn btn-sm btn-dark"
          :to="{ name : 'EditPost', params: { id: post.id } }"
          >Edit</NuxtLink
        >
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
export default {
    data(){
        return{
            post:{},
            loading:true
        }
    },
    async asyncData(context){
        const post = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        return{ post }
    },
    methods:{
        showPost(){;
          this.loading = false;
        },
        deletePost() {
      this.$axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then( ()=> {
          alert("Post Deleted")
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    },
    created(){
        this.showPost()
    }
// name:"_id"
}
</script>

<style>

</style>