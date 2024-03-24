import HeaderComponent from './wrap/HeaderComponent.js'
import MainComponent from './wrap/MainComponent.js'
import FooterComponent from './wrap/FooterComponent.js'

export default {
       data() {
        return {
            
        }
    },
    template:
        `
    <div id="wrap">
        <header-component />
        <main-component />
        <footer-component />
    </div>
        `
    ,
    components: {
        'header-component': HeaderComponent,
        'main-component': MainComponent,
        'footer-component': FooterComponent,
        
    }
    
}