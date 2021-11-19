// get post

export function httpGet(url){
  const result = fetch(url);
  return result;
}

export function httpPost(url,params){
  const result = fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept':'application/json,text/plain,*/*'
    },
    body:JSON.stringify(params)
  })
  return result;
}