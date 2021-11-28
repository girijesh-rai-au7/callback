//understand the concept of callback function from problem faced in asynchronous-concept
const datas = [{name:"Tommy",Profession:"Killing",age:32},{
    name:"Shelby",Profession:"drugs",age:34
}];

function getData(){
    setTimeout(()=>{
        let output = '';
        datas.forEach((data,index)=>{
            output+= `<li>${data.name}</li>`
            
            



        })
        document.getElementById('demo').innerHTML = output

    },1000)
}


function addData(element, callback){
    setTimeout(()=>{

        datas.push(element);
        callback();


    },2000)
}

addData({name:"Sunny",Profession:'pilot',age:23},getData)

//getdata() is passed in adddata() as a callback