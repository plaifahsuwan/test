<script setup>
import router from '@/router';
import { RouterLink } from 'vue-router'

const logOut = async () => {
    localStorage.clear()
    await router.push({ name: 'signin' })
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow" style="background: #2875d3;">
        <div class="container">
            <RouterLink :to="{ name: 'home' }" class="navbar-brand">6 สายพันธุ์แมวน่ารัก น่าเลี้ยง</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link active" aria-current="page"><i
                                class="bi bi-house-fill me-1"></i>หน้าแรก</RouterLink>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'signin' }" class="nav-link" href="#"><i
                                class="bi bi-bank me-1"></i>เข้าสู่ระบบ</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-bank2 me-1"></i>6 พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink :to="{ name: 'wonders' }" class="dropdown-item">6 พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'add-wonder' }" class="dropdown-item">เพิ่ม พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง
                                </RouterLink>
                            </li>
                            <li><a class="dropdown-item" href="#">แก้ไข พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</a></li>
                            <li><a class="dropdown-item" href="#">ลบ พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="https://blog.wu.ac.th/?p=8698">เว็บไซต์ 6 พันธุ์แมวยอดฮิต น่ารัก น่าเลี้ยง</a></li>
                        </ul>
                    </
                    li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-bank2 me-1"></i>เกี่ยวกับเรา
                        </a>
                        <ul class="dropdown-menu">
                            
                            <li>
                                <RouterLink :to="{ name: 'about' }" class="dropdown-item">สาระน่ารู้</RouterLink>
                            </li>
                            
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="https://www.facebook.com/CHSAThai/?locale=th_TH">ติดต่อเรา</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                       
                        <ul class="dropdown-menu">
                           
                           
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">เว็บอื่นๆ</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="logOut"><i
                                class="bi bi-box-arrow-right me-1"></i>ออกจากระบบ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.navbar {
    font-family: 'Sarabun', sans-serif;
}
</style>
