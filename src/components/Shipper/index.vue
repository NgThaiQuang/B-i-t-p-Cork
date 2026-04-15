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
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control mb-3"
                            placeholder="Nhập họ và tên">
                        <label for="">Email</label>
                        <input v-model="listPhu.email" type="email" class="form-control mb-3" placeholder="Nhập email">
                        <label for="">CCCD</label>
                        <input v-model="listPhu.cccd" type="text" class="form-control mb-3" placeholder="Nhập CCCD">
                        <label for="">Số điện thoại</label>
                        <input v-model="listPhu.so_dien_thoai" type="text" class="form-control mb-3"
                            placeholder="Nhập số điện thoại">
                        <label for="">Trạng thái</label>
                        <select v-model="listPhu.trang_thai" class="form-control mb-3">
                            <option value="">Chọn trạng thái</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                        <button @click="themShipper()" class="btn btn-danger w-100">Thêm mới</button>
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
                                <input v-model="tuKhoa" type="text" placeholder="Tìm kiếm shipper..." class="form-control">
                                <button @click="locDanhSach()" class="btn btn-outline-danger" type="button">Tìm kiếm</button>
                            </div>
                        </div>
                        <div class="table-responsive mt-4">
                            <table class="table table-bordered table-hover table-striped">
                                <thead class="table-danger text-dark">
                                    <tr class="text-nowrap">
                                        <th>ID</th>
                                        <th>Họ và tên</th>
                                        <th>Email</th>
                                        <th>CMND</th>
                                        <th>Số điện thoại</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in locDanhSach()" :key="index">
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
                                                <button @click="ganDuLieu(item)" class="btn btn-sm btn-primary" data-toggle="modal"
                                                    data-target="#quangSuaShipper">Sửa</button>
                                                <button @click="ganDuLieu(item)" class="btn btn-sm btn-danger" data-toggle="modal"
                                                    data-target="#quangXoaShipper">Xóa</button>
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
    <div class="modal fade" id="quangXoaShipper" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa shipper</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa shipper này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button @click="xoaShipper()" type="button" class="btn btn-primary">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangSuaShipper" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <label for="">CMND</label>
                            <input v-model="listPhu.cmnd" type="text" placeholder="Nhập CMND" class="form-control">
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
                    <button @click="suaShipper()" type="button" class="btn btn-primary">Save changes</button>
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
            list: [],
            listPhu: {
                id: '',
                ho_va_ten: '',
                email: '',
                anh_dai_dien: '',
                cmnd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            },
            tuKhoa:''
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
        },
         dieuKienLoc(value){
            let tuKhoa=this.tuKhoa.toLowerCase().trim();
            return value.ho_va_ten.toLowerCase().includes(tuKhoa) ;
        },
        locDanhSach(){
            return this.list.filter(this.dieuKienLoc);
        },
        themShipper() {
            this.list.push({
                id: Math.max(...this.list.map(item => item.id)) + 1,
                ho_va_ten: this.listPhu.ho_va_ten,
                email: this.listPhu.email,
                anh_dai_dien: this.listPhu.anh_dai_dien,
                cmnd: this.listPhu.cmnd,
                ngay_sinh: this.listPhu.ngay_sinh,
                so_dien_thoai: this.listPhu.so_dien_thoai,
                is_active: this.listPhu.is_active,
            });
            this.listPhu = {
                id: '',
                ho_va_ten: '',
                email: '',
                anh_dai_dien: '',
                cmnd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            }
        },
        ganDuLieu(item) {
            this.listPhu.id = item.id;
            this.listPhu.ho_va_ten = item.ho_va_ten;
            this.listPhu.email = item.email;
            this.listPhu.cmnd = item.cmnd;
            this.listPhu.ngay_sinh = item.ngay_sinh;
            this.listPhu.so_dien_thoai = item.so_dien_thoai;
            this.listPhu.is_active = item.is_active;
        },
        suaShipper() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === this.listPhu.id) {
                    this.list[i].ho_va_ten = this.listPhu.ho_va_ten;
                    this.list[i].email = this.listPhu.email;
                    this.list[i].cmnd = this.listPhu.cmnd;
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
                cmnd: '',
                ngay_sinh: '',
                so_dien_thoai: '',
                is_active: null,
            }
        },
        xoaShipper() {
            this.list = this.list.filter(x => x.id !== this.listPhu.id);
        }
    }
}
</script>
<style></style>