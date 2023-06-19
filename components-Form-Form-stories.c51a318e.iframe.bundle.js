/*! For license information please see components-Form-Form-stories.c51a318e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcheckout_app=self.webpackChunkcheckout_app||[]).push([[969],{"./src/components/Form/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Form_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Form(props){var _useState=(0,react.useState)({}),formData=_useState[0],setFormData=_useState[1],_useState2=(0,react.useState)({}),handleInputChange=(_useState2[0],_useState2[1],function handleInputChange(name,value){setFormData((function(prevData){return _objectSpread(_objectSpread({},prevData),{},(0,defineProperty.Z)({},name,value))}))});return __jsx("form",{onSubmit:function handleSubmit(e){e.preventDefault(),props.onSubmit(formData)},className:"flex flex-col gap-[1.87rem]","data-testid":"form"},__jsx(Input.I,{required:!0,label:"Número do cartão",mask:"9999 9999 9999 9999",placeholder:"0000 0000 0000 0000",onChange:function onChange(value){return handleInputChange("creditCardNumber",value)},name:"creditCardNumber"}),__jsx("div",{className:"flex flex-row gap-[3.12rem]"},__jsx(Input.I,{required:!0,label:"Validade",mask:"99/99",placeholder:"MM/AA",onChange:function onChange(value){return handleInputChange("creditCardExpirationDate",value)},name:"creditCardExpirationDate"}),__jsx(Input.I,{required:!0,label:"CVV",mask:"999",placeholder:"000",onChange:function onChange(value){return handleInputChange("creditCardCVV",value)},name:"creditCardCVV"})),__jsx(Input.I,{required:!0,label:"Nome impresso no cartão",mask:"",placeholder:"Seu nome",onChange:function onChange(value){return handleInputChange("creditCardHolder",value)},name:"creditCardHolder"}),__jsx(Input.I,{required:!0,label:"CPF",mask:"999.999.999-99",placeholder:"000.000.000-00",onChange:function onChange(value){return handleInputChange("creditCardCPF",value)},name:"creditCardCPF"}),__jsx(Input.I,{required:!0,label:"Cupom",mask:"",type:"text",placeholder:"Insira aqui",onChange:function onChange(value){return handleInputChange("couponCode",value)},name:"couponCode"}),__jsx(Select.P,{"data-testid":"select-element",label:"Número de parcelas",options:props.installments,placeholder:"Selecionar",onSelect:function onSelect(option){return function handleSelectChange(name,value){setFormData((function(prevData){return _objectSpread(_objectSpread({},prevData),{},(0,defineProperty.Z)({},name,value))}))}("installments",option.value)}}),__jsx("div",{className:"mt-[0.62rem]"},__jsx(Button.z,{variation:"primary",type:"submit"},"Finalizar pagamento")))}Form.displayName="Form",Form.__docgenInfo={description:"",methods:[],displayName:"Form",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormData) => Promise<void>",signature:{arguments:[{name:"data",type:{name:"signature",type:"object",raw:"{\r\n    [key: string]: string\r\n}",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},installments:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n    label: string | number\r\n    value: string | number\r\n}",signature:{properties:[{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:"Array<{\r\n    label: string | number\r\n    value: string | number\r\n}>"},description:""}}};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: FormData) => Promise<void>"}},installments:{defaultValue:null,description:"",name:"installments",required:!0,type:{name:"{ label: string | number; value: string | number; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}function Form_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Form_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Form_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Form_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Form_stories={title:"Example/Form",component:Form,tags:["autodocs"],parameters:{layout:"fullscreen"}};var Default={args:{installments:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}],onSubmit:function onSubmit(){}}};Default.parameters=Form_stories_objectSpread(Form_stories_objectSpread({},Default.parameters),{},{docs:Form_stories_objectSpread(Form_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Form_stories_objectSpread({originalSource:"{\n  args: {\n    installments: mockInstallments,\n    onSubmit: () => {}\n  }\n} satisfies Story"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Button=function Button(props){var _props$type;return __jsx("button",{type:null!==(_props$type=props.type)&&void 0!==_props$type?_props$type:"button",style:{height:props.height?"".concat(props.height,"rem"):"50px",fontWeight:props.weight?"700":"400"},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex justify-center items-center w-full rounded-[25px] text-[0.94rem]",function handleThemes(buttonTheme){switch(buttonTheme){case"primary":return"bg-blue text-white disabled:bg-gray hover:bg-lightBlue transition-all";case"secondary":return classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-blue")}}(props.variation))},props.children)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variation:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},height:{required:!1,tsType:{name:"number"},description:""},weight:{required:!1,tsType:{name:"number"},description:""},type:{required:!1,tsType:{name:"string"},description:""}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variation:{defaultValue:null,description:"",name:"variation",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react_input_mask__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-input-mask/index.js"),react_input_mask__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__),__jsx=__webpack_require__("./node_modules/react/index.js").createElement;function Input(props){var _props$required,_props$type,_props$defaultValue;return __jsx("div",null,__jsx("label",{className:"text-darkGray text-[0.8rem]",htmlFor:props.name},props.label||""),__jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default(),{required:null!==(_props$required=props.required)&&void 0!==_props$required&&_props$required,mask:props.mask,className:"w-full border-b-[1px] text-[1rem] text-darkGray font-sans border-[#F4F3F6] py-[0.25rem] pl-1 placeholder:text-lightGray focus:outline-none focus:ring-2",type:null!==(_props$type=props.type)&&void 0!==_props$type?_props$type:"text",placeholder:props.placeholder,onChange:function onChange(e){return props.onChange(e.target.value)},defaultValue:null!==(_props$defaultValue=props.defaultValue)&&void 0!==_props$defaultValue?_props$defaultValue:"",value:props.value,name:props.name,id:props.name}))}Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},mask:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},mask:{defaultValue:null,description:"",name:"mask",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>Select});var C_Users_isabe_OneDrive_rea_de_Trabalho_afya_checkout_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_isabe_OneDrive_rea_de_Trabalho_afya_checkout_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_isabe_OneDrive_rea_de_Trabalho_afya_checkout_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var indicatorSeparatorStyle={width:0},IndicatorSeparator=function IndicatorSeparator(_ref){var innerProps=_ref.innerProps;return __jsx("span",(0,C_Users_isabe_OneDrive_rea_de_Trabalho_afya_checkout_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({style:indicatorSeparatorStyle},innerProps))};IndicatorSeparator.displayName="IndicatorSeparator";var CustomSelect=function CustomSelect(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),selected=_useState[0],setSelected=_useState[1],customStyles={control:function control(styles){return _objectSpread(_objectSpread({},styles),{},{borderRadius:0,border:"none",borderBottom:"1px solid #F4F3F6",color:"#666173",fontSize:"0.93rem"})},option:function option(styles){return _objectSpread(_objectSpread({},styles),{},{color:"#666173"})},singleValue:function singleValue(styles){return _objectSpread(_objectSpread({},styles),{},{color:"#666173"})},placeholder:function placeholder(styles){return _objectSpread(_objectSpread({},styles),{},{color:"#C9C5D4",fontSize:"1rem"})},container:function container(styles){return _objectSpread(_objectSpread({},styles),{},{width:"100%"})}};return __jsx("div",null,__jsx("label",{id:"select-label",className:"text-darkGray text-[0.8rem]",htmlFor:"select"},props.label||""),__jsx(react_select__WEBPACK_IMPORTED_MODULE_3__.ZP,{id:"select",name:"Select",value:selected,options:props.options,onChange:function onChange(newValue,actionMeta){return setSelected(newValue)},placeholder:props.placeholder,components:{IndicatorSeparator},theme:function theme(_theme){return _objectSpread(_objectSpread({},_theme),{},{borderRadius:0})},styles:customStyles}))};function Select(props){return __jsx(CustomSelect,{"data-testid":"select-element",onSelect:props.onSelect,options:props.options,placeholder:props.placeholder,label:props.label})}CustomSelect.displayName="CustomSelect",Select.displayName="Select",Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n    label: string | number\r\n    value: string | number\r\n}",signature:{properties:[{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:"Array<{\r\n    label: string | number\r\n    value: string | number\r\n}>"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: {\r\n    label: string | number\r\n    value: string | number\r\n}) => void",signature:{arguments:[{name:"selected",type:{name:"signature",type:"object",raw:"{\r\n    label: string | number\r\n    value: string | number\r\n}",signature:{properties:[{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}}],return:{name:"void"}}},description:""}}};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ label: string | number; value: string | number; }[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(selected: { label: string | number; value: string | number; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-input-mask/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-input-mask/lib/react-input-mask.production.min.js")},"./node_modules/react-input-mask/lib/react-input-mask.production.min.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var React=function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(__webpack_require__("./node_modules/react/index.js")),reactDom=__webpack_require__("./node_modules/react-dom/index.js");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),function _defaults2(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var i=n[a],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&void 0===e[i]&&Object.defineProperty(e,i,r)}return e}(e.prototype.constructor=e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var invariant_1=function(e,t,n,a,i,r,o,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,i,r,o,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function setInputSelection(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var defaultFormatChars={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function parseMask(e,t,n){var a="",i="",r=null,o=[];if(void 0===t&&(t="_"),null==n&&(n=defaultFormatChars),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!n[e]?(o.push(a.length),a.length===o.length-1&&(i+=e)):r=a.length+1,a+=e,!1)})),{maskChar:t,formatChars:n,prefix:i,mask:a,lastEditablePosition:r,permanents:o}}function isPermanentCharacter(e,t){return-1!==e.permanents.indexOf(t)}function isAllowedCharacter(e,t,n){var a=e.mask,i=e.formatChars;if(!n)return!1;if(isPermanentCharacter(e,t))return a[t]===n;var r=i[a[t]];return new RegExp(r).test(n)}function isEmpty(n,e){return e.split("").every((function(e,t){return isPermanentCharacter(n,t)||!isAllowedCharacter(n,t,e)}))}function getFilledLength(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&isPermanentCharacter(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=a.length,r=t.length;r>=a.length;r--){var o=t[r];if(!isPermanentCharacter(e,r)&&isAllowedCharacter(e,r,o)){i=r+1;break}}return i}function isFilled(e,t){return getFilledLength(e,t)===e.mask.length}function formatValue(e,t){var n=e.maskChar,a=e.mask,i=e.prefix;if(!n){for((t=insertString(e,"",t,0)).length<i.length&&(t=i);t.length<a.length&&isPermanentCharacter(e,t.length);)t+=a[t.length];return t}if(t)return insertString(e,formatValue(e,""),t,0);for(var r=0;r<a.length;r++)isPermanentCharacter(e,r)?t+=a[r]:t+=n;return t}function insertString(r,o,e,s){var l=r.mask,u=r.maskChar,c=r.prefix,t=e.split(""),h=isFilled(r,o);return!u&&s>o.length&&(o+=l.slice(o.length,s)),t.every((function(e){for(;i=e,isPermanentCharacter(r,a=s)&&i!==l[a];){if(s>=o.length&&(o+=l[s]),t=e,u&&isPermanentCharacter(r,s)&&t===u)return!0;if(++s>=l.length)return!1}var t,a,i;return!isAllowedCharacter(r,s,e)&&e!==u||(s<o.length?o=u||h||s<c.length?o.slice(0,s)+e+o.slice(s+1):(o=o.slice(0,s)+e+o.slice(s),formatValue(r,o)):u||(o+=e),++s<l.length)})),o}function getRightEditablePosition(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!isPermanentCharacter(e,a))return a;return null}function getStringValue(e){return e||0===e?e+"":""}function processChange(e,t,n,a,i){var r=e.mask,o=e.prefix,s=e.lastEditablePosition,l=t,u="",c=0,h=0,f=Math.min(i.start,n.start);return n.end>i.start?h=(c=function getInsertStringLength(a,e,t,i){var r=a.mask,o=a.maskChar,n=t.split(""),s=i;return n.every((function(e){for(;n=e,isPermanentCharacter(a,t=i)&&n!==r[t];)if(++i>=r.length)return!1;var t,n;return(isAllowedCharacter(a,i,e)||e===o)&&i++,i<r.length})),i-s}(e,0,u=l.slice(i.start,n.end),f))?i.length:0:l.length<a.length&&(h=a.length-l.length),l=a,h&&(1!==h||i.length||(f=i.start===n.start?getRightEditablePosition(e,n.start):function getLeftEditablePosition(e,t){for(var n=t;0<=n;--n)if(!isPermanentCharacter(e,n))return n;return null}(e,n.start)),l=function clearRange(n,e,a,t){var i=a+t,r=n.maskChar,o=n.mask,s=n.prefix,l=e.split("");if(r)return l.map((function(e,t){return t<a||i<=t?e:isPermanentCharacter(n,t)?o[t]:r})).join("");for(var u=i;u<l.length;u++)isPermanentCharacter(n,u)&&(l[u]="");return a=Math.max(s.length,a),l.splice(a,i-a),e=l.join(""),formatValue(n,e)}(e,l,f,h)),l=insertString(e,l,u,f),(f+=c)>=r.length?f=r.length:f<o.length&&!c?f=o.length:f>=o.length&&f<s&&c&&(f=getRightEditablePosition(e,f)),u||(u=null),{value:l=formatValue(e,l),enteredString:u,selection:{start:f,end:f}}}function isFunction(e){return"function"==typeof e}function getCancelAnimationFrame(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function defer(e){return(getCancelAnimationFrame()?function getRequestAnimationFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}():function(){return setTimeout(e,1e3/60)})(e)}function cancelDefer(e){(getCancelAnimationFrame()||clearTimeout)(e)}var InputElement=function(c){function e(e){var f=c.call(this,e)||this;f.focused=!1,f.mounted=!1,f.previousSelection=null,f.selectionDeferId=null,f.saveSelectionLoopDeferId=null,f.saveSelectionLoop=function(){f.previousSelection=f.getSelection(),f.saveSelectionLoopDeferId=defer(f.saveSelectionLoop)},f.runSaveSelectionLoop=function(){null===f.saveSelectionLoopDeferId&&f.saveSelectionLoop()},f.stopSaveSelectionLoop=function(){null!==f.saveSelectionLoopDeferId&&(cancelDefer(f.saveSelectionLoopDeferId),f.saveSelectionLoopDeferId=null,f.previousSelection=null)},f.getInputDOMNode=function(){if(!f.mounted)return null;var e=reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(f))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},f.getInputValue=function(){var e=f.getInputDOMNode();return e?e.value:null},f.setInputValue=function(e){var t=f.getInputDOMNode();t&&(f.value=e,t.value=e)},f.setCursorToEnd=function(){var e=getFilledLength(f.maskOptions,f.value),t=getRightEditablePosition(f.maskOptions,e);null!==t&&f.setCursorPosition(t)},f.setSelection=function(e,t,n){void 0===n&&(n={});var a=f.getInputDOMNode(),i=f.isFocused();a&&i&&(n.deferred||setInputSelection(a,e,t),null!==f.selectionDeferId&&cancelDefer(f.selectionDeferId),f.selectionDeferId=defer((function(){f.selectionDeferId=null,setInputSelection(a,e,t)})),f.previousSelection={start:e,end:t,length:Math.abs(t-e)})},f.getSelection=function(){return function getInputSelection(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(f.getInputDOMNode())},f.getCursorPosition=function(){return f.getSelection().start},f.setCursorPosition=function(e){f.setSelection(e,e)},f.isFocused=function(){return f.focused},f.getBeforeMaskedValueChangeConfig=function(){var e=f.maskOptions,t=e.mask,n=e.maskChar,a=e.permanents,i=e.formatChars;return{mask:t,maskChar:n,permanents:a,alwaysShowMask:!!f.props.alwaysShowMask,formatChars:i}},f.isInputAutofilled=function(e,t,n,a){var i=f.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(r){}return!f.focused||a.end<n.length&&t.end===e.length},f.onChange=function(e){var t=_assertThisInitialized(_assertThisInitialized(f)).beforePasteState,n=_assertThisInitialized(_assertThisInitialized(f)).previousSelection,a=f.props.beforeMaskedValueChange,i=f.getInputValue(),r=f.value,o=f.getSelection();f.isInputAutofilled(i,o,r,n)&&(r=formatValue(f.maskOptions,""),n={start:0,end:0,length:0}),t&&(n=t.selection,r=t.value,o={start:n.start+i.length,end:n.start+i.length,length:0},i=r.slice(0,n.start)+i+r.slice(n.end),f.beforePasteState=null);var s=processChange(f.maskOptions,i,o,r,n),l=s.enteredString,u=s.selection,c=s.value;if(isFunction(a)){var h=a({value:c,selection:u},{value:r,selection:n},l,f.getBeforeMaskedValueChangeConfig());c=h.value,u=h.selection}f.setInputValue(c),isFunction(f.props.onChange)&&f.props.onChange(e),f.isWindowsPhoneBrowser?f.setSelection(u.start,u.end,{deferred:!0}):f.setSelection(u.start,u.end)},f.onFocus=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions,a=n.mask,i=n.prefix;if(f.focused=!0,f.mounted=!0,a){if(f.value)getFilledLength(f.maskOptions,f.value)<f.maskOptions.mask.length&&f.setCursorToEnd();else{var r=formatValue(f.maskOptions,i),o=formatValue(f.maskOptions,r),s=getFilledLength(f.maskOptions,o),l=getRightEditablePosition(f.maskOptions,s),u={start:l,end:l};if(isFunction(t)){var c=t({value:o,selection:u},{value:f.value,selection:null},null,f.getBeforeMaskedValueChangeConfig());o=c.value,u=c.selection}var h=o!==f.getInputValue();h&&f.setInputValue(o),h&&isFunction(f.props.onChange)&&f.props.onChange(e),f.setSelection(u.start,u.end)}f.runSaveSelectionLoop()}isFunction(f.props.onFocus)&&f.props.onFocus(e)},f.onBlur=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions.mask;if(f.stopSaveSelectionLoop(),f.focused=!1,n&&!f.props.alwaysShowMask&&isEmpty(f.maskOptions,f.value)){var a="";isFunction(t)&&(a=t({value:a,selection:null},{value:f.value,selection:f.previousSelection},null,f.getBeforeMaskedValueChangeConfig()).value);var i=a!==f.getInputValue();i&&f.setInputValue(a),i&&isFunction(f.props.onChange)&&f.props.onChange(e)}isFunction(f.props.onBlur)&&f.props.onBlur(e)},f.onMouseDown=function(e){if(!f.focused&&document.addEventListener){f.mouseDownX=e.clientX,f.mouseDownY=e.clientY,f.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function r(e){if(document.removeEventListener("mouseup",r),f.focused){var t=Math.abs(e.clientX-f.mouseDownX),n=Math.abs(e.clientY-f.mouseDownY),a=Math.max(t,n),i=(new Date).getTime()-f.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&f.setCursorToEnd()}}))}isFunction(f.props.onMouseDown)&&f.props.onMouseDown(e)},f.onPaste=function(e){isFunction(f.props.onPaste)&&f.props.onPaste(e),e.defaultPrevented||(f.beforePasteState={value:f.getInputValue(),selection:f.getSelection()},f.setInputValue(""))},f.handleRef=function(e){null==f.props.children&&isFunction(f.props.inputRef)&&f.props.inputRef(e)};var t=e.mask,n=e.maskChar,a=e.formatChars,i=e.alwaysShowMask,r=e.beforeMaskedValueChange,o=e.defaultValue,s=e.value;f.maskOptions=parseMask(t,n,a),null==o&&(o=""),null==s&&(s=o);var l=getStringValue(s);if(f.maskOptions.mask&&(i||l)&&(l=formatValue(f.maskOptions,l),isFunction(r))){var u=e.value;null==e.value&&(u=o),l=r({value:l,selection:null},{value:u=getStringValue(u),selection:null},null,f.getBeforeMaskedValueChangeConfig()).value}return f.value=l,f}_inheritsLoose(e,c);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function isWindowsPhoneBrowser(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,i=t.mask,r=t.maskChar,o=t.formatChars,s=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?getStringValue(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=parseMask(i,r,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=formatValue(this.maskOptions,c)),f){var p=getFilledLength(this.maskOptions,c);(null===h||p<h)&&(h=isFilled(this.maskOptions,c)?p:getRightEditablePosition(this.maskOptions,p))}!this.maskOptions.mask||!isEmpty(this.maskOptions,c)||l||u&&this.props.value||(c="");var d={start:h,end:h};if(isFunction(n)){var m=n({value:c,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=m.value,d=m.selection}this.value=c;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var v=!1;null!=d.start&&null!=d.end&&(v=!e||e.start!==d.start||e.end!==d.end),(v||g)&&this.setSelection(d.start,d.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&cancelDefer(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var t,e=this.props,n=(e.mask,e.alwaysShowMask,e.maskChar,e.formatChars,e.inputRef,e.beforeMaskedValueChange,e.children),a=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],0<=t.indexOf(n)||(i[n]=e[n]);return i}(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){isFunction(n)||invariant_1(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=_extends({},a);i.forEach((function(e){return delete r[e]})),t=n(r),i.filter((function(e){return null!=t.props[e]&&t.props[e]!==a[e]})).length&&invariant_1(!1)}else t=React.createElement("input",_extends({ref:this.handleRef},a));var o={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(o.onChange=this.onChange,o.onPaste=this.onPaste,o.onMouseDown=this.onMouseDown),null!=a.value&&(o.value=this.value)),t=React.cloneElement(t,o)},e}(React.Component);module.exports=InputElement}}]);