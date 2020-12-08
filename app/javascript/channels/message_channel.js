import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
     data.user == document.getElementById('js-nickname').textContent;

    const html = `
    <div id='messages'>
      <div class="user-right" >
        <div class="message-curent " >
         <div class="upper-message">
           <div class="message-user">
              <!-- 投稿したユーザー名情報を出力する -->
              <p>${data.user}</p>
            </div>
              <div class="message-date">
                <!-- 投稿した時刻を出力する -->
                <p>${data.time}</p>
              </div>
          </div>
            <div class="lower-message">
              <div class="message-content">
                <!-- 投稿したメッセージ内容を記述する -->
                <p>${data.content.content}</p>
              </div>
              <p>${data.image}</p>

            </div>
        </div>
      </div>
    </div>
  `;
  
    const messages = document.getElementById('messages');
    const newMessage = document.getElementById('contenttt');
    messages.insertAdjacentHTML('afterbegin', html);
    newMessage.value='';
    }
});
