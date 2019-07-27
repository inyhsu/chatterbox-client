var FormView = {

  $form: $('form'),
  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var Messages = {
      username: window.location.search.substr(10),
      text: $('#message').val(),
      roomname: $('#rooms select').val(),
    };
    // console.log(Messages);
    Parse.create(Messages);

    FormView.$chats.html('');
    $('#message').val('');
    MessagesView.initialize();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};