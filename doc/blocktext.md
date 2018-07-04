## КАК ЗАБЛОКИРОВАТЬ ВЫДЕЛЕНИЕ ТЕКСТА НА СТРАНИЦЕ

Иногда нам не хочется, что бы пользователь мог выделять текст на каком-то элементе страницы, 
для такой блокировки можно воспользоваться следующим javascript кодом написанным для библиотеки jQuery в виде плагина

```javascript
(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
```
Теперь можем заблокировать выделение текста на всей странице повесив обработчик на тег body

```
// Отключаем выделение мышью
$('body').disableSelection();
```