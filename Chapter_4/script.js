document.getElementById("ajaxdata").addEventListener("click", getData)

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
    xhr.responseType = 'text';
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr)
            console.log(xhr.responseText)
            console.log(xhr.response)
            console.log(xhr.responseType)
            console.log(xhr.responseURL)
            console.log(xhr.statusText)
            console.log(xhr.withCredentials)
            console.log(xhr.getResponseHeader('last-modified'))
            console.log(xhr.getAllResponseHeaders())
        } else {
            console.log('no data recived')
        }
    };
    xhr.send();
}