var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),
  $username: $('.username'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      this.renderMessage(data.results);
    });
    this.$chats.on('click', 'div.username', Friends.toggleStatus);
    this.$select.on('change', MessagesView.render);
  },

  render: function(){
    Parse.readAll((data) => {
      var room = $(this).val();
      var html= "";
      for (var i = 0; i < data.results.length; i++ ) {
        var chat = data.results[i];
        if(chat.username && chat.text && chat.roomname === room){
          html += MessageView.render(chat)
        }
      }
      MessagesView.$chats.html(html);
    })
  },

  renderMessage: function(data) {
    var html= "";

    if(Array.isArray(data)){
      for (var i = 0; i < data.length; i++ ) {
        var chat = data[i];
        if(chat.username && chat.text){
          html += MessageView.render(chat)
        }
      }
    }

    if(data.username && data.text){
      html += MessageView.render(data)
    }
    this.$chats.append(html);
  }

};

