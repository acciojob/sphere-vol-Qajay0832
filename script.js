function volume_sphere() {
    //Write your code here
	event.preventDefault()
	const radiusValue=parseFloat(document.getElementById("radius").value);
	const volume=document.getElementById("volume");
		  if (isNaN(radiusValue)|| radiusValue<0 ){
            volume.value=NaN
        }
        else{
            volume.value=(4/3*Math.PI*radiusValue**3).toFixed(4)
        }
	
	
    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
