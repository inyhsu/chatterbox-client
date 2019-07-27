var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username" value="<%= username%><"><%- username%></div>
        <div><%- text%></div>
      </div>

    `)

};