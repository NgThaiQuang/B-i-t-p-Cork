<template>
    <div class="container layout-top-spacing    " style="max-width: 1500px">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header text-center bg-danger">
                        Thêm mới shipper
                    </div>
                    <div class="card-body">
                        <label for="">Họ và tên</label>
                        <input type="text" class="form-control mb-3" placeholder="Nhập họ và tên">
                        <label for="">Email</label>
                        <input type="email" class="form-control mb-3" placeholder="Nhập email">
                        <label for="">CCCD</label>
                        <input type="text" class="form-control mb-3" placeholder="Nhập CCCD">
                        <label for="">Số điện thoại</label>
                        <input type="text" class="form-control mb-3" placeholder="Nhập số điện thoại">
                        <label for="">Trạng thái</label>
                        <select class="form-control mb-3">
                            <option value="">Chọn trạng thái</option>
                            <option value="active">Hoạt động</option>
                            <option value="inactive">Không hoạt động</option>
                        </select>
                        <button class="btn btn-danger w-100">Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <b>
                                <h5 class="text-primary">Danh sách shipper</h5>
                            </b>
                            <div class="input-group w-50">
                                <input type="text" placeholder="Tìm kiếm shipper..." class="form-control">
                                <button class="btn btn-outline-danger" type="button">Tìm kiếm</button>
                            </div>
                        </div>
                        <div class="table-responsive mt-4">
                            <table class="table table-bordered table-hover table-striped">
                                <thead class="table-danger text-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Họ và tên</th>
                                        <th>Email</th>
                                        <th>CCCD</th>
                                        <th>Số điện thoại</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in list" :key="index">
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.ho_va_ten }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.cmnd }}</td>
                                        <td>{{ item.so_dien_thoai }}</td>
                                        <td>
                                            <span class="badge"
                                                :class="item.is_active == 1 ? 'bg-success' : 'bg-secondary'">
                                                {{ item.is_active == 1 ? 'Hoạt động' : 'Không hoạt động' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-primary" data-toggle="modal"
                                                    data-bs-target="#quangSua">Sửa</button>
                                                <button class="btn btn-sm btn-danger" data-toggle="modal"
                                                    data-bs-target="#quangXoa">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
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
            axios.get('https://beshopee.dzdeloy.io.vn/api/admin/shipper/get-data')
                .then(response => {
                    this.list = response.data.data;
                })
        }
    }
}
</script>
<style></style>