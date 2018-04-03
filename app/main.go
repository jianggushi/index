package main

import (
	"html/template"
	"net/http"

	_ "fanhantech.com/index/app/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.SetLevel(beego.LevelInformational)
	beego.ErrorHandler("404", page_not_found)
	beego.Run()
}

func page_not_found(rw http.ResponseWriter, r *http.Request) {
	t, _ := template.New("404.html").ParseFiles("../views/404.html")
	t.Execute(rw, nil)
}
