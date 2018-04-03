package routers

import (
	"fanhantech.com/index/app/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/?:lang:string", &controllers.MainController{}, "get:Index")
	beego.Router("/?:lang:string/about", &controllers.MainController{}, "get:About")
	beego.Router("/?:lang:string/contact", &controllers.MainController{}, "get:Contact")
}
