(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{153:function(t,e,n){},154:function(t,e,n){},181:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(21),o=n.n(c);n(153),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(154);var r,s,l=n(260),d=n(261),u=n(250),j=n(263),b=n(186),O=n(264),f=n(265),h=n(262),T=n(28),m=n(16),g=n(275),p=n(270),v=n(116),x=n.n(v).a.create({withCredentials:!0,headers:{"API-KEY":"57a6b8c8-97c1-40c0-bb62-c0e1174be241"},baseURL:"https://social-network.samuraijs.com/api/1.1/"}),k=function(){return x.get("todo-lists")},I=function(t){return x.post("todo-lists",{title:t})},S=function(t){return x.delete("todo-lists/".concat(t))},L=function(t,e){return x.put("todo-lists/".concat(t),{title:e})},D=function(t){return x.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return x.delete("todo-lists/".concat(t,"/tasks/").concat(e))},C=function(t,e){return x.post("/todo-lists/".concat(t,"/tasks"),{title:e})},E=function(t,e,n){return x.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},A=function(t){return x.post("auth/login",t)},w=function(){return x.delete("auth/login")},P=function(){return x.get("auth/me")};function N(t,e){t.messages.length?e(H(t.messages[0])):e(H("Some error occurred")),e(M("failed"))}!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var F=function(t,e){e(H(t.message?t.message:"Some error occurred")),e(M("failed"))},R={isLoggedIn:!1},G=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},K={status:"idle",error:null,isInitialized:!1},H=function(t){return{type:"APP/SET-ERROR",error:t}},M=function(t){return{type:"APP/SET-STATUS",status:t}},U=function(t){return{type:"APP/SET-IS-INITIALIZED",value:t}},z=n(2);function V(t){return Object(z.jsx)(p.a,Object(m.a)({elevation:6,variant:"filled"},t))}function q(){var t=Object(T.c)((function(t){return t.app.error})),e=Object(T.b)(),n=function(t,n){"clickaway"!==n&&e(H(null))},a=null!==t;return Object(z.jsx)(g.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(z.jsx)(V,{onClose:n,severity:"error",children:t})})}var B=n(276),Y=n(269),J=n(272),W=n(273),Z=n(279),$=n(253),_=n(266),Q=n(277),X=n(128),tt=n(18),et=function(){var t=Object(T.b)(),e=Object(T.c)((function(t){return t.login.isLoggedIn})),n=Object(X.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(M("loading")),A(a).then((function(e){0===e.data.resultCode?(t(G(!0)),t(M("succeeded"))):N(e.data,t)})).catch((function(e){F(e,t)}))})),n.resetForm()}});return e?Object(z.jsx)(tt.a,{to:"/"}):Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(z.jsx)(B.a,{item:!0,justifyContent:"center",children:Object(z.jsx)("form",{onSubmit:n.handleSubmit,children:Object(z.jsxs)(J.a,{children:[Object(z.jsxs)($.a,{children:[Object(z.jsxs)("p",{children:["To log in get registered",Object(z.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(z.jsx)("p",{children:"or use common test account credentials:"}),Object(z.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(z.jsx)("p",{children:"Password: free"})]}),Object(z.jsxs)(Z.a,{children:[Object(z.jsx)(_.a,Object(m.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email?Object(z.jsx)("div",{children:n.errors.email}):null,Object(z.jsx)(_.a,Object(m.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.errors.password?Object(z.jsx)("div",{children:n.errors.password}):null,Object(z.jsx)(W.a,{label:"Remember me",control:Object(z.jsx)(Y.a,Object(m.a)(Object(m.a)({},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe}))}),Object(z.jsx)(Q.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})})},nt=n(259),at=n(182),it=n(17),ct=n(256),ot=n(267),rt=i.a.memo((function(t){var e=t.addItem,n=t.disabled,i=void 0!==n&&n;console.log("AddItemForm called");var c=Object(a.useState)(""),o=Object(it.a)(c,2),r=o[0],s=o[1],l=Object(a.useState)(!1),d=Object(it.a)(l,2),j=d[0],b=d[1],O=function(){var t=r.trim();t?e(t):b(!0),s("")};return Object(z.jsxs)("div",{children:[Object(z.jsx)(ot.a,{disabled:i,variant:"outlined",error:j,value:r,onChange:function(t){s(t.currentTarget.value),b(!1)},onKeyPress:function(t){"Enter"===t.key&&O()},label:"Title",helperText:j&&"Title is required!",size:"small"}),Object(z.jsx)(u.a,{onClick:O,color:"primary",disabled:i,children:Object(z.jsx)(ct.a,{})})]})})),st=i.a.memo((function(t){var e=Object(a.useState)(!1),n=Object(it.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)(t.title),r=Object(it.a)(o,2),s=r[0],l=r[1];return i?Object(z.jsx)(ot.a,{color:"primary",variant:"filled",value:s,autoFocus:!0,onChange:function(t){return l(t.currentTarget.value)},onBlur:function(){c(!1),t.changeTitle(s)}}):Object(z.jsxs)("span",{onDoubleClick:function(){return c(!0)},children:["  ",t.title,"  "]})})),lt=n(258),dt=n(257),ut=n(271),jt=i.a.memo((function(t){var e=t.task.status===r.Completed?"is-done":"";var n=Object(a.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListID)}),[t.changeTaskTitle,t.todoListID,t.task.id]);return Object(z.jsxs)("li",{className:e,children:[Object(z.jsxs)("span",{className:e,children:[Object(z.jsx)(ut.a,{color:"primary",checked:t.task.status===r.Completed,onChange:function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?r.Completed:r.New,t.todoListID)}}),Object(z.jsx)(st,{title:t.task.title,changeTitle:n})]}),Object(z.jsx)(u.a,{onClick:function(){t.removeTask(t.task.id,t.todoListID)},color:"secondary",children:Object(z.jsx)(dt.a,{})})]},t.task.id)})),bt=n(20),Ot=n(8),ft={},ht=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(m.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,status:c.status,title:c.title},e);E(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",taskID:t,model:e,todoListID:n}}(t,e,n);a(c)}else N(i.data,a)})).catch((function(t){F(t,a)}))}else console.warn("task is not found in the state")}},Tt=i.a.memo((function(t){var e=Object.assign({},t);console.log("Todolist called");var n=Object(T.b)();Object(a.useEffect)((function(){var t;n((t=e.todolist.id,function(e){e(M("loading")),D(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todoListID:e}}(a,t)),e(M("succeeded"))}))}))}),[]);var i=Object(a.useCallback)((function(){return e.changeFilter("all",e.todolist.id)}),[e.changeFilter,e.todolist.id]),c=Object(a.useCallback)((function(){return e.changeFilter("active",e.todolist.id)}),[e.changeFilter,e.todolist.id]),o=Object(a.useCallback)((function(){return e.changeFilter("completed",e.todolist.id)}),[e.changeFilter,e.todolist.id]),s=Object(a.useCallback)((function(){return e.removeTodolist(e.todolist.id)}),[e.removeTodolist,e.todolist.id]),l=Object(a.useCallback)((function(t){return e.addTask(t,e.todolist.id)}),[e.addTask,e.todolist.id]),d=Object(a.useCallback)((function(t){return e.changeTodolistTitle(t,e.todolist.id)}),[e.changeTodolistTitle,e.todolist.id]),j=e.tasks;"active"===e.todolist.filter&&(j=j.filter((function(t){return t.status===r.New}))),"completed"===e.todolist.filter&&(j=j.filter((function(t){return t.status===r.Completed})));var O=Object(a.useCallback)((function(t,n){e.removeTask(t,n)}),[e.removeTask]),f=Object(a.useCallback)((function(t,n,a){e.changeTaskStatus(t,n,a)}),[e.changeTaskStatus]),h=Object(a.useCallback)((function(t,n,a){e.changeTaskTitle(t,n,a)}),[e.changeTaskTitle]);return Object(z.jsx)("div",{children:Object(z.jsxs)("div",{children:[Object(z.jsxs)("h3",{children:[Object(z.jsx)(st,{title:e.todolist.title,changeTitle:d}),Object(z.jsx)(u.a,{onClick:s,color:"secondary",disabled:"loading"===e.todolist.entityStatus,children:Object(z.jsx)(dt.a,{})})]}),Object(z.jsx)(rt,{addItem:l,disabled:"loading"===e.todolist.entityStatus}),Object(z.jsx)("ul",{style:{listStyle:"none",paddingLeft:"0px"},children:j.map((function(t){return Object(z.jsx)(jt,{todoListID:e.todolist.id,task:t,removeTask:O,changeTaskTitle:h,changeTaskStatus:f},t.id)}))}),Object(z.jsx)("div",{children:Object(z.jsxs)(lt.a,{children:[Object(z.jsx)(b.a,{size:"small",variant:"all"===e.todolist.filter?"contained":"text",color:"primary",onClick:i,children:"All"}),Object(z.jsx)(b.a,{size:"small",style:{marginLeft:3},variant:"active"===e.todolist.filter?"contained":"text",color:"primary",onClick:c,children:"Active"}),Object(z.jsx)(b.a,{size:"small",style:{marginLeft:3},variant:"completed"===e.todolist.filter?"contained":"text",color:"primary",onClick:o,children:"Completed"})]})})]})})})),mt=[],gt=function(t){t.demo;var e=Object(T.c)((function(t){return t.todoLists})),n=Object(T.c)((function(t){return t.tasks})),i=Object(T.c)((function(t){return t.login.isLoggedIn})),c=Object(T.b)();Object(a.useEffect)((function(){if(i){var t=function(t){t(M("loading")),k().then((function(e){t({type:"SET-TODOLISTS",todoLists:e.data}),t(M("succeeded"))})).catch((function(e){F(e,t)}))};c(t)}}),[]);var o=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){y(e,t).then((function(a){n({type:"REMOVE-TASK",taskId:t,todoListId:e})}))}}(t,e);c(n)}),[]),r=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){C(t,e).then((function(t){0===t.data.resultCode?n({type:"ADD-TASK",task:t.data.data.item}):(t.data.messages.length?n(H(t.data.messages[0])):H("some error occurred"),n(M("failed")))})).catch((function(t){F(t,n)}))}}(e,t);c(n)}),[]),s=Object(a.useCallback)((function(t,e,n){var a=ht(t,{status:e},n);c(a)}),[]),l=Object(a.useCallback)((function(t,e,n){var a=ht(t,{title:e},n);c(a)}),[]),d=Object(a.useCallback)((function(t,e){var n=function(t,e){return{type:"CHANGE-TODOLIST-FILTER",filter:t,todoListID:e}}(t,e);c(n)}),[]),u=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){L(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,todoListID:e}}(e,t))}))}}(e,t);c(n)}),[]),j=Object(a.useCallback)((function(t){var e,n=(e=t,function(t){t(M("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",status:"loading",todoListID:e}),S(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",todoListID:t}}(e)),t(M("succeeded"))}))});c(n)}),[]),b=Object(a.useCallback)((function(t){var e=function(t){return function(e){e(M("loading")),I(t).then((function(t){e(function(t){return{type:"ADD-TODOLIST",todolist:t}}(t.data.data.item)),e(M("succeeded"))}))}}(t);c(e)}),[c]);return i?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(nt.a,{container:!0,style:{padding:"20px 0px "},children:Object(z.jsx)(rt,{addItem:b})}),Object(z.jsx)(nt.a,{container:!0,spacing:3,children:e.map((function(t){return Object(z.jsx)(nt.a,{item:!0,children:Object(z.jsx)(at.a,{elevation:10,style:{padding:"15px",borderRadius:"10px",border:"1px solid lightblue"},children:Object(z.jsx)(Tt,{todolist:t,tasks:n[t.id],addTask:r,removeTask:o,changeFilter:d,changeTaskStatus:s,removeTodolist:j,changeTaskTitle:l,changeTodolistTitle:u},t.id)})},t.id)}))})]}):Object(z.jsx)(tt.a,{to:"/login"})},pt=n(280);function vt(){var t=Object(T.c)((function(t){return t.app.status})),e=Object(T.c)((function(t){return t.app.isInitialized})),n=Object(T.c)((function(t){return t.login.isLoggedIn})),i=Object(T.b)();Object(a.useEffect)((function(){i((function(t){P().then((function(e){0===e.data.resultCode&&(t(G(!0)),t(U(!0)))})).catch((function(e){F(e,t)})).finally((function(){return t(U(!0))}))}))}),[]);var c=Object(a.useCallback)((function(){i((function(t){t(M("loading")),w().then((function(e){0===e.data.resultCode?(t(G(!1)),t(M("succeeded"))):N(e.data,t)})).catch((function(e){F(e,t)}))}))}),[]);return e?Object(z.jsxs)("div",{children:[Object(z.jsx)(q,{}),Object(z.jsxs)(l.a,{position:"static",children:[Object(z.jsxs)(d.a,{style:{justifyContent:"space-between"},children:[Object(z.jsx)(u.a,{color:"inherit",children:Object(z.jsx)(h.a,{})}),Object(z.jsx)(j.a,{variant:"h6",children:"TodoLists"}),n&&Object(z.jsx)(b.a,{color:"inherit",variant:"outlined",onClick:c,children:"Log out"})]}),"loading"===t&&Object(z.jsx)(O.a,{})]}),Object(z.jsx)(f.a,{fixed:!0,children:Object(z.jsxs)(tt.d,{children:[Object(z.jsx)(tt.b,{path:"/",element:Object(z.jsx)(gt,{})}),Object(z.jsx)(tt.b,{path:"login",element:Object(z.jsx)(et,{})})]})})]}):Object(z.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(z.jsx)(pt.a,{})})}var xt=n(89),kt=n(127),It=Object(xt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=t[e.todoListId];return n.filter((function(t){return t.id!==e.taskId})),Object(m.a)(Object(m.a)({},t),{},Object(Ot.a)({},e.todoListId,t[e.todoListId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":var a=Object(m.a)({},t),i=e.task,c=a[i.todoListId],o=[i].concat(Object(bt.a)(c));return a[i.todoListId]=o,a;case"UPDATE-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(Ot.a)({},e.todoListID,t[e.todoListID].map((function(t){return t.id===e.taskID?Object(m.a)(Object(m.a)({},t),e.model):t}))));case"CHANGE-TASK-TITLE":return Object(m.a)(Object(m.a)({},t),{},Object(Ot.a)({},e.todoListID,t[e.todoListID].map((function(t){return t.id===e.taskID?Object(m.a)(Object(m.a)({},t),{},{title:e.newTitle}):t}))));case"ADD-TODOLIST":return Object(m.a)(Object(m.a)({},t),{},Object(Ot.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var r=Object(m.a)({},t);return delete r[e.todoListID],r;case"SET-TODOLISTS":var s=Object(m.a)({},t);return e.todoLists.forEach((function(t){s[t.id]=[]})),s;case"SET-TASKS":var l=Object(m.a)({},t);return l[e.todoListID]=e.tasks,l;default:return t}},todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.todoListID}));case"ADD-TODOLIST":var n=Object(m.a)(Object(m.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"});return[n].concat(Object(bt.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.todoListID?Object(m.a)(Object(m.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.todoListID?Object(m.a)(Object(m.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.todoListID?Object(m.a)(Object(m.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todoLists.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(m.a)(Object(m.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(m.a)(Object(m.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(m.a)(Object(m.a)({},t),{},{isInitialized:e.value});default:return Object(m.a)({},t)}},login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(m.a)(Object(m.a)({},t),{},{isLoggedIn:e.value}):t}}),St=Object(xt.c)(It,Object(xt.a)(kt.a)),Lt=n(71);o.a.render(Object(z.jsx)(T.a,{store:St,children:Object(z.jsx)(Lt.a,{children:Object(z.jsx)(vt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.f342910c.chunk.js.map