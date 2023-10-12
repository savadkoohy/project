
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

  });