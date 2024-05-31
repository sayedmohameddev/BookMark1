var sumbtn=document.getElementById("sumbtn");
var inputname=document.getElementById("inputname");
var inputurl=document.getElementById("inputurl");
var tbody=document.getElementById("tbody");
var deletebtn=document.getElementById("delete");
var visitbtn=document.getElementById("visit");
var ovarlaymn =document.querySelector(".overlay");
var closebtn =document.querySelector(".close-icon i");



var allproduct=[];

sumbtn.addEventListener("click",add)
if(localStorage.getItem("allproducts") !=null){
    allproduct=JSON.parse(localStorage.getItem("allproducts"))
    dispaly();
        }
function add(){
   
if(vaild() && vaildmail()){
    var product ={
        name:inputname.value,
        url:inputurl.value,
    }
    allproduct.push(product);
    localStorage.setItem("allproducts",JSON.stringify(allproduct))
    dispaly()
    inputname.value="";
    inputurl.value="";
}
else{
    inputname.style.color="red";
    inputurl.style.color="red";
    inputname.style.borderColor="red";
    inputname.style.borderWidth="2px";
    inputurl.style.borderColor="red";
    inputurl.style.borderWidth="2px";
    ovarlaymn.classList.add("appear");
    
}


}

function clear(){
    inputname.value="";
    inputurl.value="";

}

function dispaly(){
    var box=``;
 for(var i=0;i<allproduct.length;i++){
    box +=`
    <tr>
    <th>${i +1}</th>
    <th>${allproduct[i].name}</th>
    <th><button type="button" class="btn btn-success" id="visit" onclick="visititem(${i})">
    <i class="fa-solid fa-eye"></i>
    Visit</button></th>
    <th><button type="button" class="btn btn-danger" id="delete" onclick="deletitem(${i})">
    <i class="fa-solid fa-trash-can"></i>
    Delete</button></th>
  </tr>
    
    `
 }
 tbody.innerHTML=box;
}

function deletitem(index){
   allproduct.splice(index,1);
   localStorage.setItem("allproducts",JSON.stringify(allproduct));
   dispaly();
   clear()

}

function visititem(index){
window.open(allproduct[index].url);
}


function vaild(){
    var nameregex =/^[A-Z][a-z]{1,9}$/gm;

var testing =nameregex.test(inputname.value);
if(testing===true){
  inputname.style.color="green";
  inputname.style.borderColor="green";
  inputname.style.borderWidth="2px";
  
  return true;
  
 
}else{
    return false
}

}

function vaildmail(){
    var urlregex =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
var test =urlregex.test(inputurl.value);
if(test===true){
 inputurl.style.color="green";
 inputurl.style.borderColor="green";
 inputurl.style.borderWidth="2px";
  return true;
  
 
}else{
    return false
}

}
function checking(){

    ovarlaymn.classList.remove("appear")
    ovarlaymn.classList.add("clear");
}

sumbtn.addEventListener("click",vaild)
sumbtn.addEventListener("click",vaildmail)
closebtn.addEventListener('click',checking)


