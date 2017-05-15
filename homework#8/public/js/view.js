'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            refreshBtn  : document.querySelector("#refresh-btn"),
            filmContent : document.querySelector("#film-content")
        };

        this.arrayOfFilms = [];
        this.items = items.Search;
        this.counter = 0;
        this.searchValue = 'Lock';
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.buildDefaultGallery();

    }
    
    Gallery.prototype = {
        createArrayOfFilms : function(arr) {
            return arr.map(function(item) {
                return `<div class="col-md-4 col-sm-6 film-wrap">
                            <div class="film-title">${item.Title}</div>
                            <div class="film-img">
                                <img class="film-img" alt="${item.Title}" src="${item.Poster}">
                            </div>
                            <div class="film-year">${item.Year}</div>
                            <div class="btn btn-default info-btn">Подробнее</div>
                        </div>`    
            }); 
        },

        printFilms : function(films) {
            var template = ``;
            films.forEach(function(film) {
                template += film;
            });
            this.DOMElements.filmContent.innerHTML = template;
        },
        
        buildDefaultGallery : function() {
            console.log("Gallery is ready");
            this.arrayOfFilms = this.createArrayOfFilms(this.items);
            this.printFilms(this.arrayOfFilms);
        },

        buildGalleryBySearch : function(data) {
            this.arrayOfFilms = [];
            this.arrayOfFilms = this.createArrayOfFilms(data.Search);
            this.printFilms(this.arrayOfFilms);
        }
    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());



