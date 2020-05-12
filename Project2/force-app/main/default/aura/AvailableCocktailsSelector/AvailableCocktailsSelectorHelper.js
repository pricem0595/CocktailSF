({
    getCocktailsHelper: function(cmp, event) {
        var ingredientString = event.getParam('Selected_Ingredients');
        cmp.set('v.ingredientPlaceholder', ingredientString);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                cmp.set('v.drinkData', JSON.parse(this.response));
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredientString);
        xhr.send();
    },

    getCocktailInfo: function(cmp, selected) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                cmp.set('v.drinkData', JSON.parse(this.response));
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredientString);
        xhr.send();
    }
})