"use strict";(self.webpackChunkcheckout_app=self.webpackChunkcheckout_app||[]).push([[275],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./src/components/CardLabels/CardLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>CardLabels_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),__jsx=__webpack_require__("./node_modules/react/index.js").createElement;function CardLabels(props){return __jsx("div",{className:"w-full flex flex-col items-center justify-center gap-[0.87rem]"},__jsx("div",{className:"flex flex-row gap-[0.8rem]"},props.cards.map((function(card){return __jsx("img",{src:card.img,alt:card.alt,key:card.alt})}))),__jsx("div",{className:"flex flex-row gap-[0.43rem]"},__jsx("label",{className:"text-[#DDDDDD] text-[0.62rem]"},"Pagamentos por"),__jsx("img",{src:"/assets/iugu.png",alt:"Iugu logo"})))}CardLabels.displayName="CardLabels",CardLabels.__docgenInfo={description:"",methods:[],displayName:"CardLabels",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ img: string; alt: string }",signature:{properties:[{key:"img",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]}}],raw:"{ img: string; alt: string }[]"},description:""}}};try{CardLabels.displayName="CardLabels",CardLabels.__docgenInfo={description:"",displayName:"CardLabels",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"{ img: string; alt: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardLabels/CardLabels.tsx#CardLabels"]={docgenInfo:CardLabels.__docgenInfo,name:"CardLabels",path:"src/components/CardLabels/CardLabels.tsx#CardLabels"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const CardLabels_stories={title:"Example/CardLabels",component:CardLabels,tags:["autodocs"],parameters:{layout:"fullscreen"}};var Default={args:{cards:[{img:"/assets/elo.png",alt:"card elo"},{img:"/assets/visa.png",alt:"card visa"}]}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    cards: [{\n      img: "/assets/elo.png",\n      alt: "card elo"\n    }, {\n      img: "/assets/visa.png",\n      alt: "card visa"\n    }]\n  }\n} satisfies Story'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})}}]);