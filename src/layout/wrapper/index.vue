<template>
    <div class="header-container">     
    <HeaderCork></HeaderCork>
    </div>
    <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <MenuCork></MenuCork>
        <div id="content" class="main-content">
            <div class="layout-px-spacing">
                    <router-view></router-view>
                    <FooterCork></FooterCork>
            </div>
        </div>
    </div>
    
</template>
<script>

import "../../assets/assets/js/loader.js"
import "../../assets/assets/js/libs/jquery-3.1.1.min.js"
// import "../../assets/bootstrap/js/popper.min.js"
import "../../assets/bootstrap/js/bootstrap.min.js"
// import "../../assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"
import "../../assets/assets/js/app.js"
// import "../../assets/assets/js/custom.js"
import "../../assets/plugins/apex/apexcharts.min.js"
import "../../assets/assets/js/dashboard/dash_1.js"

import HeaderCork from '../components/HeaderCork.vue'
import MenuCork from '../components/MenuCork.vue'
import FooterCork from '../components/FooterCork.vue'
 
export default {
    name:"#app",
    components:{
        HeaderCork,
        MenuCork,
        FooterCork,
    }
}
</script>
<style>
    @import "../../assets/assets/css/loader.css";
    @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/assets/css/plugins.css";
    @import "../../assets/plugins/apex/apexcharts.css";
    @import "../../assets/assets/css/dashboard/dash_1.css";
</style>