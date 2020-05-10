
({

    ingredientCall: function(cmp){
        var data = null;
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        //xhr.setRequestHeader("key","1");
        xhr.send();
        }





/*******************************************


ingredientCall: function(cmp){
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");

xhr.send(data);
}
*******************************************/


})


/*************************************
public class CocktailCallout {
    public Static String callout()
    {
  Http http = new Http();
    HttpRequest request = new HttpRequest();
 
    request.setEndpoint('https://www.thecocktaildb.com/api.php');
    request.setMethod('GET');
    HttpResponse response = http.send(request);
        System.debug(response.getStatusCode());
        System.debug(response.getStatus());
        return '';
    }
}


ingredientCall : function(cmp) {
        var action = cmp.get('c.getIngredients');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(this.responseText);
                //cmp.set('v.mydata', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }

*****************************************/
