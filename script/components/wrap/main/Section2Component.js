export default{
       
    props: [],
    template:
    `
          <section id="section2" class="section">
                <div class="top">
                    <div v-for="(item,index) in top" :class="item.row">
                          <template v-if="item.row === 'left'">
                            <h2>NEW <br> ARRIVALS <br></h2>
                            <p>가장 먼저 만나는 설레는 기다림</p>
                            </template>
                        <div :class="item.itemNum">
                            <a href="#"><img :src="item.img" :alt="item.name"></a>
                                <div @mouseover="topMouseOverMethod(index)" @mouseleave="topMouseLeaveMethod(index)" :class="[item.div,'align',{'on':topIsOn[index]}]">
                                    <div class="align">
                                        <div class="category">{{item.cate}}</div>
                                         <div class="name">{{item.name}}</div>
                                        <div class="plus">
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                
                </div>
                <div class="bottom">
                    <div v-for="(bot,index) in bottom" :key="bot.name" :class="bot.case">
                        <a href="#"><img :src="bot.img" :alt="bot.name"></a>
                        <div @mouseover="botMouseOverMethod(index)" @mouseleave="botMouseLeaveMethod(index)" :class="[bot.div, {'on':botIsOn[index]}]">
                            <div class="align">
                                <div class="category">{{bot.cate}}</div>
                                <div class="name">{{bot.name}}</div>
                                <div class="plus">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `,
    data() {
        return {
            topIsOn: new Array(2).fill(false),
            botIsOn: new Array(3).fill(false),

            top: [
                {'row':'left','itemNum':'new-item1', 'img': './img/section2_one.jpg', 'div': 'ondiv-1', 'cate': 'PEN', 'name': 'FX ZETA C3'},
                {'row':'right','itemNum':'new-item2', 'img': './img/section2_two.jpg', 'div': 'ondiv-2', 'cate': 'NOTE', 'name': '지퀀스'},
            
            ],
            

            bottom:[
                {'case':'new-item3', 'img':'./img/section2_three.jpg', 'div':'ondiv-3','cate':'SHARP','name':'제니스7샤프'},
                {'case':'new-item4', 'img':'./img/section2_four.jpg', 'div':'ondiv-4','cate':'FOUNTAIN PEN','name':'153 아이디 만년필'},
                {'case':'new-item5', 'img':'./img/section2_five.jpg', 'div':'ondiv-5','cate':'PREMIUM PEN','name':'153 리스펙트 리파인'},
]
        }
    },

    methods: {
        topMouseOverMethod(index) {
            this.topIsOn = Array(2).fill(false);
            this.topIsOn[index] = true; 
        },
        topMouseLeaveMethod(index) {
            this.topIsOn = Array(2).fill(false);
        },
         
        botMouseOverMethod(index) {
            this.botIsOn = Array(3).fill(false);
            this.botIsOn[index] = true;
        },

        botMouseLeaveMethod(index) {
            this.botIsOn = Array(2).fill(false);
        }
    }
}