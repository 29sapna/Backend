function savetodb(data){
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if(internetSpeed > 4){
            resolve("data was saved");
        }else{
            reject("data is fail");
        }
    });
}
savetodb("hello world");