//초기화면 불러오기
var classnaming;
var texting;
const addButton = document.querySelector('#add_folder');  //폴더생성 id -> addButton에 대입
for (var i = 0; i < localStorage.length; ++i){            //localStorage for문으로 돌려 key값 출력
  const key = localStorage.key(i);
  if(localStorage.getItem(key)=="top-folder"){
    const list = document.querySelector('#list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item',i);               //li에 list-item class 추가
    const text = window.localStorage.key(i);                //key값 text에 대입
    newListItem.innerHTML = text+"<ul class = 'sub-list-item-ul ul"+i+"'></ul>";  //li로 key값 출력
    list.appendChild(newListItem);                          //ul id인 list에 li 출력

    //btnPlus 생성
    const btnPlus = document.createElement("button");       //delete button 정의
    list.appendChild(btnPlus);                              //ul id, list에 button 출력
    btnPlus.classList.add('btnplus');                       //btnDelete에 btn이라는 class 추가
    btnPlus.textContent = "➕";                            //x문구 삽입
    
    //btnDelete 생성
    const btnDelete = document.createElement("button");   //delete button 정의
    list.appendChild(btnDelete);                          //ul id, list에 button 출력
    btnDelete.classList.add('btndel');                     //btnDelete에 btn이라는 class 추가
    btnDelete.textContent = "❌";                         //x문구 삽입

    const classname = '.ul'+i;
    classnaming = classname;
    texting = text;                                       //url 화면 조회 시 사용하는 전역 변수

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
          window.localStorage.removeItem(inputUrl);               //localStorage에 삭제하고자하는 url key 삭제
          subbtnDelete.parentNode.removeChild(subbtnDelete);      //subbtnDelete 삭제
          SubName.parentNode.removeChild(SubName);                //li 삭제

        });
        

      }
    });
  
  const keyarr = [];

  //url 조회 시 arr에 폴더에 맞는 url 위치 저장
  for(var a = 0; a < localStorage.length; ++a){
    const Mkey = localStorage.key(a);
    const Memo = localStorage.getItem(Mkey);
    if(Memo==texting){
      keyarr.push(a);
    }
  }
  //url 화면 표기
  console.log(keyarr);
  if(keyarr != undefined){
    console.log("1"+texting);
    for(var j = 0; j < keyarr.length; ++j){ 
      const Mkey = localStorage.key(keyarr[j]);
      const Memo = localStorage.getItem(Mkey);
      console.log(Memo);
      console.log(keyarr.length, j)
      if(Memo==texting){
        console.log("turn "+ Mkey);
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
          window.localStorage.removeItem(Mkey);               
          subbtnDelete.parentNode.removeChild(subbtnDelete);        
          SubName.parentNode.removeChild(SubName);            

        });
      }
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
    var nullvalue = "top-folder";               //폴더 value를 top-folder로 정의하여 url과 차별을 둠.

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
  }