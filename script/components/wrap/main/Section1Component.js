export default{
    
    props: [],
    template:
    `
          <section id="section1" class="section">
                <div class="bg-img" alt="모나미 배경 이미지">

                </div>
                <div class="bg-text">
                    <h3 v-html="backH3"></h3>
                    <p v-html="backP"></p>
                </div>
            </section>
    `,
      data() {
        return {
            backH3: "어쩌면 삶은 <br> 인생이라는 종이 위에 <br> 써 내려가는 <br> 펜의 기록 같습니다.",
            backP: "그중에서도 지우고 싶지 않은 기록이 있습니다. <br> 모나미는 언제나 당신의 행복한 기록과 함께 합니다.",
        }
    },
}