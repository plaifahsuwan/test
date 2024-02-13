<template>
    <div class="container mt-4">
        <div class="row">

            <div class="col-md-5 mb-1 mx-auto">
                <div class="card shadow">
                    <div class="card-header p-0">
                        
                    </div><img src="https://www.purina.co.th/sites/default/files/styles/ttt_image_510/public/2022-04/Cat-footer-Signpost-4-desktop_0.jpg?itok=Cbjc83Ds" class="card-img-top" alt="wonders">
                </div>jpg
            </div>

            <div class="col-md-6 mx-auto">
                <div class="card shadow">
                    <div class="card-header bg-primary">
                        <span class="text-white fs-5">
                            ลงทะเบียนพันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง
                        </span>
                    </div>
                    <div class="card-body text-success">
                        <form @submit.prevent="addWonder">
                            <div class="mb-1">
                                <label for="">ชื่อ 6 พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</label>
                                <input type="text" class="form-control" v-model="wonderState.name" />
                            </div>
                            <div class="mb-1">
                                <label for="">ตำแหน่ง ที่อยู่ พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</label>
                                <input type="text" class="form-control" v-model="wonderState.label" />
                            </div>
                            <div class="mb-1">
                                <label for="">ลิงค์ภาพพันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</label>
                                <input type="text" class="form-control" v-model="wonderState.imageUrl" />
                            </div>

                            <div class="mb-1">

                                <button type="submit" class="btn btn-primary text-white shadow">
                                    ลงทะเบียนพันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const wonderState = reactive({
    name: '',
    location: '',
    imageUrl:''
})

const router = useRouter()

const addWonder = async () => {
    await axios.post(`https://json-server-vue3-d109.onrender.com/wonders`,wonderState)
        .then(() => {
            console.log(wonderState)
            router.push({name:'wonders'})
        })
    alert('ลงทะเบียนพันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง เรียบร้อยแล้ว')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.container {
    font-family: 'Sarabun', sans-serif;

}

.form-label {
    color: green;
}
</style>