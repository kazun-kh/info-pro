function memo() {
 const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
   const formData = new FormData(document.getElementById("form"));
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   XHR.responseType = "json";
   XHR.send(formData);
   XHR.onload = () => {
     if (XHR.status != 200) {
       alert(`Error ${XHR.status}: ${XHR.statusText}`);
       return null;
     }
     const item = XHR.response.post;
     const list = document.getElementsByClassName("message");
     const formText = document.getElementsByClassName("message-content");
     const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;

<div class="message" >
  <div class="upper-message">
    <div class="message-user">
      <!-- 投稿したユーザー名情報を出力する -->
      <%= message.user.nickname %>
    </div>
    <div class="message-date">
      <!-- 投稿した時刻を出力する -->
      <%= l message.created_at %>
    </div>
  </div>
  <div class="lower-message">
    <div class="message-content">
      <!-- 投稿したメッセージ内容を記述する -->
      <%= message.content %>
    </div>
    <%= image_tag message.image.variant(resize: '500x500'), class: 'message-image' if message.image.attached? %>
  </div>
</div>




     list.insertAdjacentHTML("afterend", HTML);
     formText.value = "";
   };
   e.preventDefault();
 });
}
window.addEventListener("load", memo);