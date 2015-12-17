var keyMirror = require('keymirror');

module.exports = {
  // ActionTypes: {
  ActionTypes: keyMirror({
    GET_RECIPE_INGREDS: 'GET_RECIPE_INGREDS',
    GET_RECIPE_STEPS: 'GET_RECIPE_STEPS',
  })
}