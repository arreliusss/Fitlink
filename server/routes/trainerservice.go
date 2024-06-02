package routes

import (
	"context"
	"server/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var trainerCollection *mongo.Collection = OpenCollection(Client, "Trainer")

func CreateTrainer(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var trainer models.Trainer

	if err := c.BindJSON(&trainer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := validate.Struct(trainer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	trainer.ID = primitive.NewObjectID()
	trainer.BookedAt = time.Now()

	result, err := trainerCollection.InsertOne(ctx, trainer)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, gin.H{"data": result})
}

func GetTrainer(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var trainer models.Trainer

	id, err := primitive.ObjectIDFromHex(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = trainerCollection.FindOne(ctx, bson.M{"_id": id}).Decode(&trainer)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, gin.H{"data": trainer})
}

func LoginTrainer(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var trainer models.Trainer

	if err := c.BindJSON(&trainer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := trainerCollection.FindOne(ctx, bson.M{"email": trainer.Email, "password": trainer.Password}).Decode(&trainer)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, gin.H{"trainer": trainer})
}

func GetTrainerByEmailAndPassword(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var trainer models.Trainer

	if err := c.BindJSON(&trainer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := trainerCollection.FindOne(ctx, bson.M{"email": trainer.Email, "password": trainer.Password}).Decode(&trainer)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, gin.H{"trainer": trainer})
}