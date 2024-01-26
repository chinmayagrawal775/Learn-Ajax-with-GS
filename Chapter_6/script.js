document.getElementById("ajaxdata").addEventListener("click", getData)

nm = document.getElementById("name")
hby = document.getElementById("hobby")

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true)
    xhr.responseType = "json"   // Method 1
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr)
            console.log(xhr.response)
            // let obj = JSON.parse(xhr.response)   // Method 2
            // console.log(obj)   // Method 2
            // nm.innerHTML = obj.name   // Method 2
            // hby.innerHTML = obj.hobby   // Method 2
            nm.innerHTML = xhr.response.name   // Method 1
            hby.innerHTML = xhr.response.hobby   // Method 1
        } else {
            console.log('no data recived')
        }
    };
    xhr.send();
}