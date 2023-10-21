import {gsap} from "gsap";

/**
 * @description 页面动画, card式页面加载
 * */
function cardLoading(elements:HTMLElement[]){
    const loader = gsap.timeline();
    const duration = 0.25;
    const delay = .35;
    loader.staggerTo(elements,duration,{x:100,opacity:1},delay)
}

export default cardLoading;