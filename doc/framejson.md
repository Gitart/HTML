	
## ПЕРЕДАЧА JSON ОБЪЕКТА В IFRAME ИЛИ В НОВОЕ ОКНО ЧЕРЕЗ POSTMESSAGE

Передача информации между родительским окном и iframe на странице или дочерним окном стала возможна благодаря новым возможностям HTML5. Теперь запросто можно отправить JSON объект, например, в открытый iframe на другом домене. Это стало возможным благодаря window.postMessage.
Первоначально мне такая операция понадобилась когда дочерняя страница в iframe  должна была быть зависимой от данных получаемой родительской. И это решение мне как раз подходило. Сперва пришлось обратиться к документации https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage где подробно описан процесс передачи и получения данных.
Для получения данных на странице можно воспользоваться следующим кодом

```javascript
var onmessage = function(e) {
    var data = e.data;
    var origin = e.origin;
 
    /**
     * Проверка октуда пришел запрос
     */
    if (origin !== "http://localhost") {
      alert('Запрос пришел с другого домена');
      return;
    }
 
    var str = 'Пришли неверные данные';
 
    if (data.title && data.value) {
      str = 'Сообщение:' + data.title + '. Значение объекта:' + data.value;
    }
 
    document.getElementById('message').innerHTML = str;
  };
 
  if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', onmessage, false);
  } else if (typeof window.attachEvent != 'undefined') {
    window.attachEvent('onmessage', onmessage);
  }
```

Или тот же метод, только без проверки с какого источника были переданы данные на jQuery

```javascript

$(function(){
    $(window).on("message", function(e) {
      var data = e.originalEvent.data;
 
      if (data) {
        var str = 'Пришли неверные данные';
 
        if (data.title && data.value) {
          str = 'Сообщение:' + data.title + '. Значение объекта:' + data.value;
        }
 
        $('#message').text(str);
      }
    });
  });
  ```
Для получения сообщения мы отлавливаем событие message. И в первом примере проверяем еще откуда пришел запрос.
Для отправки данных используется метод window.postMessage(message, targetOrigin);
Где message — Данные. По спецификации, это может быть любой объект, который будет клонирован с сохранением структуры при передаче.Но IE поддерживает только строки, поэтому обычно данные JSON-сериализуют.
targetOrigin — Разрешить получение сообщения только окнам с данного источника. Проверку осуществляет браузер. При указании '*' ограничений нет. Желательно всегда указывать источник, что бы предотвратить получение данных третьими лицам.
На странице у нас есть один iframe с id=»iframe» и три кнопки. По нажатию на 2 из них происходит событие передачи данных, и на одну — создание нового окна.
Аналогичном способом можно отправлять сообщения из iframe в родительскую страницу используя window.parent

```javascript
$(function(){
    var popup = null;
    var sendObject = {
      title: 'Тестовое сообщение',
      value: 5000
    };
 
    $('.btn-iframe').click(function(){
      var iframe = $('#iframe');
      iframe[0].contentWindow.postMessage(sendObject, document.location);
    });
 
    $('.btn-create-popup').click(function(){
      popup = window.open('popup.html');
    });
 
    $('.btn-popup').click(function(){
      popup.postMessage(sendObject, '*');
    });
 
  });
  ```
  
  
 Готовый пример можно скачать здесь Тестовый пример. Лучше разместить это на веб-сервере и потом уже смотреть.   
 Или посмотреть работу по этой ссылке.
Ну и само собой поддержка браузерами: http://caniuse.com/#feat=x-doc-messaging
UPD: Ну и конечно не обошлось без проблем для браузера IE. До 10 версии через postMessage можно передавать только строки.
