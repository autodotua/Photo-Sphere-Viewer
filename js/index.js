$(() => {
    $("#login").click(() => {
        if ($("#username").val() == "") {
            alert("用户名为空！");
        }
        else if ($("#password").val() == "") {
            alert("密码为空！");
        }
        else if ($("#username").val() == "admin" && $("#password").val() == "admin") {
            alert("登陆成功")
        }
        else {
            alert("登陆失败")
        }
    });


    $(".part2-list a").click(function (e) {
        let text = $(this).text()
        $(".part2-list a").removeClass("active")
        $(this).addClass("active")
        $("#part2-img").attr("src","img/"+text+".jpg")
        $("#part2-text").text("这里显示"+text+"的介绍")
    })

    $("#link-part1").click(()=>{
        $("#part1").show();
        $("#part2").hide();
    });
    $("#link-part2").click(()=>{
        $("#part1").hide();
        $("#part2").show();
    });
})