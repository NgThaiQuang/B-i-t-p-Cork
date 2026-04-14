<template>
    <div class="container layout-top-spacing" style="max-width: 1500px">
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center ">
                            <div>
                                <h5 class="fw-bold">Danh sách voucher</h5>
                            </div>
                            <div class="input-group w-50">
                                <input type="text" placeholder="Tìm kiếm voucher..." class="form-control">
                                <button class="btn btn-outline-danger" type="button">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="voucher in list" :key="voucher.id" class="card mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="card" style="height: 100%;">
                                    <div class="card-body bg-success">
                                        <div class="text-center">
                                            <div class="mt-2">Giảm</div>
                                            <br>
                                            <strong class="fw-bold mt-1">{{ voucher.phan_tram_giam }}%</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <h4>{{ voucher.ma_voucher }}</h4>
                                <p class="text-danger">{{ voucher.tu_ngay }} - {{ voucher.den_ngay }}</p>
                                <p>{{ voucher.mo_ta }}</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-center">
                                <button class="btn btn-primary">Sử dụng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <b>Thông tin voucher</b>
                        <div class="alert alert-secondary mt-3" role="alert">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>Tổng voucher</div>
                                <div><button class="rounded-pill btn btn-sucess">
                                    {{ list.length }}
                                </button></div>
                            </div>
                        </div>
                        <div class="alert alert-success mt-3" role="alert">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>Còn hạn</div>
                                <div><button class="rounded-pill btn btn-sucess">
                                    {{ conHan() }}
                                </button></div>
                            </div>
                        </div>
                        <div class="alert alert-danger mt-3" role="alert">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>Hết hạn</div>
                                <div><button class="rounded-pill btn btn-sucess">
                                    {{ hetHan() }}
                                </button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <b>Hướng dẫn áp dụng</b>
                        <br class="mb-2">
                        1. Chọn voucher phù hợp với đơn hàng của bạn.<br>
                        <hr>
                        2. Nhấn nút "Sử dụng" để áp dụng voucher vào đơn hàng.<br>
                        <hr>
                        3. Kiểm tra lại thông tin đơn hàng và giá sau khi áp dụng voucher.<br>
                        <hr>
                        4. Hoàn tất quá trình thanh toán để nhận ưu đãi từ voucher.
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://beshopee.dzdeloy.io.vn/api/admin/voucher/get-data')
                .then(response => {
                    this.list = response.data.data;
                })
        },
        conHan(){
            return this.list.filter(voucher => voucher.is_quan === 0).length;
        },
        hetHan(){
            return this.list.filter(voucher => voucher.is_quan === 1).length;
        }
    }
}
</script>
<style></style>