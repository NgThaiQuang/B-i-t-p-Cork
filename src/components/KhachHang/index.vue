<template>
    <div class="container layout-top-spacing">
        <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
                <b>
                    <h5 class="text-primary">Danh sách khách hàng</h5>
                </b>
                <button class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#quangThemMoi">+ Thêm
                    mới</button>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <input type="text" placeholder="Tìm kiếm khách hàng..." class="form-control w-100">
                <div class="table-responsive">
                    <table class="table mt-3 table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th class="text-nowrap">ID</th>
                                <th class="text-nowrap">Tên khách hàng</th>
                                <th class="text-nowrap">Email</th>
                                <th class="text-nowrap">Ảnh đại diện</th>
                                <th class="text-nowrap">CCCD</th>
                                <th class="text-nowrap">Ngày sinh</th>
                                <th class="text-nowrap">Điện thoại</th>
                                <th class="text-nowrap">Trạng thái</th>
                                <th class="text-nowrap">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in list" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.ho_va_ten }}</td>
                                <td>{{ item.email }}</td>
                                <td><img :src="item.anh_dai_dien" alt="Ảnh đại diện"
                                        style="width: 100%; height: 60px; object-fit: cover;"></td>
                                <td>{{ item.cccd }}</td>
                                <td>{{ item.ngay_sinh }}</td>
                                <td>{{ item.so_dien_thoai }}</td>
                                <td>
                                    <span class="badge" :class="item.is_active == 1 ? 'bg-success' : 'bg-secondary'">
                                        {{ item.is_active == 1 ? 'Hoạt động' : 'Không hoạt động' }}
                                    </span>
                                </td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#quangSua">Sửa</button>
                                        <button class="btn btn-sm btn-danger" data-bs-toggle="modal"
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
    <div class="modal fade" id="quangSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangXoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            axios.get('https://beshopee.dzdeloy.io.vn/api/admin/khach-hang/get-data').then((res) => {
                this.list = res.data.data;
            });
        }

    }
}
</script>
<style></style>