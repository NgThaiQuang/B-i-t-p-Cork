<template>
    <div class="container layout-top-spacing" style="max-width: 1500px;">
        <div class="row">
            <div class="col-9">
                <div class="row">
                    <div v-for="(value, index) in list" :key="index" class="col-4 mt-3">
                        <div class="card h-100 ">
                            <div class="card-header p-0">
                                <img :src="value.hinh_anh" alt=""
                                    style="height: 200px; width: 100%; object-fit: cover;">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <b>
                                    <h5>{{ value.ten_mon_an }}</h5>
                                </b>
                                <p>{{ value.mo_ta }}</p>
                                <div class="mt-auto">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div><i class="fa-solid fa-star text-warning"></i> 5</div>
                                        <div>
                                            <del class="text-danger">{{ value.gia_ban }}₫ </del>
                                            <span class="text-success"> {{ value.gia_khuyen_mai }}₫</span>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary w-100 ">+ Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <b>
                                <h4>Thông tin bổ sung</h4>
                            </b>
                            <label for="">Mã giảm giá</label>
                            <div class="input-group mt-2">
                                <input type="text" class="form-control" placeholder="Nhập mã giảm giá">
                                <button class="btn btn-primary">Áp dụng</button>
                            </div>
                            <label for="" class="mt-3">Ghi chú đơn hàng</label>
                            <textarea class="form-control" rows="2" placeholder="Nhập ghi chú cho đơn hàng"></textarea>
                            <div class="alert alert-primary mt-3" role="alert">
                                Đơn hàng dự kiến
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row mt-3">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <b>
                                    <h4>Đặt hàng</h4>
                                </b>
                                <div class="row">
                                    <div class="col-4">

                                    </div>
                                    <div class="col-8">
                                        <div>Mon An</div>
                                        <div class="d-flex justify-content-between mt-2">
                                            <div>10000</div>
                                            <div>
                                                <div class="input-group mb-3 input-group-sm" style="width: 120px;">
                                                    <button @click="(soLuong>1?soLuong--:null)" class="btn btn-outline-secondary btn-sm"
                                                        type="button">-</button>                                                   
                                                    <label type="text" class="form-control text-center" value="1"
                                                       >{{ soLuong }}</label>
                                                    <button @click="soLuong++" class="btn btn-outline-secondary btn-sm"
                                                        type="button">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="alert alert-secondary" role="alert">
                                    <div class="d-flex justify-content-between">
                                        <div>Tạm tính</div>
                                        <div>1.200₫</div>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <div>Giảm giá</div>
                                        <div>1.000₫</div>
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <div>Thuế</div>
                                        <div>1.000₫</div>
                                    </div>
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                        <div><strong>Tổng cộng</strong></div>
                                        <div><strong>1.220.000₫</strong></div>
                                    </div>
                                </div>
                                <button class="btn btn-success w-100">Đặt hàng</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css'

export default {
    data() {
        return {
            list: [],
            soLuong: 1,
            // gioHang: [{
            //         id: '',
            //         ten_mon_an: '',
            //         gia_khuyen_mai: '',
            //         so_luong: null,
            // }]
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            axios.get('https://beshopee.dzdeloy.io.vn/api/admin/mon-an/get-data').then((res) => {
                this.list = res.data.data
            })
        },
        // themVaoGio(){
        //     this.gioHang.push({
        //         id: this.list.length+1,
        //         ten_mon_an: '',
        //         gia_khuyen_mai: '',
        //         so_luong: null,
        //     });
        // }
    }
}
</script>
<style></style>