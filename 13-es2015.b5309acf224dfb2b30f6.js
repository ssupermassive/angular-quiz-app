(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1GhG":function(e,t,i){"use strict";i.r(t),i.d(t,"HomeModule",function(){return A});var n=i("ofXK"),o=i("tyNb"),a=i("R0Ic"),c=i("quSY"),l=i("fXoL"),r=i("ey9i"),s=i("cWlU");function g(e,t){1&e&&l.Pb(0)}const f=function(e){return{item:e}};function m(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",4),l.Tb(1,"div",5),l.ac("click",function(){l.wc(e);const i=t.$implicit;return l.ec(2)._tileClick(i)}),l.Ec(2,g,1,0,"ng-container",6),l.Sb(),l.Sb()}if(2&e){const e=t.$implicit,i=l.ec(2);l.Bc("min-width",i.tileWidth),l.Ab(1),l.Bc("max-width",i.tileWidth),l.Fb("ft-TileView__tile-hovered",i.tileHovered),l.Ab(1),l.kc("ngTemplateOutlet",i.tileTemplate)("ngTemplateOutletContext",l.nc(8,f,e))}}function b(e,t){if(1&e&&(l.Tb(0,"div",2),l.Ec(1,m,3,10,"div",3),l.Sb()),2&e){const e=l.ec();l.Ab(1),l.kc("ngForOf",e.items)}}function _(e,t){if(1&e&&(l.Tb(0,"div"),l.Gc(1),l.Sb()),2&e){const e=l.ec();l.Ab(1),l.Ic(" ",e.emptyText,"\n")}}let p=(()=>{class e{constructor(){this.tileWidth="320px",this.emptyText="\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 :(",this.tileHovered=!0,this.tileClick=new l.o}_tileClick(e){this.tileClick.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["ft-tile-view"]],inputs:{tileWidth:"tileWidth",tileTemplate:"tileTemplate",items:"items",emptyText:"emptyText",tileHovered:"tileHovered"},outputs:{tileClick:"tileClick"},decls:2,vars:2,consts:[["class","ft-TileView__main ft-flexbox ft-flex-wrap ft-justify-content-evently",4,"ngIf"],[4,"ngIf"],[1,"ft-TileView__main","ft-flexbox","ft-flex-wrap","ft-justify-content-evently"],["class","ft-TileView__tileContainer ft-flexbox ft-justify-content-center ft-flex-grow-1",3,"minWidth",4,"ngFor","ngForOf"],[1,"ft-TileView__tileContainer","ft-flexbox","ft-justify-content-center","ft-flex-grow-1"],[1,"ft-TileView__tile","ft-overflow-hidden",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(l.Ec(0,b,2,1,"div",0),l.Ec(1,_,2,1,"div",1)),2&e&&(l.kc("ngIf",t.items&&t.items.length),l.Ab(1),l.kc("ngIf",!(t.items&&t.items.length)))},directives:[n.l,n.k,n.q],styles:[".ft-TileView__tileContainer[_ngcontent-%COMP%]{max-width:31%;margin:8px}.ft-TileView__tile[_ngcontent-%COMP%]{border-radius:12px;background-color:#fff;width:100%;box-shadow:0 2px 6px 0 rgba(0,0,0,.5)}.ft-TileView__tile-hovered[_ngcontent-%COMP%]{cursor:pointer}.ft-TileView__tile-hovered[_ngcontent-%COMP%]:hover{box-shadow:0 2px 6px 0 rgba(0,0,0,.7)}"],changeDetection:0}),e})();var d=i("p4Eg"),h=i("PVgB");const u=["tests"];function w(e,t){1&e&&(l.Tb(0,"span"),l.Gc(1,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u044b"),l.Sb())}function x(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",15),l.Gc(1," \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0447\u0435\u0440\u0435\u0437 "),l.Tb(2,"ft-timer",16),l.ac("timeIsOver",function(){return l.wc(e),l.ec().updateTestsAvailableState()}),l.Sb(),l.Sb()}if(2&e){const e=l.ec();l.Ab(2),l.kc("time",e.quizWillBeAvailableTime)("useColorState",!1)}}function T(e,t){if(1&e&&(l.Tb(0,"div",17),l.Ob(1,"img",18),l.Tb(2,"div",19),l.Tb(3,"div",20),l.Gc(4),l.Sb(),l.Tb(5,"div",21),l.Gc(6),l.Sb(),l.Tb(7,"div",22),l.Tb(8,"div",23),l.Gc(9),l.Sb(),l.Sb(),l.Tb(10,"div",24),l.Tb(11,"div"),l.Gc(12," \u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432: 30 "),l.Sb(),l.Tb(13,"div"),l.Gc(14," \u0412\u0440\u0435\u043c\u044f: 30 \u043c\u0438\u043d "),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&e){const e=t.item;l.Ab(1),l.kc("src",e.image,l.xc),l.Ab(3),l.Ic(" ",e.name," "),l.Ab(1),l.lc("title",e.description),l.Ab(1),l.Ic(" ",e.description," "),l.Ab(3),l.Ic(" ",e.name," ")}}const P=function(){return{userButton:!0}};let v=(()=>{class e{constructor(e,t,i,n){this.localStorage=e,this.quizController=t,this.route=i,this.changeDetector=n,this._contentScrolled=!1,this._animateState="hidden",this._subscription=new c.a}get animateState(){return this._animateState}get _isFirstVisit(){return!this.localStorage.getItem("FT_IS_NOT_FIRST_VISIT")}set _isFirstVisit(e){this.localStorage.setItem("FT_IS_NOT_FIRST_VISIT",!e)}ngOnInit(){this.updateTestsAvailableState(),this._updateAnimationState(),this._subscription.add(this.route.data.subscribe(e=>{this._categories=e.categories}))}ngAfterContentInit(){setTimeout(()=>{this._animateState="visible",this.changeDetector.markForCheck()},500)}ngOnDestroy(){this._subscription.unsubscribe()}_updateAnimationState(){this._isFirstVisit?(this._animateState="hidden",this._isFirstVisit=!1):this._animateState="visible"}beginButtonClick(){this.tests.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})}_beginTest(e){this.quizController.startTest(e.id,e.name)}updateTestsAvailableState(){this.quizController.updateUserQuizState(),this.attemptsCount=this.quizController.attemptsCount,this.quizWillBeAvailableTime=this.quizController.quizWillBeAvailableTime}scrollHandler(){this._contentScrolled=pageYOffset>10}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(r.b),l.Nb(r.c),l.Nb(o.a),l.Nb(l.h))},e.\u0275cmp=l.Hb({type:e,selectors:[["ft-home"]],viewQuery:function(e,t){if(1&e&&l.Kc(u,!0),2&e){let e;l.rc(e=l.bc())&&(t.tests=e.first)}},hostBindings:function(e,t){1&e&&l.ac("scroll",function(){return t.scrollHandler()},!1,l.vc)},decls:22,vars:13,consts:[[1,"ft-HomePage__header","ft-flex-shrink-0","ft-flex-grow-0",3,"buttonsConfig"],[1,"ft-HomePage__content"],[1,"ft-HomePage__welcome","ft-flex-grow-0","ft-flex-shrink-0"],[1,"ft-HomePage__backgroungImage","ft-flexbox","ft-flex-column","ft-justify-content-center","ft-align-items-center"],[1,"ft-HomePage__welcome-firstTitle"],[1,"ft-HomePage__welcome-secondTitle"],[1,"ft-HomePage__welcome-begin",3,"click"],[1,"ft-HomePage__backgroung","ft-HomePage__backgroungGradient"],[1,"ft-HomePage__tests-title"],["tests",""],[4,"ngIf"],["class","ws-flexbox",4,"ngIf"],[1,"ft-HomePage__tests-attempts"],[1,"ft-HomePage__tileView",3,"items","tileTemplate","tileHovered","tileClick"],["tileTemplate",""],[1,"ws-flexbox"],["timeMask","HH:mm:ss","fontSize","36px",1,"ft-HomePage__tests-timer",3,"time","useColorState","timeIsOver"],[1,"ft-HomePage__tileView-tileTemplate"],["width","320","height","200",3,"src"],[1,"ft-HomePage__tileView-tileTemplate-info"],[1,"ft-HomePage__tileView-tileTemplate-name"],[1,"ft-HomePage__tileView-tileTemplate-description","ft-overflow-hidden",3,"title"],[1,"ft-HomePage__tileView-tileTemplate-categories","ft-flexbox","ft-flex-wrap","ft-overflow-hidden"],[1,"ft-HomePage__tileView-tileTemplate-category"],[1,"ft-HomePage__tileView-tileTemplate-metrics","ft-flexbox","ft-justify-content-between"]],template:function(e,t){if(1&e&&(l.Ob(0,"ft-page-header",0),l.Tb(1,"div",1),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Tb(4,"h1",4),l.Gc(5," \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 QuizApp "),l.Sb(),l.Tb(6,"h3",5),l.Gc(7," \u0421\u0431\u043e\u0440\u043d\u0438\u043a \u0442\u0435\u0441\u0442\u043e\u0432 \u043f\u043e Web - \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 "),l.Sb(),l.Tb(8,"button",6),l.ac("click",function(){return t.beginButtonClick()}),l.Gc(9,"\u041d\u0430\u0447\u0430\u0442\u044c"),l.Sb(),l.Sb(),l.Ob(10,"div",7),l.Sb(),l.Tb(11,"div",8,9),l.Ec(13,w,2,0,"span",10),l.Ec(14,x,3,2,"div",11),l.Sb(),l.Tb(15,"div",12),l.Tb(16,"div"),l.Gc(17),l.Sb(),l.Sb(),l.Tb(18,"ft-tile-view",13),l.ac("tileClick",function(e){return t._beginTest(e)}),l.Ec(19,T,15,5,"ng-template",null,14,l.Fc),l.Sb(),l.Ob(21,"ft-page-footer"),l.Sb()),2&e){const e=l.sc(20);l.Fb("ft-HomePage__header-shadow",t._contentScrolled),l.kc("buttonsConfig",l.mc(12,P)),l.Ab(4),l.kc("@animateTitle",t.animateState),l.Ab(2),l.kc("@animateTitle",t.animateState),l.Ab(2),l.kc("@animateBeginButton",t.animateState),l.Ab(5),l.kc("ngIf",t.attemptsCount),l.Ab(1),l.kc("ngIf",!t.attemptsCount),l.Ab(3),l.Ic("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043f\u044b\u0442\u043e\u043a: ",t.attemptsCount,""),l.Ab(1),l.kc("items",t._categories)("tileTemplate",e)("tileHovered",!!t.attemptsCount)}},directives:[s.a,n.l,p,d.a,h.a],styles:['.ft-HomePage[_ngcontent-%COMP%], [_nghost-%COMP%]{min-height:0;display:flex;width:100%;flex-direction:column}.ft-HomePage[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1;height:100%}.ft-HomePage__header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1;width:100%}.ft-HomePage__header-shadow[_ngcontent-%COMP%]:after{content:" ";height:8px;width:100%;position:absolute;background:linear-gradient(180deg,rgba(0,0,0,.15),transparent);bottom:-8px}.ft-HomePage__welcome[_ngcontent-%COMP%]{position:relative;width:100%}.ft-HomePage__welcome-firstTitle[_ngcontent-%COMP%]{font-weight:700;margin-bottom:12px}.ft-HomePage__welcome-secondTitle[_ngcontent-%COMP%]{margin-bottom:48px}.ft-HomePage__welcome-firstTitle[_ngcontent-%COMP%], .ft-HomePage__welcome-secondTitle[_ngcontent-%COMP%]{color:#fff;text-align:center}.ft-HomePage__welcome-begin[_ngcontent-%COMP%]{background-color:transparent;padding:8px 24px;font-size:18px;font-weight:700;border:1px solid hsla(0,0%,100%,.7);color:hsla(0,0%,100%,.7);border-radius:12px}.ft-HomePage__welcome-begin[_ngcontent-%COMP%]:hover{box-shadow:0 0 6px 2px hsla(0,0%,100%,.7);border-color:#fff;color:#fff}.ft-HomePage__backgroung[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.ft-HomePage__backgroungGradient[_ngcontent-%COMP%]{background:linear-gradient(0deg,rgba(0,0,0,.9),transparent);width:100%;height:100%;z-index:-1}.ft-HomePage__backgroungImage[_ngcontent-%COMP%]{background-image:url(home-bg.bc29cac4a3ef42076ab9.jpg);background-size:cover;background-repeat:no-repeat;height:700px;width:100%}.ft-HomePage__content[_ngcontent-%COMP%]{width:100%;background-color:#f8f8f8}.ft-HomePage__tests-title[_ngcontent-%COMP%]{font-size:36px;padding-top:48px;text-align:center}.ft-HomePage__tests-attempts[_ngcontent-%COMP%]{height:48px;text-align:center;margin:auto;font-size:24px}.ft-HomePage__tests-timer[_ngcontent-%COMP%]{margin-left:12px}.ft-HomePage__tileView[_ngcontent-%COMP%]{margin:0 30px 48px}.ft-HomePage__tileView-tileTemplate[_ngcontent-%COMP%]{background-color:#fff}.ft-HomePage__tileView-tileTemplate-info[_ngcontent-%COMP%]{margin:0 12px}.ft-HomePage__tileView-tileTemplate-categories[_ngcontent-%COMP%], .ft-HomePage__tileView-tileTemplate-description[_ngcontent-%COMP%], .ft-HomePage__tileView-tileTemplate-metrics[_ngcontent-%COMP%], .ft-HomePage__tileView-tileTemplate-name[_ngcontent-%COMP%]{margin-top:12px;line-height:24px}.ft-HomePage__tileView-tileTemplate-name[_ngcontent-%COMP%]{font-weight:700;min-height:48px;max-height:48px}.ft-HomePage__tileView-tileTemplate-description[_ngcontent-%COMP%]{min-height:72px;max-height:72px;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box}.ft-HomePage__tileView-tileTemplate-metrics[_ngcontent-%COMP%]{margin-bottom:12px}.ft-HomePage__tileView-tileTemplate-categories[_ngcontent-%COMP%]{max-height:56px}.ft-HomePage__tileView-tileTemplate-category[_ngcontent-%COMP%]{padding:0 4px;border:1px solid #8991a9;background-color:#eaeaea;border-radius:8px;font-size:12px;margin-right:4px;margin-top:2px}.ft-HomePage__footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0}'],data:{animation:[Object(a.m)("animateTitle",[Object(a.j)("hidden",Object(a.k)({opacity:0})),Object(a.j)("visible",Object(a.k)({opacity:1})),Object(a.l)("hidden  => visible",[Object(a.e)("0.5s")])]),Object(a.m)("animateBeginButton",[Object(a.j)("hidden",Object(a.k)({opacity:0})),Object(a.j)("visible",Object(a.k)({opacity:1})),Object(a.l)("hidden  => visible",[Object(a.e)("0.5s 0.5s")])])]},changeDetection:0}),e})();var C=i("EJ/8");let O=(()=>{class e{constructor(e){this.categoriesService=e}resolve(){return this.categoriesService.getList({itemType:!0,publish:!0})}}return e.\u0275fac=function(t){return new(t||e)(l.Xb(C.b))},e.\u0275prov=l.Jb({token:e,factory:e.\u0275fac}),e})();var H=i("0IaG"),k=i("bTqV");let S=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[n.c]]}),e})();var V=i("fYo3"),M=i("cpWT"),y=i("+xaA");const I=[{path:"",component:v,resolve:{categories:O}}];let A=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},providers:[O,C.b],imports:[[n.c,H.e,S,V.a,o.c.forChild(I),M.a,k.b,y.a]]}),e})()}}]);