
const divLoadingContainer = document.getElementById("divLoadingContainer");
const divImageContainer = document.getElementById("divImageContainer");
const apiAdress = "https://api.unsplash.com/photos/random/?client_id=t5NacmzcEpCwi50kabU1SSMQ-2Fil-kDjBr5x6WQhtE&count=30"

let jsonImages;

async function getApiData(){
    let stringsImages = await fetch(apiAdress);
    jsonImages = await stringsImages.json();
    console.log(jsonImages)
    createImgAndPutSrcAndAppendIt()
}

function createImgAndPutSrcAndAppendIt(){
    for (let imgObject of jsonImages){
        let aHtml = imgObject.links.html;
        let imgSrc = imgObject.urls.regular;
        let imgTitle = imgObject.alt_description;
        let newA = document.createElement("a");
        newA.setAttribute("href",aHtml)
        newA.setAttribute("target","_blank")
        let newImage = document.createElement("img");
        // newImage.setAttribute("src",imgSrc);
        // newImage.setAttribute("alt",imgTitle);
        // newImage.setAttribute("title",imgTitle);
        setAttributes(newImage,{
            src: imgSrc,
            alt: imgTitle,
            title: imgTitle,
        });
        newA.appendChild(newImage);
        divImageContainer.appendChild(newA);
        //console.log(imgSrc)
    }
}

function setAttributes(element , attributes){
    //console.log(attributes["alt"])
    for (let attribute in attributes){
        //console.log(attributes[key])
        element.setAttribute(attribute,attributes[attribute])
    }
}

getApiData();