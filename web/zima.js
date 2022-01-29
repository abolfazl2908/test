var slide=document.getElementsByClassName('slide');
var dot=document.getElementsByClassName('dots');
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');
var n=0;
var i;
function disnone(){
    for(i=0;i<slide.length;i++){
        slide[i].style.display='none';
        //این حلقه و فانکشن آن عناصر با کلاس اسلاید را همگی شان را دیسپلی هیچ میدهد
    }
}
//برای آنکه دیس پلی ها هم دیگر اضافه نشوند باید قبل انکه شکل بعدی دیسپلی اش بلاک بشه دیسپلی شکل قبلی حذف بشه
function no_active(){
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
        // این حلقه در واقع کلاس تمام dotهارا از حالت اکتیو خارج میکند پس به این ترتیب قبا آنکه کلاس بعدی اکتیو بشه کلاس فعلی حذف شده است 
    }
}
next.addEventListener('click',function(e){
    e.preventDefault();//از آنجا که این دکمه تگ ای است پس باید از حالت عدی آن جلوگیری کرد یعنی نباید وقتی کلیک شد صفحه تازه شود یا به جایی هدایت شویم
    n++;
    if(n>slide.length-1){
        n=0
        //از آنجا که طول اسلاید 3 است ولی ایندکس آن از صفر تا دو است پس ما میگوییم هرقت از دو بیشتر شد به صفر برگرداند چون وقتی از دو بالاتر اگر به صفر برنگردانیم برای آن اسلایدی نداریم
    }
    disnone();
    no_active();
    slide[n].style.display='block';
    dot[n].classList.add('active');//اسلاید و نشانکر را قبل آنکه دیسپلی بعدی را بلوک کنیم ابتدا با فراخئانی فانکشن هایش حذف میکنیم و سپس به ازای هر نکست که به عدد اضافه میشود آن را نشان میدهیم
})
// متد بالا در واقع یک فانکشن ورویداد را به یک عنصر اچ تی ام ال منسوب میکند 
prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n<0){
        n=2
    }
    disnone();
    no_active();
    slide[n].style.display='block';
    dot[n].classList.add('active');
})
//این نیز همانند نکست کار میکن فقط با این تفاوت که از مقدار عدد nکاسته میشود
setInterval(function(){
    n++;
    if(n>slide.length-1){
        n=0
    }
    disnone();
    no_active();
    slide[n].style.display='block';
    dot[n].classList.add('active');
}, 5000);//به ازای هر 5 ثانیه مان تابع دوباره بصورت خودکار اجرا میشودو چون به راست اسلاید میچرخد پس باید از تابع اول تنها استفاده شود
