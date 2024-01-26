document.getElementById("ajaxdata").addEventListener("click", getData)

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000
    xhr.open('GET', 'data.txt', true)
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr)
            console.log(xhr.responseText)
        } else {
            console.log('no data recived')
        }
    };

    xhr.onprogress = e => {
        console.log(e.loaded)
        console.log(e.total)
    }
    
    xhr.onloadend = () => {
        console.log("load end")
    }

    xhr.onloadstart = () => {
        console.log("load start")
    }

    xhr.ontimeout = () => {
        console.log("timeout")
    }

    xhr.onerror = () => {
        console.log("error")
    }

    xhr.onabort = () => {
        console.log("abort")
    }

    xhr.send();
}