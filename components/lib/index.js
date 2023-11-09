// lib整个项目的入口文件；实现全部导入；
import ChenButton from './ChenButton/index.js'

const components = {
    // Demo,
    ChenButton,
};

const install = function (Vue) {
    if (install.installed) return; //避免重复安装
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]); //对所有key值用component注册
    });
}

const API = {
    install,
}

export default API; //导出