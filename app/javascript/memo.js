// function memo() {
<<<<<<< Updated upstream
//   const submit = document.getElementById("submit");
//   submit.addEventListener("click", (e) => {
//     const formData = new FormData(document.getElementById("form"));
//     const XHR = new XMLHttpRequest();
//     XHR.open("POST", "/workout_rooms/workout_room_id/workout_messages", true);
=======
//   const submit = document.getElementById("submittt");
//   submit.addEventListener("click", (e) => {
//     const formData = new FormData(document.getElementById("formmm"));
//     const XHR = new XMLHttpRequest();
//     XHR.open("POST", "/workout_messages", true);
>>>>>>> Stashed changes
//     XHR.responseType = "json";
//     XHR.send(formData);
//     XHR.onload = () => {
//       if (XHR.status != 200) {
//         alert(`Error ${XHR.status}: ${XHR.statusText}`);
//         return null;
//       }
//       const item = XHR.response.post;
<<<<<<< Updated upstream
//       const list = document.getElementById("list");
//       const formText = document.getElementById("content");
=======
//       const list = document.getElementById("listtt");
//       const formText = document.getElementById("contenttt");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
// window.addEventListener("load", memo);
=======
// window.addEventListener("load", memo);
>>>>>>> Stashed changes
