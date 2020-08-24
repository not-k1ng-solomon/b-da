$("body").css("overflow-x", "hidden");
$("form").submit(function () {

    var formID = $(this).attr('id');
    var formNm = $('#' + formID);

    $.ajax({
        type: "POST",
        url: '../mail.php',
        data: formNm.serialize(),
        success: function (data) {
            $('#'+formID)[0].reset();
            $('#'+formID +' .good_z').html("<p class='text-success text-f-b'>Отлично, мы свяжемся с вами в ближайшее время</p>");
        },
        error: function (jqXHR, text, error) {
            $(formNm).html(error);
        }
    });
    return false;
});
$("#polzunok").slider({
    animate: "slow",
    range: "min",
    min: 10,
    value: 20,
    slide: function (event, ui) {
        $("#result-polzunok").text(ui.value + "%");
        $("#send-result-polzunok").val(ui.value);
    }
});
$("#result-polzunok").text($("#polzunok").slider("value") + "%");
$("#send-result-polzunok").val($("#polzunok").slider("value"));
var selection = $(".selector").slider("value");
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(scrolled);
    // if (scrolled >= 560) {
    //     $('#nav').removeClass('navbar-color');
    //     $('#nav').addClass('navbar-color-scroll', 1000, 'easeOutBounce');
    // } else {
    //     $('#nav').removeClass('navbar-color-scroll');
    //     $('#nav').addClass('navbar-color', 1000, 'easeOutBounce');
    // }
    // if(scrolled >= 4100 && scrolled <= 5000){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_tarif').addClass('active');
    // }
    // if(scrolled >= 550 && scrolled <= 2000){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_o_nas').addClass('active');
    // }
    // if(scrolled >= 2000 && scrolled <= 2650){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_calc').addClass('active');
    // }
    //
    // if(scrolled >= 4700 && scrolled <= 5400){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_team').addClass('active');
    // }
    // if(scrolled >= 5400 && scrolled <= 6000){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_partners').addClass('active');
    // }
    // if(scrolled >= 6500 && scrolled <= 6800){
    //     $('.navbar-nav li').removeClass('active');
    //     $('.navbar-nav #menu_contacts').addClass('active');
    // }

    // document.getElementById('menu').style.backgroundColor= scrolled==0?"red":"blue";
}
$(function () {
    $('form').submit(function () {
        return false;
    });
});

//Калькулятор*************
$("#calculator-nal").hide();

$(".switch").click(function () {
    if ($("#checbox").prop("checked")) {
        $('#calculator-nal').show();
        $('.calculator-polzunok').hide();
    } else {
        $('#calculator-nal').hide();
        $('.calculator-polzunok').show();
    }
});
var calc_checbox = 5;

function Calc(shag, value) {
    if (shag == 'one') {
        var val_prib, val_prochent, val_number;
        val_prib = $('#calc_prib').val();
        val_prochent = $("#polzunok").slider("value");
        val_number = $('#calc_nal').val();

        if ($("#checbox").prop("checked")) {
            $('#val_number').val(val_number);
            calc_checbox = true;

        } else {
            $('#val_prochent').val(val_prochent);
            calc_checbox = false;
        }

        $('#val_prib').val(val_prib);
        $('.calculator__main').html(
            '<i class="i-refresh far fa-arrow-alt-circle-left float-right fa-2x" onclick="refreshShagOne()"></i>\n' +
            '                    <p class="z2">Шаг 2 из 3</p>\n' +
            '                    <p class="z3">\n' +
            '                        Выберите пакет инструментов\n' +
            '                    </p>\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-12">\n' +
            '                            <div class="package" >\n' +
            '                                <div  onclick="Calc(\'two\',1)">\n' +
            '                                    <p class="z-content">Стандарт</p>\n' +
            '                                </div>\n' +
            '                                <a href="#" class="float-right"  data-toggle="modal" data-target="#modalPackage1">подробнее</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-12">\n' +
            '                            <div class="package">\n' +
            '                                <div onclick="Calc(\'two\',2)">\n' +
            '                                    <p class="z-content">Расширеный</p>\n' +
            '                                </div>\n' +
            '                                <a href="#" class="float-right"  data-toggle="modal" data-target="#modalPackage2">подробнее</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-12">\n' +
            '                            <div class="package" >\n' +
            '                                <div onclick="Calc(\'two\',3)">\n' +
            '                                    <p class="z-content">Ультра</p>\n' +
            '                                </div>\n' +
            '                                <a href="#" class="float-right"  data-toggle="modal" data-target="#modalPackage4">подробнее</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>'
        );
    }
    if (shag == 'two') {
        $('#val_package').val(value);
        $('.calculator__main').html(
            '<i class="i-refresh fas fa-redo-alt float-right fa-2x" onclick="refreshCalc()"></i>' +
            '<p class="z2">Шаг 3 из 3</p>\n' +
            '                    <p class="z3">\n' +
            '                        Оформите бриф и получите бесплатный план развитие рекламы\n' +
            '                    </p>\n' +
            '<form id="formCalc" action="" class="form-calc-call">\n' +
            '<div class="good_z"></div>'+
            '                    <div class="col-auto">\n' +
            '                        <label class="sr-only" for="inlineFormName">Ваше имя</label>\n' +
            '                        <div class="input-group mb-2">\n' +
            '                            <div class="input-group-prepend">\n' +
            '                                <div class="input-group-text"><i class="fas fa-user"></i></div>\n' +
            '                            </div>\n' +
            '                            <input type="text" class="form-control" name="name" id="inlineFormName" placeholder="Ваше имя">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-auto">\n' +
            '                        <label class="sr-only" for="inlineFormTel">Номер телефона</label>\n' +
            '                        <div class="input-group mb-2">\n' +
            '                            <div class="input-group-prepend">\n' +
            '                                <div class="input-group-text"><i class="fas  fa-phone fa-flip-horizontal"></i></div>\n' +
            '                            </div>\n' +
            '                            <input type="text" name="tel" class="form-control" id="inlineFormTel"\n' +
            '                                   placeholder="Номер телефона">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-auto">\n' +
            '                        <label class="sr-only" for="inlineFormRab">Сфера деятельности</label>\n' +
            '                        <div class="input-group mb-2">\n' +
            '                            <div class="input-group-prepend">\n' +
            '                                <div class="input-group-text"><i class="fas fa-briefcase"></i></div>\n' +
            '                            </div>\n' +
            '                            <input type="text" name="delov" class="form-control" id="inlineFormRab"\n' +
            '                                   placeholder="Сфера деятельности">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-auto">\n' +
            '                        <button class="btn btn-success" type="button" onclick="FormCalc();yaCounter52943803.reachGoal(\'qwiz\'); return true;">\n' +
            '                            Отправить\n' +
            '                        </button>\n' +
            '                    </div>\n' +
            '                </form>' +
            ''
        );
        CalcPodschet(calc_checbox);
    }
}

function FormCalc() {
    var val_prib, val_prochent, val_number, val_package;
    var name = $('#inlineFormName').val();
    var tel = $('#inlineFormTel').val();
    console.log(tel);
    var rab = $('#inlineFormRab').val();
    val_prib = Number($('#val_prib').val());
    val_prochent = Number($('#val_prochent').val());
    val_number = Number($('#val_number').val());
    val_package = $('#val_package').val();
    var post = true;
    var r = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if(!r.test(tel)){
        $('#formCalc .good_z').html("<p class='text-danger'>Неправильно введены данные</p>");
        post = false;
    }
    if(name =='' || name == null){
        $('#error_calc').html(
            "Введите имя!"
        );
        post = false;
    }
    if(post==true){
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: {
                name: name,
                tel: tel,
                rab: rab,
                prib: val_prib,
                prochent: val_prochent,
                number: val_number,
                package: val_package,
            },
            success: function (data) {
                console.log(data);
                $('#formCalc .good_z').html("<p class='text-success'>Отлично, мы свяжемся с вами в ближайшее время</p>");
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
    }
}
function CalcPodschet(checbox) {
    var val_prib, val_prochent, val_number, val_package;
    val_prib = Number($('#val_prib').val());
    val_prochent = Number($('#val_prochent').val());
    val_number = Number($('#val_number').val());
    val_package = $('#val_package').val();
    $('#calkResult').html('' +
        '<div id="calkInfo">\n' +
        '                            <div class="calkInfo__package">\n' +
        '                            </div>\n' +
        '                            <br>\n' +
        '                            <div class="calkIndo_result">\n' +
        '                            </div>\n' +
        '                            <div class="calkIndo_sum">\n' +
        '                            </div>\n' +
        '                        </div>');
    var package_price;
    switch (val_package) {
        case '1': {
            $('.calkInfo__package').html('' +
                '<div class="calkInfo__title">\n' +
                '                                    <p class="t1">\n' +
                '                                        Стандарт\n' +
                '                                    </p>\n' +
                '                                    <p class="t2">\n' +
                '                                        35 000 р./мес\n' +
                '                                    </p>\n' +
                '                                    <p class="t3">\n' +
                '                                        45 000 р./мес\n' +
                '                                    </p>\n' +
                '                                </div>\n' +
                '                                <div class="calkInfo__content">\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Яндекс Директ (поиск, РСЯ)</p>\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Google AdWords (поиск, КМС)</p>\n' +
                '                                    <p class="z3">Поисковая оптимизация SEO</p>\n' +
                '                                    <p class="z3">Маркетинговый анализ сайта</p>\n' +
                '                                    <p class="z3">Техническая поддержка сайта</p>\n' +
                '                                </div>'
            );
            package_price = 35000;
            break;
        }
        case '2': {
            $('.calkInfo__package').html(
                '                            <div class="calkInfo__package">\n' +
                '                                <div class="calkInfo__title">\n' +
                '                                    <p class="t1">\n' +
                '                                        Расширеный\n' +
                '                                    </p>\n' +
                '                                    <p class="t2">\n' +
                '                                        45 000 р./мес\n' +
                '                                    </p>\n' +
                '                                    <p class="t3">\n' +
                '                                        60 000 р./мес\n' +
                '                                    </p>\n' +
                '                                </div>\n' +
                '                                <div class="calkInfo__content">\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Яндекс Директ (поиск, РСЯ)</p>\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Google AdWords (поиск, КМС)</p>\n' +
                '                                    <p class="z3">Настройка и управления MyTarget</p>\n' +
                '                                    <p class="z3">Поисковая оптимизация SEO</p>\n' +
                '                                    <p class="z3">Маркетинговый анализ сайта</p>\n' +
                '                                    <p class="z3">Техническая поддержка сайта</p>\n' +
                '                                </div>\n' +
                '                            </div>'
            );
            package_price = 45000;
            break;
        }
        case '3': {
            $('.calkInfo__package').html(
                '<div class="calkInfo__package">\n' +
                '                                <div class="calkInfo__title">\n' +
                '                                    <p class="t1">\n' +
                '                                        Ультра\n' +
                '                                    </p>\n' +
                '                                    <p class="t2">\n' +
                '                                        65 000 р./мес\n' +
                '                                    </p>\n' +
                '                                    <p class="t3">\n' +
                '                                        80 000 р./мес\n' +
                '                                    </p>\n' +
                '                                </div>\n' +
                '                                <div class="calkInfo__content">\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Яндекс Директ (поиск, РСЯ)</p>\n' +
                '                                    <p class="z3">Настройка и управления <br>\n' +
                '                                        Google AdWords (поиск, КМС)</p>\n' +
                '                                    <p class="z3">Настройка и управления Facebook</p>\n' +
                '                                    <p class="z3">Настройка и управления MyTarget</p>\n' +
                '                                    <p class="z3">Поисковая оптимизация SEO</p>\n' +
                '                                    <p class="z3">Маркетинговый анализ сайта</p>\n' +
                '                                    <p class="z3">Техническая поддержка сайта</p>\n' +
                '                                    <p class="z3">Партнерская сеть</p>\n' +
                '                                </div>\n' +
                '                            </div>'
            );
            package_price = 65000;
            break;
        }
    }
    var sum_reclam = 0;
    if (checbox == false) {
        sum_reclam = val_prib * (val_prochent / 100);
        console.log(sum_reclam);
    } else sum_reclam = val_number;
    var calc_sum = sum_reclam + package_price;
    $('.calkIndo_result').html(
        '<p> Пакет: ' + package_price + ' р./мес </p>\n' +
        '<p>+ на счет рекламы:' + sum_reclam + ' р./мес</p>'
    );
    $('.calkIndo_sum').html(
        '<p>Общая сумма ' + calc_sum + ' р./мес</p>'
    )
}

function refreshCalc() {
    $('#calkResult').html('' +
        '<p class="z3">\n' +
        '                            Внесите необходимые значения и вы сразу\n' +
        '                            сможете увидеть общую картину работы\n' +
        '                            вашей рекламы.\n' +
        '                        </p>'
    );
    $('#val_prib').val(0);
    $('#val_prochent').val(0);
    $('#val_number').val(0);
    $('#val_package').val(0);
    refreshShagOne();
}
function refreshShagOne() {
    $('.calculator__main').html(
        '<p class="z2">Шаг 1 из 3</p>\n' +
        '                    <p class="z3">\n' +
        '                        Введите сумму чистой прибыли\n' +
        '                    </p>\n' +
        '                    <form action="" class="form">\n' +
        '                        <input type="hidden" name="send-result-polzunok" id="send-result-polzunok"/>\n' +
        '                        <input id="calc_prib" class="input-number" type="number" value="200000">\n' +
        '                        <p class="z3 calculator-indent_top">\n' +
        '                            Сколько вы готовы тратить на рекламу?\n' +
        '                        </p>\n' +
        '                        <label class="switch ">\n' +
        '                            <input id="checbox" name="checbox_switch" type="checkbox" class="success">\n' +
        '                            <span class="slider round"></span>\n' +
        '                        </label>\n' +
        '                        <div id="calculator-nal">\n' +
        '                            <label for=""> Указать конкретную сумму\n' +
        '                                <input id="calc_nal" class="input-number" type="number" min="10000" value="50000"\n' +
        '                                       required placeholder="Сколько готовы тратить на рекламу">\n' +
        '                            </label>\n' +
        '                        </div>\n' +
        '                        <div class="calculator-polzunok">\n' +
        '                            Значение ползунка: <span style="color:green" id="result-polzunok"></span><br><br>\n' +
        '                            <div id="polzunok"></div>\n' +
        '                            <span>10%</span>\n' +
        '                            <span class="float-right">100%</span>\n' +
        '                        </div>\n' +
        '                        <div class="calculator__buttons calculator-indent_top">\n' +
        '                            <button type="button" class="btn btn-success calculator-btn float-right"\n' +
        '                                    onclick="Calc(\'one\',false);">Далее\n' +
        '                            </button>\n' +
        '                        </div>\n' +
        '                    </form>'
    );
    slider();
}
function slider() {
    $("#polzunok").slider({
        animate: "slow",
        range: "min",
        value: 20,
        slide: function (event, ui) {
            $("#result-polzunok").text(ui.value + "%");
            $("#send-result-polzunok").val(ui.value);
        }
    });
    $("#result-polzunok").text($("#polzunok").slider("value") + "%");
    $("#send-result-polzunok").val($("#polzunok").slider("value"));
    var selection = $(".selector").slider("value");
}
$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').addClass('open');
        $('body').addClass('offcanvas-open');
    })
    $('[data-toggle="offcanvas-close"]').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('body').removeClass('offcanvas-open');

    })
})