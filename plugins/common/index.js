import Vue from 'vue'

const common = {
    install (Vue) {
        Vue.prototype.$common = {
            formTimeString (val) {
                let result = ''
                result += Math.floor(val / 60)
                result += ':'
                result += ('0' + (val % 60)).slice(-2)
                
                return result
            },
        }
    }
}


Vue.use(common)