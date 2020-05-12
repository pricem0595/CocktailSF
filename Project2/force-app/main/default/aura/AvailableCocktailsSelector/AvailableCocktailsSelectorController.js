({
    init: function (cmp, event, helper) {
    },

    handleSelect: function(cmp,event,helper){
      var selected = event.getParam('name');
      helper.getCocktailInfo(cmp, selected);
    },

    getCocktails: function(cmp, event, helper) {
      helper.getCocktailsHelper(cmp,event);
  }

});