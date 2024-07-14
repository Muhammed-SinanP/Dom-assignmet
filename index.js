// 1. Write a JavaScript program to remove items from a drop-down list.
function deleteColor() {
    const colorSelect = document.getElementById("colorSelect");
    console.log(colorSelect.selectedIndex);
    colorSelect.remove(colorSelect.selectedIndex);  
    
}


// 2. Write a JavaScript program to change the  color given text in p tag 
function changeColor(){
    const colorOptions = document.getElementById("colorChange");
    const selectedColor = colorOptions.value ;
   const text = document.getElementById("sampleText");
   text.style.color = selectedColor;
}


// 3. Write a JavaScript function to get the values of First and Last names of the following form.
document.getElementById("form1").addEventListener("submit", function(event) {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    alert(`First Name : ${firstName} \n Last Name : ${lastName}`);
});




// 4. Write a JavaScript program to display a random image (clicking on a button) from the following list.
const images = [
    {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    },
    {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }
];

function displayRandomImage(){
    const num = Math.floor(Math.random() * 3);
    console.log(num);
    const selectedImage = images[num];
    console.log(selectedImage);

    const showImage = document.getElementById("image");
    
    showImage.src = selectedImage.url;
    showImage.style.width = selectedImage.width;
    showImage.style.height = selectedImage.height;
    showImage.style.display = "block";
}