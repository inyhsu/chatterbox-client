var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"></div>
        <div><%= username%></div>
        <div><%= text%></div>
      </div>

    `)

};