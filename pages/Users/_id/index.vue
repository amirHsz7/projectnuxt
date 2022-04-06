<template>
<div class="container">
<div class="card">
    <div style="text-decoration:none;" class="card-header">
        <img :src="user.image" alt="...">
        <div id="user">{{ user.name }}</div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            user:{},
            loading:true
        }
    },
    async asyncData(context){
        const user = await context.$axios.$get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders/${context.params.id}`)
        return{ user }
    },
    methods:{
        showUser(){;
          this.loading = false;
        }
    },
    created(){
        this.showUser()
    }
// name:"_id"
}
</script>

<style>

</style>