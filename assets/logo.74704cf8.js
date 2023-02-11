import{r as e,_ as t}from"./uni-app.es.f8a8aeb8.js";import{d as o,m as n,a as i,r as l,o as a,c as r,w as s,b as u,e as d,g as p,n as c,i as f,l as h,I as m,E as y}from"./index.52190199.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";var S={props:{modelValue:{type:[String,Number],default:o.input.value},type:{type:String,default:o.input.type},fixed:{type:Boolean,default:o.input.fixed},disabled:{type:Boolean,default:o.input.disabled},disabledColor:{type:String,default:o.input.disabledColor},clearable:{type:Boolean,default:o.input.clearable},password:{type:Boolean,default:o.input.password},maxlength:{type:[String,Number],default:o.input.maxlength},placeholder:{type:String,default:o.input.placeholder},placeholderClass:{type:String,default:o.input.placeholderClass},placeholderStyle:{type:[String,Object],default:o.input.placeholderStyle},showWordLimit:{type:Boolean,default:o.input.showWordLimit},confirmType:{type:String,default:o.input.confirmType},confirmHold:{type:Boolean,default:o.input.confirmHold},holdKeyboard:{type:Boolean,default:o.input.holdKeyboard},focus:{type:Boolean,default:o.input.focus},autoBlur:{type:Boolean,default:o.input.autoBlur},disableDefaultPadding:{type:Boolean,default:o.input.disableDefaultPadding},cursor:{type:[String,Number],default:o.input.cursor},cursorSpacing:{type:[String,Number],default:o.input.cursorSpacing},selectionStart:{type:[String,Number],default:o.input.selectionStart},selectionEnd:{type:[String,Number],default:o.input.selectionEnd},adjustPosition:{type:Boolean,default:o.input.adjustPosition},inputAlign:{type:String,default:o.input.inputAlign},fontSize:{type:[String,Number],default:o.input.fontSize},color:{type:String,default:o.input.color},prefixIcon:{type:String,default:o.input.prefixIcon},prefixIconStyle:{type:[String,Object],default:o.input.prefixIconStyle},suffixIcon:{type:String,default:o.input.suffixIcon},suffixIconStyle:{type:[String,Object],default:o.input.suffixIconStyle},border:{type:String,default:o.input.border},readonly:{type:Boolean,default:o.input.readonly},shape:{type:String,default:o.input.shape},formatter:{type:[Function,null],default:o.input.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}};var b=g({name:"u--input",mixins:[n,S,i],components:{uvInput:g({name:"u-input",mixins:[n,i,S],data:()=>({innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:e=>e}),watch:{modelValue:{immediate:!0,handler(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{isShowClear(){const{clearable:e,readonly:t,focused:o,innerValue:n}=this;return!!e&&!t&&!!o&&""!==n},inputClass(){let e=[],{border:t,disabled:o,shape:n}=this;return"surround"===t&&(e=e.concat(["u-border","u-input--radius"])),e.push(`u-input--${n}`),"bottom"===t&&(e=e.concat(["u-border-bottom","u-input--no-radius"])),e.join(" ")},wrapperStyle(){const e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},inputStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),textAlign:this.inputAlign}}},emits:["update:modelValue","focus","blur","change","confirm","clear","keyboardheightchange"],methods:{setFormatter(e){this.innerFormatter=e},onInput(e){let{value:t=""}=e.detail||{};const o=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=o,this.valueChange()}))},onBlur(e){this.$emit("blur",e.detail.value),uni.$u.sleep(50).then((()=>{this.focused=!1})),uni.$u.formValidate(this,"blur")},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange(){this.$emit("keyboardheightchange")},valueChange(){const e=this.innerValue;this.$nextTick((()=>{this.$emit("update:modelValue",e),this.changeFromInner=!0,this.$emit("change",e),uni.$u.formValidate(this,"change")}))},onClear(){this.innerValue="",this.$nextTick((()=>{this.valueChange(),this.$emit("clear")}))},clickHandler(){}}},[["render",function(o,n,i,y,g,S){const b=e(l("u-icon"),t),x=h,C=m;return a(),r(x,{class:f(["u-input",S.inputClass]),style:c([S.wrapperStyle])},{default:s((()=>[u(x,{class:"u-input__content"},{default:s((()=>[o.prefixIcon||o.$slots.prefix?(a(),r(x,{key:0,class:"u-input__content__prefix-icon"},{default:s((()=>[d(o.$slots,"prefix",{},(()=>[u(b,{name:o.prefixIcon,size:"18",customStyle:o.prefixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):p("",!0),u(x,{class:"u-input__content__field-wrapper",onClick:S.clickHandler},{default:s((()=>[u(C,{class:"u-input__content__field-wrapper__field",style:c([S.inputStyle]),type:o.type,focus:o.focus,cursor:o.cursor,value:g.innerValue,"auto-blur":o.autoBlur,disabled:o.disabled||o.readonly,maxlength:o.maxlength,placeholder:o.placeholder,"placeholder-style":o.placeholderStyle,"placeholder-class":o.placeholderClass,"confirm-type":o.confirmType,"confirm-hold":o.confirmHold,"hold-keyboard":o.holdKeyboard,"cursor-spacing":o.cursorSpacing,"adjust-position":o.adjustPosition,"selection-end":o.selectionEnd,"selection-start":o.selectionStart,password:o.password||"password"===o.type||void 0,ignoreCompositionEvent:o.ignoreCompositionEvent,onInput:S.onInput,onBlur:S.onBlur,onFocus:S.onFocus,onConfirm:S.onConfirm,onKeyboardheightchange:S.onkeyboardheightchange},null,8,["style","type","focus","cursor","value","auto-blur","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","password","ignoreCompositionEvent","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])])),_:1},8,["onClick"]),S.isShowClear?(a(),r(x,{key:1,class:"u-input__content__clear",onClick:S.onClear},{default:s((()=>[u(b,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):p("",!0),o.suffixIcon||o.$slots.suffix?(a(),r(x,{key:2,class:"u-input__content__subfix-icon"},{default:s((()=>[d(o.$slots,"suffix",{},(()=>[u(b,{name:o.suffixIcon,size:"18",customStyle:o.suffixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):p("",!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-a94978be"]])}},[["render",function(e,t,o,n,i,l){const u=y("uvInput");return a(),r(u,{modelValue:e.modelValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("update:modelValue",t)),type:e.type,fixed:e.fixed,disabled:e.disabled,disabledColor:e.disabledColor,clearable:e.clearable,password:e.password,maxlength:e.maxlength,placeholder:e.placeholder,placeholderClass:e.placeholderClass,placeholderStyle:e.placeholderStyle,showWordLimit:e.showWordLimit,confirmType:e.confirmType,confirmHold:e.confirmHold,holdKeyboard:e.holdKeyboard,focus:e.focus,autoBlur:e.autoBlur,disableDefaultPadding:e.disableDefaultPadding,cursor:e.cursor,cursorSpacing:e.cursorSpacing,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,inputAlign:e.inputAlign,fontSize:e.fontSize,color:e.color,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,suffixIconStyle:e.suffixIconStyle,prefixIconStyle:e.prefixIconStyle,border:e.border,readonly:e.readonly,shape:e.shape,customStyle:e.customStyle,formatter:e.formatter,ignoreCompositionEvent:e.ignoreCompositionEvent},{default:s((()=>[d(e.$slots,"prefix",{slot:"prefix"}),d(e.$slots,"suffix",{slot:"suffix"})])),_:3},8,["modelValue","type","fixed","disabled","disabledColor","clearable","password","maxlength","placeholder","placeholderClass","placeholderStyle","showWordLimit","confirmType","confirmHold","holdKeyboard","focus","autoBlur","disableDefaultPadding","cursor","cursorSpacing","selectionStart","selectionEnd","adjustPosition","inputAlign","fontSize","color","prefixIcon","suffixIcon","suffixIconStyle","prefixIconStyle","border","readonly","shape","customStyle","formatter","ignoreCompositionEvent"])}]]),x="/assets/logo.808c9117.png";export{x as _,b as a};
