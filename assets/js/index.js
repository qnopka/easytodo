/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./\u0000#src/js/components/create-todos-with-db.js":
/*!*****************************************************!*\
  !*** ./ #src/js/components/create-todos-with-db.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoListWithDB\": () => (/* binding */ createTodoListWithDB)\n/* harmony export */ });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ \"./\\u0000#src/js/components/todo-item.js\");\n\n\nconst createTodoListWithDB = (object) => {\n  for (let i in object) {\n    (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.addTodoItem)(object[i]['value'], object[i]['id'])\n    // const todoList = document.querySelector('#todoList')\n\n    // let todoItem = document.createElement('div')\n\n    // todoItem.classList.add('todo-block-task')\n    // todoItem.setAttribute('data-task-block', object[i]['id'])\n    // todoItem.innerHTML = `\n    //         <input type=\"checkbox\" data-btn-ok=${object[i]['id']} id=${object[i]['id']} class=\"todo-btn-ok\"></input>\n    //         <label for=${object[i]['id']}></label>\n    //         <span class=\"todo-task\" data-task-num=\"${object[i]['id']}\">${object[i]['value']}</span>\n    //         <div class=\"todo-btns\">\n    //             <button class=\"todo-btn\" data-btn-fixed=\"${object[i]['id']}\" id=\"btnFixed\">\n    //                 <i class=\"todo-btn-icon icon-fixed uil uil-arrow-circle-up\"></i>\n    //             </button>\n    //             <button class=\"todo-btn\" data-btn-favorite=\"${object[i]['id']}\" id=\"btnFavorite\">\n    //               <i class=\"todo-btn-icon icon__favorite uil uil-heart-alt\"></i>\n    //             </button>\n    //             <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=${object[i]['id']}>\n    //               <i class=\"todo-btn-icon uil uil-times-circle\"></i>\n    //             </button>\n    //         </div>\n    //         `\n\n    // todoList.prepend(todoItem)\n\n    // testSelector(object[i])\n    // handlerButtonFixed(object[i]['id'])\n    // handlerButtonFavorite(object[i]['id'])\n    // // hamdlerButtonDelete(object[i]['id'])\n    // addTastInFolder(object[i]['id'])\n  }\n  handlerButtonPerfotmend()\n  openPopUpEdit()\n}\n\n\n//# sourceURL=webpack://fls-gulp/./%00#src/js/components/create-todos-with-db.js?");

/***/ }),

/***/ "./\u0000#src/js/components/firebase.js":
/*!*****************************************!*\
  !*** ./ #src/js/components/firebase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"googleSignin\": () => (/* binding */ googleSignin),\n/* harmony export */   \"googleSignout\": () => (/* binding */ googleSignout)\n/* harmony export */ });\n/* harmony import */ var _initial_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-db */ \"./\\u0000#src/js/components/initial-db.js\");\n\n\n;\n\nconst avatar = document.querySelector('#avatar')\nconst nameUser = document.querySelector('#name')\nvar obj = {}\nvar user\n\nvar firebaseConfig = {\n  apiKey: 'AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o',\n  authDomain: 'food-f53db.firebaseapp.com',\n  databaseURL: 'https://food-f53db.firebaseio.com',\n  projectId: 'food-f53db',\n  storageBucket: 'food-f53db.appspot.com',\n  messagingSenderId: '662890986544',\n  appId: '1:662890986544:web:2156f9f8ed044df3f581f5',\n}\n// Initialize Firebase\nfirebase.initializeApp(firebaseConfig)\nvar provider = new firebase.auth.GoogleAuthProvider()\n\nfirebase.auth().onAuthStateChanged(function (users) {\n  if (users) {\n    // User is signed in.\n    console.log('User is signed in.')\n    user = firebase.auth().currentUser\n    console.log(user)\n\n    avatar.style.backgroundImage = `url(${user.photoURL})`\n    nameUser.textContent = user.displayName\n\n    document.querySelector('.singin').style.display = 'none'\n    document.querySelector('.header').style.display = 'flex'\n    document.querySelector('.content').style.display = 'flex'\n\n    if (user) {\n      (0,_initial_db__WEBPACK_IMPORTED_MODULE_0__.getTodosWithDB)()\n    }\n    //getFolders();\n  } else {\n    // No user is signed in.\n    console.log('No user is signed in.')\n    document.querySelector('.singin').style.display = 'flex'\n  }\n})\n\nfunction googleSignin() {\n  firebase\n    .auth()\n    .signInWithPopup(provider)\n    .then(function (result) {\n      var token = result.credential.accessToken\n      user = result.user\n      user.photoURL\n      console.log(token)\n      console.log(user)\n      avatar.style.backgroundImage = `url(${user.photoURL})`\n      document.querySelector('.header').style.display = 'flex'\n      document.querySelector('.content').style.display = 'flex'\n    })\n    .catch(function (error) {\n      var errorCode = error.code\n      var errorMessage = error.message\n\n      console.log(error.code)\n      console.log(error.message)\n    })\n}\n\nfunction googleSignout() {\n  firebase\n    .auth()\n    .signOut()\n\n    .then(\n      function () {\n        console.log('Signout Succesfull')\n      },\n      function (error) {\n        console.log('Signout Failed')\n      }\n    )\n}\n\n\n//# sourceURL=webpack://fls-gulp/./%00#src/js/components/firebase.js?");

/***/ }),

/***/ "./\u0000#src/js/components/initial-db.js":
/*!*******************************************!*\
  !*** ./ #src/js/components/initial-db.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodosWithDB\": () => (/* binding */ getTodosWithDB)\n/* harmony export */ });\n/* harmony import */ var _create_todos_with_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todos-with-db */ \"./\\u0000#src/js/components/create-todos-with-db.js\");\n\n\nconst getTodosWithDB = () => {\n  console.log(user)\n  var ref = firebase.database().ref(`Todo/${user.uid}/All/`)\n\n  ref.once(\n    'value',\n    function (snapshot) {\n      if (obj == null) return\n      obj = snapshot.val()\n      ;(0,_create_todos_with_db__WEBPACK_IMPORTED_MODULE_0__.createTodoListWithDB)(obj)\n    },\n    function (error) {\n      console.log('Error: ' + error.code)\n    }\n  )\n}\n\n\n//# sourceURL=webpack://fls-gulp/./%00#src/js/components/initial-db.js?");

/***/ }),

/***/ "./\u0000#src/js/components/todo-item.js":
/*!******************************************!*\
  !*** ./ #src/js/components/todo-item.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoItem\": () => (/* binding */ addTodoItem)\n/* harmony export */ });\nconst addTodoItem = (todoText, id = 0) => {\n  console.log('addtask')\n  const taskList = document.querySelector('#todoList')\n\n  const todoItem = document.createElement('div')\n  id = id != 0 ? id : Date.now()\n\n  todoItem.classList.add('todo-block-task')\n  todoItem.setAttribute('data-task-block', id)\n  todoItem.innerHTML = `\n            <input type=\"checkbox\" data-btn-ok=${id} id=${id} class=\"todo-btn-ok\"></input>\n            <label for=${id}></label>\n            <span class=\"todo-task\" data-task-num=\"${id}\">${todoText}</span>\n            <div class=\"todo-btns\">\n                <button class=\"todo-btn\" data-btn-fixed=\"${id}\" id=\"btnFixed\">\n                  <i class=\"todo-btn-icon icon-fixed uil uil-arrow-circle-up\"></i>\n                </button>\n                <button class=\"todo-btn\" data-btn-favorite=\"${id}\" id=\"btnFavorite\">\n                    <i class=\"todo-btn-icon icon__favorite uil uil-heart-alt\"></i>\n                </button>\n                <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=${id}>\n                  <i class=\"todo-btn-icon uil uil-times-circle\"></i>\n                </button>\n            </div>\n        `\n\n  taskList.prepend(todoItem)\n\n  // setDataBase(todoText, id)\n}\n\n\n//# sourceURL=webpack://fls-gulp/./%00#src/js/components/todo-item.js?");

/***/ }),

/***/ "./\u0000#src/js/index.js":
/*!***************************!*\
  !*** ./ #src/js/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/firebase */ \"./\\u0000#src/js/components/firebase.js\");\n/* harmony import */ var _components_todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-item */ \"./\\u0000#src/js/components/todo-item.js\");\n\n////// Start FireBase /////\n;\n////// End FireBase /////\n\n////// Init variables /////\nconst btnAddFolder = document.querySelector('#btnAddFolder')\nconst btnCreateFolder = document.querySelector('#createFolder')\nconst btnAddTask = document.querySelector('#btnAddTask')\nconst btnSave = document.querySelector('#btnSave')\nconst folderBlock = document.querySelector('.folder-block')\nconst folderList = document.querySelectorAll('.folder-list')\nconst taskContent = document.querySelector('#todoValue')\nconst Tabs = document.querySelectorAll('#btn-tabs')\nconst listTask = document.querySelectorAll('#todoList')\nconst singinBtn = document.querySelector('.singin-btn')\nconst exitBtn = document.querySelector('.header-exit')\nconst addTodo = document.querySelector('#addTodo')\nconst popUp = document.querySelector('.popup')\nconst editValue = document.querySelector('#editValue')\nlet tsk\n\nlet btnPerfotmend, btnDelete, btnFixed, btnFavorite\n\ndocument.querySelector('#menu').addEventListener('click', () => {\n  if (document.querySelector('#menu').checked) {\n    if (window.innerWidth > 768) {\n      document.querySelector('.content-todo').style.width = '100%'\n    }\n    document.querySelector('.content-menu').style.left = '-320px'\n    document.querySelector('.content-menu').style.width = '0px'\n  } else {\n    if (window.innerWidth > 768) {\n      document.querySelector('.content-todo').style.width = '100%'\n    }\n    document.querySelector('.content-menu').style.left = '0px'\n    document.querySelector('.content-menu').style.width = '320px'\n  }\n})\n\n///// Singin and Signout /////\n\nsinginBtn.addEventListener('click', () => {\n  ;(0,_components_firebase__WEBPACK_IMPORTED_MODULE_0__.googleSignin)()\n  document.querySelector('.singin').style.display = 'none'\n})\n\nexitBtn.addEventListener('click', () => {\n  location.reload()\n  ;(0,_components_firebase__WEBPACK_IMPORTED_MODULE_0__.googleSignout)()\n})\n\n///// DataBase /////\n\nfunction setDataBase(value, index) {\n  console.log(user.uid)\n\n  firebase.database().ref(`Todo/${user.uid}/All/`).child(index).update({\n    id: index,\n    value: value,\n    performed: false,\n    favorites: false,\n    fixed: false,\n  })\n}\n\n// function getFolders() {\n//   const ref = firebase.database().ref(`Todo/${user.uid}/Folder/`)\n//   let folders = {}\n//   ref.once(\n//     'value',\n//     function (snapshot) {\n//       folders = snapshot.val()\n\n//       for (const folderName in folders) {\n//         folderBlock.insertAdjacentHTML(\n//           'afterbegin',\n//           `<span class='folder-name'>${folderName}</span>`\n//         )\n//         folderList.forEach((list) => {\n//           list.insertAdjacentHTML(\n//             'afterbegin',\n//             `<span class='folder-name'>${folderName}</span>`\n//           )\n//         })\n//       }\n\n//       document.querySelectorAll('.folder-name').forEach(item => {\n//         item.addEventListener('click', () => {\n//           document.querySelectorAll('#showFolderList').forEach(btn => {\n//             btn.textContent = item.textContent;\n//           })\n//         })\n//       })\n//     },\n//     function (error) {\n//       console.log('Error: ' + error.code)\n//     }\n//   )\n// }\n\n// function addTastInFolder(index) {\n//   document.querySelectorAll('.folder-name').forEach((item) => {\n//     item.addEventListener('click', () => {\n//       document.querySelectorAll('#showFolderList').forEach((btn) => {\n//         btn.textContent = item.textContent\n\n//         firebase\n//           .database()\n//           .ref(`Todo/${user.uid}/Folder/`)\n//           .child(item.textContent)\n//           .update({\n//             id: index,\n//           })\n//       })\n//     })\n//   })\n// }\n\n///// Buttons\n\n// const hamdlerButtonDelete = (i) => {\n//   const btnDelete = document.querySelector(`[data-btn-delete=\"${i}\"]`)\n//   btnDelete.addEventListener('click', () => {\n//     firebase\n//       .database()\n//       .ref(`Todo/${user.uid}/All/`)\n//       .child(btnDelete.dataset.btnDelete)\n//       .remove()\n//     document\n//       .querySelector(`[data-task-block=\"${btnDelete.dataset.btnDelete}\"]`)\n//       .remove()\n//   })\n// }\n\nconst hamdlerButtonDelete = () => {\n  const btnDelete = document.getElementsByClassName('btn-delete')\n\n  btnDelete.addEventListener('click', (event) => {\n    console.log(event)\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/`)\n      .child(btnDelete.dataset.btnDelete)\n      .remove()\n    // document\n    //   .querySelector(`[data-task-block=\"${btnDelete.dataset.btnDelete}\"]`)\n    //   .remove()\n  })\n}\n\nconst handlerButtonPerfotmend = () => {\n  btnPerfotmend = document.querySelectorAll('.todo-btn-ok')\n\n  btnPerfotmend.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      let task = document.querySelector(\n        `[data-task-num=\"${btn.dataset.btnOk}\"]`\n      )\n\n      if (btn.checked) {\n        task.style.textDecoration = 'line-through'\n      } else {\n        task.style.textDecoration = 'none'\n      }\n\n      firebase\n        .database()\n        .ref(`Todo/${user.uid}/All/${btn.dataset.btnOk}`)\n        .update({\n          performed: btn.checked,\n        })\n    })\n  })\n}\n\nconst handlerButtonFavorite = (i) => {\n  const btnFavorite = document.querySelector(`[data-btn-favorite=\"${i}\"]`)\n  btnFavorite.addEventListener('click', () => {\n    const index = btnFavorite.dataset.btnFavorite\n    btnFavorite.classList.toggle('todo-btn__active')\n\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/${index}`)\n      .update({\n        favorites: btnFavorite.classList.contains('todo-btn__active'),\n      })\n  })\n}\n\nconst handlerButtonFixed = (i) => {\n  const btnFixed = document.querySelector(`[data-btn-fixed=\"${i}\"]`)\n  btnFixed.addEventListener('click', () => {\n    const index = btnFixed.dataset.btnFixed\n    btnFixed.classList.toggle('todo-btn__active')\n\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/${index}`)\n      .update({\n        fixed: btnFixed.classList.contains('todo-btn__active'),\n      })\n  })\n}\n\nconst testSelector = (obj) => {\n  document.querySelector(`[data-btn-ok=\"${obj['id']}\"]`).checked =\n    obj['performed']\n\n  if (obj['performed']) {\n    document.querySelector(\n      `[data-task-block=\"${obj['id']}\"]`\n    ).style.textDecoration = 'line-through'\n  }\n\n  if (obj['fixed']) {\n    document\n      .querySelector(`[data-btn-fixed=\"${obj['id']}\"]`)\n      .classList.add('todo-btn__active')\n  }\n\n  if (obj['favorites']) {\n    document\n      .querySelector(`[data-btn-favorite=\"${obj['id']}\"]`)\n      .classList.add('todo-btn__active')\n  }\n}\n\n///// Edit task /////\n\nconst openPopUpEdit = () => {\n  tsk = document.querySelectorAll('.todo-block-task')\n  let index\n  tsk.forEach((item, i) => {\n    item.addEventListener('click', (e) => {\n      if (e.target === item) {\n        popUp.style.display = 'block'\n        index = item.dataset.taskBlock\n\n        editValue.setAttribute('data-task-edit', index)\n        editValue.value = document.querySelectorAll('.todo-task')[i].textContent\n\n        if (\n          document\n            .querySelector(`[data-btn-favorite=\"${index}\"]`)\n            .classList.contains('todo-btn__active')\n        ) {\n          document\n            .querySelector('#btnFavoriteEdit')\n            .classList.add('todo-btn__active')\n          console.log(index)\n        }\n        if (\n          document\n            .querySelector(`[data-btn-fixed=\"${index}\"]`)\n            .classList.contains('todo-btn__active')\n        ) {\n          document\n            .querySelector('#btnFixedEdit')\n            .classList.add('todo-btn__active')\n          console.log(index)\n        }\n\n        setTimeout(\n          () =>\n            (document.querySelector('.popup-edit-todo').style.bottom =\n              'calc(100% - 261px)'),\n          200\n        )\n      }\n    })\n  })\n\n  document.querySelector('#btnFavoriteEdit').addEventListener('click', (e) => {\n    document\n      .querySelector('#btnFavoriteEdit')\n      .classList.toggle('todo-btn__active')\n    console.log(index)\n    document\n      .querySelector(`[data-btn-favorite=\"${index}\"]`)\n      .classList.toggle('todo-btn__active')\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/${index}`)\n      .update({\n        favorites: document\n          .querySelector(`[data-btn-favorite=\"${index}\"]`)\n          .classList.contains('todo-btn__active'),\n      })\n  })\n  document.querySelector('#btnFixedEdit').addEventListener('click', (e) => {\n    document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active')\n    console.log(index)\n    document\n      .querySelector(`[data-btn-fixed=\"${index}\"]`)\n      .classList.toggle('todo-btn__active')\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/${index}`)\n      .update({\n        fixed: document\n          .querySelector(`[data-btn-fixed=\"${index}\"]`)\n          .classList.contains('todo-btn__active'),\n      })\n  })\n}\n\n///// Add task and get task DB /////\n\n// const createTasksWithDB = (object) => {\n//   for (let i in object) {\n//     const taskList = document.querySelector('#todoList')\n\n//     let task = document.createElement('div')\n\n//     task.classList.add('todo-block-task')\n//     task.setAttribute('data-task-block', object[i]['id'])\n//     task.innerHTML = `\n//             <input type=\"checkbox\" data-btn-ok=${object[i]['id']} id=${object[i]['id']} class=\"todo-btn-ok\"></input>\n//             <label for=${object[i]['id']}></label>\n//             <span class=\"todo-task\" data-task-num=\"${object[i]['id']}\">${object[i]['value']}</span>\n//             <div class=\"todo-btns\">\n//                 <button class=\"todo-btn\" data-btn-fixed=\"${object[i]['id']}\" id=\"btnFixed\">\n//                     <i class=\"todo-btn-icon icon-fixed uil uil-arrow-circle-up\"></i>\n//                 </button>\n//                 <button class=\"todo-btn\" data-btn-favorite=\"${object[i]['id']}\" id=\"btnFavorite\">\n//                   <i class=\"todo-btn-icon icon__favorite uil uil-heart-alt\"></i>\n//                 </button>\n//                 <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=${object[i]['id']}>\n//                   <i class=\"todo-btn-icon uil uil-times-circle\"></i>\n//                 </button>\n//             </div>\n//             `\n\n//     taskList.prepend(task)\n\n//     testSelector(object[i])\n//     handlerButtonFixed(object[i]['id'])\n//     handlerButtonFavorite(object[i]['id'])\n//     // hamdlerButtonDelete(object[i]['id'])\n//     addTastInFolder(object[i]['id'])\n//   }\n//   handlerButtonPerfotmend()\n//   openPopUpEdit()\n// }\n\n// const addTask = (taskText) => {\n//   const taskList = document.querySelector('#todoList')\n\n//   let task = document.createElement('div'),\n//     i = Date.now()\n\n//   task.classList.add('todo-block-task')\n//   task.setAttribute('data-task-block', i)\n//   task.innerHTML = `\n//             <input type=\"checkbox\" data-btn-ok=${i} id=${i} class=\"todo-btn-ok\"></input>\n//             <label for=${i}></label>\n//             <span class=\"todo-task\" data-task-num=\"${i}\">${taskText}</span>\n//             <div class=\"todo-btns\">\n//                 <button class=\"todo-btn\" data-btn-fixed=\"${i}\" id=\"btnFixed\">\n//                   <i class=\"todo-btn-icon icon-fixed uil uil-arrow-circle-up\"></i>\n//                 </button>\n//                 <button class=\"todo-btn\" data-btn-favorite=\"${i}\" id=\"btnFavorite\">\n//                     <i class=\"todo-btn-icon icon__favorite uil uil-heart-alt\"></i>\n//                 </button>\n//                 <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=${i}>\n//                   <i class=\"todo-btn-icon uil uil-times-circle\"></i>\n//                 </button>\n//             </div>\n//         `\n\n//   taskList.prepend(task)\n\n//   setDataBase(taskText, i)\n// }\n\n/////////////////////////////////\n\ndocument.addEventListener('keypress', (event) => {\n  if (\n    event.code === 'Enter' &&\n    taskContent.value != '' &&\n    taskContent.value.trim()\n  ) {\n    (0,_components_todo_item__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(taskContent.value)\n    taskContent.value = ''\n    popUp.style.display = 'none'\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n  }\n})\n\nbtnAddTask.addEventListener('click', (event) => {\n  if (taskContent.value != '' && taskContent.value.trim()) {\n    (0,_components_todo_item__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(taskContent.value)\n    taskContent.value = ''\n    popUp.style.display = 'none'\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n  }\n})\n\naddTodo.addEventListener('click', () => {\n  popUp.style.display = 'block'\n  setTimeout(\n    () => (document.querySelector('.popup-add-todo').style.top = '71px'),\n    10\n  )\n})\n\nconst editTask = (event) => {\n  const edit = document.querySelector('#editValue')\n\n  if (\n    (event.code === 'Enter' || event.type === 'click') &&\n    edit.value != '' &&\n    edit.value.trim()\n  ) {\n    document.querySelector(\n      `[data-task-num=\"${edit.dataset.taskEdit}\"]`\n    ).textContent = edit.value\n    firebase\n      .database()\n      .ref(`Todo/${user.uid}/All/${edit.dataset.taskEdit}`)\n      .update({\n        value: edit.value,\n      })\n    popUp.style.display = 'none'\n    document.querySelector('.popup-edit-todo').style.bottom = '-700px'\n  }\n}\n\neditValue.addEventListener('keypress', (event) => editTask(event))\n\nbtnSave.addEventListener('click', (event) => editTask(event))\n\n// const createFolder = (event) => {\n//   const nameFolder = document.querySelector('#nameFolder');\n\n//   if (\n//     (event.code === 'Enter' || event.type === 'click') &&\n//     nameFolder.value != '' &&\n//     nameFolder.value.trim()\n//   ) {\n//     firebase\n//       .database()\n//       .ref(`Todo/${user.uid}/Folder/${nameFolder.value}`)\n//       .update({\n//         0: '0',\n//       });\n\n//     folderBlock.insertAdjacentHTML(\n//       'afterbegin',\n//       `<span>${nameFolder.value}</span>`\n//     );\n//     popUp.style.display = 'none';\n//     document.querySelector('.popup-add-folder').style.top = '-700px';\n//   }\n// };\n\n// btnAddFolder.addEventListener('click', () => {\n//   popUp.style.display = 'block';\n//   setTimeout(\n//     () => (document.querySelector('.popup-add-folder').style.top = '71px'),\n//     10\n//   );\n// });\n\n// btnCreateFolder.addEventListener('click', (event) => createFolder(event));\n\npopUp.addEventListener('click', (e) => {\n  if (e.target === popUp) {\n    popUp.style.display = 'none'\n    document\n      .querySelector('#btnFavoriteEdit')\n      .classList.remove('todo-btn__active')\n    document.querySelector('#btnFixedEdit').classList.remove('todo-btn__active')\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n    //document.querySelector('.popup-add-folder').style.top = '-700px';\n    document.querySelector('.popup-edit-todo').style.bottom = '-700px'\n  }\n})\n\n// const newFolder = document.querySelector('#addNameFolder');\n\n//   newFolder.addEventListener('keypress', event => {\n//     if (event.code === 'Enter') {\n//       firebase.database().ref(`Todo/${user.uid}/Folder/Test`)\n//       .update({\n//         0: '0'\n//       });\n//     }\n//   })\n\n///// Tabs /////\n\nconst hideTaskList = (index) => {\n  for (let i = 0; i < listTask.length; i++) {\n    if (index === i) {\n      listTask[i].style.display = 'block'\n    } else {\n      listTask[i].style.display = 'none'\n    }\n  }\n}\n\nconst updateListInTab = (tab) => {\n  const list = document.querySelector(`[data-name-list=\"${tab}\"]`)\n  let ref2 = firebase.database().ref(`Todo/${user.uid}/All/`)\n  ref2.once(\n    'value',\n    (snapshot) => {\n      if (obj == null) return\n      obj = snapshot.val()\n\n      if (tab === 'incoming') {\n        for (let i in obj) {\n          list.prepend(\n            document.querySelector(`[data-task-block=\"${obj[i]['id']}\"]`)\n          )\n        }\n      }\n\n      for (let i in obj) {\n        if (obj[i][tab]) {\n          console.log(obj[i][tab])\n          list.prepend(\n            document.querySelector(`[data-task-block=\"${obj[i]['id']}\"]`)\n          )\n        }\n      }\n    },\n    (error) => {\n      console.log('Error: ' + error.code)\n    }\n  )\n}\n\nTabs.forEach((tab, index) => {\n  tab.addEventListener('click', () => {\n    for (let i = 0; i < Tabs.length; i++) {\n      Tabs[i].classList.remove('tab-active')\n    }\n    tab.classList.add('tab-active')\n    hideTaskList(index)\n    updateListInTab(tab.dataset.nameTab)\n  })\n})\n\n\n//# sourceURL=webpack://fls-gulp/./%00#src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./\u0000#src/js/index.js");
/******/ 	
/******/ })()
;