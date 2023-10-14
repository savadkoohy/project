
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});


    const addUserButton = document.getElementById('add-user-button')
    addUserButton.addEventListener('click',()=>{
        document.querySelector('.add_user_modal').classList.add('show')
        document.querySelector('.add_user_modal_back').classList.remove('dis-none')
    })

    document.querySelector('.add_user_modal_back').addEventListener('click',(e)=>{
        document.querySelector('.add_user_modal').classList.remove('show')
        e.target.add('dis-none')
    })

// نمونه کد لیست کاربران 

// setTimeout(function(){
//     console.log("Start ...");
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((json) =>{
//             console.log("end ...");
//             console.log(json)

//             let html=""

//             for(const user of json){
//                 html=html +     
//                               `
//                                 <tr>
//                                     <td>${user.id}</td>
//                                     <td>${user.name}</td>
//                                     <td>${user.username}</td>
//                                     <td>${user.email}</td>
//                                     <td>${user.address.city}</td>
//                                     <td>
//                                     <i class="material-icons orange-text darken-3 m-l-5 hov-pointer">edit</i>
//                                     <i class="material-icons red-text m-r-5 hov-pointer">delete_forever</i>
//                                     </td>
//                                 </tr>
    
//                                `
//             }
//             document.querySelector('.decktop_table_body').innerHTML=html

//         });
         


// },5000)







  });