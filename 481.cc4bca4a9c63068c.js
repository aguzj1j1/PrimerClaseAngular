"use strict";(self.webpackChunkprimeraclase=self.webpackChunkprimeraclase||[]).push([[481],{6481:(H,f,r)=>{r.r(f),r.d(f,{StudentsModule:()=>E});var l=r(9808),d=r(3007),u=r(4999),S=r(727),t=r(5e3),m=r(9646);let h=(()=>{class e{constructor(){this.students=[{name:"agustin",lastName:"gonzalez",note:10,course:"angular",email:"agonzalez@gmail.com",aprobado:!0,id:1},{name:"leonardo",lastName:"fernandez",note:10,course:"react",email:"lfernandez@gmail.com",aprobado:!0,id:2},{name:"agustina",lastName:"molina",note:10,course:"data",email:"amoli@gmail.com",aprobado:!0,id:3},{name:"prueba",lastName:"desaprobado",note:4,course:"angular",email:"aprueba@gmail.com",aprobado:!0,id:4}]}getStudents(){return(0,m.of)(this.students)}getStudentsById(o){return(0,m.of)(this.students.filter(s=>s.id==o)[0])}updateStudent(o){return this.students[this.students.findIndex(s=>s.email=o.email)]=o,(0,m.of)(this.students)}addStudent(o){return this.students.push(o),(0,m.of)(this.students)}deleteStudent(o){return this.students=this.students.filter(s=>s.id!=o),(0,m.of)(this.students)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=r(7423),C=r(5245);function v(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",12)(1,"button",13),t.NdJ("click",function(){return t.CHM(o),t.oxw().addStudent()}),t._uU(2," Add data "),t.qZA()()}}function b(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"name."),t.qZA())}function Z(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.name)}}function T(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"Nota"),t.qZA())}function x(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.note)}}function N(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"Curso"),t.qZA())}function A(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.course)}}function y(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"Email"),t.qZA())}function q(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.email)}}function F(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"Aprobado"),t.qZA())}function I(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.aprobado)}}function Y(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1,"actions"),t.qZA())}function U(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",15)(1,"button",17),t.NdJ("click",function(){const p=t.CHM(o).$implicit;return t.oxw(2).goToViewStudent(p.id)}),t.TgZ(2,"mat-icon"),t._uU(3," visibility"),t.qZA()()()}}function B(e,n){1&e&&(t.ynx(0,16),t.YNc(1,Y,2,0,"th",3),t.YNc(2,U,4,0,"td",4),t.BQk())}function w(e,n){1&e&&t._UZ(0,"tr",18)}function L(e,n){1&e&&t._UZ(0,"tr",19)}let G=(()=>{class e{constructor(o,s){this.route=o,this.student=s,this.displayedColumns=["name","note","course","email","aprobado"],this.admin=!1,this.auth=localStorage.getItem("user");let a=JSON.parse(this.auth);this.admin=a[0].admin,this.admin&&this.displayedColumns.push("actions")}goToViewStudent(o){this.route.navigate(["/students/view/",o])}ngOnInit(){this.subscriptions=new S.w0,this.subscriptions.add(this.student.getStudents().subscribe(o=>{this.students=o})),this.dataSource=new u.by(this.students)}ngOnDestroy(){this.subscriptions&&this.subscriptions.unsubscribe()}addStudent(){this.route.navigate(["/students/view"])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0),t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-students"]],viewQuery:function(o,s){if(1&o&&t.Gf(u.BZ,5),2&o){let a;t.iGM(a=t.CRH())&&(s.tabla1=a.first)}},decls:21,vars:5,consts:[["class","demo-button-container",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","note"],["matColumnDef","course"],["matColumnDef","email"],["matColumnDef","aprobado"],["matColumnDef","actions",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"demo-button-container"],["mat-raised-button","",1,"demo-button",3,"click"],["mat-header-cell",""],["mat-cell",""],["matColumnDef","actions"],["mat-Tooltip","Ver detalles","type","button","mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,s){1&o&&(t.YNc(0,v,3,0,"div",0),t.TgZ(1,"table",1),t.ynx(2,2),t.YNc(3,b,2,0,"th",3),t.YNc(4,Z,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,T,2,0,"th",3),t.YNc(7,x,2,1,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,N,2,0,"th",3),t.YNc(10,A,2,1,"td",4),t.BQk(),t.ynx(11,7),t.YNc(12,y,2,0,"th",3),t.YNc(13,q,2,1,"td",4),t.BQk(),t.ynx(14,8),t.YNc(15,F,2,0,"th",3),t.YNc(16,I,2,1,"td",4),t.BQk(),t.YNc(17,B,3,0,"ng-container",9),t.YNc(18,w,1,0,"tr",10),t.YNc(19,L,1,0,"tr",11),t.qZA(),t._UZ(20,"router-outlet")),2&o&&(t.Q6J("ngIf",s.admin),t.xp6(1),t.Q6J("dataSource",s.students),t.xp6(16),t.Q6J("ngIf",s.admin),t.xp6(1),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns))},directives:[l.O5,_.lW,u.BZ,u.w1,u.fO,u.ge,u.Dz,u.ev,C.Hw,u.as,u.XQ,u.nj,u.Gk,d.lC],styles:["table[_ngcontent-%COMP%]{width:100%;overflow-x:auto;overflow-y:hidden;min-width:500px}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;max-width:300px}"]}),e})();var i=r(3075),c=r(3759),k=r(7322),D=r(7531);function J(e,n){1&e&&t._uU(0,"Datos personales")}function Q(e,n){1&e&&t._uU(0,"Datos de sesi\xf3n")}function O(e,n){1&e&&t._uU(0,"Datos de sesi\xf3n")}function M(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",14)(1,"div")(2,"button",15),t.NdJ("click",function(){return t.CHM(o),t.oxw().deleteStudent()}),t._uU(3,"Borrar usuario"),t.qZA()()()}}let g=(()=>{class e{constructor(o,s,a,p){this._formBuilder=o,this.route=s,this.router=a,this._studentsService=p}ngOnInit(){this.route.snapshot.params.id?(this.idStudent=this.route.snapshot.params.id,this.createFormWithData(),this.labelButton="Actualizar usuario"):(this.createFormEmpty(),this.labelButton="Crear usuario")}createFormWithData(){let o=this.getStudentsById(this.idStudent);this.firstFormGroup=this._formBuilder.group({nombre:[o.name,i.kI.required],apellido:[o.lastName,i.kI.required]}),this.secondFormGroup=this._formBuilder.group({mail:[o.email,i.kI.required],course:[o.course,i.kI.required]}),this.thirdFormGroup=this._formBuilder.group({note:[o.note,i.kI.required],aprobado:[o.aprobado,i.kI.required]})}createFormEmpty(){this.firstFormGroup=this._formBuilder.group({nombre:["",i.kI.required],apellido:["",i.kI.required]}),this.secondFormGroup=this._formBuilder.group({mail:["",i.kI.required],course:["",i.kI.required]}),this.thirdFormGroup=this._formBuilder.group({note:["",i.kI.required],aprobado:["",i.kI.required]})}getStudentsById(o){return this._studentsService.getStudentsById(o).subscribe(s=>{this.students=s}),this.students}guardar(){let o;o={name:this.firstFormGroup.controls.nombre.value,lastName:this.firstFormGroup.controls.apellido.value,note:this.thirdFormGroup.controls.note.value,course:this.secondFormGroup.controls.course.value,email:this.secondFormGroup.controls.mail.value,aprobado:this.thirdFormGroup.controls.aprobado.value,id:this.idStudent?this.idStudent:Math.random()},this.idStudent?this._studentsService.updateStudent(o).subscribe(s=>{this.students=s[0],this.router.navigate(["/students/"])}):this._studentsService.addStudent(o).subscribe(s=>{this.students=s[0],this.router.navigate(["/students/"])})}deleteStudent(){this._studentsService.deleteStudent(this.idStudent).subscribe(o=>{this.students=o[0],this.router.navigate(["/students/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.qu),t.Y36(d.gz),t.Y36(d.F0),t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alumnos"]],decls:38,vars:7,consts:[["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"row"],[1,"col-xs-12"],["matInput","","placeholder","Nombre","formControlName","nombre","required",""],["matInput","","placeholder","Apellido","formControlName","apellido","required",""],["matInput","","placeholder","Email","formControlName","mail","required",""],["type","text","autocomplete","false","matInput","","placeholder","Password","formControlName","course"],["matInput","","placeholder","Nota","formControlName","note","required",""],["type","text","autocomplete","false","matInput","","placeholder","aprobado","formControlName","aprobado"],["mat-flat-button","","color","primary",3,"click"],["class","col-xs-6",4,"ngIf"],[1,"col-xs-6"],["mat-flat-button","","color","warn",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"mat-vertical-stepper",null,0)(2,"mat-step",1)(3,"form",2),t.YNc(4,J,1,0,"ng-template",3),t.TgZ(5,"div",4)(6,"div",5)(7,"mat-form-field"),t._UZ(8,"input",6),t.qZA()(),t.TgZ(9,"div",5)(10,"mat-form-field"),t._UZ(11,"input",7),t.qZA()()()()(),t.TgZ(12,"mat-step",1)(13,"form",2),t.YNc(14,Q,1,0,"ng-template",3),t.TgZ(15,"div",4)(16,"div",5)(17,"mat-form-field"),t._UZ(18,"input",8),t.qZA()(),t.TgZ(19,"div",5)(20,"mat-form-field"),t._UZ(21,"input",9),t.qZA()()()()(),t.TgZ(22,"mat-step")(23,"form",2),t.YNc(24,O,1,0,"ng-template",3),t.TgZ(25,"div",4)(26,"div",5)(27,"mat-form-field"),t._UZ(28,"input",10),t.qZA()(),t.TgZ(29,"div",5)(30,"mat-form-field"),t._UZ(31,"input",11),t.qZA()()()(),t.TgZ(32,"div",5)(33,"div")(34,"button",12),t.NdJ("click",function(){return s.guardar()}),t._uU(35),t.qZA()()(),t.YNc(36,M,4,0,"div",13),t.qZA()(),t._UZ(37,"router-outlet")),2&o&&(t.xp6(2),t.Q6J("stepControl",s.firstFormGroup),t.xp6(1),t.Q6J("formGroup",s.firstFormGroup),t.xp6(9),t.Q6J("stepControl",s.secondFormGroup),t.xp6(1),t.Q6J("formGroup",s.secondFormGroup),t.xp6(10),t.Q6J("formGroup",s.thirdFormGroup),t.xp6(12),t.Oqu(s.labelButton),t.xp6(1),t.Q6J("ngIf",s.idStudent))},directives:[c.Vq,c.C0,i._Y,i.JL,i.sg,c.VY,k.KE,D.Nt,i.Fj,i.JJ,i.u,i.Q7,_.lW,l.O5,d.lC],styles:[""]}),e})();const z=[{path:"",component:G},{path:"view",component:g},{path:"view/:id",component:g}];let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,R]]}),e})()}}]);