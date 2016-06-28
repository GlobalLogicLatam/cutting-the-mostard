window.$ = (function(query){

    function mustardAPI(){

    }
    
    mustardAPI.on = function on(type, selector, handler){
        //this.addEventListener(type, handler, false);

    }
    
    function selectDom(selector){
        var results =  document.querySelectorAll(selector);
        
        console.log(results.length);
        results.__proto__ = mustardAPI;

        console.log(results.length);
        return results;
    }

    
    return selectDom(query);

});