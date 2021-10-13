window.alert("you can even use keyboard keys but only for numbers")


function blank() {
    document.getElementById("dp").value="";
}

function display(val) {
    document.getElementById("dp").value+=val;
}
function result() {
    const vl=document.getElementById("dp").value;
   const rs=eval(vl);
    console.log(rs);
  document.getElementById("dp").value=rs;
   
}
function ch(vl) {
    const arr=vl.split('');
   if(isNaN(arr[arr.length-1])){
    window.alert("enter only numbers");
    arr.splice(arr.length-1,1);
    document.getElementById('dp').value=arr.join('')
   }
}
function back() {
    const vl=document.getElementById("dp").value;
    const arr=vl.split('');
    arr.length=arr.length-1;
    document.getElementById('dp').value=arr.join('');
}