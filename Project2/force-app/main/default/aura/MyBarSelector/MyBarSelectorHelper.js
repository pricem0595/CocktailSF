
({

    ingredientCall: function(cmp){
        var data = null;
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var ingredientList = [];
                const obj = JSON.parse(this.responseText, (key, value) =>    {
                  if (key == "strIngredient1"){
                    ingredientList.push(value);
                  }
                });
                cmp.set('v.ingredients', ingredientList);
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        //xhr.setRequestHeader("key","1");
        xhr.send();
        }



})