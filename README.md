# index

## 功能介绍

这个项目提供了一个 local server 方便调试首页等静态页面。

## 目录结构

Index

|—— app <!--local server-->

|—— static <!--静态资源 js css image等-->

|—— views <!--html-->

|—— start.app <!--start for mac-->

|—— start.bat <!--start for windows-->

|—— start.sh <!--start for linux-->

## 开发说明

这个项目是最终发布环境的镜像，当前已经提供了一个基础版本 version 0.1.0。

### 说明

修改已有的页面内容，可以直接修改 **static** 和 **views** 目录下的文件。

增加新页面，需要联系我为 local server 增加新路由。

### 启动

- Windows 下启动
  执行 `start.bat` ，访问 http://127.0.0.1:8080
- Linux 下启动
  执行 `start.sh` ，访问 http://127.0.0.1:8080
- Mac 下启动
  执行 `start.app` ，访问 http://127.0.0.1:8080

