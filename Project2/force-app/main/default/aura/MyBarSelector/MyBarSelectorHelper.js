
({

    ingredientCall: function(cmp){        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        var ingredientList = [];

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const obj = JSON.parse(this.responseText, (key, value) =>    {
                  if (key == "strIngredient1"){
                        var singleObj = {}
                        singleObj['label'] = value;
                        singleObj['value'] = value;
                        ingredientList.push(singleObj);
                  }
                });
                cmp.set('v.ingredientsList', ingredientList);
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        xhr.send();
    }

    





})
