import{a as Z,b as M,c as ee,d as te,g as ne,h as ie,l as ae,m as oe}from"./chunk-JIYL2G2E.js";import{A as K,B as Q,C as I,F as X,v as R,w as W,y as H}from"./chunk-5EGWKPCX.js";import{$ as L,A as y,Aa as J,B as x,Ka as A,Q as m,R as w,W as G,Y as O,_ as Y,a as V,aa as F,ba as T,ca as D,da as a,ea as o,fa as S,ia as b,la as p,ma as C,na as U,oa as d,pa as f,q as z,qa as N,r as g,sa as q,t as $,v as B,w as v}from"./chunk-QJIXC3RR.js";var re=(()=>{let n=class n{constructor(t){this.afs=t,this.planCollection=R(this.afs,"planEvents")}getAllEvents(){return H(this.planCollection,{idField:"id"})}createEvent(t){return K(this.planCollection,t)}updateEvent(t,e){let i=I(this.afs,`planEvents/${e}`);return X(i,V({},t))}deleteEvent(t){let e=I(this.afs,`planEvents/${t}`);return Q(e)}};n.\u0275fac=function(e){return new(e||n)($(W))},n.\u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();function _e(r,n){if(r&1){let c=b();a(0,"div",39),p("click",function(){let i=y(c).$implicit,h=C();return x(h.addListener(i))}),d(1),o()}if(r&2){let c=n.$implicit;O("calendar__prev_day",c.name==="prev")("calendar__next_day",c.name==="next")("calendar__today",c.name==="today")("calendar__event_day",c.name==="event"),m(1),N(" ",c.day," ")}}function se(r,n){if(r&1){let c=b();a(0,"div",40),p("click",function(){let i=y(c).$implicit,h=C(2);return x(h.deleteEvent(i))}),a(1,"div",41),S(2,"div",42),a(3,"h3",43),d(4),o()(),a(5,"div",44)(6,"p",45),d(7),o()()()}if(r&2){let c=n.$implicit;m(4),f(c.eventName),m(3),N(" ",c.eventTimeFrom+" - "+c.eventTimeTo," ")}}function pe(r,n){if(r&1&&T(0,se,8,2,"div",46,F),r&2){let c=C();D(c.eventsArray)}}function me(r,n){r&1&&(a(0,"div",47)(1,"h2",48),d(2,"No Events"),o()())}var E=(()=>{let n=class n{constructor(t,e){this.fb=t,this.planService=e,this.today=new Date,this.month=this.today.getMonth(),this.year=this.today.getFullYear(),this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.days=[],this.isEventModalOpen=!1,this.eventsArray=[],this.dayOfEvent=[]}ngOnInit(){this.initCalendar(),this.initEventForm()}initEventForm(){this.eventForm=this.fb.group({eventName:[null,M.required],eventTimeFrom:[null,M.required],eventTimeTo:[null,M.required],day:[null],month:[null],year:[null]})}initCalendar(){let t=new Date(this.year,this.month,1),e=new Date(this.year,this.month+1,0),h=new Date(this.year,this.month,0).getDate(),_=e.getDate(),s=t.getDay(),u=7-e.getDay()-1;for(let l=s;l>0;l--)this.days.push({day:h-l+1,name:"prev"});for(let l=1;l<=_;l++){let k=!1;this.planService.getAllEvents().subscribe(de=>{de.forEach(P=>{P.day===l&&P.month===this.month+1&&P.year===this.year&&(k=!0)})}),l===new Date().getDate()&&this.year===new Date().getFullYear()&&this.month===new Date().getMonth()?(this.activeDay=l,this.getActiveDay(l),this.getUserEvents(l),k?this.days.push({day:l,name:"event"}):this.days.push({day:l,name:"today"})):k?this.days.push({day:l,name:"event"}):this.days.push({day:l,name:"day"})}for(let l=1;l<=u;l++)this.days.push({day:l,name:"next"})}prevMonth(){this.month--,this.month<0&&(this.month=11,this.year--),this.days=[],this.initCalendar()}nextMonth(){this.month++,this.month>11&&(this.month=0,this.year++),this.days=[],this.initCalendar()}goToTodaysDate(){this.today=new Date,this.month=this.today.getMonth(),this.year=this.today.getFullYear(),this.days=[],this.initCalendar()}getDateInput(t){let e=t.target.value;e=e.replace(/[^0-9/]/g,""),e.length===2&&(e+="/"),e.length>7&&(e=e.slice(0,7)),t.inputType==="deleteContentBackward"&&e.length===3&&(e=e.slice(0,2)),t.target.value=e}goToInputDate(t){let e=t.split("/");if(e.length===2&&e[0]>0&&e[0]<13&&e[1].length===4){this.month=e[0]-1,this.year=e[1],this.days=[],this.initCalendar();return}alert("Invalid date")}toggleAddEventModal(){this.isEventModalOpen=!this.isEventModalOpen}setDateFromAndTo(t){let e=t.target.value;e=e.replace(/[^0-9:]/g,""),e.length===2&&(e+=":"),e.length>5&&(e=e.slice(0,5)),t.inputType==="deleteContentBackward"&&e.length===3&&(e=e.slice(0,2)),t.target.value=e}getDateFrom(t){this.setDateFromAndTo(t)}getDateTo(t){this.setDateFromAndTo(t)}addListener(t){this.getActiveDay(t.day),this.getUserEvents(t.day),t.name==="prev"?this.prevMonth():t.name==="next"&&this.nextMonth()}getActiveDay(t){let e=new Date(this.year,this.month,t);this.dayName=e.toString().split(" ")[0],this.eventDateName=t+" "+this.months[this.month]+" "+this.year}getUserEvents(t){this.planService.getAllEvents().subscribe(e=>{this.eventsArray=[],this.dayOfEvent=[],e.forEach(i=>{t===i.day&&this.month+1===i.month&&this.year===i.year&&this.eventsArray.push(i)}),this.dayOfEvent.push(t)})}createEvent(){this.eventForm.value.day=this.dayOfEvent[0],this.eventForm.value.month=this.month+1,this.eventForm.value.year=this.year;let t=this.eventForm.value.eventTimeFrom,e=this.eventForm.value.eventTimeTo;if(t==null||e==null){alert("Please fill all the fields");return}let i=t.split(":"),h=e.split(":");if(i.length!==2||h.length!==2){alert("Invalid Time Format");return}let[_,s]=i,[u,l]=h;if(isNaN(_)||isNaN(s)||isNaN(u)||isNaN(l)||_<0||_>23||s<0||s>59||u<0||u>23||l<0||l>59){alert("Invalid Time Format");return}this.planService.createEvent(this.eventForm.value).then(()=>{this.eventForm.reset(),this.isEventModalOpen=!1})}deleteEvent(t){confirm("Are you sure you want to delete this event?")&&this.planService.deleteEvent(t.id).then(()=>{})}};n.\u0275fac=function(e){return new(e||n)(w(ae),w(re))},n.\u0275cmp=B({type:n,selectors:[["app-plan"]],standalone:!0,features:[q],decls:66,vars:7,consts:[[1,"container"],[1,"plan__wrapper"],[1,"plan__calendar_block"],[1,"calendar__main_block"],[1,"calendar__inner"],[1,"calendar__inner_header"],[1,"calendar__header_nav"],["src","assets/images/previous-icon.svg","alt","",1,"calendar__nav_previous",3,"click"],[1,"calendar__nav_title"],["src","assets/images/next-icon.svg","alt","",1,"calendar__nav_next",3,"click"],[1,"calendar__inner_main"],[1,"calendar__header_weekdays"],[1,"calendar__weekdays_item"],[1,"calendar__inner_days"],[1,"calendar__inner_footer"],[1,"calendar__footer_input"],["type","text","placeholder","mm/yyyy",1,"calendar__input_item",3,"input"],["inputElement",""],[1,"calendar__input_button",3,"click"],[1,"calendar__footer_button",3,"click"],[1,"events__main_block"],[1,"event__header_block"],[1,"event__header_weekname"],[1,"event__header_date"],[1,"event__main_block"],[1,"event__footer_block"],[1,"event__add_wrapper"],[1,"event__add_header"],[1,"add__header_title"],["src","assets/images/close-icon.svg","alt","",1,"add__header_close",3,"click"],[1,"event__add_main",3,"formGroup"],[1,"event__add_block"],["formControlName","eventName","type","text","placeholder","Event Name",1,"add__block_input"],["formControlName","eventTimeFrom","type","text","placeholder","Event Time From",1,"add__block_input",3,"input"],["formControlName","eventTimeTo","type","text","placeholder","Event Time To",1,"add__block_input",3,"input"],[1,"event__add_footer"],["type","button",1,"add__footer_button",3,"click"],[1,"event__add_circle"],["type","button",1,"add__circle_button",3,"click"],[1,"calendar__main_day",3,"click"],[1,"event__block_item",3,"click"],[1,"event__item_title"],[1,"item__title_circle"],[1,"item__title_name"],[1,"event__item_time"],[1,"item__time_text"],["class","event__block_item"],[1,"event__block_empty"],[1,"event__empty_text"],["class","calendar__main_day",3,"calendar__prev_day","calendar__next_day","calendar__today","calendar__event_day"]],template:function(e,i){if(e&1){let h=b();a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"img",7),p("click",function(){return i.prevMonth()}),o(),a(8,"p",8),d(9),o(),a(10,"img",9),p("click",function(){return i.nextMonth()}),o()()(),a(11,"div",10)(12,"div",11)(13,"p",12),d(14,"Sun"),o(),a(15,"p",12),d(16,"Mon"),o(),a(17,"p",12),d(18,"Tue"),o(),a(19,"p",12),d(20,"Wed"),o(),a(21,"p",12),d(22,"Thu"),o(),a(23,"p",12),d(24,"Fri"),o(),a(25,"p",12),d(26,"Sat"),o()(),a(27,"div",13),T(28,_e,2,9,"div",49,F),o()(),a(30,"div",14)(31,"div",15)(32,"input",16,17),p("input",function(s){return i.getDateInput(s)}),o(),a(34,"button",18),p("click",function(){y(h);let s=U(33);return x(i.goToInputDate(s.value))}),d(35,"Go"),o()(),a(36,"button",19),p("click",function(){return i.goToTodaysDate()}),d(37,"Today"),o()()()(),a(38,"div",20)(39,"div",21)(40,"p",22),d(41),o(),a(42,"p",23),d(43),o()(),a(44,"div",24),Y(45,pe,2,0)(46,me,3,0),o(),a(47,"div",25)(48,"div",26)(49,"div",27)(50,"p",28),d(51,"Add Event"),o(),a(52,"img",29),p("click",function(){return i.toggleAddEventModal()}),o()(),a(53,"div",30)(54,"div",31),S(55,"input",32),o(),a(56,"div",31)(57,"input",33),p("input",function(s){return i.getDateFrom(s)}),o()(),a(58,"div",31)(59,"input",34),p("input",function(s){return i.getDateTo(s)}),o()()(),a(60,"div",35)(61,"button",36),p("click",function(){return i.createEvent()}),d(62,"Add Event"),o()()(),a(63,"div",37)(64,"button",38),p("click",function(){return i.toggleAddEventModal()}),d(65,"+"),o()()()()()()()}e&2&&(m(9),f(i.months[i.month]+" "+i.year),m(19),D(i.days),m(13),f(i.dayName),m(2),f(i.eventDateName),m(2),L(45,i.eventsArray.length>=1?45:46),m(3),O("active",i.isEventModalOpen),m(5),G("formGroup",i.eventForm))},dependencies:[oe,Z,ee,te,ne,ie],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{width:100%;height:100%;padding:20px;position:relative;background:#f5f5f5;border-radius:0 10px 10px 0}.plan__wrapper[_ngcontent-%COMP%]{height:100%}.plan__calendar_block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:100%}.calendar__main_block[_ngcontent-%COMP%]{width:60%;height:100%}.calendar__main_day[_ngcontent-%COMP%]{width:14.28%;height:76px;border:1px solid #f5f5f5;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#007efe}.calendar__main_day[_ngcontent-%COMP%]:not(.calendar__prev_day, .calendar__next_day)[_ngcontent-%COMP%]:hover{color:#fff;background:#007EFE}.calendar__inner[_ngcontent-%COMP%]{width:100%;height:100%;background:#fff;padding:20px;border-radius:10px;position:relative;display:flex;align-items:center;justify-content:space-between;flex-direction:column}.calendar__inner[_ngcontent-%COMP%]:before, .calendar__inner[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:100%;width:12px;height:97%;border-radius:0 5px 5px 0;background:#ececec;transform:translateY(-50%)}.calendar__inner[_ngcontent-%COMP%]:before{height:94%;left:calc(100% + 12px);background:rgb(225,225,225)}.calendar__inner_header[_ngcontent-%COMP%]{width:100%}.calendar__inner_main[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.calendar__inner_days[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-wrap:wrap;border:1px solid #f5f5f5}.calendar__inner_footer[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.calendar__header_nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 20px}.calendar__header_weekdays[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;margin-top:20px}.calendar__nav_previous[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.calendar__nav_title[_ngcontent-%COMP%]{font-size:20px;color:#7e7e7e}.calendar__nav_next[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.calendar__weekdays_item[_ngcontent-%COMP%]{width:14.28%;height:100%;display:flex;align-items:center;justify-content:center;color:#7e7e7e}.calendar__prev_day[_ngcontent-%COMP%], .calendar__next_day[_ngcontent-%COMP%]{color:#7e7e7e}.calendar__event_day[_ngcontent-%COMP%]{position:relative}.calendar__event_day[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:10%;left:50%;width:75%;height:5px;border-radius:30px;transform:translate(-50%);background:#007EFE}.calendar__today[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.calendar__active[_ngcontent-%COMP%]{background:#007EFE;color:#fff}.calendar__footer_input[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:6px;overflow:hidden;border:1px solid #007EFE}.calendar__footer_button[_ngcontent-%COMP%]{padding:6px 14px;border:1px solid #007EFE;border-radius:6px;background:transparent;cursor:pointer;color:#007efe}.calendar__footer_button[_ngcontent-%COMP%]:hover{background:#007EFE;color:#fff}.calendar__input_item[_ngcontent-%COMP%]{width:100%;height:30px;outline:none;border:none;border-radius:6px;padding:0 20px;color:#007efe}.calendar__input_item[_ngcontent-%COMP%]::placeholder{color:#007efe}.calendar__input_button[_ngcontent-%COMP%]{padding:6px 10px;border:none;border-left:1px solid #007EFE;background:transparent;cursor:pointer;color:#007efe}.calendar__input_button[_ngcontent-%COMP%]:hover{background:#007EFE;color:#fff}.calendar__main_day.calendar__event_day[_ngcontent-%COMP%]:hover:after{background:#fff}.events__main_block[_ngcontent-%COMP%]{width:36%;position:relative}.event__header_block[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;padding:40px}.event__header_weekname[_ngcontent-%COMP%]{font-size:30px;font-weight:600;color:#007efe}.event__header_date[_ngcontent-%COMP%]{color:#7e7e7e}.event__main_block[_ngcontent-%COMP%]{width:100%;height:440px;overflow:scroll}.event__main_block[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.event__block_item[_ngcontent-%COMP%]{width:100%;padding:12px 30px;color:#fff;position:relative;background:linear-gradient(90deg,rgba(0,51,255,.0470588235),transparent);cursor:pointer}.event__block_item[_ngcontent-%COMP%]:nth-child(2n){background:transparent}.event__block_item[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,rgba(0,51,255,.2666666667),transparent)}.event__block_item[_ngcontent-%COMP%]:after{content:"\\2713";position:absolute;top:50%;right:0;font-size:3rem;line-height:1;display:none;align-items:center;justify-content:center;opacity:.3;color:#007efe;transform:translateY(-50%)}.event__block_item[_ngcontent-%COMP%]:hover:after{display:flex}.event__block_empty[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;margin-top:200px}.event__empty_text[_ngcontent-%COMP%]{color:#007efe}.event__item_title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}.event__item_time[_ngcontent-%COMP%]{margin-top:5px;margin-left:30px;font-size:14px;color:#7e7e7e}.event__add_wrapper[_ngcontent-%COMP%]{position:absolute;bottom:80px;left:50%;width:100%;max-height:0;overflow:hidden;border-radius:5px;background-color:#fff;transform:translate(-50%);transition:max-height .5s ease}.event__add_header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px}.event__add_main[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-start;justify-content:space-between;flex-direction:column;gap:20px;padding:15px 20px}.event__add_block[_ngcontent-%COMP%]{width:100%}.event__add_footer[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;padding:20px}.event__footer_block[_ngcontent-%COMP%]{width:100%}.item__title_circle[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#007EFE}.item__title_name[_ngcontent-%COMP%]{color:#007efe}.add__header_title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.add__header_close[_ngcontent-%COMP%]{cursor:pointer;width:20px;height:20px}.add__block_input[_ngcontent-%COMP%]{width:100%;height:30px;outline:none;border:none;border-bottom:1px solid #f5f5f5;padding:0 10px;font-size:1rem;font-weight:400;color:#007efe}.add__block_input[_ngcontent-%COMP%]::placeholder{color:#a5a5a5}.add__block_input[_ngcontent-%COMP%]:focus{border-bottom:1px solid #007EFE}.add__block_input[_ngcontent-%COMP%]:focus::placeholder{color:#007efe}.add__footer_button[_ngcontent-%COMP%]{height:40px;font-size:16px;font-weight:500;outline:none;border:none;color:#fff;background-color:#007efe;border-radius:5px;cursor:pointer;padding:5px 10px;border:1px solid #007EFE}.add__footer_button[_ngcontent-%COMP%]:hover{background-color:transparent;color:#007efe}.add__circle_button[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:50px;height:50px;display:flex;align-items:center;justify-content:center;font-size:30px;color:#007efe;border:2px solid #007EFE;opacity:.5;border-radius:50%;background-color:transparent;cursor:pointer}.add__circle_button[_ngcontent-%COMP%]:hover{opacity:1}.event__add_wrapper.active[_ngcontent-%COMP%]{max-height:300px}']});let r=n;return r})();var he=[{path:"",component:E}],le=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=v({type:n}),n.\u0275inj=g({imports:[A.forChild(he),A]});let r=n;return r})();var Oe=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=v({type:n}),n.\u0275inj=g({imports:[J,le,E]});let r=n;return r})();export{Oe as PlanModule};
