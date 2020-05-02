(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(module,__webpack_exports__,__webpack_require__){"use strict";function createData(length){for(var tableData=[],i=0;i<length;i++){var id=i+1,name="Name"+id;tableData.push({id:id,name:name,email:name+"@foo.com",age:Math.floor(10*Math.random()),address:"foo"})}return tableData}__webpack_require__.d(__webpack_exports__,"a",(function(){return createData}))},1246:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(443);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1269)],module)}.call(this,__webpack_require__(428)(module))},1269:function(module,exports,__webpack_require__){var map={"./stories/0-Basic.stories.tsx":1270,"./stories/1-CustomRender.stories.tsx":1275,"./stories/2-FooterToolbar.stories.tsx":1278};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1269},1270:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pagination",(function(){return Pagination}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),_storyhelper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),addSourceDecorator=(__webpack_require__(112).withSource,__webpack_require__(112).addSource),__STORY__="import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email' },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(50);\r\n\r\nexport const Default = () => <NiceTable columns={tableColumns} data={tableData} height=\"300px\"/>;\r\n\r\nexport const Pagination = () => <NiceTable columns={tableColumns} data={tableData} hasPagination={true} height=\"300px\"/>;",__ADDS_MAP__={"nicetable--default":{startLoc:{col:23,line:24},endLoc:{col:96,line:24},startBody:{col:23,line:24},endBody:{col:96,line:24}},"nicetable--pagination":{startLoc:{col:26,line:26},endLoc:{col:120,line:26},startBody:{col:26,line:26},endBody:{col:120,line:26}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email' },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(50);\r\n\r\nexport const Default = () => <NiceTable columns={tableColumns} data={tableData} height=\"300px\"/>;\r\n\r\nexport const Pagination = () => <NiceTable columns={tableColumns} data={tableData} hasPagination={true} height=\"300px\"/>;",locationsMap:{"nicetable--default":{startLoc:{col:23,line:24},endLoc:{col:96,line:24},startBody:{col:23,line:24},endBody:{col:96,line:24}},"nicetable--pagination":{startLoc:{col:26,line:26},endLoc:{col:120,line:26},startBody:{col:26,line:26},endBody:{col:120,line:26}}}}},component:_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__.a,title:"NiceTable",excludeStories:/.*Data$/};var tableColumns=[{title:"Id",field:"id",align:"center",width:"50px"},{title:"Name",field:"name"},{title:"Email",field:"email"},{title:"Age",field:"age",align:"right"},{title:"Address",field:"address"}],tableData=Object(_storyhelper__WEBPACK_IMPORTED_MODULE_2__.a)(50),Default=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__.a,{columns:tableColumns,data:tableData,height:"300px"})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/0-Basic.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"D:\\react\\react-nice-table\\src\\stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Pagination=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__.a,{columns:tableColumns,data:tableData,hasPagination:!0,height:"300px"})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/0-Basic.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"D:\\react\\react-nice-table\\src\\stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1273:function(module,exports,__webpack_require__){},1275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CustomRendering",(function(){return CustomRendering}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),_storyhelper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),addSourceDecorator=(__webpack_require__(112).withSource,__webpack_require__(112).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(5)\r\n\r\nexport const CustomRendering = () => <NiceTable columns={tableColumns} data={tableData}/>;",locationsMap:{"nicetable--custom-rendering":{startLoc:{col:31,line:25},endLoc:{col:89,line:25},startBody:{col:31,line:25},endBody:{col:89,line:25}}}}},component:_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__.a,title:"NiceTable",excludeStories:/.*Data$/};var tableColumns=[{title:"Id",field:"id",align:"center",width:"50px"},{title:"Avatar",width:"50px",render:function render(rowData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://api.adorable.io/avatars/36/".concat(rowData.id,".png")})}},{title:"Name",field:"name"},{title:"Email",field:"email",render:function render(rowData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"mailto:".concat(rowData.email)},rowData.email)}},{title:"Age",field:"age",align:"right"},{title:"Address",field:"address"}],tableData=Object(_storyhelper__WEBPACK_IMPORTED_MODULE_2__.a)(5),CustomRendering=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NiceTable__WEBPACK_IMPORTED_MODULE_1__.a,{columns:tableColumns,data:tableData})}),{__STORY__:"import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(5)\r\n\r\nexport const CustomRendering = () => <NiceTable columns={tableColumns} data={tableData}/>;",__ADDS_MAP__:{"nicetable--custom-rendering":{startLoc:{col:31,line:25},endLoc:{col:89,line:25},startBody:{col:31,line:25},endBody:{col:89,line:25}}},__MAIN_FILE_LOCATION__:"/1-CustomRender.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"D:\\react\\react-nice-table\\src\\stories",__IDS_TO_FRAMEWORKS__:{}})},1278:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FooterToolbar",(function(){return FooterToolbar}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),NiceTable=__webpack_require__(65);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ref2=react.createElement("path",{d:"M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"});var ForwardRef=react.forwardRef((function SvgSave(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",_extends({className:"svg-icon",viewBox:"0 0 20 20",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_ref2)}));__webpack_require__.p;function download_extends(){return(download_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function download_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function download_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var download_ref2=react.createElement("g",null,react.createElement("g",null,react.createElement("polygon",{points:"288,144 288,160 400,160 400,432 112,432 112,160 224,160 224,144 96,144 96,448 416,448 416,144   "})),react.createElement("g",null,react.createElement("polygon",{points:"193.1,252.3 181.5,263.9 256,338.4 330.5,263.9 318.9,252.3 264.2,307 264.2,64 247.8,64 247.8,307   "})));var download_ForwardRef=react.forwardRef((function SvgDownload(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=download_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",download_extends({id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,download_ref2)})),core_IconButton=(__webpack_require__.p,function IconButton(_ref){var tooltip=_ref.tooltip,label=_ref.label,icon=_ref.icon,onClick=_ref.onClick,IconComponent="save"===icon?ForwardRef:download_ForwardRef;return react_default.a.createElement("div",{className:"NiceTable-IconButton",title:tooltip||label,onClick:function(_onClick){function onClick(){return _onClick.apply(this,arguments)}return onClick.toString=function(){return _onClick.toString()},onClick}((function(){return onClick&&onClick()}))},react_default.a.createElement(IconComponent,{className:"NiceTable-IconButton-Svg"}),react_default.a.createElement("div",{className:"NiceTable-IconButton-Label"},label))}),storyhelper=__webpack_require__(114),addSourceDecorator=(__webpack_require__(112).withSource,__webpack_require__(112).addSource),tableColumns=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\n\r\nimport IconButton from '../components/core/IconButton';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email' },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(20);\r\n\r\nexport const FooterToolbar = () => \r\n  <NiceTable \r\n    columns={tableColumns} \r\n    data={tableData} \r\n    height=\"300px\"\r\n    footerToolbar={\r\n      <>\r\n    <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>\r\n    <IconButton icon='download' label='PDF' onClick={() => alert('Export PDF')}/>\r\n    </>\r\n    }\r\n/>;",locationsMap:{"nicetable--footer-toolbar":{startLoc:{col:29,line:26},endLoc:{col:2,line:37},startBody:{col:29,line:26},endBody:{col:2,line:37}}}}},component:NiceTable.a,title:"NiceTable",excludeStories:/.*Data$/},[{title:"Id",field:"id",align:"center",width:"50px"},{title:"Name",field:"name"},{title:"Email",field:"email"},{title:"Age",field:"age",align:"right"},{title:"Address",field:"address"}]),tableData=Object(storyhelper.a)(20),FooterToolbar=addSourceDecorator((function(){return react_default.a.createElement(NiceTable.a,{columns:tableColumns,data:tableData,height:"300px",footerToolbar:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(core_IconButton,{icon:"save",label:"CSV",onClick:function onClick(){return alert("Export CSV")}}),react_default.a.createElement(core_IconButton,{icon:"download",label:"PDF",onClick:function onClick(){return alert("Export PDF")}}))})}),{__STORY__:"import React from 'react';\r\n\r\nimport ColumnModel from '../types/ColumnModel';\r\nimport NiceTable from '../components/NiceTable';\r\n\r\nimport IconButton from '../components/core/IconButton';\r\nimport { createData } from './storyhelper';\r\n\r\nexport default {\r\n  component:NiceTable,\r\n  title: 'NiceTable',\r\n  // Our exports that end in \"Data\" are not stories.\r\n  excludeStories: /.*Data$/,\r\n};\r\n\r\nconst tableColumns:ColumnModel[] = [\r\n  { title: 'Id', field: 'id', align:'center', width: '50px'},\r\n  { title: 'Name', field: 'name'},\r\n  { title: 'Email', field: 'email' },\r\n  { title: 'Age', field: 'age', align:'right'},\r\n  { title: 'Address', field: 'address' }\r\n];\r\n\r\nconst tableData = createData(20);\r\n\r\nexport const FooterToolbar = () => \r\n  <NiceTable \r\n    columns={tableColumns} \r\n    data={tableData} \r\n    height=\"300px\"\r\n    footerToolbar={\r\n      <>\r\n    <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>\r\n    <IconButton icon='download' label='PDF' onClick={() => alert('Export PDF')}/>\r\n    </>\r\n    }\r\n/>;",__ADDS_MAP__:{"nicetable--footer-toolbar":{startLoc:{col:29,line:26},endLoc:{col:2,line:37},startBody:{col:29,line:26},endBody:{col:2,line:37}}},__MAIN_FILE_LOCATION__:"/2-FooterToolbar.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"D:\\react\\react-nice-table\\src\\stories",__IDS_TO_FRAMEWORKS__:{}})},445:function(module,exports,__webpack_require__){__webpack_require__(446),__webpack_require__(589),__webpack_require__(590),__webpack_require__(1245),module.exports=__webpack_require__(1246)},508:function(module,exports){},65:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(142),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_jss_esm=(__webpack_require__(1273),__webpack_require__(191)),CellAlignClassMap={right:"NiceTableCell-alignRight",center:"NiceTableCell-alignCenter"},ClassNameHelper_getCellAlignClass=function getCellAlignClass(align){return align?CellAlignClassMap[align]:null},useStyles=Object(react_jss_esm.a)({headcell:{width:function width(props){return props.width}}}),components_TableHeadCell=function TableHeadCell(_ref){var children=_ref.children,align=_ref.align,width=_ref.width,classes=useStyles({width:width}),alignClass=ClassNameHelper_getCellAlignClass(align);return react_default.a.createElement("th",{className:"".concat(alignClass," ").concat(classes.headcell)},children)},components_TableHead=function TableHead(_ref){var columns=_ref.columns;return react_default.a.createElement("thead",null,react_default.a.createElement("tr",null,columns.map((function(column,colIndex){return react_default.a.createElement(components_TableHeadCell,{key:colIndex,align:column.align,width:column.width},column.title)}))))},components_TableCell=function TableCell(_ref){var children=_ref.children,align=_ref.align,alignClass=ClassNameHelper_getCellAlignClass(align);return react_default.a.createElement("td",{className:alignClass},children)},components_TableBody=function TableBody(_ref){var data=_ref.data,columns=_ref.columns;return react_default.a.createElement("tbody",null,data.map((function(item,rowIndex){return react_default.a.createElement("tr",{key:rowIndex},columns.map((function(column,colIndex){var content=column.render?column.render(item):item[column.field];return react_default.a.createElement(components_TableCell,{key:colIndex,align:column.align},content)})))})))},components_TableFooter=function TableFooter(_ref){var children=_ref.children;return react_default.a.createElement("div",{className:"NiceTable-Footer"},children)},components_TablePagination=function TablePagination(_ref){var pageIndex=_ref.pageIndex,totalPages=_ref.totalPages,pageSizeOptions=_ref.pageSizeOptions,pageSize=_ref.pageSize,onChangePageSize=_ref.onChangePageSize,onChangePageIndex=_ref.onChangePageIndex,handleChangePageIndex=function handleChangePageIndex(value){onChangePageIndex&&onChangePageIndex(value)};return react_default.a.createElement("div",{className:"NiceTable-Pagination"},react_default.a.createElement("div",{className:"NiceTable-Pagination-Text"},"Rows per page:"),react_default.a.createElement("select",{className:"NiceTable-Pagination-Select",onChange:function onChange(event){return function handleChangePageSize(value){onChangePageSize&&onChangePageSize(value)}(parseInt(event.target.value))},value:pageSize},pageSizeOptions.map((function(value){return react_default.a.createElement("option",{key:value},value)}))),react_default.a.createElement("div",{style:{display:"flex"}},react_default.a.createElement("div",{role:"button",className:0==pageIndex?"disabled":"",onClick:function onClick(){return function previousPage(){pageIndex>0&&handleChangePageIndex(pageIndex-1)}()}},"❮"),react_default.a.createElement("div",null,"Page ",pageIndex+1," / ",totalPages),react_default.a.createElement("div",{role:"button",className:pageIndex>=totalPages-1?"disabled":"",onClick:function onClick(){return function nextPage(){pageIndex<totalPages-1&&handleChangePageIndex(pageIndex+1)}()}},"❯")))},NiceTable_useStyles=Object(react_jss_esm.a)({tableRoot:{width:function width(props){return props.width}},tableContainer:{height:function height(props){return props.height}}});function getShowingData(data,pageIndex,pageSize){return data.slice(pageIndex*pageSize,pageIndex*pageSize+pageSize)}function getTotalPages(totalRows,pageSize){return Math.ceil(totalRows/pageSize)}__webpack_exports__.a=function NiceTable(_ref){var columns=_ref.columns,data=_ref.data,hasPagination=_ref.hasPagination,pageSizeOptions=_ref.pageSizeOptions,height=_ref.height,width=_ref.width,footerToolbar=_ref.footerToolbar,classes=NiceTable_useStyles({height:height,width:width});hasPagination&&!pageSizeOptions&&(pageSizeOptions=[10,25,50]);var defaultPageSize=hasPagination?pageSizeOptions[0]:data.length,_useState=Object(react.useState)(defaultPageSize),_useState2=Object(slicedToArray.a)(_useState,2),pageSize=_useState2[0],setPageSize=_useState2[1],_useState3=Object(react.useState)(0),_useState4=Object(slicedToArray.a)(_useState3,2),pageIndex=_useState4[0],setPageIndex=_useState4[1],_useState5=Object(react.useState)(getTotalPages(data.length,pageSize)),_useState6=Object(slicedToArray.a)(_useState5,2),totalPages=_useState6[0],setTotalPages=_useState6[1],_useState7=Object(react.useState)(getShowingData(data,0,pageSize)),_useState8=Object(slicedToArray.a)(_useState7,2),showingData=_useState8[0],setShowingData=_useState8[1];return react_default.a.createElement("div",{className:"NiceTableRoot ".concat(classes.tableRoot)},react_default.a.createElement("div",{className:"NiceTableContainer ".concat(classes.tableContainer)},react_default.a.createElement("table",null,react_default.a.createElement(components_TableHead,{columns:columns}),react_default.a.createElement(components_TableBody,{columns:columns,data:showingData}))),(hasPagination||footerToolbar)&&react_default.a.createElement(components_TableFooter,null,react_default.a.createElement("div",{className:"NiceTable-FooterToolbar"},footerToolbar),hasPagination&&react_default.a.createElement(components_TablePagination,{onChangePageSize:function handleChangePageSize(newPageSize){setPageSize(newPageSize),setPageIndex(0),setTotalPages(getTotalPages(data.length,newPageSize)),setShowingData(getShowingData(data,0,newPageSize))},onChangePageIndex:function handleChangePageIndex(value){setPageIndex(value),setShowingData(getShowingData(data,value,pageSize))},pageSizeOptions:pageSizeOptions,pageIndex:pageIndex,pageSize:pageSize,totalPages:totalPages})))}}},[[445,1,2]]]);
//# sourceMappingURL=main.61dd2d006251c715aecb.bundle.js.map