// webpack的项目配置文件

// 运用这个之前，需要先安装vue-loader插件
const {
    VueLoaderPlugin
} = require('vue-loader');

const path = require('path'); //用于构造绝对路径
const glob = require('glob'); //用于遍历文件夹遍历
const {
    log
} = require('console');


//files = ['components/lib/card/index.js','components/lib/demo/index.js']
// 默认写法
//list = {
//    card:'components/lib/card/index.js',
//    demo:'components/lib/demo/index.js',
// }
// list下的是个对象，获取每个组件的入口文件，当文件很多时候通过遍历进行获取
const list = {}; //保存文件夹的文件信息

// 读取文件的方法-同步的方式处理异步的文件读取
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`); //dirPath下所有index.js路径的数组
    // console.log('files', files);
    for (let file of files) {
        // console.log('component->', component);
        const component = file.split(/[/.]/)[2]; //获取组件name文件夹名称

        //  { button: './components/lib/button/index.js' }
        list[component] = `./${file}`; //填充list
    }

    // console.log('list-》', list);
}
// 调用函数
makeList('components/lib', list);



module.exports = {
    entry: list, //入口文件
    mode: 'development',
    output: {
        // umd：表示使用的是umd模块
        filename: '[name].umd.js', //输出文件名；-->button.umd.js
        // 要使用绝对路径
        path: path.resolve(__dirname, 'dist'), //输出目录
        library: 'umi', //配置到该字段下
        libraryTarget: 'umd' //打包成umd模块
    },
    // 插件的运用
    plugins: [ //处理Vue文件【需要安装vue-loader插件】,
        new VueLoaderPlugin(),
    ],
    // 模块
    module: {
        // 什么样的文件，使用怎么样的loader
        rules: [{
            test: /\.vue$/, //对vue文件使用vue-loader
            use: [{
                loader: 'vue-loader',
            }]
        }]
    }
}