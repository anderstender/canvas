;var MathC = {
    randWn : function(n){  // [ 5 ] random words
        var s ='';
        while(s.length < n){
            s += Math.random().toString(36).replace(/\d|_/g,'').slice(2, 12);
        }
        return s.substr(0, n);
    }
};