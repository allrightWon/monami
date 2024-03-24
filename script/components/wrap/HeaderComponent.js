export default{
     
    template:
        `
        <header id="header">
            <div class="top">
                <div class="container">
                        <div class="links">
                            <div class="sns">
                                <a v-for="item in sns" :href="item.link" :target="item.target"><img :src="item.img"  :title="item.title" :alt="item.title"></a>
                            </div>
                        </div>
                        <div class="top-menu">
                            <a href="#">HOME</a>
                            <span>|</span>
                            <a href="#">SITE MAP</a>
                            <span>|</span>
                            <a href="#">CONTACT US</a> 
                        </div>
                </div>
            </div>

            <div class="bottom">
                <div class="container">
                    <h2 class="hide">모나미 로고</h2>
                    <a href="./index.html"><img src="./img/top-monami-logo.jpg" alt="모나미 대표 로고"></a>
                    
                    <div class="nav">
                        <ul>
                            <li v-for="(item2,index) in intro" :key="item2.mainTitle"><a @mouseover="mainMouseOverMethod(index)" href="#" :class="'nav-btn'+(index + 1)" :title="item2.mainTitle">{{item2.mainTitle}}</a>
                                <ul @mouseleave="mainMouseLeaveMethod(index)" :class="['sub', 'sub'+(index + 1),{'on':isOn[index]}]">
                                    <li v-for="(subItem, subIndex) in item2.subTitle" :key="subItem"><a href="#" :title="subItem">{{subItem}}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="search">
                        <a href="#"><img src="./img/search-icon.gif" alt="검색 아이콘"></a>
                      
                      <a href="#">
                    <div class="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div></a>  
                    </div>
                </div>
              
            </div>
        </header>

        `
    ,

      data() {
          return {
              isOn: new Array(6).fill(false),
            sns: [
                { 'link': 'https://www.facebook.com/monami1960', 'img': './img/sns_facebook.gif', 'title': '모나미 페이스북', 'target':'_blank' },
                { 'link': 'https://www.instagram.com/monami_official/', 'img': './img/sns_insta.gif', 'title': '모나미 인스타그램','target':'_blank' }
            ],
            intro: [
                {'mainTitle': '모나미소개', 'subTitle': ['CEO메시지', '회사정보', '회사연혁', '윤리강령', '투자정보', 'CI', '채용정보', '찾아오시는 길']},
                {'mainTitle': '모나미제품','subTitle':['프리미엄 펜','펜·펜슬','마카·컬러링','노트·사무용품','잉크·리필','카탈로그']},
                {'mainTitle': 'NEWS & VIDEO','subTitle':['보도자료','동영상자료']},
                {'mainTitle': '모나미 미술대회','subTitle':['미술대회 소개','수상작 발표']},
                {'mainTitle': '고객지원','subTitle':['자주묻는질문','문의하기','이벤트']},
                {'mainTitle': '기업 구매 / 개발','subTitle':['대량 구매 문의','기업 및 단체 구매','산업용 맞춤 제품 개발']},
            ]
,
       
        }
    },

    methods:{
        mainMouseOverMethod(index) {
            $('.sub').stop().slideUp(); 
            $(`.sub${index + 1}`).stop().slideDown(); 
        },
        mainMouseLeaveMethod() {
            $('.sub').stop().slideUp(); 
        }
    },
    
    

}