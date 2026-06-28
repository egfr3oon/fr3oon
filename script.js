/* ===========================
FR3ooN Website Script
=========================== */

const loader = document.getElementById("loader");
const website = document.getElementById("website");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

/* فتح باب المعبد */

function openTemple(){

    // فتح الباب
    leftDoor.style.transform="translateX(-100%)";
    rightDoor.style.transform="translateX(100%)";

    // زوم على الخلفية
    loader.style.transition="transform 2.5s ease, opacity .8s ease";

    setTimeout(()=>{

        loader.style.transform="scale(1.15)";

    },300);

    // فيد أوت
    setTimeout(()=>{

        loader.style.opacity="0";

    },1800);

    // إظهار الموقع
    setTimeout(()=>{

        loader.style.display="none";

        website.style.display="block";

        website.style.opacity="0";

        website.style.transition="opacity 1s ease";

        setTimeout(()=>{

            website.style.opacity="1";

        },50);

        document.body.style.overflowY="auto";

    },2600);

}

/* الضغط لفتح الموقع */

loader.addEventListener("click",openTemple,{
    once:true
});

/* ظهور الأقسام أثناء النزول */

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".fade-up").forEach(section=>{

    observer.observe(section);

});

// ===========================
// Mouse Golden Sand
// ===========================

document.addEventListener("mousemove",(e)=>{

    for(let i=0;i<2;i++){

        const particle=document.createElement("div");

        particle.className="particle";

        particle.style.left=e.clientX+(Math.random()*12-6)+"px";

        particle.style.top=e.clientY+(Math.random()*12-6)+"px";

        particle.style.setProperty(
        "--x",
        (Math.random()*60-30)+"px"
        );

        particle.style.setProperty(
        "--y",
        (-40-Math.random()*40)+"px"
        );

        particle.style.width=(4+Math.random()*6)+"px";

        particle.style.height=particle.style.width;

        document.body.appendChild(particle);

        setTimeout(()=>{

            particle.remove();

        },800);

    }

});

// ===========================
// Logo Glow
// ===========================

const logo=document.querySelector(".profile");

logo.addEventListener("mouseenter",()=>{

    logo.classList.add("active");

});

logo.addEventListener("mouseleave",()=>{

    logo.classList.remove("active");

});

// ===========================
// Logo Golden Dust Explosion & Glow (25 Particles - 1s Full Orbit)
// ===========================
window.addEventListener("load", () => {
    const logo = document.querySelector(".profile");
    if (!logo) return;

    logo.addEventListener("mouseenter", () => {
        logo.classList.add("active");
        
        // تعديل العدد لـ 25 نقطة
        const particleCount = 25; 
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "logo-particle";
            
            // تحديد سنتر اللوجو بالظبط
            const rect = logo.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            particle.style.left = centerX + "px";
            particle.style.top = centerY + "px";
            
            // توزيع الزوايا بانتظام لعمل دائرة كاملة محيطة باللوجو
            const angle = (i / particleCount) * 2 * Math.PI;
            const distance = 120 + Math.random() * 20; // المدار برة حدود اللوجو بشوية
            
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.setProperty("--tx", `${x}px`);
            particle.style.setProperty("--ty", `${y}px`);
            
            // أحجام متفاوتة ناعمة للغبار
            const size = 3 + Math.random() * 5;
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            
            // تأخيرات عشوائية شبه منعدمة عشان ينفجروا مع بعض بسرعة
            particle.style.animationDelay = (Math.random() * 0.05) + "s";
            
            document.body.appendChild(particle);
            
            // مسح النقطة فوراً بعد 1 ثانية
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });

    logo.addEventListener("mouseleave", () => {
        logo.classList.remove("active");
    });
});

// ===========================
// Logo Glow Effect - By Levi
// ===========================
window.addEventListener("load", () => {
    const logo = document.querySelector(".profile");

    if (!logo) return;

    logo.addEventListener("mouseenter", () => {
        logo.classList.add("active");
    });

    logo.addEventListener("mouseleave", () => {
        logo.classList.remove("active");
    });
});