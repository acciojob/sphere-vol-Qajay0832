function volume_sphere() {
    //Write your code here
	const radius=document.getElementById("radius");
	const volume=document.getElementById("volume");
	const submit=document.getElementById("submit");
	submit.addEventListener("click",vol)
	function vol(){
		  if (parseInt(radius.value)===NaN || parseInt(radius.value)<0 ){
            volume.value=NaN
        }
        else{
            volume.value=(4/3*Math.PI*parseInt(radius.value)**3).toFixed(4)
        }
	}
	
	
    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
