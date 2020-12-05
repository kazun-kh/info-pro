// import consumer from "./consumer"

// consumer.subscriptions.create("MessageChannel", {
//   connected() {
//     // Called when the subscription is ready for use on the server
//   },

//   disconnected() {
//     // Called when the subscription has been terminated by the server
//   },

//   received(data) {
//     const html =  `
//     //       <div class="message" >
//     //       <div class="upper-message">
//     //         <div class="message-user">
//     //           ${data.user.nickname}
//     //         </div>
//     //         <div class="message-date">
//     //           ${data.created_at}
//     //         </div>
//     //       </div>
//     //       <div class="lower-message">
//     //         <div class="message-content">
//     //           ${data.content}
//     //         </div>
//     //         <%= image_tag message.image.variant(resize: '500x500'), class: 'message-image' if message.image.attached? %>
//     //       </div>
          
//     //     </div>`;
//     const messages = document.getElementById('list');
//     const newMessage = document.getElementById('formmm');
//     messages.insertAdjacentHTML('afterbegin', html);
//     newMessage.value='';
//     }
// });
