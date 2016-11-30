import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      this.get('model').save().then(()=>{
        this.save(this.get('model'));
      }, (err)=>{
        console.log(err.message);
      });
    }, cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel(this.get('model'));
  }
}
});
