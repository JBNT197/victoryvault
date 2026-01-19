// Victory Vault – silent fail skill unlock
function unlock(btn){
  alert("Best of luck! You have 60 seconds to complete the skill question.");
  let count=5;
  const t=setInterval(()=>{
    if(count>0){alert(count);count--;}
    else{clearInterval(t);askQuestion();}
  },1000);
}
function askQuestion(){
  const ok=confirm("Skill question:\nHow many differences can you spot in this image?");
  if(ok && prompt("Enter number of differences:")==="3") alert("Thank you for entering.");
  else alert("Thank you for entering.");
}
