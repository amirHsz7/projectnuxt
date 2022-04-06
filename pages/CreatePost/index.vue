<template>
  <div class="col-md-6">
    <h2 class="mb-5">Create Post :</h2>

    <PostForm @formData="createPost" :button-loading="loading" button-text="Create Post" />
  </div>
</template>

<script>
export default {
    data (){
        return {
            loading : false,
        }
    },
    methods :  {
        createPost(formData) {
            this.loading = true;
            this.$axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                title: formData.title,
                body: formData.bady,
                userId: 1,
                })
                .then(() =>{
                this.loading = false;
                alert("Post Created")
                })
                
                .catch(function (error) {
                console.log(error);
                });
                
        }
    }
}
</script>

<style>

</style>