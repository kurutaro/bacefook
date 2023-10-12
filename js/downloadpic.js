
let fileName;

function downloadImg(){
    let now = new Date();
    let YMDHMS = String(now.getFullYear()) + String(now.getMonth()+1) + String(now.getDate()) + String(now.getHours()) + String(now.getMinutes()) + String(now.getSeconds()) + String(now.getMilliseconds());
    console.log(YMDHMS);
    const img = document.getElementById('photo');
    const src = img.getAttribute('src');
    const url = src;
    fileName = 'img_' + YMDHMS + '.png';
    let link = document.getElementById("download");
    link.href = url;
    link.download = fileName;
}