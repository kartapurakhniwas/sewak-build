"use strict";(self.webpackChunksewaks_public=self.webpackChunksewaks_public||[]).push([[302],{4302:(C,u,s)=>{s.r(u),s.d(u,{DebitListModule:()=>y});var g=s(3403),r=s(6814),d=s(9090),t=s(5879),m=s(9494),D=s(924),h=s(2939),f=s(617);const b=["agGrid"];function v(l,A){1&l&&(t.TgZ(0,"h4",5),t._uU(1,"Loading ..."),t.qZA())}let x=(()=>{class l{constructor(i,e,n,a,o){this.gl=i,this.vol=e,this.datepipe=n,this._snackBar=a,this.tblUtl=o,this.status=[{id:1,view:"Decline"},{id:2,view:"New Submission"},{id:3,view:"Called"},{id:4,view:"Confirmed"}],this.excelData=[],this.loader=!1,this.columnDefs=[{headerName:"Name",field:"name",headerCheckboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,checkboxSelection:!0,sortingOrder:["asc","desc"]},{headerName:"Email",field:"email"},{headerName:"Phone Number",field:"mobileNo"},{headerName:"Date",field:"joindate",valueGetter:c=>this.datepipe.transform(c.data.joindate,"dd-MM-yyyy")},{headerName:"Notes",field:"notes"},{headerName:"Referral Source",field:"referralSource"},{headerName:"Status",field:"status",valueGetter:c=>{switch(c.data.status){case 1:return"Decline";case 2:return"New Submission";case 3:return"Called";case 4:return"Verified As Volunteer";default:return"No Data"}}}],this.defaultColDef={editable:!1,resizable:!0,sortable:!0,filter:!0},this.gridOptions={defaultColDef:{sortable:!0}},this.rowSelection="single"}ngOnInit(){this.refresh()}refresh(){this.vol.GetAllByPagination().subscribe(e=>{e.respStatus&&(this.getpaged=e.lstModel),console.log(e)})}onGridReady(i){this.gridApi=i.api,this.gidColumnApi=i.columnApi,i.api.setRowData(this.getPaged)}clearFilter(){this.gridApi.setFilterModel(null)}onSelectionChanged(){this.gl.setRowData=null;const e=this.agGrid?.api.getSelectedNodes()?.map(n=>n.data);this.gl.setRowData=JSON.stringify(e[0])?e[0]:null}statusChange(i){this.gl.setRowData?(this.gl.setRowData.status=i,this.vol.update(this.gl.setRowData).subscribe(n=>{n.respStatus&&(this._snackBar.open("Update Successfully","Okay",{duration:3e3}),this.refresh())})):this._snackBar.open("Please fill required fields","Okay",{duration:3e3})}importExcel(i){this.loader=!0,this.tblUtl.importExcel(i),setTimeout(()=>{this.gl.xlsxData.forEach((e,n)=>{if(" "!=e.Debit){delete e.Credit,delete e.Balance,delete e.Value_Date,e.BillAmount=String(e.Debit).trim(),delete e.Debit,e.PaymentDate=String(e.Txn_Date).trim(),delete e.Txn_Date;let a=String(e.Description).split("TO TRANSFER-INB ");if(a.length>=2)if(console.log(a,"ppp"),"N"==a[1][0]&&"E"==a[1][1]){let o=a[1].split("--");e.NameOfSupplier=String(o[1]).trim()}else{let o=a[1].split("--");e.NameOfSupplier=String(o[0]).trim()}else e={};e.BillNo="",e.Items="",delete e.Description,delete e.Ref_No_Chq_No,this.excelData.push(e)}}),console.log(this.excelData,"this.excelData"),this.excelData&&(d.E.exportArrayToExcel(this.excelData,"Sewaks"),this.loader=!1)},3e3)}static#e=this.\u0275fac=function(e){return new(e||l)(t.Y36(m.mD),t.Y36(D.Q),t.Y36(r.uU),t.Y36(h.ux),t.Y36(d.E))};static#t=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-debit-list-xlsx"]],viewQuery:function(e,n){if(1&e&&t.Gf(b,5),2&e){let a;t.iGM(a=t.CRH())&&(n.agGrid=a.first)}},decls:10,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center",2,"height","90vh","width","100%"],["type","file","id","import",2,"display","none",3,"change"],[1,"btn",2,"background-color","#f5b324","color","#ffffff"],["for","import"],["style","margin-top: 20px;\n        color: #00000075;\n        text-align: center;",4,"ngIf"],[2,"margin-top","20px","color","#00000075","text-align","center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"div")(3,"input",1),t.NdJ("change",function(o){return n.importExcel(o)}),t.qZA(),t.TgZ(4,"button",2)(5,"label",3)(6,"mat-icon"),t._uU(7,"upload_file"),t.qZA(),t._uU(8," Upload Excel"),t.qZA()()(),t.YNc(9,v,2,0,"h4",4),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngIf",n.loader))},dependencies:[r.O5,f.Hw],encapsulation:2})}return l})();var p=s(6223),N=s(4807),S=s(5083);let y=(()=>{class l{static#e=this.\u0275fac=function(e){return new(e||l)};static#t=this.\u0275mod=t.oAB({type:l});static#i=this.\u0275inj=t.cJS({providers:[r.uU,d.E],imports:[r.ez,N.A0,p.u5,h.ZX,p.UX,S.sF,f.Ps,g.Bz.forChild([{path:"",component:x}])]})}return l})()}}]);