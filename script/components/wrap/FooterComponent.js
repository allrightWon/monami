export default {
      
    props: [],
    template:
        `
        <footer id="footer">
            <div class="foot">
                <div class="foot-top">
                    <h1>
                        <img src="./img/foot_logo.jpg" alt="모나미 하단 로고">
                    </h1>
                    <ul>
                        <li><a href="#">회사소개</a></li>
                        <li>|</li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li>|</li>
                        <li><a href="#">이메일무단수집거부</a></li>
                    </ul>
                </div>
                <div class="foot-btm">
                    <div class="info">
                        <div class="title">INFO</div>
                        <address v-html="address"></address>
                        <p>COPYRIGHT(C) 2017 MONAMI.CO.,LTD. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div class="cc">
                        <div class="title">
                            CUSTOMER CENTER
                        </div>
                        <div class="tel">{{tel}}</div>
                        <a href="#">카카오톡 문의 ></a>
                    </div>
                    <div class="fam">
                        <select name="" id="family">
                            <option value="">FAMILY SITE</option>
                            <option v-for="fam in family" :key="fam.site" :value="fam.site">{{fam.title}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
        `,
     data() {
        return {
            address: "ADDRESS : 경기도 용인시 수지구 손곡로 17<span>|</span>TEL : 031-216-0153<span>|</span>FAX : 031-270-5154",
            tel: "080-022-0153",
            family: [
                { 'site': 'https://brand.naver.com/monami','title':'모나미몰'},
                { 'site': 'https://www.mon-arte.com/','title':'모나르떼'},
                { 'site': 'https://brand.naver.com/monami/shoppingstory/detail?id=5000882144&page=1','title':'모나미 컨셉스토어'},
                { 'site': 'http://www.hangso.co.kr/','title':'주식회사 항소'},
                { 'site': 'https://www.monamistation.com/main.do','title':'모나미 스테이션'},
                { 'site': 'https://artcontest.monami.com/w/main.do','title':'모나미 미술대회'},
                { 'site': 'http://mpms.monami.com/promotion/','title':'모나미 기업대회'},
                { 'site': 'http://www.monamicosmetics.com/','title':'모나미 코스메틱'},
            
            ]
        }
    },
    
}