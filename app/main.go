package main

import (
	_ "fanhantech.com/index/app/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.SetLevel(beego.LevelInformational)
	beego.Run()
}
