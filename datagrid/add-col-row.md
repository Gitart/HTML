## Sanple add row and col



```html
<button type="button" id="btnAddRow">Add new row</button>
<button type="button" id="btnAddCol">Add new column</button>
<br>
<table class="dataTable" id="example">
</table>

```

```js
var data_table, row_num=1, col_num=3, row_cell=1, col_cell=0, iter=0;
var cols = [
    { "mDataProp": "Field1", sTitle: "Date", sType : "date"},
    { "mDataProp": "Field2", sTitle: "Number", sType : "numeric"},
    { "mDataProp": "Field3" , "sTitle": "FName", sType : "string"},
    { "mDataProp": "Field4" ,  sTitle: "LName", sType : "string"}
];

 
//Get stored data from HTML table element
var results = [{
       Field1: "2011/04/23",
       Field2: 8,
       Field3: "Adam",
       Field4: "Den"},
      {
       Field1: "2011/03/25",
       Field2: 6,
       Field3: "Honey",
       Field4: "Singh"}
    ];
 
function initDT(){
    //Construct the measurement table
    data_table = $('#example').dataTable({
        "bJQueryUI": true,
        "bDeferRender": true,
        "bInfo" : false,
        "bSort" : false,
        "bDestroy" : true,
        "bFilter" : false,
        "bPagination" : false,
        "aaData": results,
        "aoColumns": cols,
    });
    attachTableClickEventHandlers();
}

initDT();

function attachTableClickEventHandlers(){
  //row/column indexing is zero based
  $("#example thead tr th").click(function() {     
            col_num = parseInt( $(this).index() );
            console.log("column_num ="+ col_num );   
    });
    $("#example tbody tr td").click(function() {     
            col_cell = parseInt( $(this).index() );
            row_cell = parseInt( $(this).parent().index() );    
            console.log("Row_num =" + row_cell + "  ,  column_num ="+ col_cell );
    });  
};


$("#btnAddRow").click(function(){
    //adding/removing row from datatable datasource
    //create test new record
    var aoCols = data_table.fnSettings().aoColumns;
    var newRow = new Object();
    for(var iRec=0; iRec<aoCols.length; iRec++){
        
        if(aoCols[iRec]._sManualType === "date"){
            newRow[aoCols[iRec].mDataProp] = "2011/03/25";
        }else if(aoCols[iRec]._sManualType === "numeric"){
            newRow[aoCols[iRec].mDataProp] = 10;
        }else if(aoCols[iRec]._sManualType === "string"){
            newRow[aoCols[iRec].mDataProp] = 'testStr';
        }
    }    
    results.splice(row_cell+1, 0, newRow);
    data_table.fnDestroy();
    initDT();  
    addDBClikHandler();
});

$('#btnAddCol').click(function () {
       
        //new column information
        //row's new field(for new column)
        //cols must be updated
        cols.splice(col_num+1, 0, {"mDataProp": "newField"+iter, sTitle: "Col-"+iter, sType : "string"});
        //update the result, actual data to be displayed
        for(var iRes=0; iRes<results.length ;iRes++){
            results[iRes]["newField"+iter] = "data-"+iter;
        }
        //destroy the table
		data_table.fnDestroy();
        $("#example thead tr th").eq(col_num).after('<th>Col-'+iter+'</th>');
        //init again
		initDT();
        iter++;
        addDBClikHandler();
});



var type1 = ["anil","amit","cd","vvv","vvvvvv","99","999","1","1111","hhh","ttt"];
    
function restoreRow ( oTable, nRow ){
    var aData = oTable.fnGetData(nRow);
    var jqTds = $('>td', nRow);
    
    for ( var i=0, iLen=jqTds.length ; i<iLen ; i++ ) 
    {
        oTable.fnUpdate( aData[i], nRow, i, false );
    }
};

function editRow ( oTable, nRow ){
    var aData = oTable.fnGetData(nRow);
    var jqTds = $('>td', nRow);
    jqTds[col_cell].innerHTML = '<input type="text" id ="typ" value="'+aData[cols[col_cell].mData]+'"/>';
    $("#typ").autocomplete({source:type1});
};

function saveRow ( oTable, nRow ){
    var jqInputs = $('input', nRow);
    oTable.fnUpdate( jqInputs[0].value, row_cell, col_cell, false );
};

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function ( a ) {
        var ukDatea = a.split('/');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1
    },
    
    "date-uk-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    
    "date-uk-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );

/* Get the rows which are currently selected */
function fnGetSelected( oTableLocal ){
    var aReturn = new Array();
    var aTrs = oTableLocal.fnGetNodes();
    
    for ( var i=0 ; i<aTrs.length ; i++ )
    {
        if ( $(aTrs[i]).hasClass('row_selected') )
        {
            aReturn.push( aTrs[i] );
        }
    }
    return aReturn;
};

function addDBClikHandler(){
        $('#example tbody tr').on('dblclick', function (e) {
        e.preventDefault();
        
            var nRow = $(this)[0];
    
             var jqTds = $('>td', nRow);
            if($.trim(jqTds[0].innerHTML.substr(0,6)) != '<input') 
            {
                if ( nEditing !== null && nEditing != nRow ) {
                    /* Currently editing - but not this row - restore the old before continuing to edit mode */
                    restoreRow( oTable, nEditing );
                      nEditing = nRow;
                    editRow( oTable, nRow );
                   
                }
                else {
                    /* No edit in progress - let's start one */
                      nEditing = nRow;
                    editRow( oTable, nRow );
                  
                }
                
            }
        
        
     } );
    
     $('#example tbody tr').keydown(function(event){
    
        if(event.keyCode==13)
        {
        event.preventDefault();
    
         if(nEditing==null)
            alert("Select Row");
        else
            saveRow( oTable, nEditing );
            nEditing = null;
        }
        /* Editing this row and want to save it */
    
    } );
    
    
};

var nEditing = null;

var oTable = null;

$(document).ready(function() {
    initDT();
    oTable = data_table;  
    addDBClikHandler();
} );

```
