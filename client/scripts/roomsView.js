var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
    Parse.readAll((data) => {
      this.render(data.results);
    })
  },

  render: function(data) {
    let obj = {};

    for(let i = 0; i < data.length ; i++){
      let chat = data[i];
      if(chat.roomname && !chat.roomname.includes('<') && !chat.roomname.includes('$')) {
        obj[chat.roomname] = chat.roomname;
      }
    }

    for(room in obj) {
      this.renderRoom(room);
    }
  },

  renderRoom: function(data) {

    if (typeof data ==='string') {
      this.$select.append(`<option value="${data}">${data}</option>`);
    }
  }

};

