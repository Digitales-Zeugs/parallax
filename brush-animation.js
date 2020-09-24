var controller = new ScrollMagic.Controller();

var tlFirstScroll = new TimelineMax();

// Desktop
// if (window.innerWidth > 720) {
//     console.log('desktop');
//     tlFirstScroll
//     .from('.section_1_01', 60000, {y: "140%"})
//     .to('.section_1_01', {y: "0%"})
//     .from('.section_1_02', 60000, {y: "140%"})
//     .to('.section_1_02', {y: "0%"})
//     .from('.section_1_03', 50000, {y: "2800%"})
//     .to('.section_1_03', 40000, {y: "0%"})
//     .to('.section_1_02', 40000, {y: "-175%"}, "-=40000")
//     .from('.section_1_04', 40000, {y: "2800%"}, "-=50000")
//     .to('.section_1_04', 80000, {y: "0%"})
//     .to('.section_1_04', 120000, {y: "-1800%"})
//     .from('.section_1_05', 20000, {y: "450%"}, "-=90000")
//     .to('.section_1_05', 10000, {y: "0%"})
//     .to('.section_1_05', 60000, {y: "-2800%"})
//     .from('.heads-container', 50000, {y: "200%"}, "-=45000")
//     .to('.heads-container', 20000, {y: "0%", ease: Power3.easeInOut})
//     .to('.heads-container', 270000, {y: "-1100%", ease: Power3.easeOut})
// }

// Mobile
// if (window.innerWidth < 720) {
    tlFirstScroll
    .from('.section_1_01', 50000, {y: "140%", ease: Power3.easeInOut})
    .to('.section_1_01', {y: "0%", ease: Power3.easeOut})
    .from('.section_1_02', 50000, {y: "140%"})
    .to('.section_1_02', {y: "0%"})
    .from('.section_1_03', 40000, {y: "2800%"})
    .to('.section_1_03', 40000, {y: "0%"})
    .from('.section_1_04', 40000, {y: "2800%"}, "-=50000")
    .to('.section_1_04', 80000, {y: "0%"})
    .from('.section_1_05', 20000, {y: "550%"}, "-=90000")
    .to('.section_1_05', 10000, {y: "0%"})
    .from('.heads-container', 40000, {y: "200%"}, "-=45000")
    .to('.heads-container', 20000, {y: "0%", ease: Power3.easeInOut})
// }


// // Scene
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 0,
    duration: "400%"
})

.setTween(tlFirstScroll)
.setPin('.trigger')
.addTo(controller);