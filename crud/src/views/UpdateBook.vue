<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
const router = useRouter();
const route = useRoute(); // 1
// Lấy apiBook từ App.vue
const apiBook = inject("apiBook");
// Lấy id từ route
const id = route.params.id; // 2
const book = ref({
  title: "",
  author: "",
  year: "",
  cover: "",
});
const getIDBook = async () => {
    try {
    // Gọi api lấy danh sách sách
    // Hiện thị mặc định là get
    // Thêm là post
    // Chỉnh sửa là put/patch
    // Xóa là delete
    const res = await axios.get(apiBook + "/" + id);
    // console.log(res);
    if (res.status == 200) {
        // console.log(res.data);
      book.value = res.data;
    } else {
      console.log("Lỗi không lấy được danh sách sách");
    }
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  // Gọi hàm hiện thị danh sách sách
  getIDBook();
});
const editBook = async () => {
    try {
    // Gọi api lấy danh sách sách
    // Hiện thị mặc định là get
    // Thêm là post
    // Chỉnh sửa là put/patch
    // Xóa là delete
    const res = await axios.patch(apiBook + "/" + id, book.value);
    // console.log(res);
    if (res.status == 200) {
        alert("Chỉnh sửa sách thành công");
      // Chuyển hướng về trang danh sách sách
      //router.push("/");
    } else {
      console.log("Lỗi không lấy được danh sách sách");
    }
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
    <!-- <h1>Đây là trang chỉnh sửa</h1> -->
    <h1>Chỉnh sửa sách</h1>
  <form @submit.prevent="editBook">
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
    <RouterLink to="/" class="btn btn-secondary ms-2">Quay lại</RouterLink>    
  </form>
</template>