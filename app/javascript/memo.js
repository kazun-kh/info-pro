// function memo() {
//   const submit = document.getElementById("submittt");
//   submit.addEventListener("click", (e) => {
//     const formData = new FormData(document.getElementById("formmm"));
//     const XHR = new XMLHttpRequest();
//     const path = document.getElementById("formmm");
//     XHR.open("POST", workout_room_workout_messages , true);
//     XHR.responseType = "json";
//     XHR.send(formData);
//     XHR.onload = () => {
//       if (XHR.status != 200) {
//         alert(`Error ${XHR.status}: ${XHR.statusText}`);
//         return null;
//       }
//       const item = XHR.response.post;
//       const list = document.getElementById("listtt");
//       const formText = document.getElementById("contenttt");
//       const HTML = `
//       <div class="message" >
//       <div class="upper-message">
//         <div class="message-user">
//           ${item.user.nickname}
//         </div>
//         <div class="message-date">
//           ${item.created_at}
//         </div>
//       </div>
//       <div class="lower-message">
//         <div class="message-content">
//           ${item.content}
//         </div>
//         <%= image_tag message.image.variant(resize: '500x500'), class: 'message-image' if message.image.attached? %>
//       </div>
      
//     </div>`;
//       list.insertAdjacentHTML("afterend", HTML);
//       formText.value = "";
//     };
//     e.preventDefault();
//   });
// }
// window.addEventListener("load", memo);
