# Flexbox

[![](/wp-content/themes/supermc/images/svg/soc-facebook-red.svg)](# "Поділитися у Facebook") [![](/wp-content/themes/supermc/images/svg/soc-twitter-red.svg)](# "Поділитися в Twitter") [![](/wp-content/themes/supermc/images/svg/soc-telegram-red.svg)](<https://t.me/share/url?url=https://highload.tech/flexbox/\&text=Основы CSS-верстки: как с помощью Flexbox компоновать элементы на странице> "Поділитися в Telegram")

Если простыми словами, то **Flexbox** — это такая структура CSS, которую мы используем для отображения и упорядочивания элементов внутри другого элемента или контейнера.

CSS уже давно стал основой интерфейсной веб-разработки. И теперь он — более сложный и эффективным инструмент, чем когда-либо. Но [достижение отзывчивости](https://highload.tech/adaptivnaya-verstka-kak-nauchit-sajt-prisposablivatsya-k-lyubomu-devajsu/) на веб-странице при работе с несколькими элементами и использовании различных устройств всегда было проблемой. Одно из наиболее популярных ее решений — технология **CSS Flexbox**, позволяющая разработать довольно сложный дизайн веб-сайта и идеально расположить его элементы.

Creators - Агенція з міжнародного PR для технологічних та B2B компаній

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20116%2049'%3E%3C/svg%3E)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2033%2033'%3E%3C/svg%3E) PR для компаній та їх лідерів

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2033%2033'%3E%3C/svg%3E) Організація інтерв’ю в медіа, подкастах, виступи на конференціях

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2033%2033'%3E%3C/svg%3E) Європа, Азія, Америка

[Дізнатись деталі ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2014'%3E%3C/svg%3E)](https://the-creators.agency/ua/?utm_source=vidget\&utm_medium=Highload)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20116%2049'%3E%3C/svg%3E)

![CSS Flexbox помогает разработать сложный дизайн сайта](https://highload.tech/wp-content/uploads/2021/10/image6.gif)

CSS Flexbox помогает разработать сложный дизайн сайта



```
<div class = "flex-container">
 <div> flex-item1 </div>
 <div> flex-item2 </div>
 <div> flex-item3 </div>
</div>
```

```css
.flex-container{
display: flex;
background-color: #f7941d;

margin: 20px;

justify-content: center;

}

.flex-container > div{

color: white;

padding: 40px;

background-color: #c597ec;

margin: 10px;

border: 1px solid grey;

}
```

.flex-container{ display: flex; background-color: #f7941d; margin: 20px; justify-content: center; } .flex-container > div{ color: white; padding: 40px; background-color: #c597ec; margin: 10px; border: 1px solid grey; }

```
.flex-container{
  display: flex;
  background-color: #f7941d;
  margin: 20px;
  justify-content: center;
}
.flex-container > div{
  color: white;
  padding: 40px;
  background-color: #c597ec;
  margin: 10px;
  border: 1px solid grey;
}
```

Результат:

[![Основы CSS-верстки: как с помощью Flexbox компоновать элементы на странице](https://highload.tech/wp-content/uploads/2021/10/image11.png)](https://highload.tech/wp-content/uploads/2021/10/image11.png)
display: flex
`display: flex` применяется только к родительским элементам, в этом случае родительский элемент — это наш гибкий оранжевый контейнер. А блоки в этом контейнере — его дочерние элементы.

## Почему Flexbox?

* Составляющие flex-контейнера могут легко сжиматься и растягиваться в установленном порядке.
* Довольно просто работать с горизонтальным и вертикальным выравниванием элементов, что особенно полезно при тянущейся резиновой верстке.
* При использования технологии Flex расположение элементов в html-документе не важно.
* Дает возможность автоматического выстраивания блоков, заполнение всего предоставленного контейнера.
* Несложный синтаксис.

## Свойства flex-контейнера

Существует шесть основных CSS-свойств для работы с flex-контейнером:
* flex-direction
  `flex-direction`;
* flex-wrap
  `flex-wrap`;
* flex-flow
  `flex-flow`;
* justify-content
  `justify-content`;
* align-items
  `align-items`;
* align-content

  `align-content`.

Но прежде чем мы рассмотрим каждый более подробно, поговорим об осях, присутствующих во flex-контейнере. Их две: главная (основная) ось по умолчанию располагается горизонтально — слева направо, и распределение flex-элементов, добавляемых в контейнер, происходит вдоль нее. Поперечная ось расположена перпендикулярно основной и служит для выравнивания содержимого контейнера по вертикали.

### Flex-direction
Мы уже говорили о направлении главной оси по умолчанию (слева-направо) — это не строгое правило. Направлением можно управлять, то есть переопределять расположение гибких блоков с помощью свойства

![flex-direction:row](https://highload.tech/wp-content/uploads/2021/10/image28.png)
![flex-direction:row-reverse](https://highload.tech/wp-content/uploads/2021/10/image14.png)
![flex-direction: column](https://highload.tech/wp-content/uploads/2021/10/image1.png)
![flex-direction: column-reverse](https://highload.tech/wp-content/uploads/2021/10/image24.png)
![flex-wrap: wrap](https://highload.tech/wp-content/uploads/2021/10/image2.png)
![flex-wrap: nowrap](https://highload.tech/wp-content/uploads/2021/10/image4.png)
![flex-wrap: wrap-reverse](https://highload.tech/wp-content/uploads/2021/10/image27.png)
![Свойства пишутся через пробел](https://highload.tech/wp-content/uploads/2021/10/image17.png)
![justify-content: center](https://highload.tech/wp-content/uploads/2021/10/image12.png)
![justify-content: flex-start](https://highload.tech/wp-content/uploads/2021/10/image18.png)
![justify-content: flex-end](https://highload.tech/wp-content/uploads/2021/10/image6.png)
![justify-content: space-between](https://highload.tech/wp-content/uploads/2021/10/image19.png)
![justify-content: space-around](https://highload.tech/wp-content/uploads/2021/10/image25.png)
![align-items: center центрирует элементы](https://highload.tech/wp-content/uploads/2021/10/image21.png)
![align-items: flex-start](https://highload.tech/wp-content/uploads/2021/10/image5.png)
![align-items: flex-end](https://highload.tech/wp-content/uploads/2021/10/image16.png)
![align-items: stretch](https://highload.tech/wp-content/uploads/2021/10/image23.png)
![align-items: baseline](https://highload.tech/wp-content/uploads/2021/10/image26.png)
![align-content: space-around](https://highload.tech/wp-content/uploads/2021/10/image20.png)
![align-content: space-between](https://highload.tech/wp-content/uploads/2021/10/image13.png)
![align-content: center](https://highload.tech/wp-content/uploads/2021/10/image15.png)
![align-content: flex-start](https://highload.tech/wp-content/uploads/2021/10/image22.png)
![align-content: flex-end](https://highload.tech/wp-content/uploads/2021/10/image9.png)
![Свойство order](https://highload.tech/wp-content/uploads/2021/10/image7.png)
![flex-grow](https://highload.tech/wp-content/uploads/2021/10/image10.png)
![flex-basis задает размер определнного блока](https://highload.tech/wp-content/uploads/2021/10/image3.png)
![align-self](https://highload.tech/wp-content/uploads/2021/10/image8.png)

