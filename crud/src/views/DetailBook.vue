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
</script>
<template>
    <h1>Chi tiết sách</h1>
    <table class="table-primary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">title</th>
        <th scope="col">author</th>
        <th scope="col">year</th>
        <th scope="col">cover</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ book.id }}</th>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.year }}</td>
        <td><img :src="book.cover" alt="cover" width="100px" /></td>
        <td>
          <button class="btn btn-primary" @click="router.push('/')">Quay lại</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>