<?php
var_dump($_POST);
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['tel']) && $_POST['tel'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'b-da24@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Новая заявка  с лендинга B-DA.ru'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Данные клиента: </p>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['tel'] . '</p>';
    if(isset($_POST['rab'])){
        $message = $message . '<p>Сфера деятельности'.$_POST["rab"] .'</p>';
    }
    if(isset($_POST['prib'])){
        $message = $message . '<p>Прибыль'.$_POST["prib"] .'</p>';
    }
    if(isset($_POST['package'])){
        $message = $message . '<p>Пакет № '.$_POST["package"] .'</p>';
    }
    if(isset($_POST['number']) && $_POST['number'] !=0 ){
        $message = $message . '<p>Сумма бюджета на рекламу в рублях '.$_POST["number"] .'</p>';
    }
    if(isset($_POST['prochent']) && $_POST['prochent'] !=0 ){
        $message = $message . '<p>Сумма бюджета на рекламу в процентах '.$_POST["prochent"] .'</p>';
    }
    if(isset($_POST['plan'])){
        $message = $message . '<p>Клиент хочет заказать бесплатный план развития бизнеса</p>';
    }
    if(isset($_POST['consul'])){
        $message = $message . '<p>Клиент хочет проконсультироваться</p>';
    }
    if(isset($_POST['rab'])){
        $message = $message . '<p>Сфера деятельности :' + $_POST['rab'] +'</p>';
    }
    $message = $message . '</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Заявка с сайта msk-gsmrep.ru <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>