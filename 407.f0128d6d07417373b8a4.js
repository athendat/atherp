"use strict";(self.webpackChunkpa006_atherp_front=self.webpackChunkpa006_atherp_front||[]).push([[407],{4407:(q,u,i)=>{i.r(u),i.d(u,{HrmChargesModule:()=>me});var g=i(5543),l=i(6274),f=i(2578),I=i(195),k=i(4296),w=i(7319),p=i(2397),x=i(6006),Q=i(636),m=i(7194),Z=i(8561),F=i(7914),c=i(3324),_=i(9618),J=i(1089),e=i(2741),U=i(1264),v=i(2243),D=i(5712),C=i(8412),N=i(8418),h=i(823),b=i(9018),T=i(1749),A=i(846),S=i(3045),O=i(688),y=i(7617);function Y(n,r){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Agregar cargo"),e.qZA())}function R(n,r){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Editar cargo"),e.qZA())}function B(n,r){1&n&&(e.TgZ(0,"h2",7),e._uU(1,"Detalles del cargo"),e.qZA())}function H(n,r){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e.TgZ(4,"div",12),e.TgZ(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"div",15),e.TgZ(10,"h6",13),e._uU(11,"Descripci\xf3n"),e.qZA(),e.TgZ(12,"span",14),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(8),e.Oqu(t.data.charge.name||"Sin nombre"),e.xp6(5),e.Oqu(t.data.charge.description||"Sin descripci\xf3n")}}function M(n,r){if(1&n&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.name," ")}}function $(n,r){if(1&n&&(e.TgZ(0,"div",27),e.TgZ(1,"mat-form-field",28),e.TgZ(2,"mat-label"),e._uU(3,"Negocio"),e.qZA(),e.TgZ(4,"mat-select",29),e.YNc(5,M,2,2,"mat-option",30),e.qZA(),e.TgZ(6,"mat-hint"),e._uU(7,"Seleccione el negocio al cual pertenece el cargo"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("formControlName","businessId"),e.xp6(1),e.Q6J("ngForOf",t.business)("ngForTrackBy",t.trackByFn)}}function z(n,r){if(1&n&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&n){const t=r.$implicit,o=e.oxw(3);e.Q6J("value",o.data.charge.businessId._id),e.xp6(1),e.hij(" ",t.name," ")}}function E(n,r){if(1&n&&(e.TgZ(0,"div",27),e.TgZ(1,"mat-form-field",28),e.TgZ(2,"mat-label"),e._uU(3,"Negocio"),e.qZA(),e.TgZ(4,"mat-select",29),e.YNc(5,z,2,2,"mat-option",30),e.qZA(),e.TgZ(6,"mat-hint"),e._uU(7,"Seleccione el negocio al cual pertenece el cargo"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("formControlName","businessId"),e.xp6(1),e.Q6J("ngForOf",t.business)("ngForTrackBy",t.trackByFn)}}function L(n,r){if(1&n&&(e.TgZ(0,"div",16),e.TgZ(1,"div",9),e.TgZ(2,"form",17),e.YNc(3,$,8,3,"div",18),e.YNc(4,E,8,3,"div",18),e.TgZ(5,"div",19),e.TgZ(6,"mat-form-field",20),e.TgZ(7,"mat-label"),e._uU(8,"Nombre"),e.qZA(),e._UZ(9,"input",21),e.qZA(),e.qZA(),e.TgZ(10,"div",22),e.TgZ(11,"mat-form-field",20),e.TgZ(12,"mat-label"),e._uU(13,"Requisito"),e.qZA(),e._UZ(14,"mat-icon",23),e._UZ(15,"textarea",24),e.qZA(),e.qZA(),e.TgZ(16,"div",22),e.TgZ(17,"mat-form-field",20),e.TgZ(18,"mat-label"),e._uU(19,"Salario"),e.qZA(),e._UZ(20,"input",25),e.qZA(),e.qZA(),e.TgZ(21,"div",19),e.TgZ(22,"mat-slide-toggle",26),e._uU(23," Activo "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.chargeForm)("autocomplete","off"),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(5),e.Q6J("type","text")("formControlName","name")("placeholder","Nombre del cargo"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:menu-alt-2"),e.xp6(1),e.Q6J("formControlName","requirement")("rows",3)("spellcheck",!1),e.xp6(5),e.Q6J("type","number")("formControlName","salary")("placeholder","Salario")("min",0),e.xp6(2),e.Q6J("value",!0)("color","primary")("formControlName","active")}}function V(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateCharge()}),e._uU(2," Actualizar "),e.qZA(),e.BQk()}2&n&&(e.xp6(1),e.Q6J("color","primary")("matDialogClose","confirmed"))}function j(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).createCharge()}),e._uU(2," Agregar "),e.qZA(),e.BQk()}2&n&&(e.xp6(1),e.Q6J("color","primary")("matDialogClose","confirmed"))}function G(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",32),e.ynx(2),e.TgZ(3,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteSelectedCharge()}),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,V,3,2,"ng-container",6),e.YNc(6,j,3,2,"ng-container",6),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let W=(()=>{class n{constructor(t,o,s,a,d,de,ue,he,fe,pe){this.data=t,this._activatedRoute=o,this._businessService=s,this._changeDetectorRef=a,this._formBuilder=d,this._fuseConfirmationService=de,this._hrmService=ue,this._chargesService=he,this._router=fe,this._userService=pe,this.business=[],this.dialogMode="view",this._unsubscribeAll=new x.xQ}ngOnInit(){this._userService.user$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this._user=t,this._businessOwnerId=t.businessOwnerId?t.businessOwnerId:t._id,this._changeDetectorRef.markForCheck()}),this._businessService.business$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>this.business=t),this.chargeForm=this._formBuilder.group({_id:[""],active:[null],businessOwnerId:[this._businessOwnerId,[c.kI.required]],userId:[this._user._id,[c.kI.required]],businessId:["",[c.kI.required]],name:["",[c.kI.required]],requirement:[""],salary:[""]}),"edit"===this.data.dialogMode&&this._setChargeDataOnForm(this.data.charge),this._activatedRoute.params.subscribe(({id:t})=>this._getChargeById(t))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}createCharge(){let t=this.chargeForm.getRawValue();t=(0,J.Z)(t,"_id"),this._fuseConfirmationService.open({title:"Crear Cargo",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._chargesService.createCharge(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${a.message}: ${a.charge.name}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},a=>{this._fuseConfirmationService.open({title:`${a.statusText}: ${a.status}`,message:a.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})}),this._changeDetectorRef.markForCheck()})}updateCharge(){const t=this.chargeForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Cargo",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._chargesService.updateCharge(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Cargo actualizado correctamente",message:a.name,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},a=>{this._fuseConfirmationService.open({title:`${a.statusText}: ${a.status}`,message:a.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})}),this._changeDetectorRef.markForCheck()})}trackByFn(t,o){return o.id||t}_getChargeById(t){"new"!==t&&this._chargesService.charge$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(o=>{this.charge=o,this._changeDetectorRef.markForCheck()})}_setChargeDataOnForm(t){this.chargeForm.get("_id").setValue(t._id),this.chargeForm.get("active").setValue(t.active),this.chargeForm.get("name").setValue(t.name),this.chargeForm.get("salary").setValue(t.salary),this.chargeForm.get("businessId").setValue(t.businessId._id),this.chargeForm.get("businessOwnerId").setValue(t.businessOwnerId._id),this.chargeForm.get("requirement").setValue(t.requirement)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.WI),e.Y36(g.gz),e.Y36(U.m),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(v.R),e.Y36(D.E),e.Y36(C.Z),e.Y36(g.F0),e.Y36(N.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["charges-detail"]],decls:12,vars:6,consts:[[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto",4,"ngIf"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","pb-4","my-10"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],["class","pt-5 sm:col-span-2",4,"ngIf"],[1,"sm:col-span-2"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","required","",3,"type","formControlName","placeholder"],[1,"pt-4","sm:col-span-2"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","matTextareaAutosize","",3,"formControlName","rows","spellcheck"],["matInput","","required","",3,"type","formControlName","placeholder","min"],["required","",1,"pt-4","mb-2",3,"value","color","formControlName"],[1,"pt-5","sm:col-span-2"],[1,"w-full"],["required","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose","click"],["mat-flat-button","",3,"color","matDialogClose","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,Y,2,0,"h2",2),e.YNc(4,R,2,0,"h2",2),e.YNc(5,B,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(6,"div",3),e.ynx(7),e.YNc(8,H,14,2,"div",4),e.BQk(),e.ynx(9),e.YNc(10,L,24,18,"div",5),e.BQk(),e.qZA(),e.YNc(11,G,7,3,"ng-container",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",null===o.data.charge._id&&"add"===o.data.dialogMode),e.xp6(1),e.Q6J("ngIf",o.data.charge._id&&"edit"===o.data.dialogMode),e.xp6(1),e.Q6J("ngIf",o.data.charge._id&&"view"===o.data.dialogMode),e.xp6(3),e.Q6J("ngIf","view"===o.data.dialogMode),e.xp6(2),e.Q6J("ngIf","edit"===o.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==o.data.dialogMode))},directives:[l.O5,c._Y,c.JL,c.sg,h.KE,h.hX,b.Nt,c.Fj,c.Q7,c.JJ,c.u,T.Hw,h.qo,b.D7,A.Rr,A.SA,S.gD,l.sg,h.bx,O.ey,y.lW,_.ZT],encapsulation:2,changeDetection:0}),n})();var X=i(316),P=i(4847),K=i(3700);function ee(n,r){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",41),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function te(n,r){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",42),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:x"))}const ne=function(){return["CUP "]};function oe(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",33),e.TgZ(2,"div",34),e._uU(3),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.qZA(),e.TgZ(6,"div",35),e._uU(7),e.qZA(),e.TgZ(8,"div",36),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"div",37),e.YNc(12,ee,2,1,"ng-container",30),e.YNc(13,te,2,1,"ng-container",30),e.qZA(),e.TgZ(14,"div",38),e.TgZ(15,"button",39),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(4).editCharge(a)}),e._UZ(16,"mat-icon",40),e.qZA(),e.TgZ(17,"button",39),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(4).deleteCharge(a._id)}),e._UZ(18,"mat-icon",40),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=r.$implicit;e.xp6(3),e.hij(" ",t.businessId.name," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.requirement," "),e.xp6(2),e.hij(" ",e.xi3(10,8,t.salary,e.DdM(11,ne))," "),e.xp6(3),e.Q6J("ngIf",t.active),e.xp6(1),e.Q6J("ngIf",!t.active),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:pencil"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:trash")}}function ie(n,r){if(1&n&&(e.ynx(0),e.YNc(1,oe,19,12,"ng-container",32),e.BQk()),2&n){const t=r.ngIf,o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",o.trackByFn)}}const re=function(n){return{"pointer-events-none":n}};function ae(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23),e.TgZ(2,"div",24),e.TgZ(3,"div",25),e._uU(4," Negocio "),e.qZA(),e.TgZ(5,"div",25),e._uU(6," Nombre "),e.qZA(),e.TgZ(7,"div",26),e._uU(8," Requisitos "),e.qZA(),e.TgZ(9,"div",27),e._uU(10," Salario "),e.qZA(),e.TgZ(11,"div",28),e._uU(12," Activo "),e.qZA(),e.TgZ(13,"div",29),e._uU(14," Acciones "),e.qZA(),e.qZA(),e.YNc(15,ie,2,2,"ng-container",30),e.ALo(16,"async"),e._UZ(17,"mat-paginator",31),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","business"),e.xp6(2),e.Q6J("mat-sort-header","name"),e.xp6(2),e.Q6J("mat-sort-header","requirement"),e.xp6(2),e.Q6J("mat-sort-header","salary"),e.xp6(2),e.Q6J("mat-sort-header","active"),e.xp6(4),e.Q6J("ngIf",e.lcZ(16,12,t.charges$)),e.xp6(2),e.Q6J("ngClass",e.VKq(14,re,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",t.qtyForView)("showFirstLastButtons",!0)}}function se(n,r){if(1&n&&(e.ynx(0),e.YNc(1,ae,18,16,"ng-container",21),e.BQk()),2&n){const t=e.oxw(),o=e.MAs(36);e.xp6(1),e.Q6J("ngIf",t.charges$)("ngIfElse",o)}}function ce(n,r){1&n&&(e.TgZ(0,"div",43),e._uU(1,"No ha creado ningun cargo a\xfan!"),e.qZA())}const le=[{path:"",component:(()=>{class n{constructor(t,o,s,a,d){this._activatedRoute=t,this._changeDetectorRef=o,this._chargeService=s,this._dialog=a,this._fuseConfirmationService=d,this.isLoading=!1,this.qtyForView=[5,10,25,100],this._unsubscribeAll=new x.xQ}ngOnInit(){this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({businessId:t})=>{void 0!==t&&(this.businessId=t,this._changeDetectorRef.markForCheck())}),this._chargeService.pagination$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.charges$=this._chargeService.charges$}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Q.T)(this._sort.sortChange,this._paginator.page).pipe((0,Z.U)(()=>(this.isLoading=!0,this._chargeService.getSortCharges(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction).subscribe(t=>{}))),(0,Z.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}createCharge(){this._openDialog(X.X,"add")}editCharge(t){this._openDialog(t,"edit")}deleteCharge(t){this._fuseConfirmationService.open({title:"Eliminar Cargo",message:"\xbfEsta seguro que desea Eliminar el cargo? Perder\xe1 el acceso a todos los datos asociados al mismo.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._chargeService.deleteCharge(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:a.message,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},a=>{this._fuseConfirmationService.open({title:`${a.statusText}: ${a.status}`,message:a.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})}),this._changeDetectorRef.markForCheck()})}trackByFn(t,o){return o.id||t}_openDialog(t,o){this._dialog.open(W,{width:"600px",data:{charge:t,dialogMode:o},panelClass:"ath-dialog-panel"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(e.sBO),e.Y36(C.Z),e.Y36(_.uw),e.Y36(v.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["hrm-charges"]],viewQuery:function(t,o){if(1&t&&(e.Gf(f.NW,5),e.Gf(p.YE,5)),2&t){let s;e.iGM(s=e.CRH())&&(o._paginator=s.first),e.iGM(s=e.CRH())&&(o._sort=s.first)}},decls:37,vars:11,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"ml-4","text-white","rounded-md","bg-primary-500","hover:bg-primary-700","hover:shadow-lg",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full","filter-post"],[1,"overflow-y-auto","max-h-120"],[4,"ngIf","ngIfElse"],["noCharges",""],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","charges-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","lg:block",3,"mat-sort-header"],[1,"hidden","md:block",3,"mat-sort-header"],[1,"hidden","text-center","sm:block",3,"mat-sort-header"],[1,"text-center"],[4,"ngIf"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","charges-table","md:px-8"],[1,"truncate"],[1,"hidden","truncate","lg:block"],[1,"hidden","md:block"],[1,"hidden","text-center","sm:block"],[1,"flex","flex-col","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div"),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"a",5),e._uU(7,"Inicio"),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",5),e._uU(11,"Recursos Humanos"),e.qZA(),e.qZA(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Cargos"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",8),e.TgZ(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",11),e.TgZ(22,"div",12),e._uU(23," Listado de Cargos "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",13),e.TgZ(25,"button",14),e.NdJ("click",function(){return o.createCharge()}),e._UZ(26,"mat-icon",15),e.TgZ(27,"span",16),e._uU(28,"Nuevo Cargo"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",17),e.TgZ(30,"div",18),e.TgZ(31,"fuse-card",19),e.TgZ(32,"div",20),e.YNc(33,se,2,2,"ng-container",21),e.ALo(34,"async"),e.YNc(35,ce,2,0,"ng-template",null,22,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const s=e.MAs(36);e.xp6(6),e.MGl("routerLink","/home/",o.businessId,""),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.MGl("routerLink","/home/",o.businessId,"/modules/hrm/"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-left"),e.xp6(8),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(7),e.Q6J("ngIf",e.lcZ(34,9,o.charges$))("ngIfElse",s)}},directives:[P.PQ,g.yS,T.Hw,y.lW,K.y,l.O5,p.YE,p.nU,f.NW,l.mk,l.sg],pipes:[l.Ov,l.H9],encapsulation:2,data:{animation:F.L},changeDetection:0}),n})()}];var ge=i(1018);let me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:f.ye,useValue:(0,ge.V)()}],imports:[[l.ez,w.fC,k.J,g.Bz.forChild(le),I.m]]}),n})()},316:(q,u,i)=>{i.d(u,{R:()=>g,X:()=>l});const g={_id:null,active:null,businessOwnerId:null,userId:null,businessId:null,code:null,name:null,description:null},l={_id:null,businessId:null,businessOwnerId:null,userId:null,active:null,name:null,salary:null,requirement:null}}}]);