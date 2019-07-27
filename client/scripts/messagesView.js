var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {

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