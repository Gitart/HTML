// **********************************************************
// Список документов накладных для списка в окне
// **********************************************************
func FrmOrderList(c echo.Context) error {
     ob  := Obj{}
     doc := Orders{}
     
     ob["title"]  = "Журнал митних декларацій"
     ob["data"]   =  doc.GetAllFilter(1)      // 1=Митна декларация

     return c.JSON(http.StatusOK, ob) 
}

//**********************************************************
// Список документов накладных в окне
//**********************************************************
func ViewOrderList(c echo.Context) error {
   ob := Obj{}
   ob["title"]  = "Журнал документів"
   return c.Render(http.StatusOK, "documents.html", ob)
 }
