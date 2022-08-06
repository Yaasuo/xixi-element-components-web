import{d as c,r as d,g as i,u as l,b as p,o as v}from"./index.2b8db71b.js";const C=c({__name:"index",setup(m){let u=d([{title:"\u8D2D\u7269",start:"2022-08-11 10:00:00",end:"2022-08-11 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2022-08-12 08:00:00",end:"2022-08-12 16:00:00"}]),r=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"\u5403\u996D"};u.value.push(t),console.log(e)},a=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),s=n[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),o=n[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>\u5F00\u59CB\u65F6\u95F4: ${s}</div>
         <div>\u7ED3\u675F\u65F6\u95F4: ${o}</div>
         <div>\u6807\u9898: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=p("m-calendar");return v(),i(n,{events:l(u),onDateClick:l(r),eventContent:l(a)},null,8,["events","onDateClick","eventContent"])}}});export{C as default};
