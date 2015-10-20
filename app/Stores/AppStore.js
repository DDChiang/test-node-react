var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');

var ActionTypes = AppConstants.ActionTypes;

var appState;

function reset() {
  appState = {};
}

var AppStore = assign(new Store() , {
  getState: function() {
    return appState;
  }
});

AppStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.APP_INITIALIZE:
      reset();
      break;
    case ActionTypes.REDIRECT:
      appState.path = action.data;
      break;
    default:
      return;
  }

  AppStore.emitChange();
});



module.exports = AppStore;

