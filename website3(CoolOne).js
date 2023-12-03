const tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".two",

        //trigger:"two" kina rakheko vanda jaba region 2 enter garxam, taba chai yo chij haru chalos vanera darsako.....
        start: "0% 80%",
        end: "50% 50%",
        scrub: 1,
        // markers: true
    }
})

tl.to("#fanta", {
    top: "120%",
    left: "5%",
}, "suiii")

tl.to("#orangeslice", {
    top: "130%",
    left: "20%",
    rotate: "180deg"
}, "suiii")


tl.to("#orange", {
    top: "163%",
    left: "80%",
    scale: "0.8"
}, "suiii")



tl.to("nav", {
    top: "-100%"

}, "suiii")

tl.to("#leaf", {
    top: "115%",
    rotate: "150deg",
    left: "70%"

}, "suiii")

// sabai ko paxadi same naam dina le k huda raixa ta vanda same time ma animate huney raixa dispite of the fact they have tl


const tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: ".three",

        //trigger:".three" kina rakheko vanda jaba region 2 enter garxam, taba chai yo chij haru chalos vanera darsako.....
        start: "0% 80%",
        end: "50% 50%",
        scrub: 1,
        // markers: true
    }

    //yo arko pani banaunu ko lakxya k ho ta vanda aba third page tira proceed garxam.. taba chai yo animation activate hos vanney ho
})
tl2.to("#orangeslice", {

    top: "195%",
    left: "40%",
    rotateX: "20deg"
}, "eheheh")

tl2.to("#fanta", {

    top: "210%",
    left: "30%",
    scale: "0.9",
    rotateX: "20deg"
}, "eheheh"),



    tl2.from("#coke", {
        rotate: "-90deg",
        left: "-50%",
        rotateX: "20deg"
    }, "eheheh"),


    tl2.from("#pepsi", {
        rotate: "90deg",
        left: "50%",
        scale: "0.9",
        rotateX: "20deg"
    }, "eheheh")

    ,

    tl2.from(".tukrapepsi", {
        rotate: "-90deg",
        left: "50%",
    }, "eheheh"),

    tl2.to(".tukrapepsi", {
        top: "0%"

    })



    ,

    tl2.from(".tukracoke", {
        rotate: "-90deg",
        left: "-50%",
    }, "eheheh")

