
({

    ingredientCall: function(cmp){        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        var ingredientsList = [];

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                JSON.parse(this.responseText, (key, value) => {
                    if (key == "strIngredient1"){
                        var singleObj = {}
                        singleObj['label'] = value;
                        singleObj['value'] = value;
                        ingredientsList.push(singleObj);
                    }
                });
                cmp.set('v.ingredientsList', ingredientsList);
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list");
        xhr.send();
    } 

})
