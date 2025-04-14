<script setup>
import { ref, inject, onMounted } from "vue";
import axios from "axios";
// Lấy apiBook từ App.vue
const apiBook = inject("apiBook");
// Khai báo biến books
const books = ref([]);
// Hàm hiện thị danh sách sách
const getBoooks = async () => {
  try {
    // Gọi api lấy danh sách sách
    // Hiện thị mặc định là get
    // Thêm là post
    // Chỉnh sửa là put/patch
    // Xóa là delete
    const res = await axios.get(apiBook);
    // console.log(res);
    if (res.status == 200) {
      books.value = res.data;
    } else {
      console.log("Lỗi không lấy được danh sách sách");
    }
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  // Gọi hàm hiện thị danh sách sách
  getBoooks();
});
// Hàm xóa sách
const deleteBook = async (id) => {
  try {
    if (confirm("Bạn có chắc chắn muốn xóa sách này không?")) {
      const res = await axios.delete(`${apiBook}/${id}`);
      // console.log(res);
      if (res.status == 200) {
        getBoooks();
      } else {
        console.log("Lỗi không xóa được sách");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <RouterLink to="/book/add" class="btn btn-primary">Thêm sách</RouterLink>
  <h1>Danh sách Sách</h1>
  <table class="table-primary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">title</th>
        <th scope="col">author</th>
        <th scope="col">year</th>
        <th scope="col">cover</th>
        <th scope="col">actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, index) in books" :key="book.id">
        <th scope="row">{{ (index += 1) }}</th>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.year }}</td>
        <td><img :src="book.cover" alt="cover" width="100px" /></td>
        <td>
          <button type="button" @click="deleteBook(book.id)" class="btn btn-danger">
            Xóa
          </button>
          <RouterLink :to="`/book/detil/${book.id}`" 
            class="btn btn-info">Chi tiết</RouterLink>
            <RouterLink :to="`/book/edit/${book.id}`" 
            class="btn btn-warning">Sửa</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>
