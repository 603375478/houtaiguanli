<template>
  <div class="AdminSystem">
   <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/Admin/AdminIndex' }">{{prop.title}}</el-breadcrumb-item>
          <el-breadcrumb-item>基本信息管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
   <el-row>
      <el-col :span="12">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="网站名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="关闭网站">
    <el-select v-model="form.region" placeholder="请选择网站状态">
      <el-option label="关闭" value="close"></el-option>
      <el-option label="开启" value="open"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="启用logo">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>

  <el-form-item>
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</el-form-item>

  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
      </el-col>
   </el-row>
  </div>
</template>

<script>
export default {
  name: 'AdminSystem',
  props:{
     prop:Object
  },
  data(){
    return {
      msg:"AdminSystem",
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         imageUrl: ''
    }
  },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-form{
   border:1px solid #ddd;
   box-shadow: 3px 3px 3px #eee;
   padding:15px;
   margin:25px;
   border-radius: 5px;
}

</style>
