(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{19:function(t,e,n){t.exports=n(42)},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(17),c=n.n(r),i=(n(24),n(7)),l=n(2),s=n(3),d=n(5),p=n(4),u=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){alert("Item about to be deleted!")}},{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,o=e.id,r=e.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChangeProps(o)}}),a.a.createElement("button",{onClick:function(){return t.props.deleteTodoProps(o)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(a.a.Component),h=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,this.props.todos.map((function(e){return a.a.createElement(u,{deleteTodoProps:t.props.deleteTodoProps,handleChangeProps:t.props.handleChangeProps,key:e.id,todo:e})})))}}]),n}(a.a.Component),m=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";t.headerSpan!==this.props.headerSpan&&(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.backgroundColor=n)}},{key:"render",value:function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))}}]),n}(o.Component),f=n(18),b=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),n}(o.Component),y=n(6),v=n.n(y),j=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],show:!1},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t})),show:!t.state.show})},t.delTodo=function(e){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodoItem=function(e){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(i.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,{headerSpan:this.state.show}),a.a.createElement(b,{addTodoProps:this.addTodoItem}),a.a.createElement(h,{deleteTodoProps:this.delTodo,handleChangeProps:this.handleChange,todos:this.state.todos}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.06560c67.chunk.js.map