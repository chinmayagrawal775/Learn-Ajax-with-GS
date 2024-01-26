document.getElementById("ajaxdata").addEventListener("click", getData)

nm = document.getElementById("name")
hby = document.getElementById("hobby")

function getData(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true)
    xhr.responseType = "json"
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.response)
        } else {
            console.log('no data recived')
        }
    };
    mydata = '{"name":"geek","salary":"404","age":"23"}'
    xhr.send(mydata);
}