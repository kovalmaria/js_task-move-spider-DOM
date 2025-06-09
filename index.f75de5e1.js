"use strict";
const spider = document.querySelector(".spider");
const wall = document.querySelector(".wall");
wall.addEventListener("click", (e)=>{
    const wallRect = wall.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;
    const clickX = e.clientX - wallRect.left - wall.clientLeft;
    const clickY = e.clientY - wallRect.top - wall.clientTop;
    let x = clickX - spiderWidth / 2;
    let y = clickY - spiderHeight / 2;
    const maxLeft = wall.clientWidth - spiderWidth;
    const maxTop = wall.clientHeight - spiderHeight;
    x = Math.max(0, Math.min(x, maxLeft));
    y = Math.max(0, Math.min(y, maxTop));
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
});

//# sourceMappingURL=index.f75de5e1.js.map
