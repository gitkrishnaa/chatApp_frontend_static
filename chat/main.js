const jwt=localStorage.getItem("jwtKey")
const user_name=localStorage.getItem("user_name")
const user_id=localStorage.getItem("user_id")
const user_email=localStorage.getItem("user_email")

//checking is user logout or bot
if(!jwt){
  const respose=  confirm("user logout since jwtKey not in loaclstorage ,would you like to login or signup")
  if(respose){window.location="../index.html"}
//   return;
}
else{
    //user info show on dashboard

}
