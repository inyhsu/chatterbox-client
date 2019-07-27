var Friends = {
//data.username clicked .toggle status

  toggleStatus: function(event) {
    //would invoke the css property change in the displayed message.
    let friend = event.target.innerHTML;
    event.target.innerHTML = `<span style='color: orange;'>${friend}</span>`
  }

};