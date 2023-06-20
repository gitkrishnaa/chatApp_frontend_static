const group_list_menu_div = document.getElementById("group-list-div");
// const group_creating_btn = document.getElementById("group_creating_btn");


//load group which is member of that group
const user_id1=localStorage.getItem("user_id");
const user_email1=localStorage.getItem("user_email");
const jwtKey1=localStorage.getItem("jwtKey")
load_user_related_group()
async function load_user_related_group (){
const resp = await axios.post("http://localhost:4000/group/users_group",{
    data:{
        user_id:user_id1,
        user_email:user_email1,

    }
} ,{
        headers: {
          Authorization: jwtKey1,
        },
      });

console.log(resp)
const group_list=resp.data.data[0].groups;
console.log("group_list",group_list)
//# showing all group using map loop

group_list.map((d)=>{
    const div1=document.createElement("div");
    const btn1=document.createElement("button");
    div1.appendChild(btn1);
    group_list_menu_div.appendChild(div1)

    btn1.id=`group_btn${d.id}`

    //button part
    btn1.innerText=d.name
    btn1.addEventListener("click",()=>{
    const display_outer_chat_div1=document.getElementById("display_name");
   display_outer_chat_div1.innerText=d.name
   display_outer_chat_div1.style.textAlign="center";

   localStorage.setItem("group_id",d.id)
const group_id_from_localstorage=localStorage.getItem("group_id")
   //# sending group message to sever/backend in object

   const group_message_save_data={};
   group_message_save_data.group_id=group_id_from_localstorage
 

  const submit_btn = document.getElementById("send_button");
  submit_btn.addEventListener("click", async () => {
    saveChat();
    async function saveChat() {
      console.log("chat send button clicked");
      try {
        const jwtKey = localStorage.getItem("jwtKey");
        if (jwtKey == null) {
          alert("user is logged out");
          return;
        }

        //save the message of user
        const message = document.getElementById("chat_input1");
        if (message.value == "") {
          alert("input field is empty");
          return;
        }

        group_message_save_data.message=message.value;
        group_message_save_data.sender_user_id=localStorage.getItem("user_id");

console.log("final data id=",group_message_save_data)


        // const resp = await axios.post(
        //   "http://localhost:4000/chat/chatSave",
        //   {
        //     message: message.value,
        //   },
        //   {
        //     headers: {
        //       Authorization: jwtKey,
        //     },
        //   }
        // );
        // console.log(resp);

        //display chat send by user in div
        const display_chat = document.getElementById("display_chat_div");
        // display_chat.scrollTop = display_chat.scrollHeight;
        // display_chat.scrollTop=display_chat.scrollHeight

        const new_Div = document.createElement("div");
        new_Div.innerHTML =  `<div><span>${message.value}</span></div>`;
        new_Div.className="main_user"
        display_chat.appendChild(new_Div);
        message.value ="";
      } catch (error) {
        console.log(error);
      }
    }
  });
})
})
}