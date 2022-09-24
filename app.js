$(document).ready(function(){
    if(window.innerWidth <= 700){
        $('.ul').slideUp()
    }
    $('.burger').click(function(){
        $('.burger').hide()
        $('.close').show()
        $('.ul').slideDown()
    })
    $('.close').click(function(){
        $('.close').hide()
        $('.burger').show()
        $('.ul').slideUp()
    })
})