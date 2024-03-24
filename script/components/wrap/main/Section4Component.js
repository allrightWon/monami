export default{
      data() {
        return {
            
        }
    },
    props: [],
    template:
    `
             <section id="section4" class="section">
                <div class="video-container">
                    <video autoplay muted loop>
                        <source :src="videoSrc">
                    </video>
                </div>
            </section>
    `,
    data() {
        return {
            videoSrc:"./video/monami_video.mp4"
        }
    },
}