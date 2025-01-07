// Events in jQuery
// Mouse events = click, dblclick, mouseenter, mouseleave
// KeyboardEvent = keypress, keydown, MediaKeyStatusMap
// form events = submit , change, focus, blurs
// document/window events= load, resize , scroll, unload

// $('p').click(function () {
//     console.log('you clicked on p', this);
//     // $('p').hide();
//     //$(this).hide();
//     // $('#id').hide();
//     // $('.class').hide();
// });


// $('p').dblclick(function () {
//     console.log('you double clicked on p', this);
//     // $('p').hide();
//     //$(this).hide();
//     // $('#id').hide();
//     // $('.class').hide();
// });

// $('p').hover(function () {
//     console.log('you hover on p', this);
//     // $('p').hide();
//     //$(this).hide();
//     // $('#id').hide();
//     // $('.class').hide();


// });


// demoing the on multiple method
$('p').on(
    {
        click: function(){

            console.log('thanks for comming', this);
        },
        mouseleave: function(){

            console.log('mouseleave');
        }
    })

    // $('#wiki').hide(1000, function(){
    //     console.log("hidden");
    // })
    // $('#wiki').show(1000, function(){
    //     console.log("show");
    // })

    $('#but').click(function(){
        $('#wiki').toggle(1000);
    })

    $('#but').click(function(){
        $('#wiki').fadeOut(1000);
    })
// fadeIn,fadeOut, fadeToggle, fadeTo


// $('#wiki').slideDown(1000);
// $('#wiki').slideUp(1000);
// $('#wiki').slideToggle(1000);
