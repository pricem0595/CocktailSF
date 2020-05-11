({
    init: function (cmp, event, helper) {
        helper.ingredientCall(cmp);
     },

     handleChange: function (cmp, event, helper) {
        var selectedOptionValues = event.getParam("value");
        helper.storeIngredients(cmp, selectedOptionValues);
    }

 })