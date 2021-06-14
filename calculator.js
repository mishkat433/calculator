

    var display=$("#result");
    function insert(number){
        var previous = display.val();
        display.val(previous + number)
    }
    function clearResult(){
        display.val('');
    }
    
    function calculate(){
       var result = eval(display.val());
       display.val(result);
    }
    
    function deleteNumber(){
        var delet= display.val();
        if(delet != ''){
            display.val(display.val().slice(0,-1));
        }
    }
 
