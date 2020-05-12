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

    getCocktailInfo: function(cmp, selected, helper) {
        var info = new XMLHttpRequest();
        info.withCredentials = false;
        var cocktailIngredientsList = [];
        var cocktailMeasurementsList = [];

        info.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const parsed = JSON.parse(this.responseText);
                JSON.parse(this.responseText, (key,value) => {
                    if(key == "strInstructions"){
                        cmp.set('v.cocktailInstructions', value);
                    }
                    if(key == "strDrinkThumb"){
                        cmp.set('v.cocktailPicture', value );
                    }
                });

                for (let i = 1; parsed.drinks[0]["strIngredient" + i] !== null ; i++)
                    cocktailIngredientsList.push(parsed.drinks[0]["strIngredient" + i]);

                for (let i = 1; parsed.drinks[0]["strMeasure" + i] !== null ; i++)
                    cocktailMeasurementsList.push(parsed.drinks[0]["strMeasure" + i]);

                cmp.set('v.cocktailMeasurements', cocktailMeasurementsList);
                cmp.set('v.cocktailIngredients', cocktailIngredientsList);
            }
        });
        
        info.open("GET", "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + selected);
        info.send();
    }

})