var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      this.renderMessage(data);
    });
    this.$chats.on('click', this.$chat, Friends.toggleStatus)

  },

  renderMessage: function(data) {
    console.log(data);
    var html= "";

    for(let key in data) {
      if(Array.isArray(data[key])){
        for (var i = 0; i < data[key].length; i++ ) {
          var chat = data[key][i];
          if(chat.username && chat.text){
            html += MessageView.render(chat)
          }
        }
      }
    }

    if(data.username && data.text){
      html += MessageView.render(data)
    }
    this.$chats.append(html);
  }

};