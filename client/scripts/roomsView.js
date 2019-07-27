var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
    this.$rooms.on('click', this.$button, Rooms.add);
  },

  renderRoom: function(data) {
    if (typeof data ==='string') {
      this.$select.append(`<option>${data}</option>`);
    }
  }

};

