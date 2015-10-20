var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppContants = require('../constants/AppConstants');

var ActionTypes = AppContants.ActionTypes;

var AppActionCreator = {
  // Generate an initialize action
  initialize: function(appData) {
    var action = {
      type: ActionTypes.APP_INITIALIZE
    }
    AppDispatcher.dispatch(action);
  },
  onLoaded: function (window) {
    var action = {
      type: ActionTypes.APP_ONLOADED,
      data: window
    }
    AppDispatcher.dispatch(action);
  },
  redirect: function(url) {

    var action = {
      type: ActionTypes.REDIRECT,
      data: url
    }
    AppDispatcher.dispatch(action);
  },
  loadMedia: function(productId) {
    var action = {
      type: ActionTypes.LOAD_MEDIA,
      data: productId
    }
    AppDispatcher.dispatch(action);
  }
};

module.exports = AppActionCreator;
