const memeber_list=document.getElementById("member");
const group_creating_btn=document.getElementById("group_creating_btn");
group_creating_btn.addEventListener("click",()=>{

    console.log(memeber_list.value)
})


//crete group form div in fixed
const create_group_button=document.getElementById("Create-New-Group");
create_group_button.addEventListener("click",()=>{
    
const html_body=document.getElementById("body");
html_body.style.position="relative"

//////////////creating a new oter div\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const new_outer_div=document.createElement("div")
html_body.appendChild(new_outer_div)
new_outer_div.id="new_outer_div";

// new_outer_div.style.backgroundColor="white";
// new_outer_div.style.position="fixed";
// new_outer_div.style.position="absolute";
// new_outer_div.style.top="20%";
// new_outer_div.style.left="20%";
// new_outer_div.style.padding="10px"
// new_outer_div.style.boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px";


//////////////creating a new oter div close button \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const new_outer_div_close_btn=document.createElement("button");
new_outer_div_close_btn.id="new_outer_div_close_btn";
new_outer_div_close_btn.innerText="X"
new_outer_div_close_btn.style.textAlign="center"
new_outer_div_close_btn.addEventListener("click",()=>{
    new_outer_div.remove()
})
new_outer_div_close_btn
new_outer_div.appendChild(new_outer_div_close_btn)

//////////////creating a input part which  group name \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const input_div_group_name=document.createElement("div")
input_div_group_name.innerHTML="<div>name</div><div><input type='text' placeHolder='group Name'></div>"
new_outer_div.appendChild(input_div_group_name);

//////////////creating select member  outer div part \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const select_member_outer_div=document.createElement("div")

select_member_outer_div.id="select_member_outer_div";
new_outer_div.appendChild(select_member_outer_div)

//////////////creating select member part \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const select_member=document.createElement("div")
select_member_outer_div.appendChild(select_member)
select_member.id="select_member";


const div_main=document.createElement("div")
select_member.innerHTML="<div>abc</div><div>abc</div><div>abc</div><div>abc</div><div>abc</div><div>abc</div>"


// select_member.appendChild(select_member1)
//////////////creating selected member part \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const selected_member=document.createElement("div")
select_member_outer_div.appendChild(selected_member);
selected_member.id="selected_member";







})
