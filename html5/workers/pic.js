self.addEventListener('message',(event) =>{
    const data = event.data;
    for (let item of data.pics){
        // src img  
        let xhr = new XMLHttpRequest();
        xhr.open('GET',item.src,true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = () =>{
            if(xhr.readyState == 4){
                self.postMessage({
                    id: item.id,
                    result: xhr.response
                });
            }
        }
        xhr.send();
    }
})