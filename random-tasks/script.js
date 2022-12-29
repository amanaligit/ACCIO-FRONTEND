let imgNode = document.querySelector('#myImage')
const orangeUrl = 'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE='
const appleUrl = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='

imgNode.onclick = () => {
    if(imgNode.src == orangeUrl){
        imgNode.src = appleUrl;
    }
    else{
        imgNode.src = orangeUrl;
    }
}

const foo = (e) => {
    // console.log(e)
    if(e.key == 'a'){
        imgNode.src = appleUrl;
    }
    if(e.key == 'o')
        imgNode.src = orangeUrl;
}

const foo2 = (e) => {
    console.log('KEY pressed');
}

document.addEventListener('keydown', foo)
document.addEventListener('keydown', foo2)