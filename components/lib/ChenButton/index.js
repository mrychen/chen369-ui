import ChenButton from './src/index.vue'

// eslint-disable-next-line func-names
ChenButton.install = function (Vue) {
    Vue.component(ChenButton.name, ChenButton)
}

export default ChenButton