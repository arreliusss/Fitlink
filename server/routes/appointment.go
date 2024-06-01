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

var orderCollection *mongo.Collection = OpenCollection(Client, "Order")

func CreateOrder(c *gin.Context) {
    var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
    var order models.Book

    if err := c.BindJSON(&order); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    if err := validate.Struct(order); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    order.ID = primitive.NewObjectID()
    order.BookedAt = time.Now()

    result, err := orderCollection.InsertOne(ctx, order)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    defer cancel()
    c.JSON(http.StatusOK, gin.H{"data": result})
}

func GetOrder(c *gin.Context) {
    var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
    var order models.Book

    id, err := primitive.ObjectIDFromHex(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    err = orderCollection.FindOne(ctx, bson.M{"_id": id}).Decode(&order)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    defer cancel()
    c.JSON(http.StatusOK, gin.H{"data": order})
}

func GetOrders(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var orders []models.Book

	cursor, err := orderCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var order models.Book
		cursor.Decode(&order)
		orders = append(orders, order)
	}

	defer cancel()
	c.JSON(http.StatusOK, gin.H{"data": orders})
}