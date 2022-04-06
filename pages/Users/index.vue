<template>
  <div class="container">
  <div  class="col-md-4 container2 mb-3" v-for="user in users" :key="user.id">
    <CardView :user="user" />
  <!-- </div>
   <div class="container">
    <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div> -->

  </div>
  <div>
  <nav  aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" ><button class="page-link" @click="handlePrevClick" :disabled="disablePrev">Previous</button></li>
    <li class="page-link" >{{pageNum}}</li>
    <li class="page-item" @click="handleClick" :disabled="disableNext"><button class="page-link" >Next</button></li>
    
  </ul>
</nav>
</div>
  </div>
</template>

<script>

export default {
    name:"Users",
    data(){
        return{
            disablePrev : true,
            disableNext : false,
            users:[],
            loading : true,
            pageNum : 1,
            breakNext:0,
            totalRows:200,
            temp: false,
            currentPage:1,
        }
    },
     async asyncData(contex) {
        const users = await contex.$axios.$get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${1}&l=${9}`)
        
        return { users }
  },
  methods :{
     async getUsers(v) {
      const temp =  await this.$axios.get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${v}&l=${9}`);
          this.users = await temp.data
          this.breakNext = this.users.length
          this.loading = false;
            console.log("userssss",this.users)
            console.log('loading',this.loading)
          
        },
        async handlePrevClick  () {
        await this.pageNum--
        if(this.pageNum >=2) {
          this.disablePrev = false
        }
        else this.disablePrev = true
        this.getUsers(this.pageNum)
    },
      async handleClick  () {
        // if (this.breakNext!==9){
        // return true
        // }
        const temp = await this.$axios.get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${this.pageNum+1}&l=${9}`)
       
         if(temp.data[0]){
          this.pageNum++
          this.disablePrev = false
          this.getUsers(this.pageNum)
        }
        else{
          this.disableNext = true
        }
        
        
       
        // else this.pageNum--
        
        
        // this.users = temp.data
        // console.log("users",this.users)
    },
        log(){
          console.log("users",this.users)
      }
    },
    
    created(){

      // this.getUsers(1)
    }  
  }

</script>

<style scoped>
.container{
  display: flex;
  flex-wrap : wrap;
  /* justify-content:space-between; */
}
/* .container2{
  flex-wrap: wrap
} */
nav{
  /* position: absolute;
  bottom: 0; */
  align-self: flex-end;
  justify-self: center;
  /* align-items: center; */
  /* display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  
}
</style>