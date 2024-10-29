const imgs = document.getElementsByClassName('thumbnail');
const mainImage = document.getElementById('mainImage');


for( const img of imgs){

    img.addEventListener('click', () => {
        const imgsrc = img.getAttribute ("src")  ;
        mainImage.setAttribute('src', imgsrc)
    }
);

}



 