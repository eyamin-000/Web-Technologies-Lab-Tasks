const img= [
    "https://lh3.googleusercontent.com/p/AF1QipO-R13323Z4lcKMH5rTrKVw7FylAm5ksZ171zPe=s1600-h380",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo92Qb-ARGrBJKtvCsPuUPPbe1Iez6aXfTDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iiW5NLNSe6teUijqRknw9txL9MG4bwYaiQ&s",
    "https://thediplomat.com/wp-content/uploads/2024/06/sizes/td-story-s-2/thediplomat_2024-06-17-191752.jpg"
];
let cIndex=0;
const sliderImg=document.getElementById("slide");
const preBtn=document.getElementById("pre");
const nextBtn=document.getElementById("next");

images.src= img[cIndex];

nextBtn.addEventListener("click", function(){
    cIndex++;
    if(cIndex>=img.length)
    {
        cIndex=0;
    }
    images.src= img[cIndex];
});

preBtn.addEventListener("click", function(){
    cIndex--;
    if(cIndex<0)
    {
        cIndex=img.length-1;
    }
    images.src= img[cIndex];
});

setInterval(function(){
    cIndex++;
    if(cIndex>=img.length)
    {
        cIndex=0;
    }
    images.src= img[cIndex];
},
3000);

