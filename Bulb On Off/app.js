// function on(){
//     document.getElementById('img').src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"
// }


// function off(){
//     document.getElementById('img').src = "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs="
// }
 
let isOpen = false;

function on(){
    let img = document.getElementById('img');
    if(isOpen) {
        // img.src = "https://cdn.pixabay.com/photo/2024/01/11/14/40/light-bulb-8501930_1280.jpg";
        img.src = "https://cache.getarchive.net/Prod/thumb/cdn12/L3Bob3RvLzIwMTYvMTIvMzEvbGFtcC1saWdodC1idWxiLXNjaWVuY2UtdGVjaG5vbG9neS1kZTE0YmYtMTAyNC5qcGc%3D/320/320/jpg";
        isOpen = false;
    }else {
        img.src = "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=";
        isOpen = true;
    }
}
