(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7125,6759,8102,6451,3508,7135],{"./node_modules/highlight-words-core/dist/index.js":function(module){module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape:autoEscape,caseSensitive:caseSensitive,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start:start,end:end,highlight:highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./node_modules/sprintf-js/src/sprintf.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var re={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(key){return sprintf_format(sprintf_parse(key),arguments)}function vsprintf(fmt,argv){return sprintf.apply(null,[fmt].concat(argv||[]))}function sprintf_format(parse_tree,argv){var arg,i,k,match,pad,pad_character,pad_length,is_positive,sign,cursor=1,tree_length=parse_tree.length,output="";for(i=0;i<tree_length;i++)if("string"==typeof parse_tree[i])output+=parse_tree[i];else if(Array.isArray(parse_tree[i])){if((match=parse_tree[i])[2])for(arg=argv[cursor],k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k]))throw new Error(sprintf('[sprintf] property "%s" does not exist',match[2][k]));arg=arg[match[2][k]]}else arg=match[1]?argv[match[1]]:argv[cursor++];if(re.not_type.test(match[8])&&re.not_primitive.test(match[8])&&arg instanceof Function&&(arg=arg()),re.numeric_arg.test(match[8])&&"number"!=typeof arg&&isNaN(arg))throw new TypeError(sprintf("[sprintf] expecting number but found %T",arg));switch(re.number.test(match[8])&&(is_positive=arg>=0),match[8]){case"b":arg=parseInt(arg,10).toString(2);break;case"c":arg=String.fromCharCode(parseInt(arg,10));break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?parseFloat(arg).toExponential(match[7]):parseFloat(arg).toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?String(Number(arg.toPrecision(match[7]))):parseFloat(arg);break;case"o":arg=(parseInt(arg,10)>>>0).toString(8);break;case"s":arg=String(arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"t":arg=String(!!arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"T":arg=Object.prototype.toString.call(arg).slice(8,-1).toLowerCase(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=parseInt(arg,10)>>>0;break;case"v":arg=arg.valueOf(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"x":arg=(parseInt(arg,10)>>>0).toString(16);break;case"X":arg=(parseInt(arg,10)>>>0).toString(16).toUpperCase()}re.json.test(match[8])?output+=arg:(!re.number.test(match[8])||is_positive&&!match[3]?sign="":(sign=is_positive?"+":"-",arg=arg.toString().replace(re.sign,"")),pad_character=match[4]?"0"===match[4]?"0":match[4].charAt(1):" ",pad_length=match[6]-(sign+arg).length,pad=match[6]&&pad_length>0?pad_character.repeat(pad_length):"",output+=match[5]?sign+arg+pad:"0"===pad_character?sign+pad+arg:pad+sign+arg)}return output}var sprintf_cache=Object.create(null);function sprintf_parse(fmt){if(sprintf_cache[fmt])return sprintf_cache[fmt];for(var match,_fmt=fmt,parse_tree=[],arg_names=0;_fmt;){if(null!==(match=re.text.exec(_fmt)))parse_tree.push(match[0]);else if(null!==(match=re.modulo.exec(_fmt)))parse_tree.push("%");else{if(null===(match=re.placeholder.exec(_fmt)))throw new SyntaxError("[sprintf] unexpected placeholder");if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if(null===(field_match=re.key.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(field_list.push(field_match[1]);""!==(replacement_field=replacement_field.substring(field_match[0].length));)if(null!==(field_match=re.key_access.exec(replacement_field)))field_list.push(field_match[1]);else{if(null===(field_match=re.index_access.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");field_list.push(field_match[1])}match[2]=field_list}else arg_names|=2;if(3===arg_names)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");parse_tree.push(match)}_fmt=_fmt.substring(match[0].length)}return sprintf_cache[fmt]=parse_tree}exports.sprintf=sprintf,exports.vsprintf=vsprintf,"undefined"!=typeof window&&(window.sprintf=sprintf,window.vsprintf=vsprintf,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return{sprintf:sprintf,vsprintf:vsprintf}}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},"./node_modules/tannin/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var PRECEDENCE,OPENERS,TERMINATORS,PATTERN;__webpack_require__.d(__webpack_exports__,{Z:function(){return Tannin}}),PRECEDENCE={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},OPENERS=["(","?"],TERMINATORS={")":["("],":":["?","?:"]},PATTERN=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var OPERATORS={"!":function(a){return!a},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"+":function(a,b){return a+b},"-":function(a,b){return a-b},"<":function(a,b){return a<b},"<=":function(a,b){return a<=b},">":function(a,b){return a>b},">=":function(a,b){return a>=b},"==":function(a,b){return a===b},"!=":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b},"?:":function(a,b,c){if(a)throw b;return c}};function compile(expression){var terms=function postfix(expression){for(var match,operator,term,element,terms=[],stack=[];match=expression.match(PATTERN);){for(operator=match[0],(term=expression.substr(0,match.index).trim())&&terms.push(term);element=stack.pop();){if(TERMINATORS[operator]){if(TERMINATORS[operator][0]===element){operator=TERMINATORS[operator][1]||operator;break}}else if(OPENERS.indexOf(element)>=0||PRECEDENCE[element]<PRECEDENCE[operator]){stack.push(element);break}terms.push(element)}TERMINATORS[operator]||stack.push(operator),expression=expression.substr(match.index+operator.length)}return(expression=expression.trim())&&terms.push(expression),terms.concat(stack.reverse())}(expression);return function(variables){return function evaluate(postfix,variables){var i,j,args,getOperatorResult,term,value,stack=[];for(i=0;i<postfix.length;i++){if(term=postfix[i],getOperatorResult=OPERATORS[term]){for(j=getOperatorResult.length,args=Array(j);j--;)args[j]=stack.pop();try{value=getOperatorResult.apply(null,args)}catch(earlyReturn){return earlyReturn}}else value=variables.hasOwnProperty(term)?variables[term]:+term;stack.push(value)}return stack[0]}(terms,variables)}}var DEFAULT_OPTIONS={contextDelimiter:"",onMissingKey:null};function Tannin(data,options){var key;for(key in this.data=data,this.pluralForms={},this.options={},DEFAULT_OPTIONS)this.options[key]=void 0!==options&&key in options?options[key]:DEFAULT_OPTIONS[key]}Tannin.prototype.getPluralForm=function(domain,n){var config,plural,pf,getPluralForm=this.pluralForms[domain];return getPluralForm||("function"!=typeof(pf=(config=this.data[domain][""])["Plural-Forms"]||config["plural-forms"]||config.plural_forms)&&(plural=function getPluralExpression(pf){var parts,i,part;for(parts=pf.split(";"),i=0;i<parts.length;i++)if(0===(part=parts[i].trim()).indexOf("plural="))return part.substr(7)}(config["Plural-Forms"]||config["plural-forms"]||config.plural_forms),pf=function pluralForms(expression){var evaluate=compile(expression);return function(n){return+evaluate({n:n})}}(plural)),getPluralForm=this.pluralForms[domain]=pf),getPluralForm(n)},Tannin.prototype.dcnpgettext=function(domain,context,singular,plural,n){var index,key,entry;return index=void 0===n?0:this.getPluralForm(domain,n),key=singular,context&&(key=context+this.options.contextDelimiter+singular),(entry=this.data[domain][key])&&entry[index]?entry[index]:(this.options.onMissingKey&&this.options.onMissingKey(singular,domain),0===index?singular:plural)}}}]);