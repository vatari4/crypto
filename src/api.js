import { cryptoAssets, cryptoData } from "./data";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'cyqcuLNiPHbBasypKd92W56HOoyHuiR25NxZi93TmnQ='
    }
  };
  
  fetch('https://openapiv1.coinstats.app/coins', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

export function fakeFetchCrypto(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(cryptoData)
        }, 1)
    })
}

export function fakeAssets(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(cryptoAssets)
        }, 1)
    })
}