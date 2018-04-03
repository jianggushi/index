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
		c.TplName = "indexCN.html"
	case "en":
		c.TplName = "indexEN.html"
	default:
		c.TplName = "indexCN.html"
	}
}

// About /?:lang:string/about [GET]
func (c *MainController) About() {
	//m.Redirect(beego.URLFor("UserLoginController.Get"), 302)
	lang := c.Ctx.Input.Param(":lang")
	switch lang {
	case "zh":
		c.TplName = "aboutUsCN.html"
	case "en":
		c.TplName = "aboutUs.html"
	default:
		c.TplName = "aboutUsCN.html"
	}
}

// Contact /?:lang:string/contact [GET]
func (c *MainController) Contact() {
	//m.Redirect(beego.URLFor("UserLoginController.Get"), 302)
	lang := c.Ctx.Input.Param(":lang")
	switch lang {
	case "zh":
		c.TplName = "contactCN.html"
	case "en":
		c.TplName = "contact.html"
	default:
		c.TplName = "contactCN.html"
	}
}
