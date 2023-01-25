const left = document.querySelector(".left")
const right = document.querySelector(".right")
const imgs = document.querySelectorAll('img')
const img = document.querySelector(".img")
const lis = document.querySelectorAll("li")
const wrap = document.querySelector(".image-wrap")
var index = 0
var timer

var leng =0
// 左
left.addEventListener("click", function () {
    clearInterval(timer)
    const num = index - 1
    if (num < 0) {
        index = imgs.length - 1
    } else {
        index--
    }
    // 清空图片class
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].className = ''
    }
    // 清空索引class
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
    }
    imgs[index].className = 'img'
    lis[index].className = 'active'
    setTimer()
})
// 右
right.addEventListener('click', function () {
    clearInterval(timer)
    const num = index + 1
    if (num > imgs.length - 1) {
        index = 0
    } else {
        index++
    }
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].className = ''
    }
    // 清空索引class
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
    }
    imgs[index].className = 'img'
    lis[index].className = 'active'
    setTimer()
})


wrap.addEventListener("mouseover",function(){
    clearInterval(timer)
})
wrap.addEventListener("mouseleave",function(){
    setTimer()
})

// 定时器 自动轮播
function setTimer() {
    timer = setInterval(() => {
        right.click()
    }, 2000)
}
setTimer()

