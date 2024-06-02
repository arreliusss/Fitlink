package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Trainer struct {
	ID          primitive.ObjectID `bson:"_id"`
	Name        *string            `json:"name"`
	Email       *string            `json:"email"`
	Password   	*string            `json:"password"`	
	BookedAt    time.Time          `json:"booked_at"`
}
