import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import Store from './Store';
import assign from 'react/lib/Object.assign';

var ActionTypes = AppConstants.ActionTypes;

let appState;

function reset() {
  appState = {};
}

// var AppStore = assign(new Store() , {
//   getState: function() {
//     return appState;
//   }
// });

// new store class extends store 'base'
class AppStore extends Store {
  constructor() {
    super();
  }

  getState() {
    return appState;
  }
}

// create instance of new store class
let appStoreInstance = new AppStore();

// AppStore.dispatchToken = AppDispatcher.register(function(action) {
//   switch (action.type) {
//     case ActionTypes.APP_INITIALIZE:
//       reset();
//       break;
//     case ActionTypes.REDIRECT:
//       appState.path = action.data;
//       break;
//     default:
//       return;
//   }

//   AppStore.emitChange();
// });

appStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.type) {
    case ActionTypes.APP_INITIALIZE:
      reset();
      // falls through
    case ActionTypes.REDIRECT:
      appState.path = action.data;
      break;
    default:
      return;
  }

  appStoreInstance.emitChange();
});

// export default AppStore;

export default appStoreInstance;

