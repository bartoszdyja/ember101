import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    save() {
      console.log('+--- save action called in friends new controller');
      this.transitionToRoute('friends.index');
    },
    cancel() {
      console.log('+--- cancel action called in friends new controller');
} }
});
