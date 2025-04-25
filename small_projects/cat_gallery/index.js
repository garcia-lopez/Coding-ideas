const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "live_Yzu1UBPCkCssrw3m2Iuhp3XtCSXS2LXrmwlrvrEbD6Y7ThT51eOEYf3yFdBkIWwM";

const catContainer = document.getElementById("cat_gallery");
const loader = document.getElementById("loader");

fetch(url, {
    headers : {
        "x-api-key": api_key
    }
})
.then((response) => {
    return response.json();
})
.then((data) => {
    if (data.length > 0) { 
        loader.style.display = "none";
        catContainer.style.display = "block";
    }
    let imagesData = data;
    imagesData.map(function(imageData) {

        let image = document.createElement("img");
        image.src = `${imageData.url}`;
        image.alt = "cat image";
        catContainer.appendChild(image);
    })
})
.catch(function(error) {
    console.log(error);
 });