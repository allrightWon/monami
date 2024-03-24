export default {
    props: [],
    template:
    `
            <section id="section3" class="section">
                <div class="title">BEST PRODUCT</div>
                <p>{{text}}</p>
                
                <div class="pro-tab">
                    <ul>
                        <li v-for="(item,index) in proTab" :class="['menu', 'menu'+(index+1), {'on':isOn[index]}]" :key="item.title"><a  @click="tabClickMethod(index)" href="#" :class="'menu-btn'+(index+1)" :title="item.title">{{item.title}}</a></li>
                    </ul>
                </div>
                <div class="pro-list">
                    <ul :class="['pro-wrap', 'pro-wrap-1', {'on':isOn[0]}]">
                        <li v-for="(pro1,index) in product1" :key="pro1.name"><a href="#"><img :src="'./img/pen'+(index+1)+'.jpg'" :alt="pro1.name"></a>
                            <div class="info">
                                <div class="category">{{pro1.cate}}</div>
                                <div class="name">{{pro1.name}}</div>
                            </div>
                        </li>
                    </ul>

                   <ul :class="['pro-wrap', 'pro-wrap-2', {'on':isOn[1]}]">
                        <li v-for="(pro2,index) in product2" :key="pro2.name"><a href="#"><img :src="'./img/pen-s2/pen2-'+(index+1)+'.jpg'" :alt="pro2.name"></a>
                            <div class="info">
                                <div class="category">{{pro2.cate}}</div>
                                <div class="name">{{pro2.name}}</div>
                            </div>
                        </li>
                    </ul>
                  
                    <ul :class="['pro-wrap', 'pro-wrap-3', {'on':isOn[2]}]">
                        <li v-for="(pro3,index) in product3" :key="pro3.name"><a href="#"><img :src="'./img/pen-s3/pen3-'+(index+1)+'.jpg'" :alt="pro3.name"></a>
                            <div class="info">
                                <div class="category">{{pro3.cate}}</div>
                                <div class="name">{{pro3.name}}</div>
                            </div>
                        </li>
                    </ul>

                        <ul :class="['pro-wrap', 'pro-wrap-4',{'on':isOn[3]}]">
                            <li v-for="(pro4,index) in product4" :key="pro4.name"><a href="#"><img :src="'./img/pen-s4/pen4-'+(index+1)+'.jpg'" :alt="pro4.name"></a>
                                <div class="info">
                                    <div class="category">{{pro4.cate}}</div>
                                    <div class="name">{{pro4.name}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                <div class="pro-info">
                    <div class="wrap">
                        <span class="left-arr">
                            <img src="./img/left-arr.gif" alt="">
                        </span>
                        <span class="right-arr">
                            <img src="./img/right-arr.gif" alt="">
                        </span>
                        <div class="dns">
                            <div><img src="./img/cursor.gif" alt=""></div>
                            <p>DRAG & SCROLL</p>
                        </div>
                    </div>
                </div>
            </section>
    `,
        data() {
            return {
                isOn: [true,false,false,false],
                text:"언제 어디서나 생활 속에 함께하는 모나미",
                proTab: [
                    {'title':'프리미엄펜'},{'title':'펜·펜슬'},{'title':'마카·컬러링'},{'title':'노트·사무용품'}
                ]
                ,
                product1: [
                    { 'cate': '프리미엄펜', 'name': '153 리스펙트 리파인'},
                    { 'cate': '만년필', 'name': '153 아이디 만년필'},
                    { 'cate': '만년필', 'name': '153 네오 만년필'},
                    { 'cate': '프리미엄펜', 'name': '153 블랙 & 화이트'},
                    { 'cate': '프리미엄펜', 'name': '153 골드'},
                    { 'cate': '프리미엄펜', 'name': '153 아이디'},
                    { 'cate': '프리미엄펜', 'name': '60주년 프러스펜 3000 데스크 펜 스페셜 에디션'},
                    { 'cate': '프리미엄펜', 'name': '153 아이디 샤프'},
                    { 'cate': '프리미엄펜', 'name': '153 네오'},
                    { 'cate': '프리미엄펜', 'name': '153 리스펙트'},
                
                ],
                product2: [
                    { 'cate': '샤프/샤프심', 'name': '그리픽스 팝 샤프'},
                    { 'cate': '수성마카', 'name': '사인펜 슈퍼 파스텔 12색'},
                    { 'cate': '수성마카', 'name': '프러스펜 3000 피그먼트'},
                    { 'cate': '수성마카', 'name': '라이브 칼라(화이트 축)'},
                    { 'cate': '유성볼펜', 'name': 'FX ZETA C3'},
                    { 'cate': '유성볼펜', 'name': '제니스7'},
                    { 'cate': '수성마카', 'name': '프러스펜 3000 60색 세트'},
                    { 'cate': 'FX 153', 'name': 'FX 153'},
                    { 'cate': '유성볼펜', 'name': 'FX ZETA'},
                    { 'cate': '형광펜', 'name': '에센티 트윈'},
                    { 'cate': '연필', 'name': 'NEW 바우하우스 연필'},
                    { 'cate': '샤프/샤프심', 'name': '클리키'},
                    { 'cate': '유성볼펜', 'name': 'BP 153'},
                    { 'cate': '연필', 'name': '연필_모니주(오렌지/핑크/퍼플)'},
                    { 'cate': '연필', 'name': '연필_모니주(그린/블루)'},
                    { 'cate': '사인펜', 'name': '모니주 사인펜(핑크/블루)'},
                    { 'cate': '수성마카', 'name': '라이브 칼라 DIY'},
                    { 'cate': '수성마카', 'name': '프러스펜 S / 리필심'},
                    { 'cate': '수성마카', 'name': '프러스펜 3000'},
                    { 'cate': '수성마카', 'name': '어데나'},
                
                ],  product3: [
                    { 'cate': '워터브러쉬', 'name': '워터 리얼 브러쉬'},
                    { 'cate': '수성마카', 'name': '컬러 리얼 브러쉬'},
                    { 'cate': '수성마카', 'name': '붓펜 12색 세트'},
                    { 'cate': '수성펜 ', 'name': '컬러 트윈 브러쉬'},
                    { 'cate': '크레파스', 'name': '크레파스_모니주(옐로우)'},
                    { 'cate': '크레파스', 'name': '크레파스_모니주(핑크)'},
                    { 'cate': '크레파스', 'name': '크레파스_모니주(블루)'},
                    { 'cate': '색연필', 'name': '종이말이 색연필_모니주(블루/핑크)'},
                    { 'cate': '샤프식 색연필', 'name': '샤프식 색연필_모니주(블루/핑크)'},
                    { 'cate': '그림물감', 'name': '그림물감_모니주(핑크)'},
                    { 'cate': '그림물감', 'name': '그림물감_모니주(블루)'},
                    { 'cate': '생활마카', 'name': '세라믹마카 480 / 482'},
                    { 'cate': '생활마카', 'name': '패브릭마카 470'},
                    { 'cate': '생활마카', 'name': '데코마카 463'},
		            { 'cate': '생활마카', 'name': '데코마카 463-2'},
                    { 'cate': '수성마카', 'name': '붓펜'},
                    { 'cate': '생활마카', 'name': '키친마카 420'},
                    { 'cate': '산업마카', 'name': '프로 페인트마카'},
                    { 'cate': '보드마카', 'name': '시그마플로 생잉크 보드마카 220'},
                    { 'cate': '생활마카', 'name': '가든마카'},
                ],
                  product4: [
                    { 'cate': '풀', 'name': '다목적으로 사용 가능한 목공풀'},
                    { 'cate': '풀', 'name': '다목적으로 사용 가능한 목공풀 2-Way'},
                    { 'cate': '풀', 'name': '빨리 마르는 물풀'},
                    { 'cate': '풀 ', 'name': '붙였다 뗄 수 있는 메모 풀'},
                    { 'cate': '풀', 'name': '모서리에 바르기 쉬운 삼각풀'},
                    { 'cate': 'NOTE', 'name': '지퀀스'},
                    { 'cate': '풀', 'name': '한번에 잘 발리는 부드러운 풀'},
                ],	
        }
    },

    
    methods:{
        tabClickMethod(index){
            this.isOn = Array(4).fill(false);
            this.isOn[index] = true;
            $(`.pro-list .pro-wrap-${index + 1}`).css('left', '0px')
        }
    }
}