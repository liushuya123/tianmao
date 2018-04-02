//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();//获取滚动高度
        if (st > 700) {
            $(".topbar").slideDown();
        } else {
            $(".topbar").slideUp();
        }
        if (st > 500) {
            $(".leftbar").slideDown();
        } else {
            $(".leftbar").slideUp();
        }
    });
}
//dingbudaohang
{
    $(".sn-menu")
        .mouseenter(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).hide();
        })
}
//bannerlist
{
    $(".li")
        .mouseenter(function () {
            let index = $(this).index(".li");
            $(".list-pannel-con").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".li");
            $(".list-pannel-con").eq(index).hide();
        })
}
//banner
{
    $(".banner_navbox li").mouseenter(function () {
        let index = $(this).index(".banner_navbox li");
        $(".banner_navbox li").removeClass("active").eq(index).addClass("active");
        $(".bimg").removeClass("active").eq(index).addClass("active");
        n = index;
    })

    //自动轮播
    let n = 0;
    let l = $(".bimg").length;

    let st = setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".banner_navbox li").removeClass("active").eq(n).addClass("active");
        $(".bimg").removeClass("active").eq(n).addClass("active");
        switch (n) {
            case "1":
                $(".banner").removeClass("")
        }
    }

    $(".bannerimg").mouseenter(function () {
        clearInterval(st)
    })
    $(".bannerimg").mouseleave(function () {
        st = setInterval(move, 3000);
    })

}
//返回top
{
    $(".todingbu").click(function () {
        $("html,body").animate({scrollTop: 0})
    })
    // $(window).scroll(function () {
    //     let st = $(window).scrollTop();//获取滚动高度
    //     if (st > 0) {
    //         $(".rightlogo8").show();
    //     } else {
    //         $(".topbar").hide();
    //     }
    // });

}
//leftbartiaozhuan
{
    // let flag=true;
    $(".left-click").click(function () {
        // flag=false;
        let index = $(this).index(".left-click");
        let ot = $(".floorportlou").eq(index).offset().top - 100;
        // $(".left-click").removeClass("active1");
        // $(".left-click").eq(index).addClass("active1");
        // flag = true;
        $("html,body").animate({scrollTop: ot}, 200);
    });

    let arr2 = ["#64C333", "#FF0036", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#FF0036"];


    $(".left-click").mouseenter(function () {
        let index=$(this).index(".left-click");
        $(".left-click").css("background", "rgba(0,0,0,1)").eq(index).css("background", arr2[index]);
    });


    $(window).scroll(function () {
        let st = $(window).scrollTop();
        // if (flag){
        $(".floorportlou").each(function (e) {
            if (st > $(".floorportlou").eq(e).offset().top - 200) {
                $(".left-click").css("background", "rgba(0,0,0,1)").eq(e).css("background", arr2[e]);
            }
        })
        // }

    });
}
//right
{
    $(".right-logo").mouseenter(function () {
        let index = $(this).index(".right-logo");
        $(".right-fly").eq(index)
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    });
    $(".right-logo").mouseleave(function () {
        let index = $(this).index(".right-logo");
        $(".right-fly").eq(index)
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    });
    $(".rightlogo7").mouseenter(function () {
        $(".rightlogo-xiaoguo1").css("opacity", "1");
    });
    $(".rightlogo7").mouseleave(function () {
        $(".rightlogo-xiaoguo1").css("opacity", "0");
    })
}
//xianshi
{
    let i = 0;

    function active() {
        i++;
        if (i === 2) {
            i = 0;
        }
        if (i < 0) {
            i = 1;
        }
        $(".floorhead li").removeClass("active").eq(i).addClass("active");
        $(".floorbottom1").removeClass("active").eq(i).addClass("active");
    }

    let t = setInterval(active, 3000);

    $(".floorhead li").mouseenter(function () {
        clearInterval(t);
        let index = $(this).index(".floorhead li");
        $(".floorhead li").removeClass("active").eq(index).addClass("active");
        $(".floorbottom1").removeClass("active").eq(index).addClass("active");
        i = index;
    });
    $(".floorhead li").mouseleave(function () {
        t = setInterval(active, 3000);
    })

}