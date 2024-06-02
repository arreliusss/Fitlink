package main

import (
	"server/routes"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	
	router := gin.New()
	router.Use(gin.Logger())	
	router.Use(cors.Default()) 

	router.POST("/createaccount", routes.CreateAccount)
	router.GET("/getaccount/:id", routes.GetAccount)
	router.POST("/getaccounts", routes.LoginAccount)

	router.POST("/createorder", routes.CreateOrder)
	router.GET("/getorder/:id", routes.GetOrder)
	router.GET("/getorders", routes.GetOrders)

	router.POST("/createtraineraccount", routes.CreateTrainer)
	router.GET("/gettraineraccount/:id", routes.GetTrainer)
	router.POST("/gettraineraccounts", routes.LoginTrainer)
	router.GET("/gettrainers", routes.GetTrainerByEmailAndPassword)

	router.Run(":" + port)
}