const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function crcmouseflwer() 
{
    window.addEventListener("mousemove", (dets) => {
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    //    document.querySelector("#minicircle2").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    //    document.querySelector("#minicircle3").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    //    document.querySelector("#minicircle4").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    //    document.querySelector("#minicircle5").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;

    })
}

crcmouseflwer();