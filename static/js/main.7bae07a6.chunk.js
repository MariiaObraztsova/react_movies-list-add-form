(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(8),s=i.n(a),n=(i(16),i(11)),l=i(2),c=i(3),r=i(6),o=i(5),d=i(1),m=i.n(d),b=(i(17),i(9)),h=(i(18),i(19),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:s,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},v=i(4),u=(i(21),function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleInputChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var i=e.state,a=i.title,s=i.description,n=i.imgUrl,l=i.imdbUrl,c=i.imdbId;e.props.onAdd({title:a,description:s,imgUrl:n,imdbUrl:l,imdbId:c}),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(c.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:"NewMovie__label",htmlFor:"title",children:["Movie title:",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"NewMovie__container",children:Object(h.jsx)("input",{type:"text",className:"NewMovie__input",id:"title",name:"title",placeholder:"Movie title",value:this.state.title,onChange:this.handleInputChange})})]}),Object(h.jsxs)("label",{className:"NewMovie__label",htmlFor:"description",children:["Movie description:",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"NewMovie__container",children:Object(h.jsx)("textarea",{id:"description",className:"NewMovie__input NewMovie__input--decription",name:"description",placeholder:"Movie description",value:this.state.description,onChange:this.handleInputChange})})]}),Object(h.jsxs)("label",{className:"NewMovie__label",htmlFor:"imgUrl",children:["Movie imgUrl:",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"NewMovie__container",children:Object(h.jsx)("input",{type:"text",className:"NewMovie__input",id:"imgUrl",name:"imgUrl",placeholder:"Movie imgUrl",value:this.state.imgUrl,onChange:this.handleInputChange})})]}),Object(h.jsxs)("label",{className:"NewMovie__label",htmlFor:"imdbUrl",children:["Movie imdbUrl:",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"NewMovie__container",children:Object(h.jsx)("input",{type:"text",className:"NewMovie__input",id:"imdbUrl",name:"imdbUrl",placeholder:"Movie imdbUrl",value:this.state.imdbUrl,onChange:this.handleInputChange})})]}),Object(h.jsxs)("label",{className:"NewMovie__label",htmlFor:"imdbId",children:["Movie imdbId:",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"NewMovie__container",children:Object(h.jsx)("input",{type:"text",className:"NewMovie__input",id:"imdbId",name:"imdbId",placeholder:"Movie imdbId",value:this.state.imdbId,onChange:this.handleInputChange})})]}),Object(h.jsx)("button",{type:"submit",className:"NewMovie__button",children:"Add movie"})]})}}]),i}(d.Component)),g=i(10),M=function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={movies:g},e.addMovie=function(t){e.setState((function(e){var i={title:t.title,description:t.description,imgUrl:t.imgUrl,imdbUrl:t.imdbUrl,imdbId:t.imdbId};return{movies:[].concat(Object(n.a)(e.movies),[i])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(p,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(u,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);s.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.7bae07a6.chunk.js.map