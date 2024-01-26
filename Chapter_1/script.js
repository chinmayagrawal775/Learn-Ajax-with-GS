document.getElementById("ajaxdata").addEventListener("click", getData)

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr)
                console.log(xhr.responseText)
            } else {
                console.log('no data recived')
            }
        } else {
            console.log('no state ready')
        }
    };
    xhr.send();
}