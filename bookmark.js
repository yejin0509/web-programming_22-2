//초기화면 불러오기
var classnaming;
var texting;
const addButton = document.querySelector('#add_folder');  //폴더생성 id -> addButton에 대입

for (var i = 0; i < localStorage.length; ++i){          //localStorage for문으로 돌려 key값 출력
  const key = localStorage.key(i);
  if(localStorage.getItem(key)=="top-folder"){
    const list = document.querySelector('#list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item',i);               //li에 list-item class 추가
    const text = window.localStorage.key(i);              //key값 text에 대입
    newListItem.innerHTML = text+"<ul class = 'sub-list-item-ul ul"+i+"'></ul>";                         //li로 key값 출력
    list.appendChild(newListItem);                        //ul id인 list에 li 출력

    const btnPlus = document.createElement("button");   //delete button 정의
    list.appendChild(btnPlus);                          //ul id, list에 button 출력
    btnPlus.classList.add('btnplus');                       //btnDelete에 btn이라는 class 추가
    btnPlus.textContent = "➕";                         //x문구 삽입

    const btnDelete = document.createElement("button");   //delete button 정의
    list.appendChild(btnDelete);                          //ul id, list에 button 출력
    btnDelete.classList.add('btndel');                       //btnDelete에 btn이라는 class 추가
    btnDelete.textContent = "❌";                         //x문구 삽입

    const classname = '.ul'+i;
    classnaming = classname;
    texting = text;

    //btnDelete클릭 시 작동
    btnDelete.addEventListener('click', function() {
      window.localStorage.removeItem(text);               //localStorage에 삭제하고자하는 key 삭제
      btnDelete.parentNode.removeChild(btnDelete);        //btnDelete 삭제
      btnPlus.parentNode.removeChild(btnPlus);            //btnPlus 삭제
      newListItem.parentNode.removeChild(newListItem);    //li 삭제
    });

    //btnPlus클릭 시 작동
    btnPlus.addEventListener('click', function() {
      var inputUrl = prompt('url을 입력하세요.');
      alert(inputUrl);
      if(inputUrl == null || inputUrl == ""){
      }
      else{
        localStorage.setItem(inputUrl, text);  //localStorage에 대입하여 새로고침하더라도 정보 저장

        const listsub = document.querySelector(classname);
        const SubName = document.createElement('li');
        SubName.classList.add('sub-list-item');
        SubName.innerHTML = "<a href = '"+inputUrl+"'target='_blank'>"+inputUrl+"</a>";
        listsub.appendChild(SubName);

        const subbtnDelete = document.createElement("button");
        listsub.appendChild(subbtnDelete);
        subbtnDelete.classList.add('subbtndel');
        subbtnDelete.textContent = "❌";

        subbtnDelete.addEventListener('click', function() {
          window.localStorage.removeItem(inputUrl);               //localStorage에 삭제하고자하는 key 삭제
          subbtnDelete.parentNode.removeChild(subbtnDelete);        //btnDelete 삭제
          SubName.parentNode.removeChild(SubName);            //li 삭제

        });
        

      }
    });
  }
  const keyarr = [];

  for(var a = 0; a < localStorage.length; ++a){
    const Mkey = localStorage.key(a);
    const Memo = localStorage.getItem(Mkey);
    if(Memo==texting){
      keyarr.push(a);
    }
    
  }
  console.log(keyarr);
  if(keyarr != undefined){
    console.log("1"+texting);
    for(var j = 0; j < keyarr.length; ++j){ 
      const Mkey = localStorage.key(keyarr[j]);
      const Memo = localStorage.getItem(Mkey);
      console.log(Memo);
      console.log(keyarr.length, j)
      if(Memo==texting){
        const listsub = document.querySelector(classnaming);
        const SubName = document.createElement('li');
        SubName.classList.add('sub-list-item');
        SubName.innerHTML = "<a href = '"+Mkey+"'target='_blank'>"+Mkey+"</a>";
        listsub.appendChild(SubName);
  
        const subbtnDelete = document.createElement("button");
        listsub.appendChild(subbtnDelete);
        subbtnDelete.classList.add('subbtndel');
        subbtnDelete.textContent = "❌";
  
        subbtnDelete.addEventListener('click', function() {
          window.localStorage.removeItem(Mkey);               //localStorage에 삭제하고자하는 key 삭제
          subbtnDelete.parentNode.removeChild(subbtnDelete);        //btnDelete 삭제
          SubName.parentNode.removeChild(SubName);            //li 삭제

        });
  
        }
    }
}

}

//폴더 생성 버튼
addButton.addEventListener('click', () => {
    const input = document.querySelector('#folder_title');  //폴더 제목 입력창 id -> input에 대입
    const text = input.value.trim();

    if (text !== '') {                                      //입력받은 text가 있으면 addToList 실행
      addToList(text);
      input.value = '';
      input.focus();
    }
  });


//폴더 생성 버튼 클릭 시
  function addToList(text) {

    const list = document.querySelector('#list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');

    newListItem.innerHTML = text;

    var folderid = text;                        //localStorage에 key와 value입력을 위해 folderid와 nullvalue 정의
    var nullvalue = "top-folder";

    localStorage.setItem(folderid, nullvalue);  //localStorage에 대입하여 새로고침하더라도 정보 저장
    list.appendChild(newListItem);

    const btnPlus = document.createElement("button");
    list.appendChild(btnPlus);
    btnPlus.classList.add('btnplus');
    btnPlus.textContent = "➕";

    location.reload();

    const btnDelete = document.createElement("button");
    list.appendChild(btnDelete);
    btnDelete.classList.add('btndel');
    btnDelete.textContent = "❌";
    btnDelete.addEventListener('click', function() {
      console.log(text);
      window.localStorage.removeItem(text);
      btnDelete.parentNode.removeChild(btnDelete);
      btnPlus.parentNode.removeChild(btnPlus);
      newListItem.parentNode.removeChild(newListItem);



    });
    // btnPlus.addEventListener('click', function() {
    //   var inputUrl = prompt('url을 입력하세요.');
    //   alert(inputUrl);
    //   if(inputUrl == null || inputUrl == ""){
    //   }
    //   else{
    //     var inputmemo = prompt('메모를 입력하세요.');
    //     alert(inputmemo);

    //     const valuememo = "메모 " + inputmemo;
    //     localStorage.setItem(inputUrl, inputmemo);  //localStorage에 대입하여 새로고침하더라도 정보 저장

    //     const listsub = document.querySelector(classname);
    //     const SubName = document.createElement('li');
    //     SubName.classList.add('list-item');
    //     SubName.innerHTML = "<a href = "+inputUrl+">"+inputUrl+"</a>";
    //     listsub.appendChild(SubName);
    //   }
    // });

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