<template>
    <div>
        <div class="container layout-top-spacing">
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <b>
                        <h5 class="text-primary">Danh sách khách hàng</h5>
                    </b>
                    <button class="btn btn-primary " data-toggle="modal" data-target="#quangThemMoi">+ Thêm
                        mới</button>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <input v-model="tuKhoa" type="text" placeholder="Tìm kiếm khách hàng..." class="form-control w-100">
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
                                <tr v-for="(item, index) in locDanhSach()" :key="index">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.ho_va_ten }}</td>
                                    <td>{{ item.email }}</td>
                                    <td><img :src="item.anh_dai_dien" alt="Ảnh đại diện"
                                            style="width: 100%; height: 60px; object-fit: cover;"></td>
                                    <td>{{ item.cccd }}</td>
                                    <td class="text-nowrap">{{ item.ngay_sinh }}</td>
                                    <td>{{ item.so_dien_thoai }}</td>
                                    <td>
                                        <span class="badge w-100"
                                            :class="item.is_active == 1 ? 'bg-success' : 'bg-secondary'">
                                            {{ item.is_active == 1 ? 'Hoạt động' : 'Không hoạt động' }}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <button @click="ganDuLieu(item)" class="btn btn-sm btn-primary"
                                                data-toggle="modal" data-target="#quangSua">Sửa</button>
                                            <button @click="ganDuLieu(item)" class="btn btn-sm btn-danger"
                                                data-toggle="modal" data-target="#quangXoa">Xóa</button>
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
    <!-- Modal -->
    <div class="modal fade" id="quangXoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa khách hàng</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa khách hàng này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button @click="xoaKhachHang()" type="button" class="btn btn-primary">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">Tên khách hàng</label>
                            <input v-model="listPhu.ho_va_ten" type="text" placeholder="Nhập vào họ và tên"
                                class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Email</label>
                            <input v-model="listPhu.email" type="text" placeholder="Nhập vào email"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">CCCD</label>
                            <input v-model="listPhu.cccd" type="text" placeholder="Nhập CCCD" class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Ảnh đại diện</label>
                            <input v-model="listPhu.anh_dai_dien" type="text" placeholder="Nhập vào đường dẫn ảnh"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">Ngày sinh</label>
                            <input v-model="listPhu.ngay_sinh" type="datetime" placeholder="dd/MM/YYYY"
                                class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Số điện thoại</label>
                            <input v-model="listPhu.so_dien_thoai" type="text" placeholder="Nhập vào số điện thoại"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="">Trạng thái</label>
                            <select v-model="listPhu.is_active" name="" id="" class="form-control"
                                placeholder="Chọn trạng thái">
                                <option value="1">Hoạt động</option>
                                <option value="0">Không hoạt động</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="suaKhachHang()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm mới khách hàng</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">Tên khách hàng</label>
                            <input v-model="listPhu.ho_va_ten" type="text" placeholder="Nhập vào họ và tên"
                                class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Email</label>
                            <input v-model="listPhu.email" type="text" placeholder="Nhập vào email"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">CCCD</label>
                            <input v-model="listPhu.cccd" type="text" placeholder="Nhập CCCD" class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Ảnh đại diện</label>
                            <input v-model="listPhu.anh_dai_dien" type="text" placeholder="Nhập vào đường dẫn ảnh"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <label for="">Ngày sinh</label>
                            <input v-model="listPhu.ngay_sinh" type="datetime" placeholder="dd/MM/YYYY"
                                class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Số điện thoại</label>
                            <input v-model="listPhu.so_dien_thoai" type="text" placeholder="Nhập vào số điện thoại"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="">Trạng thái</label>
                            <select v-model="listPhu.is_active" name="" id="" class="form-control"
                                placeholder="Chọn trạng thái">
                                <option value="1">Hoạt động</option>
                                <option value="0">Không hoạt động</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="themKhachHang()" type="button" class="btn btn-primary">Thêm mới</button>
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
            listPhu: {
                id: '',
                ho_va_ten: '',
                email: '',
                anh_dai_dien: '',
                cccd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            },
            tuKhoa: ''
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
        },
        themKhachHang() {
            this.list.push({
                id: Math.max(...this.list.map(item => item.id)) + 1,
                ho_va_ten: this.listPhu.ho_va_ten,
                email: this.listPhu.email,
                anh_dai_dien: this.listPhu.anh_dai_dien,
                cccd: this.listPhu.cccd,
                ngay_sinh: this.listPhu.ngay_sinh,
                so_dien_thoai: this.listPhu.so_dien_thoai,
                is_active: this.listPhu.is_active,
            });
            this.listPhu = {
                id: '',
                ho_va_ten: '',
                email: '',
                anh_dai_dien: '',
                cccd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            }
        },
        ganDuLieu(item) {
            this.listPhu.id = item.id;
            this.listPhu.ho_va_ten = item.ho_va_ten;
            this.listPhu.email = item.email;
            this.listPhu.anh_dai_dien = item.anh_dai_dien;
            this.listPhu.cccd = item.cccd;
            this.listPhu.ngay_sinh = item.ngay_sinh;
            this.listPhu.so_dien_thoai = item.so_dien_thoai;
            this.listPhu.is_active = item.is_active;
        },
        suaKhachHang() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === this.listPhu.id) {
                    this.list[i].ho_va_ten = this.listPhu.ho_va_ten;
                    this.list[i].email = this.listPhu.email;
                    this.list[i].anh_dai_dien = this.listPhu.anh_dai_dien;
                    this.list[i].cccd = this.listPhu.cccd;
                    this.list[i].ngay_sinh = this.listPhu.ngay_sinh;
                    this.list[i].so_dien_thoai = this.listPhu.so_dien_thoai;
                    this.list[i].is_active = this.listPhu.is_active;
                    break;
                }
            }
            this.listPhu = {
                id: '',
                ho_va_ten: '',
                email: '',
                anh_dai_dien: '',
                cccd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            }
        },
        xoaKhachHang() {
            this.list = this.list.filter(x => x.id !== this.listPhu.id);
        },
        dieuKienLoc(value) {
            let tuKhoa = this.tuKhoa.toLowerCase().trim();
            return value.ho_va_ten.toLowerCase().includes(tuKhoa);
        },
        locDanhSach() {
            return this.list.filter(this.dieuKienLoc);
        },
    }
}
</script>
<style></style>