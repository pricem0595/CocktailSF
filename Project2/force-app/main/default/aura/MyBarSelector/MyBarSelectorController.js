({
    init: function (cmp, event, helper) {
        helper.ingredientCall(cmp);
     },

     handleChange: function (cmp, event) {
        var selectedOptionValues = event.getParam("value");
        console.log(selectedOptionValues);
    }

 })