(function($,window,document){

    class Monami{
        init(){
            this.section2();
            this.section3();
            this.footer();
            
        }

        
        section2() {
           
            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section1').offset().top + 150) {
                      $('#section2 .top').addClass('on');
                      $('#section2 .bottom').addClass('on');
              }
               });
            

        }

        section3() {
        
            
        let dragging = false;
        let startLeft, mouseX, initialLeft;

         $('.pro-list .pro-wrap-1, .pro-list .pro-wrap-2, .pro-list .pro-wrap-3, .pro-list .pro-wrap-4').on('mousedown', function(e){
             dragging = true;
             startLeft = e.pageX;
             initialLeft = parseInt($(this).css('left'));
         });
            
            $('a').on('mousedown', function(e){
            e.preventDefault(); 
        });


            
         $(document).on('mousemove', function(e){
             if(dragging){
                 mouseX = e.pageX;
                 let movement = mouseX - startLeft;
                 $(document).find('.pro-list .pro-wrap-1, .pro-list .pro-wrap-2, .pro-list .pro-wrap-3, .pro-list .pro-wrap-4').each(function(){
                     let newLeft = initialLeft + movement;

                     if($(this).hasClass('pro-wrap-1')){    
                         newLeft = Math.min(0, Math.max(-950, newLeft)); 
                     } else if($(this).hasClass('pro-wrap-2')){
                         newLeft = Math.min(0, Math.max(-3800, newLeft)); 
                     }
                     else if ($(this).hasClass('pro-wrap-3')) {
                         newLeft = Math.min(0, Math.max(-3800, newLeft)); 
                     }
    
                     else if ($(this).hasClass('pro-wrap-4')) {
                         newLeft = Math.min(0, Math.max(-100, newLeft)); 
                     }

                     $(this).css('left', newLeft + 'px');
                 });
             }
         });


         $(document).on('mouseup', function(){
             dragging = false;
         });
         $('.pro-wrap a').on('click', function(event) {
            event.preventDefault();
        });
         $('.pro-tab a').on('click', function(event) {
            event.preventDefault();
        });
        
        }

        footer(){
            $('#family').on({
                change(){
                    var Url = $(this).val();
                    if(Url !== ''){
                        window.open(Url, '_blank');
                    }
                }
            })
        }
    }

    const monami = new Monami();
    monami.init();

    
})(jQuery,window,document)

