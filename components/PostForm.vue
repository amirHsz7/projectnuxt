<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" v-model.lazy.trim="form.title" />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea
        class="form-control"
        rows="6"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
    </div>

    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
export default {
props: {
   buttonLoading: Boolean,
    buttonText: String,
    post: Object,
},
data(){
    return{
        form : {
            title: "",
            titleErrorText: "",
            body: "",
            bodyErrorText: "",
        }
    }
},
methods:{
    setInput() {
      if (this.$props.post !== undefined) {
        this.form.title = this.$props.post.title;
        this.form.body = this.$props.post.body;
      }
    },
    validate() {
      if (this.form.title === "") {
        this.form.titleErrorText = "Title is required";
      } else {
        this.form.titleErrorText = "";
      }
      if (this.form.body === "") {
        this.form.bodyErrorText = "Body is required";
      } else {
        this.form.bodyErrorText = "";
      }

      if (this.form.title !== "" && this.form.body !== "") {
        this.$emit("formData", this.form);
      }
    }
},
created(){
    this.setInput()
}
}
</script>

<style>

</style>