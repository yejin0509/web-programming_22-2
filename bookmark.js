const addButton = document.querySelector('#add_folder');
// function dele(text, newListItem) {
//   console.log(text);
//   window.localStorage.removeItem(text);
//   newListItem.parentNode.removeChild(newListItem);
// }

// for (var i = 0; i < localStorage.length; ++i){
//   const list = document.querySelector('#list');
//   const newListItem = document.createElement('li');
//   newListItem.classList.add('list-item');
//   const text = window.localStorage.key(i);
//   newListItem.innerHTML = text + '<button onclick = "dele(text, newListItem);">❌</button>';
//   list.appendChild(newListItem);



// }


for (var i = 0; i < localStorage.length; ++i){
  const list = document.querySelector('#list')
  const newListItem = document.createElement('li');
  newListItem.classList.add('list-item');
  const text = window.localStorage.key(i);
  newListItem.innerHTML = text;
  list.appendChild(newListItem);
  const btnDelete = document.createElement("button");
  list.appendChild(btnDelete);


    //"❌" 버튼을 누르면 삭제되게 만든다.
    btnDelete.textContent = "❌ ";
    btnDelete.addEventListener('click', function() {
      console.log(text);
      window.localStorage.removeItem(text);
      btnDelete.parentNode.removeChild(btnDelete);
      newListItem.parentNode.removeChild(newListItem);
  });
}


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
    btnDelete.addEventListener('click', function() {
      console.log(text);
      window.localStorage.removeItem(text);
      btnDelete.parentNode.removeChild(btnDelete);
      newListItem.parentNode.removeChild(newListItem);
    });

  }












//백업
// const addButton = document.querySelector('#add_folder');
// let folders = [];

// setArraylist();

// for(var i = 0; i<folders.length; i++){
//     const list = document.querySelector('#list');

//     const newListItem = document.createElement('li');
//     newListItem.classList.add('list-item'); 
    
//     newListItem.innerHTML = folders[i]

//     list.appendChild(newListItem);

// }


// // for(var i = 0; i<window.localStorage.length; i++){
// //     const list = document.querySelector('#list');

// //     const newListItem = document.createElement('li');
// //     newListItem.classList.add('list-item'); 
    
// //     newListItem.innerHTML = window.localStorage.key(i);

// //     list.appendChild(newListItem);

// // }
// addButton.addEventListener('click', () => {
//     const input = document.querySelector('#folder_title');
//     const text = input.value.trim();
  
//     if (text !== '') {
//       addToList(text);
//       input.value = '';
//       input.focus();
//     }
//   });
  
//   function addToList(text) {
    
//     const list = document.querySelector('#list');
  
//     const newListItem = document.createElement('li');
//     newListItem.classList.add('item'+i, 'list-item'); 
  
//     newListItem.innerHTML = text;

//     var folderid = text;
//     var val = "";

//     localStorage.setItem(folderid, val);

//     list.appendChild(newListItem);

//     const btnDelete = document.createElement("button");
//     list.appendChild(btnDelete);


//     //"❌" 버튼을 누르면 삭제되게 만든다.
//     btnDelete.textContent = "❌";
//     btnDelete.addEventListener('click', function() {
//       btnDelete.parentNode.removeChild(btnDelete);
//       newListItem.parentNode.removeChild(newListItem);

    
//     });

//   }
// //   function deleteItemFromList (item) {
// //     let index = this.todo.indexOf(item)
// //     this.todo.splice(index, 1);
// //   }
//   function deleteList(event) {
//     var itemclass = event.target.className;
//     console.log(itemclass);
//     itemclass.clear();

//     setlocallist();
//   }

//   function setArraylist(){

//     for(var i = 0; i < window.localStorage.length; ++i){
//         folders[i] = window.localStorage.key(i);
//     }

//     // var keys = localStorage.getItem(key);
//     // try{
//     //     folders = JSON.parse(keys);
//     // }
//     // catch{
//     //     folders = {};
//     // }
//     // if(!folders){
//     //     folders = {};
//     //     folders[key] = [];
//     // }
//   }

//   function setlocallist(){
//     localStorage.clear();
//     for(var i = 0; i<folders.length; ++i){
//         localStorage.setItem(folders[i],"");
//     }
//   }

//     // function deleteList(event) {
//     //     const btn = event.target.parentNode;
//     //     const li = event.target.children;
//     //     console.log(btn);
//     //     btn.removeChild(li);
//     //     window.localStorage.removeItem(btn.key);
//     //   }