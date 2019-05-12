## Основные возможности

### Using JSON objects for local storage:

#### SET
```js
var m={name:'Hero',Title:'developer'};
localStorage.setItem('us', JSON.stringify(m));
```

#### GET
```js
var gm =JSON.parse(localStorage.getItem('us'));
console.log(gm.name);
```

#### Iteration of all local storage keys and values
```js
for (var i = 0, len = localStorage.length; i < len; ++i) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

#### DELETE
```js
localStorage.removeItem('us');
delete window.localStorage["us"];
```
