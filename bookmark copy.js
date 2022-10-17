const addButton = document.querySelector('#add_folder');
let folders = [];

setArraylist();

for(var i = 0; i<folders.length; i++){
    const list = document.querySelector('#list');

    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item'); 
    
    newListItem.innerHTML = folders[i];

    list.appendChild(newListItem);

}


// for(var i = 0; i<window.localStorage.length; i++){
//     const list = document.querySelector('#list');

//     const newListItem = document.createElement('li');
//     newListItem.classList.add('list-item'); 
    
//     newListItem.innerHTML = window.localStorage.key(i);

//     list.appendChild(newListItem);

// }
addButton.addEventListener('click', () => {
    const input = document.querySelector('#folder_title');
    const text = input.value.trim();
  
    if (text !== '') {
      addToList(text);
      input.value = '';
      input.focus();
    }
  });
  
  function addToList(text) {
    const list = document.querySelector('#list');
  
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item'); 
  
    newListItem.innerHTML = text;

    var folderid = text;
    var val = "";

    localStorage.setItem(folderid, val);

    list.appendChild(newListItem);

    const btnDelete = document.createElement("button");
    list.appendChild(btnDelete);


    //"❌" 버튼을 누르면 삭제되게 만든다.
    btnDelete.textContent = "❌";
    btnDelete.addEventListener("click", deleteList);

    
  }

  function deleteList(event) {ㅋ
    localStorage.clear();
    setlocallist();
  }

  function setArraylist(){

    for(var i = 0; i < window.localStorage.length; ++i){
        folders[i] = window.localStorage.key(i);
    }

    // var keys = localStorage.getItem(key);
    // try{
    //     folders = JSON.parse(keys);
    // }
    // catch{
    //     folders = {};
    // }
    // if(!folders){
    //     folders = {};
    //     folders[key] = [];
    // }
  }

  function setlocallist(){
    
    for(var i = 0; i<folders.length; ++i){
        localStorage.setItem(folders[i],"");
    }
  }

    // function deleteList(event) {
    //     const btn = event.target.parentNode;
    //     const li = event.target.children;
    //     console.log(btn);
    //     btn.removeChild(li);
    //     window.localStorage.removeItem(btn.key);
    //   }