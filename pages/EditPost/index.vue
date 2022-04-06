<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-6">
    <h2 class="mb-5">Edit Post :</h2>

    <PostForm
      @formData="updatePost"
      :button-loading="loading"
      button-text="Edit Post"
      :post="post"
    />
  </div>
</template>

<script>
export default {
name : 'EditPost',
    data(){
        return{
            loading:false,
            pageLoading : true,
            post:{}
        }
    },
    async asyncData(context){
        const post = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        return { post }
    },
    methods:{
        showPost(){
          this.pageLoading = false  
        },
        updatePost(formData) {
      if(formData.title === this.post.title && formData.body === this.post.body){ return alert("nothing is change")}
            this.loading = true;

      // console.log(formData.title , post.value.title){}
       this.$axios
        .put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, {
          id: this.$route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then( () => {
          this.loading = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            showConfirmButton: false,
            html: '<router-link class="nav-link" to="https://amirhsz7.github.io/Vue-spa/posts">OK</router-link>'
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    },
    created(){
      this.showPost()
      console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>