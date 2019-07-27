var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
    this.$rooms.on('click', this.$button, Rooms.add);
    // Parse.readAll((data) => {
    //   console.log(data);
    // })
    // let rooms = JSON.parse(window.localStorage.getItem('room'));
    // if(rooms){
    //   for(let i = 0; i < rooms.length; i++) {
    //     this.$select.append(`<option>${rooms[i]}</option>`)
    //   }
    // }

  },

  // render: function(data){
  //   if (typeof data ==='string') {
  //     this.$select.append(`<option>${data}</option>`);

  //     if(!window.localStorage.getItem('room')){
  //       let rooms = [];
  //       rooms.push(data);
  //       window.localStorage.setItem('room', JSON.stringify(rooms));
  //     }else {
  //       let rooms = JSON.parse(window.localStorage.getItem('room'));
  //       rooms.push(data);
  //       window.localStorage.setItem('room', JSON.stringify(rooms));
  //     }

  //   }
  // },

  renderRoom: function(data) {
    console.log(data);
    if (typeof data ==='string') {
      this.$select.append(`<option>${data}</option>`);
    }
  }

};

