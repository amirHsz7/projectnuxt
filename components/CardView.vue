<template>
  <div class="card">
    <NuxtLink style="text-decoration:none;" :to="{ name : 'Users-id' , params: { id: user.id } }" class="card-header">
        <img :src="user.image" class="rounded-circle" alt="...">
        <div id="user">{{ user.name }}</div>
    </NuxtLink>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        user:Object
    }
};
</script>

<style scoped>
*{
   text-decoration:none;
}
.card-header{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.card{
   /* color : black; */
-webkit-transition: background-color 0.3s ease-in;
 -moz-transition: background-color 0.3s ease-in;
 -o-transition: background-color 0.3s ease-in;
 -ms-transition: background-color 0.3s ease-in;
 transition: background-color 0.3s ease-in;
 /* transition: background-color 0.5s ease; */


}
.card:hover{
  background-color: rgb(243, 240, 240);
  /* border :0; */
}
img{
  margin-right:15px;
width:50px;
height:50px;
}
#user{
  color: black;
 
}
</style>