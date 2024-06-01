package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Book struct{
	ID			primitive.ObjectID	`bson:"_id"`
	TrainerName *string				`json:"trainername"`
	ProgramName *string				`json:"programname"`
	BookedAt	time.Time			`json:"booked_at"`
}
