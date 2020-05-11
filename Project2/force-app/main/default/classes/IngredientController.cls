public with sharing class IngredientController {
    @AuraEnabled
    public static String getIngredients() {
        string allIngredients;
  Http http = new Http();
    HttpRequest request = new HttpRequest();
 
    request.setEndpoint('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    request.setMethod('GET');
    HttpResponse response = http.send(request);
        System.debug(response.getBody());
        System.debug(response.getStatusCode());
        System.debug(response.getStatus());
        return 'response';
    }
}