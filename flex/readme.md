# Основы CSS-верстки: как с помощью Flexbox компоновать элементы на странице


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

Теперь добавим несколько свойств CSS, чтобы преобразовать этот блок во Flexbox и немного стилизовать:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

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

Оранжевый блок— это flex-контейнер, а фиолетовые блоки — flex-элементы

Разберем все более подробно.

В приведенном выше примере внешняя область оранжевого цвета, которую мы создали с помощью элемента

\<div>

`<div>`, называется **гибким контейнером (flex-контейнером)**. А внутренние элементы

\<div>

`<div>` фиолетового цвета называются **flex-элементами**.

Стоит отметить, что свойство

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

flex-direction

![flex-direction:row](https://highload.tech/wp-content/uploads/2021/10/image28.png)

row-reverse

`row-reverse`: при таком значении строка переворачивается и flex-элементы становятся в обратном порядке, теперь уже справа налево:
![flex-direction:row-reverse](https://highload.tech/wp-content/uploads/2021/10/image14.png)

Свойство flex-direction: row-reverse выстраивает элементы справа налево
column
![flex-direction: column](https://highload.tech/wp-content/uploads/2021/10/image1.png)

Свойство flex-direction: column располагает элементы сверху вниз

column-reverse
![flex-direction: column-reverse](https://highload.tech/wp-content/uploads/2021/10/image24.png)
Свойство flex-direction: column-reverse переворачивает столбик

### Flex-wrap
Используя это свойство, не поместившиеся в одну линию элементы можно переместить на следующую строчку. Это полезно применять в адаптивных макетах, когда при изменении размера экрана гибкие элементы автоматически меняют свое положение. По умолчанию для параметра


![flex-wrap: wrap](https://highload.tech/wp-content/uploads/2021/10/image2.png)
nowrap

![flex-wrap: nowrap](https://highload.tech/wp-content/uploads/2021/10/image4.png)
Свойство flex-wrap: nowrap — элементы могут выйти за границы контейнера
Если ничего не менять и оставить значение по умолчанию, элементы выстроятся в одну строку и, возможно, выйдут за границы контейнера, что и случилось на изображении выше.

wrap-reverse
![flex-wrap: wrap-reverse](https://highload.tech/wp-content/uploads/2021/10/image27.png)
Свойство flex-wrap: wrap-reverse зеркально отразит элементы
Такое значение понадобится, если мы захотим перенести блоки на другую строчку, но в обратном порядке. Так получится зеркальное отражение, прямо как в нашем примере.

### Flex-flow
flex-flow
flex-direction

![Свойства пишутся через пробел](https://highload.tech/wp-content/uploads/2021/10/image17.png)



### Justify-content
![justify-content: center](https://highload.tech/wp-content/uploads/2021/10/image12.png)

Свойство justify-content: center центрирует блоки
Нетрудно догадаться из названия параметра, что при таком значении свойства

justify-content
`justify-content` блоки во flex-контейнере выравниваются по центру (центрируются).

flex-start
![justify-content: flex-start](https://highload.tech/wp-content/uploads/2021/10/image18.png)
Свойство justify-content: flex-start выстраивает элементы относительно начала главной оси
Это значение по умолчанию, при котором элементы контейнера выстраиваются относительно начала главной оси.


flex-end
![justify-content: flex-end](https://highload.tech/wp-content/uploads/2021/10/image6.png)
Свойство justify-content: flex-end сдвинет элементы к концу главной базовой линии контейнера

space-between
![justify-content: space-between](https://highload.tech/wp-content/uploads/2021/10/image19.png)
Свойство justify-content: space-between расставит блоки на одинаковом расстоянии

space-around
![justify-content: space-around](https://highload.tech/wp-content/uploads/2021/10/image25.png)
Свойство justify-content: space-around создаст вокруг элементов одинаковые интервалы


justify-content
space-around
`space-around` вокруг элементов образовались одинаковые интервалы. Но тут надо помнить, что у первого элемента левый интервал будет равен **х**, а правый — **2x**. Это получилось, поскольку у следующего за ним элемента также будет интервал **x** — и поэтому они складываются. То же правило применяется к последнему элементу.

## Align-items
Это свойство используется для выравнивания flex-элементов по вертикали и имеет четыре основных значения.
Перед тем как продолжить рассматривать параметры
`align-items`, необходимо добавить высоты нашему контейнеру, чтобы увидеть эффект от применения значений. Рассмотрим их:

center
![align-items: center центрирует элементы](https://highload.tech/wp-content/uploads/2021/10/image21.png)
Свойство align-items: center центрирует элементы
Это значение центрирует наши элементы, как показано на рисунке выше.

_2_

flex-start
![align-items: flex-start](https://highload.tech/wp-content/uploads/2021/10/image5.png)
Свойство align-items: flex-start выстраивает блоки относительно начала поперечной оси
В этом случае блоки выстроились относительно начала поперечной оси.

flex-end
![align-items: flex-end](https://highload.tech/wp-content/uploads/2021/10/image16.png)
Свойство align-items: flex-end выстраивает блоки в конце поперечной оси

stretch
![align-items: stretch](https://highload.tech/wp-content/uploads/2021/10/image23.png)
Свойство align-items: stretch растягивает блоки на всю высоту контейнера
Этот параметр растягивает блоки на высоту контейнера.

baseline
![align-items: baseline](https://highload.tech/wp-content/uploads/2021/10/image26.png)
Свойство align-items: baseline влияет на размер шрифта flex-элементов
Это свойство влияет только на изменение размера шрифта flex-элементов, как показано изображении выше.

## Align-content
Принцип действия свойства 

align-content

space-around
![align-content: space-around](https://highload.tech/wp-content/uploads/2021/10/image20.png)
Свойство align-content: space-around равномерно распределяет элементы

space-between
![align-content: space-between](https://highload.tech/wp-content/uploads/2021/10/image13.png)

Свойство align-content: space-between распределяет элементы так, что первый находится на одном уровне с началом, а последний — с концом
center
![align-content: center](https://highload.tech/wp-content/uploads/2021/10/image15.png)
Свойство align-content: center располагает элементы вокруг центра

flex-start
![align-content: flex-start](https://highload.tech/wp-content/uploads/2021/10/image22.png)
Свойство align-content: flex-start располагает элементы в начале

flex-end
![align-content: flex-end](https://highload.tech/wp-content/uploads/2021/10/image9.png)

Свойство align-content: flex-end располагает элементы в конце
## Свойства flex-элементов

Все вышеперечисленные свойства применяются к flex-контейнеру и не влияют напрямую на элементы (только косвенно). Поэтому давайте рассмотрим несколько свойств
flexbox

order
![Свойство order](https://highload.tech/wp-content/uploads/2021/10/image7.png)

Свойство order упорядочивает элементы от более низкого к более высокому порядку

order


![flex-grow](https://highload.tech/wp-content/uploads/2021/10/image10.png)
Свойство flex-grow расширяет один блок относительно другого, а flex-shrink — сжимает
Все элементы по правилам Flexbox расширяются в одинаковом соотношении и занимают одинаковое пространство в контейнере (равную ширину). Мы изменили это пространство при помощи свойства

![flex-basis задает размер определнного блока](https://highload.tech/wp-content/uploads/2021/10/image3.png)

Свойство flex-basis задает размер определенного блока
Это значение задает размер для отдельно взятого flex-блока.

![align-self](https://highload.tech/wp-content/uploads/2021/10/image8.png)
Свойство align-self выравнивает элемент внутри контейнера
Мы используем это свойство, чтобы выровнять flex-элемент внутри контейнера. Но для этого необходимо указать высоту flex-контейнера для того, чтобы увидеть эффект. Ему можно присвоить значения:

flex-start

