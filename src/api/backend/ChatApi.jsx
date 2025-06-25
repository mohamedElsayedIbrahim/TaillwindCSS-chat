import instanceAxios from "../axios"


export const SendMessageApi = (message)=>{
    instanceAxios.post('message/send',message)
    .then((response)=>{
        let {data} = response;
        console.log(data);
        
    })
}


export const DeleteMessageApi = (index)=>{
    instanceAxios.get(`message/delete/${index}`)
    .then((response)=>{
        let {data} = response;
        console.log(data);
    })
}

export const SendEditMessageApi = (index,message)=>{
    instanceAxios.post(`message/update/${index}`,message)
    .then((response)=>{
        let {data} = response;
        console.log(data);
        
    })
}