document.getElementById("ajaxdata").addEventListener("click", getData)

nm = document.getElementById("name")
hby = document.getElementById("hobby")

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.responseType = "json"
    xhr.onload = () => {
        if(xhr.status === 200){
            for(i = 0; i < xhr.response.length; i++){
                console.log(xhr.response[i].userId)
                console.log(xhr.response[i].id)
                console.log(xhr.response[i].title)
                console.log(xhr.response[i].body)
            }
        } else {
            console.log('no data recived')
        }
    };
    xhr.send();
}