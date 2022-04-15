## Setting datetime


```js

 $(document).ready(function() {

  var table = $('#list_md').DataTable({
          ajax: {
              url:     "/docs",
              dataSrc: "data",
          },
         "pageLength": 10,
         "processing": true,
         "serverSide": false,
         "language": {
                         "lengthMenu":   "Записів : _MENU_",
                         "zeroRecords":  "Записів немає",
                         "info":         "Сторінок _PAGE_ із _PAGES_",
                         "infoEmpty":    "Нет данных ",
                         "infoFiltered": "(Знайдено _MAX_ всього записів)",
                         "search":       "Пошук : "
                     },
      "columns": [
         {"data": "id"},
         {"data": "num"},
         {"data": "company"},
         {"data": "typ_name"}
      ]
  });


$('#list_md').on( 'dblclick', 'tr', function () {
       var rowData = table.row(this).data();
       SetNumber(rowData.num);
       CloseWindow();
    });
});
 ```
## Update field in parent window
```js
// Data 
function SetNumber(num){
   window.opener.document.getElementById('td_num').value=num;
}
```

## Close current window
```js
// close
function CloseWindow(){
   window.close();
}
```


## Open window from parent window

```js
var myWindow;

function openCenteredWindow(url) {
    var width  = 800;
    var height = 400;
    var left   = parseInt((screen.availWidth/2)  - (width/2));
    var top    = parseInt((screen.availHeight/2) - (height/2));
    // var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    var windowFeatures = "width=" + width + ",height=" + height + ",resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url, "subWind", windowFeatures);
}
```

### Html form
Количество полей должно сопадать с оперделенными полями в JS


```html
<!DOCTYPE html>
<html>
<head>
      {{template "libs"}}
       <script type="text/javascript" language="javascript" src="/static/js/documents.js"></script>
</head>

<body>
  <div class="container">
    
    <!-- 
     <button onclick="SetNumber()">Установка значения</button> 
     -->

    <h3>{{.Title}}</h3>
    
    <!-- Modal window-->
    <div id="MmodalwindowTwo"  >
         <table id="list_md" class="display">
            <thead>
                <tr ondblclick="SetNumber()">
                    <th>#</th>
                    <th>Номер</th>
                    <th>Підприємство</th>
                    <th>Код</th>
                </tr>
            </thead>
        </table>
    </div>

   </div>
</body>
```











 
  
  
  
