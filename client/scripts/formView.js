var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var Messages = {
      username: `Ingrid & Hien`,
      text: $('#message').val(),
      // roomname: Roomview.renderRoom();
    };
    // console.log(Messages);
    Parse.create(Messages)
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};