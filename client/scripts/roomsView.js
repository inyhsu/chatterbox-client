var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#rooms'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      this.renderRoom(data);
    });
    RoomsView.$button.on('click', RoomsView.addRoom);
  },

  addRoom: function(event){
    event.preventDefault();
    let r = $('#room').val();
    RoomsView.renderRoom(r);
  },

  renderRoom: function(data) {
    if (typeof data ==='string') {
      this.$select.append(`<option>${data}</option>`);
    }
    let unique = {};
    for (let key in data) {
      for (let i = 0; i < data[key].length; i++) {
        if (data[key][i].roomname) {
          let room = "";
          room = data[key][i].roomname;
          unique[room] = room;
        }
      }
    }
    for (let key in unique) {
      var opt = document.createElement('option');
      opt.value = key;
      opt.innerHTML = key;
      this.$select.append(opt);
    }
  }

};

