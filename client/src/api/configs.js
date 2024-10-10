export const SERVER_URL = 'http://localhost:5000/api/v1';

/* type 0: GET
    type 1: POST
    type 2: PUT
    type 3: DELETE
    type 4: GET with body
    type 5: DELETE with body */

// export async function fetch_response(url,type, body, token) {
//     let options = {};
//     // let response;
//     switch (type) {
//         case 0:
//             options = {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token
//                 }
//             }
//             break;
//         case 1:
//             options = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token
//                 },
//                 body: JSON.stringify(body)
//             }
//             break;
//         case 2:
//             options = {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token
//                 },
//                 body: JSON.stringify(body)
//             }
//             break;

//         case 3:
//             options = {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token
//                 },
//             }
//             break;

//         case 4:
//             options = {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // 'Authorization': token,
//                     'Authorization': token ? `Bearer ${token}` : ''
//                 },
//                 // body: JSON.stringify(body)
//             }
//             break;

//         case 5:
//             options = {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token
//                 },
//                 body: JSON.stringify(body)
//             }
//             break;

//         default:
//             break;
//     }

//     // try{
//     //     const response = await fetch(url,options);
//     //     const data = await response.json();
//     //     return data;

//     // }catch(error){
//     //     return error;
//     // }

//     try{
//         const response = await fetch(url, options);

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.log(error);
//         throw error;
//     }

//     // return fetch(url, options).then(async (res) => {
//     //     return await res.json();
        
//     // }).catch(async (err) => {
//     //     return await err;
//     // })
//     // return response;
// }