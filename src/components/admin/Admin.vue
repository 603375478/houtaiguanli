<template>
  <div class="Admin">
    <el-container>
      <el-header style="height:60px;">
         <router-link to='/Admin'><img :src="system.logo" class="logo" alt=""></router-link>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  background-color="#fbfbfb"
                  text-color="#888"
                  active-text-color="#000"
                  :router=true
                  :default-openeds="['1']"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>系统设置</span>
                    </template>
                      <el-menu-item index="/Admin/AdminSystem">基本设置</el-menu-item>
                      <el-menu-item index="1-2">用户管理</el-menu-item>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>信息管理</span>
                    </template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>友情链接</span>
                    </template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view :prop = 'system'></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      system: {
        logo: require("../../assets/logo.png"),
        title:"0718后台管理系统"
      }
     
    };
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);

      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Admin .el-header {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#1278f6),
    to(#00b4aa)
  );
  background-image: -webkit-linear-gradient(left, #1278f6, #00b4aa);
  background-image: -moz-linear-gradient(left, #1278f6, #00b4aa);
  background-image: linear-gradient(to right, #1278f6, #00b4aa);
}

.Admin .el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  height: 60px;
  padding: 0;
}
.Admin .logo {
  margin-top: 10px;
  margin-left: 15px;
  height: 35px;
}
.Admin .el-aside {
  background-color: #fbfbfb;
  color: #333;
  text-align: left;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 60px;
}

.Admin .el-main {
  background-color: #f8f8f8;
  color: #333;
  text-align: left;
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0px;
  padding: 0;
  width: calc(100% - 200px);
}

.Admin body > .el-container {
  margin-bottom: 40px;
  position: relative;
}

.el-breadcrumb{
   background:#fff;
   box-shadow: 0 0 3px #eee;
   /* margin:-20px; */
   padding:15px 0 15px 20px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
