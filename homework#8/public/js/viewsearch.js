'use strict';
(function() {

    function SearchView (items) {        
        this.DOMElements = {
            refreshBtn  : document.querySelector("#refresh-btn"),
            searchField : document.querySelector("#search-field")
        };

        this.searchValue = '';
        
        this.eventHolder = $({});
        this.updateEventName = "formUpdate";
        this.initListeners();

    }
    
    SearchView.prototype = {
        initListeners : function () {
            this.DOMElements.refreshBtn.addEventListener("click", (event) => {
                this.eventHolder.trigger( this.updateEventName , [{searchValue: this.searchValue}]);
            });

            this.DOMElements.searchField.addEventListener("keyup", (event) => {
                this.searchValue = event.target.value;
            });
        } 
    }
    
    window.app = window.app || {};
    window.app.SearchView = SearchView;
    
}());



