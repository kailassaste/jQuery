$(document).ready(function(){
    // our jquery code here
        console.log($); //$ it means jquery syntax
        // $('selector').action()  --- syntax
    
        // 1) element selector example
        // $('p').click(); 
    
        $('p').click(function () {
            console.log('you clicked on p', this);
            // $('p').hide();
            //$(this).hide();
            // $('#id').hide();
            // $('.class').hide();
        }); // when we click on p do this
    
        // 2) id selector example
        //$('#second').click();
    
        // 3) class selector example
        $('.odd').click();
    
        //other selectors
        // $('*').click();  //clicks on all the elements
        // $('p.odd').click();
        // $('p:first').click();
    
    
    });