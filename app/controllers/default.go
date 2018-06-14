package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

// Index /?:lang:string [GET]
func (c *MainController) Index() {
	//m.Redirect(beego.URLFor("UserLoginController.Get"), 302)
	lang := c.Ctx.Input.Param(":lang")
	switch lang {
	case "zh":
		c.TplName = "index/indexCN.html"
	case "en":
		c.TplName = "index/indexEN.html"
	default:
		c.TplName = "index/indexCN.html"
	}
}

// About /?:lang:string/about [GET]
func (c *MainController) About() {
	//m.Redirect(beego.URLFor("UserLoginController.Get"), 302)
	lang := c.Ctx.Input.Param(":lang")
	switch lang {
	case "zh":
		c.TplName = "index/aboutUsCN.html"
	case "en":
		c.TplName = "index/aboutUs.html"
	default:
		c.TplName = "index/aboutUsCN.html"
	}
}

// Contact /?:lang:string/contact [GET]
func (c *MainController) Contact() {
	//m.Redirect(beego.URLFor("UserLoginController.Get"), 302)
	lang := c.Ctx.Input.Param(":lang")
	switch lang {
	case "zh":
		c.TplName = "index/contactCN.html"
	case "en":
		c.TplName = "index/contact.html"
	default:
		c.TplName = "index/contactCN.html"
	}
}
