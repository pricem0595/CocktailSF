({
    getIngredientHelper: function(cmp, event) {
        var ShowResultValue = event.getParam('Selected_Ingredients');
        cmp.set('v.targetIngredients', ShowResultValue);
    }
})