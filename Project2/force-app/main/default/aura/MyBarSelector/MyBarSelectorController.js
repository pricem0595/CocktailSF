({
    init: function (cmp, event, helper) {
        helper.ingredientCall(cmp);
     },

     handleChange: function (cmp, event, helper) {
        var selectedOptionValues = event.getParam("value").toString();
            var evt = $A.get('e.c:PassedIngredients');
            evt.setParams({ 'Selected_Ingredients': selectedOptionValues});
            evt.fire();
        }


 })