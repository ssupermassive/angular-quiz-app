(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KgmW:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var s=n("fXoL"),o=n("ofXK");function i(t,e){1&t&&s.Ob(0,"div",2)}const c=["*"];let r=(()=>{class t{constructor(t){this.hostElement=t,this.showShadowOffset=10,this._showShadow=!1}scrollHandler(t){this._showShadow=t.target.scrollTop>this.showShadowOffset}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(s.l))},t.\u0275cmp=s.Hb({type:t,selectors:[["ft-scroll-container"]],inputs:{showShadowOffset:"showShadowOffset"},ngContentSelectors:c,decls:3,vars:1,consts:[[1,"ft-ScrollContainer","ft-flex-container",3,"scroll"],["class","ft-ScrollContainer__shadow",4,"ngIf"],[1,"ft-ScrollContainer__shadow"]],template:function(t,e){1&t&&(s.jc(),s.Tb(0,"div",0),s.ac("scroll",function(t){return e.scrollHandler(t)}),s.ic(1),s.Sb(),s.Ec(2,i,1,0,"div",1)),2&t&&(s.Ab(2),s.kc("ngIf",e._showShadow))},directives:[o.l],styles:["[_nghost-%COMP%]{position:relative;height:100%;min-height:0;display:flex;flex-direction:column;flex-grow:1;flex-shrink:1}.ft-ScrollContainer[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:hidden}.ft-ScrollContainer__shadow[_ngcontent-%COMP%]{top:0;height:8px;width:100%;position:absolute;background:linear-gradient(180deg,rgba(0,0,0,.15),transparent)}"],changeDetection:0}),t})()},SZVw:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("ofXK"),o=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[s.c]]}),t})()},bf3N:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s});var s=function(t){return t[t.ONE_RIGHT_ANSWER=0]="ONE_RIGHT_ANSWER",t[t.MANY_RIGHT_ANSWER=1]="MANY_RIGHT_ANSWER",t}({});class o{constructor(t){this._answered=!1,this._marked=!1,this.id=t.id,this.text=t.text,this.options=t.options,this.publish=t.publish,this.category=t.category,this.subcategory=t.subcategory,this.code=t.code,this.explanation=t.explanation,this.image=t.image,this.imageKey=t.imageKey,this.service=t.service}get opts(){return JSON.parse(this.options)}set opts(t){this.options=JSON.stringify(t)}get type(){let t=0;for(const e of this.opts)if(e.isRight&&t++,t>1)return s.MANY_RIGHT_ANSWER;return s.ONE_RIGHT_ANSWER}get isCorrectly(){if(!this.selectedOptions||!this.selectedOptions.length)return!1;if(this.type===s.ONE_RIGHT_ANSWER){const[t]=this.selectedOptions;return this.opts[t].isRight}let t=!0;return this.opts.forEach((e,n)=>{(e.isRight&&!e.selected||!e.isRight&&e.selected)&&(t=!1)}),t}get answered(){return this._answered}set answered(t){this._answered=t}get hasOneRightAnswer(){return this.type===s.ONE_RIGHT_ANSWER}get selectedOptions(){const t=[];return this.opts.forEach((e,n)=>{e.selected&&t.push(n)}),t}get marked(){return this._marked}set marked(t){this._marked=t}get subcategoryName(){return this.subcategory?this.subcategory.name:""}get fullCategoryName(){var t;const e=this.subcategoryName;return e?`${this.category.name}: ${e}`:(null===(t=this.category)||void 0===t?void 0:t.name)||""}clone(){return new o(Object.assign({},this))}}},qmHy:function(t,e,n){"use strict";n.r(e),n.d(e,"TestingModule",function(){return H});var s=n("tyNb"),o=n("3Pt+"),i=n("ofXK"),c=n("+xaA"),r=n("Gwzt"),a=n("quSY"),f=n("fXoL"),l=n("LqzW"),u=n("ey9i"),g=n("jZ5U"),d=n("ycSy"),h=n("PVgB"),b=n("KgmW"),_=n("XO98");function p(t,e){1&t&&(f.dc(),f.Tb(0,"svg",3),f.Ob(1,"polygon",4),f.Sb())}function m(t,e){if(1&t){const t=f.Ub();f.Tb(0,"div",1),f.ac("click",function(){f.wc(t);const n=e.$implicit;return f.ec()._changeSelectedQuestion(n)}),f.Gc(1),f.Ec(2,p,2,0,"svg",2),f.Sb()}if(2&t){const t=e.$implicit,n=e.index,s=f.ec();f.Fb("ft-QuestionSelector__selected",s._selected===t.id)("ft-QuestionSelector__answered",t.answered),f.Ab(1),f.Ic(" ",n+1," "),f.Ab(1),f.kc("ngIf",t.marked)}}let x=(()=>{class t{constructor(){this.selectedChanged=new f.o}ngOnChanges(t){const{selected:e}=t;e&&e.currentValue&&(!e.previousValue&&e.currentValue||e.previousValue&&e.currentValue!==e.previousValue)&&(this._selected=e.currentValue)}_changeSelectedQuestion(t){this._selected=t.id,this.selectedChanged.emit(this._selected)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Hb({type:t,selectors:[["ft-question-selector"]],inputs:{questions:"questions",selected:"selected"},outputs:{selectedChanged:"selectedChanged"},features:[f.yb],decls:1,vars:1,consts:[["class","ft-QuestionSelector__number",3,"ft-QuestionSelector__selected","ft-QuestionSelector__answered","click",4,"ngFor","ngForOf"],[1,"ft-QuestionSelector__number",3,"click"],["class","ft-QuestionSelector__marked","viewBox","0 0 1 1","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["viewBox","0 0 1 1","xmlns","http://www.w3.org/2000/svg",1,"ft-QuestionSelector__marked"],["points","0,0 1,1 1,0","xmlns","http://www.w3.org/2000/svg"]],template:function(t,e){1&t&&f.Ec(0,m,3,6,"div",0),2&t&&f.kc("ngForOf",e.questions)},directives:[i.k,i.l],styles:[".ft-QuestionSelector__number[_ngcontent-%COMP%]{width:30px;height:30px;line-height:28px;font-size:16px;text-align:center;margin-left:8px;margin-top:8px;display:inline-block;border-radius:4px;cursor:pointer;border:1px solid #ccc;position:relative}.ft-QuestionSelector__number[_ngcontent-%COMP%]:hover{background-color:rgba(255,166,0,.5)}.ft-QuestionSelector__selected[_ngcontent-%COMP%]{border:1px solid orange}.ft-QuestionSelector__answered[_ngcontent-%COMP%]{background-color:#28a745;cursor:default}.ft-QuestionSelector__marked[_ngcontent-%COMP%]{position:absolute;top:0;right:0;fill:red;height:8px;width:8px}"],changeDetection:0}),t})();var w=n("bTqV"),k=n("kmnG"),C=n("qFsG");function T(t,e){if(1&t){const t=f.Ub();f.Tb(0,"ft-question-selector",17),f.ac("selectedChanged",function(e){return f.wc(t),f.ec(2)._changeCurrentQuestion(e)}),f.Sb()}if(2&t){const t=f.ec(2);f.kc("selected",t.currentQuestion&&t.currentQuestion.id)("questions",t._questions)}}function v(t,e){if(1&t){const t=f.Ub();f.Tb(0,"button",18),f.ac("click",function(){return f.wc(t),f.ec(2)._toggleFeedbackField(!0)}),f.Gc(1," \u0417\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0443? "),f.Sb()}}function P(t,e){if(1&t){const t=f.Ub();f.Tb(0,"mat-form-field",19),f.Tb(1,"mat-label"),f.Gc(2,"\u041e\u043f\u0438\u0448\u0438\u0442\u0435, \u0432 \u0447\u0451\u043c \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u0430"),f.Sb(),f.Tb(3,"textarea",20),f.ac("ngModelChange",function(e){return f.wc(t),f.ec(2)._feedbackText=e}),f.Sb(),f.Sb()}if(2&t){const t=f.ec(2);f.Ab(3),f.Fb("ft-TestingPage__feedback-textarea",!0),f.kc("ngModel",t._feedbackText)("matAutosizeMaxRows",6)("matAutosizeMinRows",1)}}function S(t,e){if(1&t){const t=f.Ub();f.Tb(0,"button",21),f.ac("click",function(){return f.wc(t),f.ec(2)._sendFeedback()}),f.Gc(1," \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "),f.Sb()}if(2&t){const t=f.ec(2);f.kc("disabled",!t._feedbackText)}}function y(t,e){if(1&t){const t=f.Ub();f.Tb(0,"button",22),f.ac("click",function(){return f.wc(t),f.ec(2)._toggleFeedbackField(!1)}),f.Gc(1," \u041e\u0442\u043c\u0435\u043d\u0430 "),f.Sb()}}function O(t,e){if(1&t){const t=f.Ub();f.Tb(0,"div",3),f.Tb(1,"div",4),f.Tb(2,"div",5),f.Tb(3,"div",6),f.Gc(4),f.Sb(),f.Tb(5,"ft-timer",7),f.ac("timeIsOver",function(){return f.wc(t),f.ec()._timeIsOver()}),f.Sb(),f.Sb(),f.Ob(6,"div",8),f.Ec(7,T,1,2,"ft-question-selector",9),f.Ec(8,v,2,0,"button",10),f.Ec(9,P,4,5,"mat-form-field",11),f.Tb(10,"div",12),f.Ec(11,S,2,1,"button",13),f.Ec(12,y,2,0,"button",14),f.Sb(),f.Sb(),f.Tb(13,"ft-scroll-container",15),f.Tb(14,"ft-testing-form",16),f.ac("answerReceived",function(e){return f.wc(t),f.ec()._answerReceived(e)}),f.Sb(),f.Sb(),f.Sb()}if(2&t){const t=f.ec();f.Ab(3),f.lc("title",t.testName),f.Ab(1),f.Ic(" ",t.quizController.testName,""),f.Ab(1),f.kc("time",t.quizController.testingTime),f.Ab(2),f.kc("ngIf",!t._showFeedback),f.Ab(1),f.kc("ngIf",!t._showFeedback),f.Ab(1),f.kc("ngIf",t._showFeedback),f.Ab(2),f.kc("ngIf",t._showFeedback),f.Ab(1),f.kc("ngIf",t._showFeedback),f.Ab(2),f.kc("question",t.currentQuestion)}}function q(t,e){if(1&t){const t=f.Ub();f.Tb(0,"div",23),f.Tb(1,"h1",24),f.Gc(2," \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0442\u0435\u0441\u0442 \u0435\u0449\u0451 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d :( "),f.Sb(),f.Tb(3,"button",25),f.ac("click",function(){return f.wc(t),f.ec().quizController.clear()}),f.Gc(4," \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e "),f.Sb(),f.Sb()}}const M=function(){return{userButton:!1,addQuestion:!1}};let I=(()=>{class t{constructor(t,e,n,s,o){this.feedbackService=t,this.quizController=e,this.route=n,this.confirmation=s,this.changeDetector=o,this.currentQuestionIndex=0,this._showFeedback=!1,this._subscription=new a.a}ngOnInit(){this._subscription.add(this.route.data.subscribe(t=>{if(this._questions=t.questions,this.quizController.questions=t.questions,this.quizController.isEmpty)return;const[e]=this._questions;this.currentQuestion=e}))}ngOnDestroy(){this._subscription.unsubscribe()}_changeCurrentQuestion(t){if(this.currentQuestion.id!==t)for(let e=0;e<this._questions.length;e++)if(this._questions[e].id===t){this.currentQuestion=this._questions[e],this.currentQuestionIndex=e;break}}_answerReceived(t){this._toggleFeedbackField(!1),this._feedbackText="";for(let e=this.currentQuestionIndex+1;e<this._questions.length;e++)if(!this._questions[e].answered)return this.currentQuestion=this._questions[e],void(this.currentQuestionIndex=e);for(let e=0;e<this.currentQuestionIndex;e++)if(!this._questions[e].answered)return this.currentQuestion=this._questions[e],void(this.currentQuestionIndex=e);this.quizController.endTest()}_timeIsOver(){this.quizController.endTest(!0)}_toggleFeedbackField(t){this._showFeedback=t}_sendFeedback(){this._feedbackText&&this._subscription.add(this.feedbackService.create({text:this._feedbackText,questionId:this.currentQuestion.id}).subscribe(()=>{this._toggleFeedbackField(!1),this._feedbackText="",this.changeDetector.markForCheck()}))}canDeactivate(t,e,n){return!this.quizController.isStarted||"/results"===n.url||this.confirmation.open({type:"confirm",message:"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d. \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435?"})}}return t.\u0275fac=function(e){return new(e||t)(f.Nb(l.b),f.Nb(u.c),f.Nb(s.a),f.Nb(g.b),f.Nb(f.h))},t.\u0275cmp=f.Hb({type:t,selectors:[["ft-test"]],decls:3,vars:6,consts:[[3,"showFooter","scrolledContent","headerButtonsConfig"],["class","ft-TestingPage ft-flexbox",4,"ngIf"],["class","ft-TestingPage__empty ft-flexbox ft-flex-column ft-justify-content-center ft-align-items-center",4,"ngIf"],[1,"ft-TestingPage","ft-flexbox"],[1,"ft-TestingPage__leftContainer","ft-flexbox","ft-flex-column","ft-flex-shrink-0"],[1,"ft-TestingPage__info","ft-flexbox","ft-align-items-center","ft-text-ellipsis"],[1,"ft-TestingPage__info-title","ft-flex-grow-1","ft-flex-shrink-1","ft-text-ellipsis",3,"title"],[1,"ft-TestingPage__info-timer","ft-flex-grow-0","ft-flex-shrink-0",3,"time","timeIsOver"],[1,"ft-TestingPage__separator"],["class","ft-TestingPage__selector",3,"selected","questions","selectedChanged",4,"ngIf"],["class","ft-TestingPage__feedback-show","mat-stroked-button","","color","warn",3,"click",4,"ngIf"],["class","ft-TestingPage__feedback-textareaContainer ft-flexbox ft-flex-column",4,"ngIf"],[1,"ft-flexbox"],["class","ft-TestingPage__feedback-hide","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngIf"],["class","ft-TestingPage__feedback-cancel","mat-stroked-button","","color","warn",3,"click",4,"ngIf"],[1,"ft-TestingPage__questionContainer"],[1,"ft-TestingPage__question","ft-flex-grow-1","ft-flex-shrink-1",3,"question","answerReceived"],[1,"ft-TestingPage__selector",3,"selected","questions","selectedChanged"],["mat-stroked-button","","color","warn",1,"ft-TestingPage__feedback-show",3,"click"],[1,"ft-TestingPage__feedback-textareaContainer","ft-flexbox","ft-flex-column"],["matInput","",3,"ngModel","mat-autosize","matAutosizeMaxRows","matAutosizeMinRows","ngModelChange"],["mat-stroked-button","","color","primary",1,"ft-TestingPage__feedback-hide",3,"disabled","click"],["mat-stroked-button","","color","warn",1,"ft-TestingPage__feedback-cancel",3,"click"],[1,"ft-TestingPage__empty","ft-flexbox","ft-flex-column","ft-justify-content-center","ft-align-items-center"],[1,"ft-TestingPage__empty-text"],[1,"ft-TestingPage__empty-back","btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(f.Tb(0,"ft-page",0),f.Ec(1,O,15,9,"div",1),f.Ec(2,q,5,0,"div",2),f.Sb()),2&t&&(f.kc("showFooter",!1)("scrolledContent",!1)("headerButtonsConfig",f.mc(5,M)),f.Ab(1),f.kc("ngIf",e._questions&&e._questions.length),f.Ab(1),f.kc("ngIf",!(e._questions&&e._questions.length)))},directives:[d.a,i.l,h.a,b.a,_.a,x,w.a,k.b,k.e,C.a,o.c,C.c,o.p,o.s],styles:["[_nghost-%COMP%]{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.ft-TestingPage[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.ft-TestingPage[_ngcontent-%COMP%]{background-color:#f0f0f0}.ft-TestingPage__leftContainer[_ngcontent-%COMP%]{padding:20px 12px;margin-top:8px;max-width:338px;min-width:338px;height:100%;background:#fff}.ft-TestingPage__info[_ngcontent-%COMP%]{margin:0 8px}.ft-TestingPage__info-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.ft-TestingPage__info-timer[_ngcontent-%COMP%]{margin-left:12px}.ft-TestingPage__separator[_ngcontent-%COMP%]{height:1px;background-color:#ccc;margin:12px 0}.ft-TestingPage__question[_ngcontent-%COMP%]{background-color:#fff;padding:20px 12px}.ft-TestingPage__questionContainer[_ngcontent-%COMP%]{margin:8px 0 0 8px}.ft-TestingPage__empty[_ngcontent-%COMP%]{background:url(common-bg.31dc277490d64dbb92a0.png);width:100%;height:100%}.ft-TestingPage__empty-text[_ngcontent-%COMP%]{text-align:center}.ft-TestingPage__empty-back[_ngcontent-%COMP%]{margin-top:24px}.ft-TestingPage__feedback-show[_ngcontent-%COMP%]{margin:18px 6px 0 8px}.ft-TestingPage__feedback-hide[_ngcontent-%COMP%]{margin-right:8px}.ft-TestingPage__feedback-cancel[_ngcontent-%COMP%], .ft-TestingPage__feedback-hide[_ngcontent-%COMP%]{width:50%}.ft-TestingPage__feedback-textarea[_ngcontent-%COMP%]{box-sizing:content-box}.ft-TestingPage__feedback-textareaContainer[_ngcontent-%COMP%]{margin-top:4px}@media (max-width:756px){.ft-TestingPage[_ngcontent-%COMP%]{flex-direction:column}.ft-TestingPage__leftContainer[_ngcontent-%COMP%]{max-width:100%;min-width:0;height:auto}.ft-TestingPage__question[_ngcontent-%COMP%]{margin-left:0}}"],changeDetection:0}),t})(),A=(()=>{class t{constructor(t,e){this.quizController=t,this.router=e}canActivate(){return this.quizController.isStarted||this.router.navigate(["home"]),this.quizController.isStarted}}return t.\u0275fac=function(e){return new(e||t)(f.Xb(u.c),f.Xb(s.b))},t.\u0275prov=f.Jb({token:t,factory:t.\u0275fac}),t})();var F=n("zlXg");let Q=(()=>{class t{constructor(t){this.questionsService=t}resolve(t){return this.questionsService.getList({publish:!0,random:!0,category:Number(t.params.category)})}}return t.\u0275fac=function(e){return new(e||t)(f.Xb(F.a))},t.\u0275prov=f.Jb({token:t,factory:t.\u0275fac}),t})(),N=(()=>{class t{canDeactivate(t,e,n,s){return!t.canDeactivate||t.canDeactivate(e,n,s)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=f.Jb({token:t,factory:t.\u0275fac}),t})();var E=n("ihCf"),R=n("fYo3"),z=n("SZVw");const G=[{path:"",pathMatch:"full",component:I,resolve:{questions:Q},canActivate:[A],canDeactivate:[N]}];let H=(()=>{class t{}return t.\u0275mod=f.Lb({type:t}),t.\u0275inj=f.Kb({factory:function(e){return new(e||t)},providers:[Q,A,F.a,N,l.b],imports:[[r.a,c.a,i.c,g.a,w.b,C.b,E.c,o.l,R.a,z.a,s.c.forChild(G)]]}),t})()},ycSy:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var s=n("fXoL"),o=n("cWlU"),i=n("ofXK"),c=n("p4Eg");function r(t,e){1&t&&s.Ob(0,"ft-page-footer",3)}const a=["*"];let f=(()=>{class t{constructor(){this.headerButtonsConfig={},this.scrolledContent=!0,this.showFooter=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["ft-page"]],inputs:{headerButtonsConfig:"headerButtonsConfig",scrolledContent:"scrolledContent",showFooter:"showFooter"},ngContentSelectors:a,decls:6,vars:7,consts:[[1,"ft-flexbox","ft-flex-column","ft-flex-shrink-1","ft-flex-grow-1","ft-height100percent"],[1,"ft-flex-shrink-0",3,"buttonsConfig"],["class","ft-flex-shrink-0",4,"ngIf"],[1,"ft-flex-shrink-0"]],template:function(t,e){1&t&&(s.jc(),s.Tb(0,"div",0),s.Ob(1,"ft-page-header",1),s.Tb(2,"div",0),s.Tb(3,"div"),s.ic(4),s.Sb(),s.Ec(5,r,1,0,"ft-page-footer",2),s.Sb(),s.Sb()),2&t&&(s.Ab(1),s.kc("buttonsConfig",e.headerButtonsConfig),s.Ab(1),s.Fb("Page__scrolledContent",e.scrolledContent),s.Ab(1),s.Cb(e.scrolledContent?"ft-flex-grow-1":"ft-flex-container"),s.Ab(2),s.kc("ngIf",e.showFooter))},directives:[o.a,i.l,c.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-shrink:1;flex-grow:1;height:100%;width:100%;min-height:0;min-width:0}.ft-Page__scrolledContent[_ngcontent-%COMP%]{overflow-y:scroll}"],changeDetection:0}),t})()}}]);