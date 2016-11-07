//"use strict";
var Canvas = (function(objCanv){
    this.canvas = objCanv;    
    this.context = this.canvas.getContext('2d');
    this.context.width = objCanv.width;
    this.context.height = objCanv.height;

    this.Clear = function(){
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    this.Draw = new (function(context){
        this.context = context;
        this.fillColor = '#000000';
        this.strokeColor = '#000000';
        this.context.lineWidth = 1;
        /*
         * item = {
         *  params : {}
         *  draw : function(context, params){}
         * }
         */
        this.items = {};
        
        this.setFill = function(strColor){
           this.fillColor = strColor;
           this.context.fillStyle = this.fillColor;
        };
        this.setStroke = function(strColor){
           this.strokeColor = strColor;
           this.context.strokeStyle = this.strokeColor;
        };
        var mainItems = this.items;
        this.Add = function(item){
            var key = MathC.randWn(10);
            mainItems[key] = item;
            return key;
        };
        
        this.Set = function(key, params){
            if(typeof mainItems[key] == 'object'){
                for(var k in params){
                    mainItems[key].params[k] = params[k];
                }
                return true;
            }
            return false;
        };
        
        //this.set
        
        this.ClearBuffer = function(){
            mainItems = [];
        };
        
        this.Delete = function(key){
            if(typeof mainItems[key] != 'undefined'){
                delete mainItems[key];
            }
        };
        this.All = function(){
            for(var k in this.items){
                var item = this.items[k];
                item.draw(this.context);
            }
        };
        
    })(this.context);
    
    
    return this;
});