import WrapComponent from './components/WrapComponent.js'

const vue = new Vue({
    data() {
        return {
            
        }
    },
    template:
        `
            <wrap-component />
        `
    ,
    components: {
        'wrap-component': WrapComponent
    }
})
vue.$mount('#root')