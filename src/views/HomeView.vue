<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

toast.info("ยินดีต้อนรับแผนกเทคโนโลยีสารสนเทศ", {
  autoClose: 1500,
  position:toast.POSITION.TOP_CENTER
})

const notify = () => {
  toast.success("ยินดีต้อนรับแผนกเทคโนโลยีสารสนเทศ", {
    autoClose: 1500,
    position: toast.POSITION.TOP_CENTER
  })
  return notify
}

</script>

<template>
  <div class="container my-5">
    <div class="card shadow" style="width: 20rem;">
      <div class="card-header p-0">
        <img src="https://i2.wp.com/res.cloudinary.com/kohepets/image/upload/v1527324279/singapore-kittens-e1506671435143_su4rfk.png?resize=730%2C495&ssl=1P" class="card-img-top"
          alt="img">
      </div>
      <div class="card-body">
        <h5 class="card-title">Home Page</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary" @click="notify">Read...</a>
      </div>
    </div>
  </div>
</template>
