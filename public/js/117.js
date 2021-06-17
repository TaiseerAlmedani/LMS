(self.webpackChunk=self.webpackChunk||[]).push([[117],{9199:(t,e,s)=>{var a=s(9881),n=s(8612);t.exports=function(t,e){var s=-1,i=n(t)?Array(t.length):[];return a(t,(function(t,a,n){i[++s]=e(t,a,n)})),i}},5161:(t,e,s)=>{var a=s(9932),n=s(7206),i=s(9199),o=s(1469);t.exports=function(t,e){return(o(t)?a:i)(t,n(e,3))}},1117:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var a=s(5161),n=s.n(a),i=s(9831),o=s(7616),l=s(9565),c=s(2913);const r={name:"CardToolbar",props:{isMobile:{type:Boolean,default:!1}}};var d=s(1900);const u={name:"ClientIndex",components:{CardToolbar:(0,d.Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notification is-card-toolbar"},[s("div",{staticClass:"level",class:{"is-mobile":t.isMobile}},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[t._t("left")],2)]),t._v(" "),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[t._t("right")],2)])])])}),[],!1,null,null,null).exports,HeroBar:c.Z,TitleBar:l.Z,ModalBox:o.Z,CardComponent:i.Z},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashSubject:function(){return this.trashObject?this.trashObject.name:this.checkedRows.length?"".concat(this.checkedRows.length," entries"):null}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isLoading=!0,axios.get("/clients").then((function(e){t.isLoading=!1,e.data&&e.data.data&&(e.data.data.length>t.perPage&&(t.paginated=!0),t.clients=e.data.data)})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger",queue:!1})}))},trashModal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(t||this.checkedRows.length)&&(this.trashObject=t,this.isModalActive=!0)},trashConfirm:function(){var t,e,s=this,a=null;this.isModalActive=!1,this.trashObject?(e="delete",t="/clients/".concat(this.trashObject.id,"/destroy")):this.checkedRows.length&&(e="post",t="/clients/destroy",a={ids:n()(this.checkedRows,(function(t){return t.id}))}),axios({method:e,url:t,data:a}).then((function(t){s.getData(),s.trashObject=null,s.checkedRows=[],s.$buefy.snackbar.open({message:"Deleted",queue:!1})})).catch((function(t){s.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger",queue:!1})}))},trashCancel:function(){this.isModalActive=!1}}};const h=(0,d.Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":["Admin","Clients"]}}),t._v(" "),s("hero-bar",[t._v("\n    Clients\n    "),s("router-link",{staticClass:"button",attrs:{slot:"right",to:"/clients/new"},slot:"right"},[t._v("\n      New Client\n    ")])],1),t._v(" "),s("section",{staticClass:"section is-main-section"},[s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients",icon:"account-multiple"}},[s("card-toolbar",[s("button",{staticClass:"button is-danger is-small has-checked-rows-number",attrs:{slot:"right",type:"button",disabled:!t.checkedRows.length},on:{click:function(e){return t.trashModal(null)}},slot:"right"},[s("b-icon",{attrs:{icon:"trash-can","custom-size":"default"}}),t._v(" "),s("span",[t._v("Delete")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!!t.checkedRows.length,expression:"!!checkedRows.length"}]},[t._v("("+t._s(t.checkedRows.length)+")")])],1)]),t._v(" "),s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashSubject},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),t._v(" "),s("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:!0,loading:t.isLoading,paginated:t.paginated,"per-page":t.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:t.clients},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}}},[s("b-table-column",{staticClass:"has-no-head-mobile is-image-cell",scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.avatar?s("div",{staticClass:"image"},[s("img",{staticClass:"is-rounded",attrs:{src:e.row.avatar}})]):t._e()]}}])}),t._v(" "),s("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.name)+"\n          ")]}}])}),t._v(" "),s("b-table-column",{attrs:{label:"Company",field:"company",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.company)+"\n          ")]}}])}),t._v(" "),s("b-table-column",{attrs:{label:"City",field:"city",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.city)+"\n          ")]}}])}),t._v(" "),s("b-table-column",{staticClass:"is-progress-col",attrs:{label:"Progress",field:"progress",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:e.row.progress}},[t._v(t._s(e.row.progress))])]}}])}),t._v(" "),s("b-table-column",{attrs:{label:"Created"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created}},[t._v(t._s(e.row.created))])]}}])}),t._v(" "),s("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons is-right"},[s("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"clients.edit",params:{id:e.row.id}}}},[s("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),t._v(" "),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),t._v(" "),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[s("p",[s("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),s("p",[t._v("Fetching data...")])]:[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),s("p",[t._v("Nothing's here…")])]],2)])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);