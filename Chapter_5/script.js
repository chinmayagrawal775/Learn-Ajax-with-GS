document.getElementById("ajaxdata").addEventListener("click", getData)

let el = document.getElementById("head")

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr)
            console.log(xhr.responseText)
            el.innerText = xhr.responseText
        } else {
            console.log('no data recived')
        }
    };
    xhr.send();
}