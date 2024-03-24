import Section1Component from './main/Section1Component.js'
import Section2Component from './main/Section2Component.js'
import Section3Component from './main/Section3Component.js'
import Section4Component from './main/Section4Component.js'
import Section5Component from './main/Section5Component.js'

export default {
       data() {
        return {
            
        }
    },
    props: [],
    template:
        `
          <main id="main">
            <section1-component />
            <section2-component />
            <section3-component />
            <section4-component />
            <section5-component />
            </main>
        `
    ,
    components: {
        'section1-component':Section1Component,
        'section2-component':Section2Component,
        'section3-component':Section3Component,
        'section4-component':Section4Component,
        'section5-component':Section5Component,
    }
}