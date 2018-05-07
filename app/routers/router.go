package routers

import (
	"fanhantech.com/index/app/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/?:lang(zh|en)", &controllers.MainController{}, "get:Index")
	beego.Router("/?:lang(zh|en)/about", &controllers.MainController{}, "get:About")
	beego.Router("/?:lang(zh|en)/contact", &controllers.MainController{}, "get:Contact")
}
