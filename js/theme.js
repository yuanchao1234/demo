// window.onload = () => {
//     // console.log('welcome')
//     var mainDiv = document.getElementById('main-div');
//     var middle = document.getElementById('middle');
//     var tm = document.getElementById('tm');
//     // console.log(middle.offsetTop);
//     // console.log(middle.getBoundingClientRect().top);
//     // 获取绿色middle模块离页面顶部的距离
//     var middleTop = middle.offsetTop || middle.getBoundingClientRect().top;
//     // 获取第二个透明且高度100%模块离页面顶部的距离
//     var tmTop = tm.offsetTop;
//     // 实时监听当前页面离页面顶部的距离
//     window.addEventListener("scroll", function(event) {
//         // 当前页面离页面顶部的距离
//         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//         // console.log(scrollTop)
//         // 判断切换背景图片
//         if (scrollTop < middleTop) {
//             mainDiv.style.backgroundImage = "url(../images/order_one_2.jpg)"
//         } else if (scrollTop > middleTop) {
//             mainDiv.style.backgroundImage = "url(../images/order_one_1.jpg)"
//         }
//     });
// }