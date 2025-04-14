<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
// Lấy apiBook từ App.vue
const apiBook = inject("apiBook");
// Khai báo biến books
const book = ref({
  title: "",
  author: "",
  year: "",
  cover: "",
});
// Hàm add
const addBook = async () => {
  try {
    const res = await axios.post(apiBook, book.value);
    // console.log(res);
    if (res.status == 201) {
      alert("Thêm sách thành công");
      // Chuyển hướng về trang danh sách sách
      router.push("/");
    } else {
      console.log("Lỗi không thêm được sách");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <h1>Thêm sách</h1>
  <form @submit.prevent="addBook">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        v-model="book.title"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">author</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        v-model="book.author"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">year</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        v-model="book.year"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">cover</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        v-model="book.cover"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
