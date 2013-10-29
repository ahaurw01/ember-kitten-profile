App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.resource('cat', function () {
    this.route('edit');
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('cat');
  }
});

var cat = {
  name: 'Sir Squiggles',
  age: 2,
  imageUrl: 'http://placekitten.com/200/200'
};

App.CatRoute = Ember.Route.extend({
  model: function () {
    return cat;
  }
});

App.CatIndexRoute = Ember.Route.extend({
  actions: {
    edit: function () {
      this.transitionTo('cat.edit');
    }
  }
});

App.CatEditRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('cat');
  },

  actions: {
    done: function () {
      this.transitionTo('cat');
    }
  }
});