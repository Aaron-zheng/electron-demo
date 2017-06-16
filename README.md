# electron-demo

## 操作步骤

如下

### 安装 electron 相关工具

npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install -g electron

cnpm install -g electron-packager

cnpm install -g electron-winstaller


### 运行 hello world 程序

1. 在 source 文件夹中，添加 index.html, main.js, package.json

2. 编写代码

3. 通过 cmd 进入到对应文件夹，然后运行 electron . 就可以启动


### 打包成为一个 windows 的可执行程序

1. 修改 source 文件夹中的 main.js 

2. 在 source 文件夹下运行 cnpm install electron-squirrel-startup

3. 对 source 文件夹进行打包 electron-packager . --platform=win32 --arch=x64 --electronVersion=1.6.10 --overwrite

4. 在根目录运行 cnpm install -g electron-winstaller

