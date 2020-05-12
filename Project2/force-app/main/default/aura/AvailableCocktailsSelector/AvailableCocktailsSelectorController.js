({
    init: function (cmp, event, helper) {
        var sections = [
          {
            label: "Reports",
            items: [
              {
                label: "Recent",
                name: "default_recent",
                icon: "utility:clock"
              },
              {
                label: "Created by Me",
                name: "default_created"
              },
              {
                label: "Public Reports",
                name: "default_public"
              },
              {
                label: "My P1 Bugs",
                name: "custom_p1bugs"
              }
            ]
          },

          {
            label: "Dashboards",
            items: [
              {
                label: "Favorites",
                name: "default_favorites",
                icon: "utility:favorite"
              },
              {
                label: "Most Popular",
                name: "custom_mostpopular"
              },
              {
                label: "Summer Release Metrics",
                name: "custom_newreleaseadoption"
              }
            ]
          }
        ];

        cmp.set('v.initiallySelected', 'default_recent');
        cmp.set('v.navigationData', sections);
        console.log(cmp.get('v.targetIngredients'))
    },

    handleSelect: function(component,event,helper){
      var selected = event.getParam('name');
      console.log(selected);

    },

    getIngredients: function(cmp, event, helper) {
      helper.getIngredientHelper(cmp,event);
  }

});