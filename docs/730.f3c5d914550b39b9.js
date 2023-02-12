"use strict";(self.webpackChunkmac_os_clone=self.webpackChunkmac_os_clone||[]).push([[730],{730:(Ie,C,s)=>{s.r(C),s.d(C,{ApplicationsModule:()=>De});var l=s(6895),b=s(9020),v=s(7579),R=s(8505),y=s(2722),E=s(9300),K=s(5577);const g="desktop",x="terminal",Z="finder",w="trash",T="spotlight",F="launchpad";var e=s(8274),te=s(2843),d=s(4325);let ne=(()=>{class n{constructor(t){this.dialogService=t}open(t){const i=this.findComponentByApplicationId(t);return i?this.dialogService.open(i,{showHeader:!1,width:"50%",styleClass:t}).onClose:(0,te._)(()=>"Could not find component to display")}findComponentByApplicationId(t){switch(t){case x:return B;case Z:return Q;case w:return H;case T:return G;default:return null}}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.xA))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var oe=s(1135),O=s(4004),ie=s(1884);const re={activeApplication:g,selectedFolderIds:[],deletedFolderIds:[],folders:[{id:0,title:"desktop"},{id:1,title:"untitled",parentFolderId:0},{id:2,title:"tutorials",parentFolderId:0},{id:3,title:"assets",parentFolderId:2}]};let a=(()=>{class n extends class se{constructor(o){this.state$=new oe.X(o)}get state(){return this.state$.getValue()}select(o){return this.state$.asObservable().pipe((0,O.U)(t=>o(t)),(0,ie.x)())}setState(o){this.state$.next({...this.state,...o})}}{constructor(){super(re),this.trashItemsCount$=this.select(t=>t.deletedFolderIds.length),this.desktopFolders$=this.select(t=>t.folders.filter(i=>0===i.parentFolderId&&!t.deletedFolderIds.includes(i.id)).map(i=>({...i,selected:t.selectedFolderIds.includes(i.id)}))),this.trashFolders$=this.select(t=>t.folders.filter(i=>t.deletedFolderIds.includes(i.id))),this.tutorialFolders$=this.select(t=>t.folders.filter(i=>2===i.parentFolderId&&!t.deletedFolderIds.includes(i.id)).map(i=>({...i,selected:t.selectedFolderIds.includes(i.id)}))),this.activeApplication$=this.select(t=>t.activeApplication)}setActiveApplication(t=g){this.setState({activeApplication:t})}toggleFolder(t){this.setState(t.selectedMultiple?{selectedFolderIds:[...this.state.selectedFolderIds,t.id]}:{selectedFolderIds:[t.id]})}unselectAllFolders(){this.setState({selectedFolderIds:[]})}deleteSelectedFolders(){this.setState({deletedFolderIds:[...this.state.deletedFolderIds,...this.state.selectedFolderIds]})}addNewFolder(){const t=(new Date).getTime();this.setState({folders:[...this.state.folders,{id:t,title:`${t}`,parentFolderId:0}]})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var le=s(4076);let ce=(()=>{class n{constructor(t){this.store=t,this.items=[{label:"New Folder",command:()=>this.store.addNewFolder()},{label:"Get Info"},{label:"Change Desktop Background..."},{label:"Use Stacks"},{label:"Show View Options"}]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-context-menu"]],inputs:{target:"target"},decls:1,vars:2,consts:[["styleClass","context-menu",3,"model","target"]],template:function(t,i){1&t&&e._UZ(0,"p-contextMenu",0),2&t&&e.Q6J("model",i.items)("target",i.target)},dependencies:[le.xV],changeDetection:0}),n})();var ae=s(3214);function pe(n,o){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"img",3),e.TgZ(2,"span",4),e._uU(3),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("src","assets/images/"+t+".png",e.LSH)("width",100)("alt",t),e.xp6(2),e.Oqu(t)}}let M=(()=>{class n{constructor(){this.apps=["mission-control","siri","home","safari","calculator","dictionary","books","stock","pages","keynote","numbers","i-movies","garage-band","voice-memos","tv","podcasts","preview","photos","find-my","facetime","notes","reminders","contacts","mail","app-store","chrome","messages","music"]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-launchpad"]],decls:2,vars:1,consts:[[1,"launchpad"],["class","launchpad__item",4,"ngFor","ngForOf"],[1,"launchpad__item"],[3,"src","width","alt"],[2,"text-transform","capitalize"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,pe,4,4,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.apps))},dependencies:[l.sg],styles:[".launchpad[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center;flex-wrap:wrap;width:80%;margin:0 auto}.launchpad__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-wrap:nowrap;font-family:Yantramanav,sans-serif;font-size:.9rem;font-weight:300;color:var(--light-0);padding:10px 40px}"],changeDetection:0}),n})();const k=[Z,x,F,"safari","music","system-preferences",w];var de=s(6600),u=s(805);function me(n,o){if(1&n&&e._UZ(0,"img",2),2&n){const t=o.$implicit;e.Q6J("src","assets/images/"+t.icon+".png",e.LSH)("alt",t.label)}}let S=(()=>{class n{constructor(t,i){this.cd=t,this.store=i,this.launchpadOpened=new e.vpe,this.onDestroy$=new v.x,this.dockItems=[],this.defaultTooltipOptions={tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3}}ngOnInit(){this.dockItems=this.getDockItems(),this.store.trashItemsCount$.pipe((0,y.R)(this.onDestroy$)).subscribe(t=>this.updateTrashIcon(t))}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}getDockItems(){return k.map(t=>({label:t,icon:t,tooltipOptions:{tooltipLabel:t,...this.defaultTooltipOptions},command:()=>{if(t===F)return this.launchpadOpened.emit();this.store.setActiveApplication(t)}}))}updateTrashIcon(t){this.dockItems=this.dockItems.map(i=>{const r=t>0&&"trash"===i.label?"trash-full":i.icon;return{...i,icon:r}}),this.cd.markForCheck()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dock"]],outputs:{launchpadOpened:"launchpadOpened"},decls:2,vars:1,consts:[["position","bottom",3,"model"],["pTemplate","item"],["width","100%",3,"src","alt"]],template:function(t,i){1&t&&(e.TgZ(0,"p-dock",0),e.YNc(1,me,1,2,"ng-template",1),e.qZA()),2&t&&e.Q6J("model",i.dockItems)},dependencies:[de.s,u.jx],changeDetection:0}),n})();var ge=s(615),ue=s(1493);let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-airdrop-control"]],decls:7,vars:0,consts:[[1,"flex","align-items-center","justify-content-center"],["src","assets/images/airdrop.png","alt","airdrop","width","22",1,"mr-2"],[1,"text-sm"],[1,"text-xs"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div")(3,"div",2),e._uU(4,"Airdrop"),e.qZA(),e.TgZ(5,"span",3),e._uU(6,"Off"),e.qZA()()())},changeDetection:0}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-bluetooth-control"]],decls:7,vars:0,consts:[[1,"flex","align-items-center","justify-content-center"],["src","assets/images/bluetooth.png","alt","airdrop","width","22",1,"mr-2"],[1,"text-sm"],[1,"text-xs"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div")(3,"div",2),e._uU(4,"Bluetooth"),e.qZA(),e.TgZ(5,"span",3),e._uU(6,"On"),e.qZA()()())},changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-focus-control"]],decls:4,vars:0,consts:[[1,"flex","align-items-center","justify-content-center","m-3"],[1,"pi","pi-moon","text-2xl","mr-2"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i",1),e.TgZ(2,"div"),e._uU(3,"Focus"),e.qZA()())},changeDetection:0}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-keyboard-brightness-control"]],decls:4,vars:0,consts:[[1,"flex","flex-column","align-items-center","justify-content-center"],[1,"pi","pi-sun","mb-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i",1),e.TgZ(2,"div"),e._uU(3,"Keyboard Brightness"),e.qZA()())},changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-music-control"]],decls:8,vars:0,consts:[[1,"flex","align-items-center","justify-content-between","p-1"],[1,"flex","align-items-center","justify-content-center"],["src","assets/images/music.png","alt","airdrop","width","22",1,"mr-1"],[1,"flex-align-items-center","justify-content-center"],[1,"pi","pi-play","mr-1"],[1,"pi","pi-fast-forward"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"span"),e._uU(4,"Music"),e.qZA()(),e.TgZ(5,"div",3),e._UZ(6,"i",4)(7,"i",5),e.qZA()())},changeDetection:0}),n})(),J=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-screen-mirroring-control"]],decls:4,vars:0,consts:[[1,"flex","flex-column","align-items-center","justify-content-center"],[1,"pi","pi-clone","mb-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i",1),e.TgZ(2,"div"),e._uU(3,"Screen Mirroring"),e.qZA()())}}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-wifi-control"]],decls:7,vars:0,consts:[[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-wifi","text-2xl","mr-2"],[1,"text-sm"],[1,"text-xs"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i",1),e.TgZ(2,"div")(3,"div",2),e._uU(4,"WI-FI"),e.qZA(),e.TgZ(5,"span",3),e._uU(6,"Not connected"),e.qZA()()())}}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],decls:13,vars:0,consts:[[1,"settings"],[1,"settings__wifi-bluetooth-airdrop-controls"],[1,"settings__focus-control"],[1,"settings__keyboard-brightness-control"],[1,"settings__screen-mirroring-control"],[1,"settings__music-control"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-wifi-control")(3,"app-bluetooth-control")(4,"app-airdrop-control"),e.qZA(),e.TgZ(5,"div",2),e._UZ(6,"app-focus-control"),e.qZA(),e.TgZ(7,"div",3),e._UZ(8,"app-keyboard-brightness-control"),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"app-screen-mirroring-control"),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"app-music-control"),e.qZA()())},dependencies:[A,D,I,P,U,J,$],styles:[".settings[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;padding:10px;width:20rem;background-color:var(--grey-2);font-size:.7rem;border:0}.settings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:var(--grey-3);padding:5px;border-radius:.5rem;box-shadow:0 0 1px 1px var(--grey-4)}.settings__wifi-bluetooth-airdrop-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;flex-wrap:nowrap;grid-column:1/3;grid-row:1/3}.settings__focus-control[_ngcontent-%COMP%]{grid-column:3/5;grid-row:1/2}.settings__keyboard-brightness-control[_ngcontent-%COMP%]{grid-column:3/4;grid-row:2/3}.settings__screen-mirroring-control[_ngcontent-%COMP%]{grid-column:4/5;grid-row:2/3}.settings__music-control[_ngcontent-%COMP%]{grid-column:1/5;grid-row:3/4}"],changeDetection:0}),n})();var fe=s(5963);let N=(()=>{class n{constructor(){this.$time=(0,fe.H)(0,1e3).pipe((0,O.U)(()=>new Date))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-clock"]],standalone:!0,features:[e.jDz],decls:4,vars:6,consts:[[1,"clock"]],template:function(t,i){1&t&&(e.TgZ(0,"span",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.xi3(2,1,e.lcZ(3,4,i.$time),"ccc dd. LLL HH:mm"),"\n"))},dependencies:[l.ez,l.Ov,l.uU],styles:[".clock[_ngcontent-%COMP%]{padding:0 .75rem;-webkit-user-select:none;user-select:none}"],changeDetection:0}),n})();function he(n,o){1&n&&e._UZ(0,"i",5)}function _e(n,o){if(1&n){const t=e.EpF();e._UZ(0,"i",6),e.TgZ(1,"i",7),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.toggleSettingsDialog())}),e.qZA(),e.TgZ(2,"i",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.openSpotlight())}),e.qZA(),e._UZ(3,"app-clock")}}function Ce(n,o){1&n&&e._UZ(0,"app-settings")}let z=(()=>{class n{constructor(){this.spotlightOpened=new e.vpe,this.isSettingsDialogDisplayed=!1,this.menuItems=[{label:"Finder"},{label:"File"},{label:"Edit"},{label:"View"},{label:"Go"},{label:"Window"},{label:"Help"}]}openSpotlight(){this.spotlightOpened.emit()}toggleSettingsDialog(){this.isSettingsDialogDisplayed=!this.isSettingsDialogDisplayed}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-menu"]],outputs:{spotlightOpened:"spotlightOpened"},decls:5,vars:3,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["styleClass","mt-5","position","top-right",3,"visible","showHeader"],["pTemplate",""],[1,"pi","pi-apple"],[1,"pi","pi-wifi"],[1,"pi","pi-mobile",2,"transform","rotateZ(90deg)",3,"click"],[1,"pi","pi-search",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"p-menubar",0),e.YNc(1,he,1,0,"ng-template",1),e.YNc(2,_e,4,0,"ng-template",2),e.qZA(),e.TgZ(3,"p-dialog",3),e.YNc(4,Ce,1,0,"ng-template",4),e.qZA()),2&t&&(e.Q6J("model",i.menuItems),e.xp6(3),e.Q6J("visible",i.isSettingsDialogDisplayed)("showHeader",!1))},dependencies:[u.jx,ge.nm,ue.V,j,N],styles:["[_nghost-%COMP%]  .p-menubar{padding:0 .5rem;background-color:var(--purple-2);color:var(--light-0);border:none;font-size:.8rem}[_nghost-%COMP%]  .p-menubar .p-menuitem:first-child{font-weight:700;padding:0 1rem}[_nghost-%COMP%]  .p-menubar .p-menuitem .p-menuitem-link{padding:.5rem .75rem}[_nghost-%COMP%]  .p-menubar .p-menuitem .p-menuitem-link .p-menuitem-text{color:var(--light-0)}[_nghost-%COMP%]  .p-menubar .p-menubar-end{display:flex;flex-direction:row;align-items:center;justify-content:stretch;flex-wrap:nowrap}[_nghost-%COMP%]  .p-menubar .p-menubar-end i{padding:0 .75rem}"],changeDetection:0}),n})(),Y=(()=>{class n{constructor(){this.isFinderOpened=!1,this.click=new e.vpe}onToggleSelection(t){t.stopPropagation(),this.click.emit({id:this.folder.id,selected:!this.folder.selected,selectedMultiple:t.metaKey||t.ctrlKey})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-folder-icon"]],inputs:{folder:"folder",isFinderOpened:"isFinderOpened"},outputs:{click:"click"},decls:4,vars:9,consts:[[1,"folder-icon",3,"click"],[1,"folder-icon__image"],[1,"folder-icon__title"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(c){return i.onToggleSelection(c)}),e._UZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3),e.qZA()()),2&t&&(e.xp6(1),e.ekj("selected",i.folder.selected)("finder",i.isFinderOpened),e.xp6(1),e.ekj("selected",i.folder.selected)("finder",i.isFinderOpened),e.xp6(1),e.hij(" ",i.folder.title," "))},styles:[".folder-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:stretch;flex-wrap:nowrap;width:100px;margin-bottom:5px}.folder-icon__image[_ngcontent-%COMP%]{width:3rem;height:3rem;margin-bottom:2px;background-image:url(/assets/images/folder.png);background-size:cover;background-position:center}.folder-icon__image.selected[_ngcontent-%COMP%]{background-color:var(--purple-1);box-shadow:0 0 1px 1px var(--mac-grey);border-radius:2px}.folder-icon__image.selected.finder[_ngcontent-%COMP%]{background-color:var(--mac-grey)}.folder-icon__title[_ngcontent-%COMP%]{font-family:Yantramanav,sans-serif;font-size:.7rem;font-weight:400;color:var(--light-0);-webkit-user-select:none;user-select:none;padding:1px}.folder-icon__title.finder[_ngcontent-%COMP%]{color:var(--dark-1)}.folder-icon__title.selected[_ngcontent-%COMP%]{background-color:var(--blue-700);color:var(--light-0)}"],changeDetection:0}),n})();function be(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"app-folder-icon",3),e.NdJ("click",function(r){e.CHM(t);const c=e.oxw();return e.KtG(c.onFolderSelected(r))}),e.qZA()()}if(2&n){const t=o.$implicit,i=e.oxw();e.xp6(1),e.Q6J("folder",t)("isFinderOpened",i.isFinderOpened)}}let m=(()=>{class n{constructor(t){this.store=t,this.folders=[],this.isFinderOpened=!1}onFolderSelected(t){this.store.toggleFolder(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-folders"]],inputs:{folders:"folders",isFinderOpened:"isFinderOpened"},decls:2,vars:1,consts:[[1,"folders"],["class","folders__icon",4,"ngFor","ngForOf"],[1,"folders__icon"],[3,"folder","isFinderOpened","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,be,2,2,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.folders))},dependencies:[l.sg,Y],styles:[".folders__icon[_ngcontent-%COMP%]{margin-top:10px;display:inline-block}"],changeDetection:0}),n})();const ve=function(){return[]};let q=(()=>{class n{constructor(t,i){this.windowService=t,this.store=i,this.onDestroy$=new v.x,this.folders$=this.store.desktopFolders$,this.launchPadOpened=!1}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}ngOnInit(){this.store.activeApplication$.pipe((0,R.b)(t=>console.log(t)),(0,y.R)(this.onDestroy$),(0,E.h)(t=>t!==g),(0,K.z)(t=>this.windowService.open(t))).subscribe(t=>this.store.setActiveApplication(t))}onKeydown(t){if(t.ctrlKey&&"Space"===t.code)return this.openSpotlight();t.ctrlKey&&"Backspace"===t.code&&this.store.deleteSelectedFolders()}openSpotlight(){return this.store.setActiveApplication(T)}unselectFolders(){this.store.unselectAllFolders()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(ne),e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desktop"]],hostBindings:function(t,i){1&t&&e.NdJ("keydown",function(c){return i.onKeydown(c)},!1,e.evT)},decls:12,vars:7,consts:[[1,"desktop-screen",3,"click"],["desktop",""],[1,"desktop-screen__menu"],[3,"spotlightOpened"],[1,"desktop-screen__folders"],[3,"folders"],[1,"desktop-screen__dock"],[3,"launchpadOpened"],[3,"target"],[3,"visible","fullScreen","visibleChange"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0,1),e.NdJ("click",function(){return i.unselectFolders()}),e.TgZ(2,"div",2)(3,"app-menu",3),e.NdJ("spotlightOpened",function(){return i.openSpotlight()}),e.qZA()(),e.TgZ(4,"div",4),e._UZ(5,"app-folders",5),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"div",6)(8,"app-dock",7),e.NdJ("launchpadOpened",function(){return i.launchPadOpened=!0}),e.qZA()()(),e._UZ(9,"app-context-menu",8),e.TgZ(10,"p-sidebar",9),e.NdJ("visibleChange",function(c){return i.launchPadOpened=c}),e._UZ(11,"app-launchpad"),e.qZA()),2&t){const r=e.MAs(1);e.xp6(5),e.Q6J("folders",e.lcZ(6,4,i.folders$)||e.DdM(6,ve)),e.xp6(4),e.Q6J("target",r),e.xp6(1),e.Q6J("visible",i.launchPadOpened)("fullScreen",!0)}},dependencies:[ce,ae.Y,M,S,z,m,l.Ov],styles:[".desktop-screen[_ngcontent-%COMP%]{background-image:url(/assets/images/desktop-background.jpg);background-size:cover;background-position:center;height:100vh;overflow:hidden}  .p-sidebar{background-image:url(/assets/images/desktop-background.jpg);background-size:cover;background-position:center;color:#495057;border:0 none;box-shadow:none}"]}),n})();var f=s(2922),p=(()=>{return(n=p||(p={})).Ui="UI",n.Author="AUTHOR",n.Framework="FRAMEWORK",p;var n})();let h=(()=>{class n{constructor(t,i){this.dialogRef=t,this.dialogConfig=i,this.maximized=!1}ngOnInit(){this.initialWidth=this.dialogConfig.width,this.initialHeight=this.dialogConfig.height}close(){this.dialogRef.close()}maximize(){this.maximized=!this.maximized,this.dialogConfig.width=this.maximized?"100%":this.initialWidth,this.dialogConfig.height=this.maximized?"100%":this.initialHeight}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.E7),e.Y36(d.S))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dialog-controls"]],decls:4,vars:0,consts:[[1,"dialog-controls"],[1,"pi","pi-circle-fill","text-red",3,"click"],[1,"pi","pi-circle-fill","text-gold",3,"click"],[1,"pi","pi-circle-fill","text-green"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"i",1),e.NdJ("click",function(){return i.close()}),e.qZA(),e.TgZ(2,"i",2),e.NdJ("click",function(){return i.maximize()}),e.qZA(),e._UZ(3,"i",3),e.qZA())},styles:[".dialog-controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;margin-right:.5rem}"],changeDetection:0}),n})(),B=(()=>{class n{constructor(t){this.terminalService=t,this.terminalService.commandHandler.subscribe(i=>{const r=this.getCommandResponse(i);this.terminalService.sendResponse(r)})}getCommandResponse(t){switch(t.toUpperCase()){case p.Author:return"Developer Thing";case p.Ui:return"PrimeNg";case p.Framework:return"Angular";default:return"Unknown command"}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.z8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-terminal"]],features:[e._Bn([f.z8])],decls:8,vars:2,consts:[[1,"dialog-header"],[1,"dialog-header__controls"],[1,"dialog-header__title"],["src","assets/images/library.png","alt","library","width","20",1,"mr-1"],[1,"font-bold"],[3,"prompt","welcomeMessage"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-dialog-controls"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"span",4),e._uU(6,"developer-thing --bash --120x24"),e.qZA()()(),e._UZ(7,"p-terminal",5)),2&t&&(e.xp6(7),e.Q6J("prompt","developer-thing $")("welcomeMessage","Available commands: framework, author, ui"))},dependencies:[f.oI,h],styles:[".dialog-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:nowrap;background:var(--light-1)}.dialog-header__controls[_ngcontent-%COMP%]{padding:.5rem}.dialog-header__title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:nowrap;flex-grow:1}"],changeDetection:0}),n})();function ye(n,o){if(1&n&&e._UZ(0,"img",4),2&n){const t=e.oxw();e.Q6J("src","assets/images/"+t.sidebarItem.image,e.LSH)("alt",t.sidebarItem.label)}}function xe(n,o){if(1&n&&e._UZ(0,"i",5),2&n){const t=e.oxw();e.Tol(t.sidebarItem.icon),e.Udp("color",t.sidebarItem.label)}}let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidebar-item"]],inputs:{sidebarItem:"sidebarItem"},decls:5,vars:3,consts:[[1,"sidebar-item"],["class","sidebar-item__image",3,"src","alt",4,"ngIf"],["class","sidebar-item__icon","class","sidebar-item__icon",3,"color","class",4,"ngIf"],[1,"sidebar-item__title"],[1,"sidebar-item__image",3,"src","alt"],[1,"sidebar-item__icon"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,ye,1,2,"img",1),e.YNc(2,xe,1,4,"i",2),e.TgZ(3,"span",3),e._uU(4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.sidebarItem.image),e.xp6(1),e.Q6J("ngIf",i.sidebarItem.icon),e.xp6(2),e.hij(" ",i.sidebarItem.label," "))},dependencies:[l.O5],styles:[".sidebar-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:stretch;flex-wrap:nowrap;overflow-x:hidden}.sidebar-item__title[_ngcontent-%COMP%]{font-size:.7rem;cursor:default;-webkit-user-select:none;user-select:none}.sidebar-item__image[_ngcontent-%COMP%]{width:.9rem;margin:.3rem .5rem .3rem .3rem;filter:contrast(.1)}.sidebar-item__icon[_ngcontent-%COMP%]{font-size:.9rem;margin:.3rem .5rem .3rem .3rem}"],changeDetection:0}),n})();function Ze(n,o){1&n&&e._UZ(0,"app-sidebar-item",3),2&n&&e.Q6J("sidebarItem",o.$implicit)}let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidebar-group"]],inputs:{sidebarGroup:"sidebarGroup"},decls:4,vars:2,consts:[[1,"sidebar-group"],[1,"sidebar-group__title"],[3,"sidebarItem",4,"ngFor","ngForOf"],[3,"sidebarItem"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.YNc(3,Ze,1,1,"app-sidebar-item",2),e.qZA()),2&t&&(e.xp6(2),e.hij(" ",i.sidebarGroup.category," "),e.xp6(1),e.Q6J("ngForOf",i.sidebarGroup.items))},dependencies:[l.sg,X],styles:[".sidebar-group[_ngcontent-%COMP%]{margin-bottom:10px}.sidebar-group__title[_ngcontent-%COMP%]{font-size:.6rem;font-weight:500;overflow-x:hidden}"],changeDetection:0}),n})();function we(n,o){1&n&&e._UZ(0,"app-sidebar-group",4),2&n&&e.Q6J("sidebarGroup",o.$implicit)}let _=(()=>{class n{constructor(){this.sidebarGroups=[{category:"Favourites",items:[{label:"Airdrop",image:"airdrop.png"},{label:"Recents",image:"recents.png"},{label:"Applications",image:"applications.png"},{label:"Desktop",image:"desktop.png"},{label:"Documents",image:"documents.png"},{label:"Downloads",image:"downloads.png"}]},{category:"iCloud",items:[{label:"iCloud Drive",image:"icloud.png"},{label:"Shared",image:"network.png"}]},{category:"Tags",items:[{label:"red",icon:"pi pi-circle-fill"},{label:"orange",icon:"pi pi-circle-fill"},{label:"yellow",icon:"pi pi-circle-fill"},{label:"green",icon:"pi pi-circle-fill"},{label:"blue",icon:"pi pi-circle-fill"},{label:"purple",icon:"pi pi-circle-fill"},{label:"grey",icon:"pi pi-circle-fill"}]}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-finder-sidebar"]],decls:5,vars:1,consts:[[1,"finder-sidebar"],[1,"finder-sidebar__controls"],[1,"finder-sidebar__groups"],[3,"sidebarGroup",4,"ngFor","ngForOf"],[3,"sidebarGroup"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-dialog-controls"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,we,1,1,"app-sidebar-group",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",i.sidebarGroups))},dependencies:[l.sg,h,L],styles:[".finder-sidebar[_ngcontent-%COMP%]{padding:1rem;background-color:var(--purple-0);height:100%}.finder-sidebar__controls[_ngcontent-%COMP%]{margin-bottom:1rem}"],changeDetection:0}),n})();const Te=function(){return[]};let Q=(()=>{class n{constructor(t){this.store=t,this.folders$=this.store.tutorialFolders$}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-finder"]],decls:6,vars:5,consts:[[1,"finder"],[1,"finder__sidebar"],[1,"finder__content"],[3,"isFinderOpened","folders"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-finder-sidebar"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"app-folders",3),e.ALo(5,"async"),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("isFinderOpened",!0)("folders",e.lcZ(5,2,i.folders$)||e.DdM(4,Te)))},dependencies:[m,_,l.Ov],styles:[".finder[_ngcontent-%COMP%]{display:flex;height:100%}.finder__sidebar[_ngcontent-%COMP%]{width:35%;max-width:200px}.finder__content[_ngcontent-%COMP%]{padding:1rem;width:65%}@media screen and (min-width: 996px){.finder__sidebar[_ngcontent-%COMP%]{width:25%}.finder__content[_ngcontent-%COMP%]{width:75%}}"],changeDetection:0}),n})();const Fe=function(){return[]};let H=(()=>{class n{constructor(t){this.store=t,this.folders$=this.store.trashFolders$}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-trash"]],decls:6,vars:5,consts:[[1,"finder"],[1,"finder__sidebar"],[1,"finder__content"],[3,"isFinderOpened","folders"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-finder-sidebar"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"app-folders",3),e.ALo(5,"async"),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("isFinderOpened",!0)("folders",e.lcZ(5,2,i.folders$)||e.DdM(4,Fe)))},dependencies:[m,_,l.Ov],styles:[".finder[_ngcontent-%COMP%]{display:flex;height:100%}.finder__sidebar[_ngcontent-%COMP%]{width:35%;max-width:200px}.finder__content[_ngcontent-%COMP%]{padding:1rem;width:65%}@media screen and (min-width: 996px){.finder__sidebar[_ngcontent-%COMP%]{width:25%}.finder__content[_ngcontent-%COMP%]{width:75%}}"],changeDetection:0}),n})();var Oe=s(9418);function Me(n,o){if(1&n&&(e.TgZ(0,"div",3),e._UZ(1,"img",4),e.TgZ(2,"span",5),e._uU(3),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("src","assets/images/"+t+".png",e.LSH)("alt",t),e.xp6(2),e.Oqu(t)}}let G=(()=>{class n{constructor(t){this.dialogRef=t,this.results=[]}onSearch(t){this.results=k.filter(i=>i.toLowerCase().startsWith(t.query.toLowerCase()))}onAppSelected(t){this.dialogRef.close(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.E7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-spotlight"]],decls:3,vars:3,consts:[[1,"search-container"],["styleClass","spotlight-search",3,"suggestions","autofocus","placeholder","onSelect","completeMethod"],["pTemplate","item"],[1,"spotlight-result"],[1,"spotlight-result__icon",3,"src","alt"],[1,"spotlight-result__title"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"p-autoComplete",1),e.NdJ("onSelect",function(c){return i.onAppSelected(c)})("completeMethod",function(c){return i.onSearch(c)}),e.YNc(2,Me,4,3,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("suggestions",i.results)("autofocus",!0)("placeholder","Spotlight Search"))},dependencies:[u.jx,Oe.Qc],styles:["[_nghost-%COMP%]  .p-autocomplete{width:100%}[_nghost-%COMP%]  .p-autocomplete .p-autocomplete-items{background-color:var(--mac-grey);padding:10px}[_nghost-%COMP%]  .p-autocomplete .p-autocomplete-items .p-autocomplete-item{padding:.5rem}[_nghost-%COMP%]  .p-autocomplete .p-autocomplete-items .p-autocomplete-item:hover{background-color:var(--blue-700);color:var(--light-0)}[_nghost-%COMP%]  .p-autocomplete .p-inputtext{width:100%;background-color:var(--mac-grey);border:none}[_nghost-%COMP%]  .p-autocomplete .p-inputtext:enabled:focus{box-shadow:none}.search-container[_ngcontent-%COMP%]{height:200px}.spotlight-result[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:stretch;flex-wrap:nowrap}.spotlight-result__title[_ngcontent-%COMP%]{font-size:.8rem}.spotlight-result__icon[_ngcontent-%COMP%]{width:1rem;margin-right:.5rem;-webkit-user-select:none;user-select:none}"]}),n})(),ke=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.Bz.forChild([{path:"",component:q}]),b.Bz]}),n})();var Se=s(4796);let Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez]}),n})(),De=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,ke,Se.m,Ae,N]}),n})()}}]);