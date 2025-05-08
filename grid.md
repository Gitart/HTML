# Верстаем на Grid в CSS


CSS Grid Layout — это модуль CSS, который разделяет веб-страницу на колонки и строки. В получившейся двумерной сетке могут размещаться разные элементы. Управлять их размером и положением можно с помощью свойств CSS Grid. Они помогают отображать элементы на экране по горизонтали и вертикали без внесения изменений в структуру кода.

Grid — один из самых мощных модулей CSS. Он нужен для удобного создания шаблонов в CSS и незаменим при создании сайтов, адаптивных блоков, галерей, форм. Возможности для расстановки объектов с CSS Grid безграничны.




**Содержание статьи:**

[1. Как устроен модуль CSS Grid](#1)

[2. Главные свойства в CSS Grid для контейнера](#2)

[2.1 Grid-template-columns](#3)

[2.2 Grid-template-rows](#4)

[2.3 Grid-template-areas](#5)

[2.4 Grid-template](#6)

[2.5 Grid-row-gap](#7)

[2.6 Grid-column-gap](#8)

[2.7 Grid-gap](#9)

[2.8 Justify-items](#10)

[2.9 Align-items](#11)

[2.10 Justify-content](#12)

[2.11 Align-content](#13)

[2.12 Grid-auto-rows](#14)

[2.13 Grid-auto-columns](#15)

[2.14 Grid-auto-flow](#16)

[2.15 Grid](#17)

[3. Гайд по созданию Grid](#18)

[4. Заключение](#19)

## Как устроен модуль CSS Grid

Grid — это набор горизонтальных и вертикальных линий, пересекающихся между собой. Поддерживается всеми основными веб-браузерами. Эта сетка — некая система координат для контента, который в ней размещается. Она выравнивает элементы по строкам и столбцам.

**Чтобы создать макет на основе сетки, необходимо определить grid-контейнер** — область с контекстом форматирования, где все дочерние элементы будут размещаться в соответствии с правилами сетки. Для этого необходимо добавить свойство

display: grid

`display: grid`:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

.grid-container {

display: grid;

}

.grid-container { display: grid; }

```
.grid-container {
    display: grid;
}
```

Теперь все потомки элемента становятся grid-элементами, а значит — можно использовать свойства Grid для их позиционирования и выравнивания.

Прежде всего определим количество колонок и строк в сетке. Все они будут образовывать grid-элементы.

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image5.gif)

Пример грида 4х3 с 12-тью grid-элементами

## Главные свойства в CSS Grid для контейнера

Параметры

grid-template-columns

`grid-template-columns` и

grid-template-rows

`grid-template-rows` отвечают за количество строк и колонок, а также за их размер. Все параметры в значениях указываются через пробел и означают grid-пути.

Свойства

grid-row-gap

`grid-row-gap` и

grid-column-gap

`grid-column-gap` дают возможность создавать промежутки между строками и столбцами. Они определяют размеры grid-линий и могут задаваться в любых единицах измерения CSS — в пикселях или процентах.

Свойства

grid-auto-rows

`grid-auto-rows` и

grid-auto-columns

`grid-auto-columns` определяют размеры автоматически сгенерированных grid-путей. Размер пути может задаваться в любых единицах измерения CSS — в пикселях, процентах или

fr

`fr` (специальной единице измерения для гридов).

Давайте рассмотрим каждое из свойств подробнее.

### Grid-template-columns

Свойство

grid-template-columns

`grid-template-columns` отвечает за добавление колонок. Их ширина может указываться в пикселях, процентах или

fr

`fr` — благодаря ей можно добавлять колонки** без указания их конкретной ширины**:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

.grid {

display: grid;

grid-gap: 10px;

grid-template-columns: 1fr 1fr 1fr;

}

.grid { display: grid; grid-gap: 10px; grid-template-columns: 1fr 1fr 1fr; }

```
.grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
}
```

1fr 1fr 1fr

`1fr 1fr 1fr` — означает создание трех колонок одинаковой ширины.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.example {

display: grid;

grid-template-columns: 1fr 1fr 1fr 1fr;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

margin-top: 20px;

}

.example > div {

background-color: #eee;

text-align: center;

padding: 30px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-template-columns property example\</h2>

\<div class="example">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .example { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 10px; background-color: #ccc; padding: 10px; margin-top: 20px; } .example > div { background-color: #eee; text-align: center; padding: 30px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-template-columns property example\</h2> \<div class="example"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .example {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
        margin-top: 20px;
      }
      .example > div {
        background-color: #eee;
        text-align: center;
        padding: 30px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-template-columns property example</h2>
    <div class="example">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image9-2.png)

Результат

### Grid-template-rows

Свойство

grid-template-rows

`grid-template-rows` помогает добавить строки. Значения свойства разделяются пробелами и определяют высоту строки:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

.grid {

display: grid;

grid-gap: 10px;

grid-template-columns: 1fr 1fr 1fr;

grid-template-rows: 1fr 1fr;

}

.grid { display: grid; grid-gap: 10px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; }

```
.grid {
 display: grid;
 grid-gap: 10px;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows: 1fr 1fr;
}
```

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.auto-container {

display: grid;

grid-template-columns: auto auto auto auto;

grid-template-rows: auto auto;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

margin-top: 30px;

}

.auto-container > div {

background-color: #eee;

text-align: center;

padding: 30px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-template-rows property example\</h2>

\<div class="auto-container">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .auto-container { display: grid; grid-template-columns: auto auto auto auto; grid-template-rows: auto auto; grid-gap: 10px; background-color: #ccc; padding: 10px; margin-top: 30px; } .auto-container > div { background-color: #eee; text-align: center; padding: 30px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-template-rows property example\</h2> \<div class="auto-container"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .auto-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
        margin-top: 30px;
      }
      .auto-container > div {
        background-color: #eee;
        text-align: center;
        padding: 30px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-template-rows property example</h2>
    <div class="auto-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image9-2.png)

Результат

### Grid-template-areas

Свойство

grid-template-areas

`grid-template-areas` создает шаблон сетки с использованием заданных в свойстве

grid-area

`grid-area` (свойство для grid-элементов) имен grid-областей. Каждая из областей обозначается апострофами.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.box1 {

grid-area: header;

}

.box2 {

grid-area: menu;

}

.box3 {

grid-area: main;

}

.box4 {

grid-area: right;

}

.box5 {

grid-area: footer;

}

.grid-container {

display: grid;

grid-template-areas: 'header header header header header header' 'menu main main main right right' 'menu footer footer footer footer footer';

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

}

.grid-container > div {

background-color: #eee;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-template-areas property example\</h2>

\<div class="grid-container">

\<div class="box1">Header\</div>

\<div class="box2">Menu\</div>

\<div class="box3">Main\</div>

\<div class="box4">Right\</div>

\<div class="box5">Footer\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .box1 { grid-area: header; } .box2 { grid-area: menu; } .box3 { grid-area: main; } .box4 { grid-area: right; } .box5 { grid-area: footer; } .grid-container { display: grid; grid-template-areas: 'header header header header header header' 'menu main main main right right' 'menu footer footer footer footer footer'; grid-gap: 10px; background-color: #ccc; padding: 10px; } .grid-container > div { background-color: #eee; text-align: center; padding: 20px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-template-areas property example\</h2> \<div class="grid-container"> \<div class="box1">Header\</div> \<div class="box2">Menu\</div> \<div class="box3">Main\</div> \<div class="box4">Right\</div> \<div class="box5">Footer\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .box1 {
        grid-area: header;
      }
      .box2 {
        grid-area: menu;
      }
      .box3 {
        grid-area: main;
      }
      .box4 {
        grid-area: right;
      }
      .box5 {
        grid-area: footer;
      }
      .grid-container {
        display: grid;
        grid-template-areas: 'header header header header header header' 'menu main main main right right' 'menu footer footer footer footer footer';
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #eee;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-template-areas property example</h2>
    <div class="grid-container">
      <div class="box1">Header</div>
      <div class="box2">Menu</div>
      <div class="box3">Main</div>
      <div class="box4">Right</div>
      <div class="box5">Footer</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Результат](https://highload.tech/wp-content/uploads/2021/09/image15-2.png)

Результат

### Grid-template

Свойство

grid-template

`grid-template` определяет область сетки, строки и столбцы. Позволяет задать значения для

grid-template-columns

`grid-template-columns`,

grid-template-rows

`grid-template-rows` и

grid-template-areas

`grid-template-areas` одновременно.

Строки и столбцы разделяются косой чертой.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grid-container {

display: grid;

grid-template: 170px / auto auto auto;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

}

.grid-container > div {

background-color: #eee;

text-align: center;

padding: 30px 0;

font-size: 20px;

}

\</style>

\</head>

\<body>

\<h2>Grid-template property example\</h2>

\<div class="grid-container">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grid-container { display: grid; grid-template: 170px / auto auto auto; grid-gap: 10px; background-color: #ccc; padding: 10px; } .grid-container > div { background-color: #eee; text-align: center; padding: 30px 0; font-size: 20px; } \</style> \</head> \<body> \<h2>Grid-template property example\</h2> \<div class="grid-container"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grid-container {
        display: grid;
        grid-template: 170px / auto auto auto;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #eee;
        text-align: center;
        padding: 30px 0;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-template property example</h2>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image8-3.png)

Результат

### Grid-row-gap

Свойство

grid-row-gap

`grid-row-gap` позволяет задать отступы между строками. Ширина указывается разделением строк при помощи

grid-row-gap

`grid-row-gap`.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grid-container {

display: grid;

grid-template-columns: auto auto auto auto;

grid-column-gap: 20px;

grid-row-gap: 0;

background-color: #666;

padding: 10px;

}

.grid-container > div {

background-color: #eee;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-row-gap property example\</h2>

\<div class="grid-container">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div class="box8">8\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grid-container { display: grid; grid-template-columns: auto auto auto auto; grid-column-gap: 20px; grid-row-gap: 0; background-color: #666; padding: 10px; } .grid-container > div { background-color: #eee; text-align: center; padding: 20px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-row-gap property example\</h2> \<div class="grid-container"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div class="box8">8\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 0;
        background-color: #666;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #eee;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-row-gap property example</h2>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div class="box8">8</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image13-2.png)

Результат

### Grid-column-gap

Свойство

grid-column-gap

`grid-column-gap` определяет отступы между колонками. Задается в любых единицах измерения CSS — в пикселях или процентах.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grid-container {

display: grid;

grid-template-columns: auto auto auto auto;

grid-column-gap: 30px;

grid-row-gap: 10px;

background-color: #666;

padding: 10px;

}

.grid-container > div {

background-color: #ccc;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-column-gap property example\</h2>

\<div class="grid-container">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\<div>9\</div>

\<div>10\</div>

\<div>11\</div>

\<div>12\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grid-container { display: grid; grid-template-columns: auto auto auto auto; grid-column-gap: 30px; grid-row-gap: 10px; background-color: #666; padding: 10px; } .grid-container > div { background-color: #ccc; text-align: center; padding: 20px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-column-gap property example\</h2> \<div class="grid-container"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \<div>9\</div> \<div>10\</div> \<div>11\</div> \<div>12\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 30px;
        grid-row-gap: 10px;
        background-color: #666;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #ccc;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-column-gap property example</h2>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image16-2.png)

Результат

### Grid-gap

В значении

grid-gap

`grid-gap` через пробел указываются сразу два параметра — промежутки между строками и между колонками.

Но если между строками и колонками промежутки одинаковые, то допускается указание одного параметра.

Свойство

grid-gap

`grid-gap` — это сокращение для

grid-column-gap

`grid-column-gap` и

grid-row-gap

`grid-row-gap`.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grid-container {

display: grid;

grid-template-columns: auto auto auto auto;

grid-gap: 60px;

background-color: #ccc;

padding: 10px;

}

.grid-container > div {

background-color: #666;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-gap property example\</h2>

\<div class="grid-container">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\<div>9\</div>

\<div>10\</div>

\<div>11\</div>

\<div>12\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grid-container { display: grid; grid-template-columns: auto auto auto auto; grid-gap: 60px; background-color: #ccc; padding: 10px; } .grid-container > div { background-color: #666; text-align: center; padding: 20px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-gap property example\</h2> \<div class="grid-container"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \<div>9\</div> \<div>10\</div> \<div>11\</div> \<div>12\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 60px;
        background-color: #ccc;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #666;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-gap property example</h2>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image2-2.jpg)

Результат

### Justify-items

Свойство

justify-items

`justify-items` оказывает влияние на все grid-элементы контейнера. Оно предназначено для выравнивания содержимого grid-элемента по оси строки.

Задаваемые значения:

* start

  `start` — фиксация содержимого по левому краю области;
* center

  `center` — фиксация содержимого по центру области;
* end

  `end` — фиксация содержимого по правому краю области;
* stretch

  `stretch` (по умолчанию) — заполнение всей ширины области.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

\#example {

display: grid;

grid-template-columns: 1fr;

grid-template-rows: 1fr 1fr 1fr;

grid-gap: 5px;

justify-items: start;

background-color: #cccccc;

}

\#example > div {

padding: 10px;

font-size: 20px;

color: white;

width: 100px;

height: 50px;

}

.one {

background-color: #1c87c9;

}

.two {

background-color: #8ebf42;

}

.three {

background-color: #666666;

}

\</style>

\</head>

\<body>

\<h2>Justify-items property example\</h2>

\<div id="example">

\<div class="one">1\</div>

\<div class="two">2\</div>

\<div class="three">3\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> #example { display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr 1fr 1fr; grid-gap: 5px; justify-items: start; background-color: #cccccc; } #example > div { padding: 10px; font-size: 20px; color: white; width: 100px; height: 50px; } .one { background-color: #1c87c9; } .two { background-color: #8ebf42; } .three { background-color: #666666; } \</style> \</head> \<body> \<h2>Justify-items property example\</h2> \<div id="example"> \<div class="one">1\</div> \<div class="two">2\</div> \<div class="three">3\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      #example {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 5px;
        justify-items: start;
        background-color: #cccccc;
      }
      #example > div {
        padding: 10px;
        font-size: 20px;
        color: white;
        width: 100px;
        height: 50px;
      }
      .one {
        background-color: #1c87c9;
      }
      .two {
        background-color: #8ebf42;
      }
      .three {
        background-color: #666666;
      }
    </style>
  </head>
  <body>
    <h2>Justify-items property example</h2>
    <div id="example">
      <div class="one">1</div>
      <div class="two">2</div>
      <div class="three">3</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image1-2-e1631880678987.jpg)

Результат

### Align-items

Свойство

align-items

`align-items` оказывает влияние на все grid-элементы контейнера. Оно предназначено для выравнивания содержимого grid-элемента по оси столбца.

Задаваемые значения:

* start

  `start` — фиксация содержимого по верхнему краю области;
* center

  `center` — фиксация содержимого по центру области;
* end

  `end` — фиксация содержимого по нижнему краю области;
* stretch

  `stretch` (по умолчанию) — заполнение всей высоты области.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

\#example {

width: 220px;

height: 300px;

padding: 0;

border: 1px solid #000;

display: -webkit-flex;

/\* Safari \*/

-webkit-align-items: stretch;

/\* Safari 7.0+ \*/

display: flex;

align-items: stretch;

}

\#example li {

-webkit-flex: 1;

/\* Safari 6.1+ \*/

flex: 1;

list-style: none;

}

\</style>

\</head>

\<body>

\<h2>Align-items: stretch; example\</h2>

\<ul id="example">

\<li style="background-color:#8ebf42;">Green\</li>

\<li style="background-color:#1c87c9;">Blue\</li>

\<li style="background-color:#ccc;">Gray\</li>

\</ul>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> #example { width: 220px; height: 300px; padding: 0; border: 1px solid #000; display: -webkit-flex; /\* Safari \*/ -webkit-align-items: stretch; /\* Safari 7.0+ \*/ display: flex; align-items: stretch; } #example li { -webkit-flex: 1; /\* Safari 6.1+ \*/ flex: 1; list-style: none; } \</style> \</head> \<body> \<h2>Align-items: stretch; example\</h2> \<ul id="example"> \<li style="background-color:#8ebf42;">Green\</li> \<li style="background-color:#1c87c9;">Blue\</li> \<li style="background-color:#ccc;">Gray\</li> \</ul> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      #example {
        width: 220px;
        height: 300px;
        padding: 0;
        border: 1px solid #000;
        display: -webkit-flex;
        /* Safari */
        -webkit-align-items: stretch;
        /* Safari 7.0+ */
        display: flex;
        align-items: stretch;
      }
      #example li {
        -webkit-flex: 1;
        /* Safari 6.1+ */
        flex: 1;
        list-style: none;
      }
    </style>
  </head>
  <body>
    <h2>Align-items: stretch; example</h2>
    <ul id="example">
      <li style="background-color:#8ebf42;">Green</li>
      <li style="background-color:#1c87c9;">Blue</li>
      <li style="background-color:#ccc;">Gray</li>
    </ul>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20382%20332'%3E%3C/svg%3E)

Результат

### Justify-content

Свойство

justify-content

`justify-content` используется тогда, когда размер сетки превышает размер контейнера. Оно выравнивает грид по оси строки и контролирует элементы, выходящие за пределы.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document \</title>

\<style>

.center {

width: 400px;

height: 150px;

border: 1px solid #666;

display: -webkit-flex;

-webkit-justify-content: center;

display: flex;

justify-content: center;

}

.center div {

width: 70px;

height: 70px;

background-color: #ccc;

border: 1px solid #666;

}

\</style>

\</head>

\<body>

\<h2>Justify-content property example\</h2>

\<p>Here the "justify-content: center" is set:\</p>

\<div class="center">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document \</title> \<style> .center { width: 400px; height: 150px; border: 1px solid #666; display: -webkit-flex; -webkit-justify-content: center; display: flex; justify-content: center; } .center div { width: 70px; height: 70px; background-color: #ccc; border: 1px solid #666; } \</style> \</head> \<body> \<h2>Justify-content property example\</h2> \<p>Here the "justify-content: center" is set:\</p> \<div class="center"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document </title>
    <style>
      .center {
        width: 400px;
        height: 150px;
        border: 1px solid #666;
        display: -webkit-flex;
        -webkit-justify-content: center;
        display: flex;
        justify-content: center;
      }
      .center div {
        width: 70px;
        height: 70px;
        background-color: #ccc;
        border: 1px solid #666;
      }
    </style>
  </head>
  <body>
    <h2>Justify-content property example</h2>
    <p>Here the "justify-content: center" is set:</p>
    <div class="center">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20336%20179'%3E%3C/svg%3E)

Результат

### Align-content

Свойство

align-content

`align-content` используется, когда размер сетки превышает размер контейнера, но в отличие от

justify-content

`justify-content`, выравнивает грид по оси столбца.

Задаваемые значения для

align-content

`align-content` и

justify-content

`justify-content` одинаковы:

* start

  `start` — выравнивание сетки по левому краю контейнера;
* center

  `center` — выравнивание сетки по центру контейнера;
* end

  `end` — выравнивание сетки по правому краю контейнера;
* stretch

  `stretch` — заполнение всей ширины контейнера;
* space-evenly

  `space-evenly` — между каждым элементом добавляется равное пространство, даже по краям сетки;
* space-around

  `space-around` — между каждым элементом добавляется равное пространство, кроме краев сетки;
* space-between

  `space-between` — между каждым элементом добавляется равное пространство, но по краям добавляет половину пространства.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

\#example {

width: 70px;

height: 300px;

padding: 0;

border: 1px solid #c3c3c3;

display: -webkit-flex;

/\* Safari \*/

-webkit-flex-flow: row wrap;

/\* Safari 6.1+ \*/

-webkit-align-content: stretch;

/\* Safari 7.0+ \*/

display: flex;

flex-flow: row wrap;

align-content: stretch;

}

\#example li {

width: 70px;

height: 70px;

list-style: none;

}

\</style>

\</head>

\<body>

\<h2>Align-content: stretch; example\</h2>

\<ul id="example">

\<li style="background-color:#8ebf42;">\</li>

\<li style="background-color:#1c87c9;">\</li>

\<li style="background-color:#666;">\</li>

\</ul>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> #example { width: 70px; height: 300px; padding: 0; border: 1px solid #c3c3c3; display: -webkit-flex; /\* Safari \*/ -webkit-flex-flow: row wrap; /\* Safari 6.1+ \*/ -webkit-align-content: stretch; /\* Safari 7.0+ \*/ display: flex; flex-flow: row wrap; align-content: stretch; } #example li { width: 70px; height: 70px; list-style: none; } \</style> \</head> \<body> \<h2>Align-content: stretch; example\</h2> \<ul id="example"> \<li style="background-color:#8ebf42;">\</li> \<li style="background-color:#1c87c9;">\</li> \<li style="background-color:#666;">\</li> \</ul> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      #example {
        width: 70px;
        height: 300px;
        padding: 0;
        border: 1px solid #c3c3c3;
        display: -webkit-flex;
        /* Safari */
        -webkit-flex-flow: row wrap;
        /* Safari 6.1+ */
        -webkit-align-content: stretch;
        /* Safari 7.0+ */
        display: flex;
        flex-flow: row wrap;
        align-content: stretch;
      }
      #example li {
        width: 70px;
        height: 70px;
        list-style: none;
      }
    </style>
  </head>
  <body>
    <h2>Align-content: stretch; example</h2>
    <ul id="example">
      <li style="background-color:#8ebf42;"></li>
      <li style="background-color:#1c87c9;"></li>
      <li style="background-color:#666;"></li>
    </ul>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image10.jpg)

Результат

### Grid-auto-rows

Свойство

grid-auto-rows

`grid-auto-rows` указывает размер строк в контейнере. Может влиять только на те строки, где не указан их размер.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.box1 {

grid-area: 1 / 1 / 2 / 2;

}

.box2 {

grid-area: 1 / 2 / 2 / 3;

}

.box3 {

grid-area: 1 / 3 / 2 / 4;

}

.box4 {

grid-area: 2 / 1 / 3 / 2;

}

.box5 {

grid-area: 2 / 2 / 3 / 3;

}

.box6 {

grid-area: 2 / 3 / 3 / 4;

}

.auto-box1 {

grid-area: 1 / 1 / 2 / 2;

}

.auto-box2 {

grid-area: 1 / 2 / 2 / 3;

}

.auto-box3 {

grid-area: 1 / 3 / 2 / 4;

}

.auto-box4 {

grid-area: 2 / 1 / 3 / 2;

}

.auto-box5 {

grid-area: 2 / 2 / 3 / 3;

}

.auto-box6 {

grid-area: 2 / 3 / 3 / 4;

}

.grid-container {

display: grid;

grid-auto-rows: 100px;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

}

.grid-container > div {

background-color: #666;

text-align: center;

padding: 20px 0;

font-size: 20px;

}

.auto-container {

display: grid;

grid-auto-rows: auto;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

}

.auto-container > div {

background-color: #666;

text-align: center;

padding: 20px 0;

font-size: 20px;

}

\</style>

\</head>

\<body>

\<h2>Grid-auto-rows property example\</h2>

\<h3>100 pixels\</h3>

\<div class="grid-container">

\<div class="box1">1\</div>

\<div class="box2">2\</div>

\<div class="box3">3\</div>

\<div class="box4">4\</div>

\<div class="box5">5\</div>

\<div class="box6">6\</div>

\</div>

\<h3>auto\</h3>

\<div class="auto-container">

\<div class="auto-box1">1\</div>

\<div class="auto-box2">2\</div>

\<div class="auto-box3">3\</div>

\<div class="auto-box4">4\</div>

\<div class="auto-box5">5\</div>

\<div class="auto-box6">6\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .box1 { grid-area: 1 / 1 / 2 / 2; } .box2 { grid-area: 1 / 2 / 2 / 3; } .box3 { grid-area: 1 / 3 / 2 / 4; } .box4 { grid-area: 2 / 1 / 3 / 2; } .box5 { grid-area: 2 / 2 / 3 / 3; } .box6 { grid-area: 2 / 3 / 3 / 4; } .auto-box1 { grid-area: 1 / 1 / 2 / 2; } .auto-box2 { grid-area: 1 / 2 / 2 / 3; } .auto-box3 { grid-area: 1 / 3 / 2 / 4; } .auto-box4 { grid-area: 2 / 1 / 3 / 2; } .auto-box5 { grid-area: 2 / 2 / 3 / 3; } .auto-box6 { grid-area: 2 / 3 / 3 / 4; } .grid-container { display: grid; grid-auto-rows: 100px; grid-gap: 10px; background-color: #ccc; padding: 10px; } .grid-container > div { background-color: #666; text-align: center; padding: 20px 0; font-size: 20px; } .auto-container { display: grid; grid-auto-rows: auto; grid-gap: 10px; background-color: #ccc; padding: 10px; } .auto-container > div { background-color: #666; text-align: center; padding: 20px 0; font-size: 20px; } \</style> \</head> \<body> \<h2>Grid-auto-rows property example\</h2> \<h3>100 pixels\</h3> \<div class="grid-container"> \<div class="box1">1\</div> \<div class="box2">2\</div> \<div class="box3">3\</div> \<div class="box4">4\</div> \<div class="box5">5\</div> \<div class="box6">6\</div> \</div> \<h3>auto\</h3> \<div class="auto-container"> \<div class="auto-box1">1\</div> \<div class="auto-box2">2\</div> \<div class="auto-box3">3\</div> \<div class="auto-box4">4\</div> \<div class="auto-box5">5\</div> \<div class="auto-box6">6\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .box1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .box2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .box3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      .box4 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .box5 {
        grid-area: 2 / 2 / 3 / 3;
      }
      .box6 {
        grid-area: 2 / 3 / 3 / 4;
      }
      .auto-box1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .auto-box2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .auto-box3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      .auto-box4 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .auto-box5 {
        grid-area: 2 / 2 / 3 / 3;
      }
      .auto-box6 {
        grid-area: 2 / 3 / 3 / 4;
      }
      .grid-container {
        display: grid;
        grid-auto-rows: 100px;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #666;
        text-align: center;
        padding: 20px 0;
        font-size: 20px;
      }
      .auto-container {
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
      }
      .auto-container > div {
        background-color: #666;
        text-align: center;
        padding: 20px 0;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-auto-rows property example</h2>
    <h3>100 pixels</h3>
    <div class="grid-container">
      <div class="box1">1</div>
      <div class="box2">2</div>
      <div class="box3">3</div>
      <div class="box4">4</div>
      <div class="box5">5</div>
      <div class="box6">6</div>
    </div>
    <h3>auto</h3>
    <div class="auto-container">
      <div class="auto-box1">1</div>
      <div class="auto-box2">2</div>
      <div class="auto-box3">3</div>
      <div class="auto-box4">4</div>
      <div class="auto-box5">5</div>
      <div class="auto-box6">6</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image11.jpg)

Результат

### Grid-auto-columns

Свойство

grid-auto-columns

`grid-auto-columns` указывает размер столбцов в контейнере.

Например:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.box1 {

grid-area: 1 / 1 / 2 / 2;

}

.box2 {

grid-area: 1 / 2 / 2 / 3;

}

.box3 {

grid-area: 1 / 3 / 2 / 4;

}

.box4 {

grid-area: 2 / 1 / 3 / 2;

}

.box5 {

grid-area: 2 / 2 / 3 / 3;

}

.box6 {

grid-area: 2 / 3 / 3 / 4;

}

.black-box1 {

grid-area: 1 / 1 / 2 / 2;

}

.black-box2 {

grid-area: 1 / 2 / 2 / 3;

}

.black-box3 {

grid-area: 1 / 3 / 2 / 4;

}

.black-box4 {

grid-area: 2 / 1 / 3 / 2;

}

.black-box5 {

grid-area: 2 / 2 / 3 / 3;

}

.black-box6 {

grid-area: 2 / 3 / 3 / 4;

}

.auto-box1 {

grid-area: 1 / 1 / 2 / 2;

}

.auto-box2 {

grid-area: 1 / 2 / 2 / 3;

}

.auto-box3 {

grid-area: 1 / 3 / 2 / 4;

}

.auto-box4 {

grid-area: 2 / 1 / 3 / 2;

}

.auto-box5 {

grid-area: 2 / 2 / 3 / 3;

}

.auto-box6 {

grid-area: 2 / 3 / 3 / 4;

}

.grid-container {

display: grid;

grid-auto-columns: 50px;

grid-gap: 10px;

background-color: #555;

padding: 10px;

}

.grid-container > div {

background-color: #ccc;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

.black-container {

display: grid;

grid-auto-columns: 100px;

grid-gap: 10px;

background-color: #000;

padding: 10px;

}

.black-container > div {

background-color: #ccc;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

.auto-container {

display: grid;

grid-auto-columns: auto;

grid-gap: 10px;

background-color: #ccc;

padding: 10px;

}

.auto-container > div {

background-color: #999;

text-align: center;

padding: 20px 0;

font-size: 30px;

}

\</style>

\</head>

\<body>

\<h2>Grid-auto-columns property example\</h2>

\<h3>50 pixels\</h3>

\<div class="grid-container">

\<div class="box1">1\</div>

\<div class="box2">2\</div>

\<div class="box3">3\</div>

\<div class="box4">4\</div>

\<div class="box5">5\</div>

\<div class="box6">6\</div>

\</div>

\<h3>100 pixels\</h3>

\<div class="black-container">

\<div class="black-box1">1\</div>

\<div class="black-box2">2\</div>

\<div class="black-box3">3\</div>

\<div class="black-box4">4\</div>

\<div class="black-box5">5\</div>

\<div class="black-box6">6\</div>

\</div>

\<h3>auto\</h3>

\<div class="auto-container">

\<div class="auto-box1">1\</div>

\<div class="auto-box2">2\</div>

\<div class="auto-box3">3\</div>

\<div class="auto-box4">4\</div>

\<div class="auto-box5">5\</div>

\<div class="auto-box6">6\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .box1 { grid-area: 1 / 1 / 2 / 2; } .box2 { grid-area: 1 / 2 / 2 / 3; } .box3 { grid-area: 1 / 3 / 2 / 4; } .box4 { grid-area: 2 / 1 / 3 / 2; } .box5 { grid-area: 2 / 2 / 3 / 3; } .box6 { grid-area: 2 / 3 / 3 / 4; } .black-box1 { grid-area: 1 / 1 / 2 / 2; } .black-box2 { grid-area: 1 / 2 / 2 / 3; } .black-box3 { grid-area: 1 / 3 / 2 / 4; } .black-box4 { grid-area: 2 / 1 / 3 / 2; } .black-box5 { grid-area: 2 / 2 / 3 / 3; } .black-box6 { grid-area: 2 / 3 / 3 / 4; } .auto-box1 { grid-area: 1 / 1 / 2 / 2; } .auto-box2 { grid-area: 1 / 2 / 2 / 3; } .auto-box3 { grid-area: 1 / 3 / 2 / 4; } .auto-box4 { grid-area: 2 / 1 / 3 / 2; } .auto-box5 { grid-area: 2 / 2 / 3 / 3; } .auto-box6 { grid-area: 2 / 3 / 3 / 4; } .grid-container { display: grid; grid-auto-columns: 50px; grid-gap: 10px; background-color: #555; padding: 10px; } .grid-container > div { background-color: #ccc; text-align: center; padding: 20px 0; font-size: 30px; } .black-container { display: grid; grid-auto-columns: 100px; grid-gap: 10px; background-color: #000; padding: 10px; } .black-container > div { background-color: #ccc; text-align: center; padding: 20px 0; font-size: 30px; } .auto-container { display: grid; grid-auto-columns: auto; grid-gap: 10px; background-color: #ccc; padding: 10px; } .auto-container > div { background-color: #999; text-align: center; padding: 20px 0; font-size: 30px; } \</style> \</head> \<body> \<h2>Grid-auto-columns property example\</h2> \<h3>50 pixels\</h3> \<div class="grid-container"> \<div class="box1">1\</div> \<div class="box2">2\</div> \<div class="box3">3\</div> \<div class="box4">4\</div> \<div class="box5">5\</div> \<div class="box6">6\</div> \</div> \<h3>100 pixels\</h3> \<div class="black-container"> \<div class="black-box1">1\</div> \<div class="black-box2">2\</div> \<div class="black-box3">3\</div> \<div class="black-box4">4\</div> \<div class="black-box5">5\</div> \<div class="black-box6">6\</div> \</div> \<h3>auto\</h3> \<div class="auto-container"> \<div class="auto-box1">1\</div> \<div class="auto-box2">2\</div> \<div class="auto-box3">3\</div> \<div class="auto-box4">4\</div> \<div class="auto-box5">5\</div> \<div class="auto-box6">6\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .box1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .box2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .box3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      .box4 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .box5 {
        grid-area: 2 / 2 / 3 / 3;
      }
      .box6 {
        grid-area: 2 / 3 / 3 / 4;
      }
      .black-box1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .black-box2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .black-box3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      .black-box4 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .black-box5 {
        grid-area: 2 / 2 / 3 / 3;
      }
      .black-box6 {
        grid-area: 2 / 3 / 3 / 4;
      }
      .auto-box1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .auto-box2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .auto-box3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      .auto-box4 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .auto-box5 {
        grid-area: 2 / 2 / 3 / 3;
      }
      .auto-box6 {
        grid-area: 2 / 3 / 3 / 4;
      }
      .grid-container {
        display: grid;
        grid-auto-columns: 50px;
        grid-gap: 10px;
        background-color: #555;
        padding: 10px;
      }
      .grid-container > div {
        background-color: #ccc;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
      .black-container {
        display: grid;
        grid-auto-columns: 100px;
        grid-gap: 10px;
        background-color: #000;
        padding: 10px;
      }
      .black-container > div {
        background-color: #ccc;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
      .auto-container {
        display: grid;
        grid-auto-columns: auto;
        grid-gap: 10px;
        background-color: #ccc;
        padding: 10px;
      }
      .auto-container > div {
        background-color: #999;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h2>Grid-auto-columns property example</h2>
    <h3>50 pixels</h3>
    <div class="grid-container">
      <div class="box1">1</div>
      <div class="box2">2</div>
      <div class="box3">3</div>
      <div class="box4">4</div>
      <div class="box5">5</div>
      <div class="box6">6</div>
    </div>
    <h3>100 pixels</h3>
    <div class="black-container">
      <div class="black-box1">1</div>
      <div class="black-box2">2</div>
      <div class="black-box3">3</div>
      <div class="black-box4">4</div>
      <div class="black-box5">5</div>
      <div class="black-box6">6</div>
    </div>
    <h3>auto</h3>
    <div class="auto-container">
      <div class="auto-box1">1</div>
      <div class="auto-box2">2</div>
      <div class="auto-box3">3</div>
      <div class="auto-box4">4</div>
      <div class="auto-box5">5</div>
      <div class="auto-box6">6</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image7-2.jpg)

Результат

### Grid-auto-flow

Свойство

grid-auto-flow

`grid-auto-flow` управляет алгоритмом авторазмещения. Необходимо в том случае, когда grid-элементы не были созданы.

Пример с row:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grey-container {

height: 250px;

width: 250px;

display: grid;

grid-gap: 20px;

grid-template: repeat(4, 1fr) / repeat(2, 1fr);

grid-auto-flow: row;

background-color: #ccc;

padding: 10px;

}

.box1 {

background-color: #00f3ff;

grid-row-start: 3;

}

.box2 {

background-color: #ff00d4;

}

.box3 {

background-color: #827c7c;

}

.box4 {

grid-column-start: 2;

background-color: orange;

}

\</style>

\</head>

\<body>

\<div class="grey-container">

\<div class="box1">\</div>

\<div class="box2">\</div>

\<div class="box3">\</div>

\<div class="box4">\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grey-container { height: 250px; width: 250px; display: grid; grid-gap: 20px; grid-template: repeat(4, 1fr) / repeat(2, 1fr); grid-auto-flow: row; background-color: #ccc; padding: 10px; } .box1 { background-color: #00f3ff; grid-row-start: 3; } .box2 { background-color: #ff00d4; } .box3 { background-color: #827c7c; } .box4 { grid-column-start: 2; background-color: orange; } \</style> \</head> \<body> \<div class="grey-container"> \<div class="box1">\</div> \<div class="box2">\</div> \<div class="box3">\</div> \<div class="box4">\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grey-container {
        height: 250px;
        width: 250px;
        display: grid;
        grid-gap: 20px;
        grid-template: repeat(4, 1fr) / repeat(2, 1fr);
        grid-auto-flow: row;
        background-color: #ccc;
        padding: 10px;
      }
      .box1 {
        background-color: #00f3ff;
        grid-row-start: 3;
      }
      .box2 {
        background-color: #ff00d4;
      }
      .box3 {
        background-color: #827c7c;
      }
      .box4 {
        grid-column-start: 2;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div class="grey-container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image6-1.jpg)

Результат

### Grid

Свойство

grid

`grid` устанавливает исходные значения для

grid-row-gap

`grid-row-gap` и

grid-column-gap

`grid-column-gap`.

Это сокращенное свойство для:

* grid-template-columns

  `grid-template-columns`;
* grid-auto-columns

  `grid-auto-columns`;
* grid-template-rows

  `grid-template-rows`;
* grid-auto-rows

  `grid-auto-rows`;
* grid-template-areas

  `grid-template-areas`;
* grid-auto-flow

  `grid-auto-flow`.

Пример с

grid-auto-flow

`grid-auto-flow`:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!DOCTYPE html>

\<html>

\<head>

\<title>Title of the document\</title>

\<style>

.grid-container {

display: grid;

grid-template-columns: auto auto auto;

grid-template-rows: auto auto;

grid-gap: 5px;

background-color: #1c87c9;

padding: 10px;

grid-auto-flow: column;

}

.grid-container > div {

background-color: rgba(255, 255, 255, 0.8);

text-align: center;

padding: 20px 0;

font-size: 20px;

}

\</style>

\</head>

\<body>

\<h2>Grid property example\</h2>

\<div class="grid-container">

\<div class="grid-box1">1\</div>

\<div class="grid-box2">2\</div>

\<div class="grid-box3">3\</div>

\<div class="grid-box4">4\</div>

\</div>

\</body>

\</html>

\<!DOCTYPE html> \<html> \<head> \<title>Title of the document\</title> \<style> .grid-container { display: grid; grid-template-columns: auto auto auto; grid-template-rows: auto auto; grid-gap: 5px; background-color: #1c87c9; padding: 10px; grid-auto-flow: column; } .grid-container > div { background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0; font-size: 20px; } \</style> \</head> \<body> \<h2>Grid property example\</h2> \<div class="grid-container"> \<div class="grid-box1">1\</div> \<div class="grid-box2">2\</div> \<div class="grid-box3">3\</div> \<div class="grid-box4">4\</div> \</div> \</body> \</html>

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        grid-gap: 5px;
        background-color: #1c87c9;
        padding: 10px;
        grid-auto-flow: column;
      }
      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h2>Grid property example</h2>
    <div class="grid-container">
      <div class="grid-box1">1</div>
      <div class="grid-box2">2</div>
      <div class="grid-box3">3</div>
      <div class="grid-box4">4</div>
    </div>
  </body>
</html>
```

Визуальное отображение:

![Верстаем на Grid в CSS: гайд по основным понятиям с примерами](https://highload.tech/wp-content/uploads/2021/09/image14.jpg)

Результат

## Гайд по созданию Grid

Код для создаваемого грида 3х3 имеет вид:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<!doctype html>

\<title>Example\</title>

\<style>

\#grid {

display: grid;

grid-template-rows: 1fr 1fr 1fr;

grid-template-columns: 1fr 1fr 1fr;

grid-gap: 2vw;

}

\#grid > div {

font-size: 5vw;

padding: .5em;

background: gold;

text-align: center;

}

\</style>

\<div id="grid">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\<div>9\</div>

\</div>

\<!doctype html> \<title>Example\</title> \<style> #grid { display: grid; grid-template-rows: 1fr 1fr 1fr; grid-template-columns: 1fr 1fr 1fr; grid-gap: 2vw; } #grid > div { font-size: 5vw; padding: .5em; background: gold; text-align: center; } \</style> \<div id="grid"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \<div>9\</div> \</div>

```
<!doctype html>
<title>Example</title>
<style>
#grid { 
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  }
#grid > div {
  font-size: 5vw;
  padding: .5em;
  background: gold;
  text-align: center;
}
</style>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

Где:

* grid-template-rows: 1fr 1fr 1fr

  `grid-template-rows: 1fr 1fr 1fr` — строки в сетке;
* grid-template-columns: 1fr 1fr 1fr

  `grid-template-columns: 1fr 1fr 1fr` — колонки в сетке;
* grid-gap: 2vw

  `grid-gap: 2vw` — отступы между элементами;
* стили grid-элементов:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\#grid > div {

font-size: 5vw;

padding: .5em;

background: gold;

text-align: center;

}

\#grid > div { font-size: 5vw; padding: .5em; background: gold; text-align: center; }

```
#grid > div {
  font-size: 5vw;
  padding: .5em;
  background: gold;
  text-align: center;
}
```

Сама сетка имеет небольшие отступы между элементами.

![Отступы между элементами в сетке](https://highload.tech/wp-content/uploads/2021/09/image4-8.png)

Отступы между элементами в сетке

В этом случае разметка HTML будет следующей:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\<div id="grid">

\<div>1\</div>

\<div>2\</div>

\<div>3\</div>

\<div>4\</div>

\<div>5\</div>

\<div>6\</div>

\<div>7\</div>

\<div>8\</div>

\<div>9\</div>

\</div>

\<div id="grid"> \<div>1\</div> \<div>2\</div> \<div>3\</div> \<div>4\</div> \<div>5\</div> \<div>6\</div> \<div>7\</div> \<div>8\</div> \<div>9\</div> \</div>

```
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

Внешний

\<div>

`<div>` — grid-контейнер, а это значит, что все элементы в нем являются grid-элементами. Чтобы HTML стал гридом, применим CSS:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

\#grid {

display: grid;

grid-template-rows: 1fr 1fr 1fr;

grid-template-columns: 1fr 1fr 1fr;

grid-gap: 2vw;

}

\#grid { display: grid; grid-template-rows: 1fr 1fr 1fr; grid-template-columns: 1fr 1fr 1fr; grid-gap: 2vw; }

```
#grid { 
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}
```

У внешнего

\<div>

`<div>` присвоен

ID #grid

`ID #grid`, поэтому это правило к нему применяется.

В CSS указан

display: grid

`display: grid`, что превращает элемент в контейнер Grid.

Чтобы сократить код, можно использовать функцию

repeat()

`repeat()` для всех значений размера элемента. К примеру,

grid-template-rows: 1fr 1fr 1fr 1fr 1fr

`grid-template-rows: 1fr 1fr 1fr 1fr 1fr` легко сокращается до

grid-template-rows: repeat(5, 1fr)

`grid-template-rows: repeat(5, 1fr)`.
