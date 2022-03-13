package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func accessBackend(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(helloBackend())
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello API!")
	fmt.Println("Hello API")
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(login())
}

// API Entry Point
func main() {
	port := ":4000"
	router := mux.NewRouter().StrictSlash(true)

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS"})

	router.HandleFunc("/*", homeLink)
	router.HandleFunc("/backend", accessBackend)
	router.HandleFunc("/api/login", handleLogin)

	fmt.Printf("Listening and Serving on port %v...", port)
	log.Fatal(http.ListenAndServe(port, handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}
