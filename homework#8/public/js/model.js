'use strict';
(function(){
    
    var model = function() {
       
        function getData(defaultData) {
            return $.get( 'http://www.omdbapi.com/?page=1&s=Godfather', function( data ) {
                console.log("Initial data is loaded");
                return data;
            })            
        }
        
        function saveData(item) {
            console.log("Data successfuly saved: ");
            console.log(item);
        }
        
        function updateData(searchData) {
            console.log(searchData);
            return $.get( `http://www.omdbapi.com/?page=1&s=${searchData}`, function( searchData ) {
                console.log("Searching data is loaded"); 
                return searchData;
            })  
        }
        
        return {
            getData : getData,
            saveData: saveData,
            updateData: updateData
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();


    
}())
