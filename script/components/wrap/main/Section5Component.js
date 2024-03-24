export default{
     
    props: [],
    template:
    `
        
            <section id="section5" class="section">
                <div class="container">
                    <div class="news">
                        <div class="title">
                            <h2>{{newsT}}<br></h2>
                            <a href="#">MORE</a>
                        </div>
                        <ul class="news-list">
                       
                            <li>
                                <div class="thum">
                                    <a href="#"><img :src="thum.img" alt="공지사항 썸네일"></a>
                                </div>
                                <div class="text">
                                    <a href="#">
                                        <h2>{{thum.h2}}</h2>
                                        <p>{{thum.p}}</p>    
                                        <span class="date">{{thum.date}}</span>
                                    </a>
                                
                                </div>
                            </li>
                            <li v-for="list in nList" :key="list.title"><a href="#">{{list.title}}</a><span>{{list.date}}</span></li>
                        </ul>
                    </div>
                    <div class="inquiry">
                        <div class="title">
                            <h2>{{inq.h2}}</h2>
                            <p v-html="inq.p"></p>
                            <a href="#">{{inq.a}}</a>
                        </div>
                    </div>
                    <div class="shop">
                        <div class="title">
                            <h2>{{shop.h2}}</h2>
                            <p v-html="shop.p"></p>
                            <a href="#">{{shop.a}}</a>
                        </div>
                    </div>
                </div>
            </section>
    `,
    data() {
        return {
            newsT:"MONAMI NEWS",
            thum:{'img':'./img/sc5-news-img.jpg','h2':'모나미, 신학기 대전 진행','p':'모나미, 신학기 대전 진행… 최대 63% 할인- 2월 19일~25일 네이버 브랜드 스토어에서 신학기 이벤트 진행','date':'2014-03-18'}
            ,
            nList:[
                {'title':'- 모나미, 공간의 가치를 높인 사무용품 브랜드 ‘LOBDA(롭다)’ 론칭','date':'2024-03-19'},
                {'title':'- 모나미, 스타필드 수원에 모나미스토어 신규 오픈','date':'2024-03-20'},
                {'title':'- 모나미 X 취(CHI), 한국의 잉크 ‘수묵’ 공간 협업 전시','date':'2024-03-21'},
            
            ],
            inq:{'h2':'INQUIRY','p':'언제나 소중한 의견에 귀 기울이겠습니다.<br>궁금한 사항은 문의하세요.','a':'INQUIRY NOW'},
            shop:{'h2':'모나미 네이버 브랜드 스토어','p':'모나미 공식 쇼핑몰입니다.<br>공식몰만의 다양한 혜택을 만나보세요.','a':'BUY NOW'}
        }
    },
}