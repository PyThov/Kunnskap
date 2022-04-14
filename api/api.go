package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type User struct {
	Email    string
	Password string
}

type ErrorMsg struct {
	Error      string `json:"error,omitempty"`
	ErrorField string `json:"errorField,omitempty"`
}

type Session struct {
	User    string    `json:"user"`
	Token   string    `json:"token"`
	Expires time.Time `json:"expires"`
}

func accessBackend(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(helloBackend())
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello API!")
	fmt.Println("Hello API")
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	user := User{}

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		panic(err)
	}

	session, errMsg := login(user)
	setHeaderDefaults(w)
	if (errMsg != ErrorMsg{}) {
		json.NewEncoder(w).Encode(errMsg)
	} else {
		json.NewEncoder(w).Encode(session)
	}
}

func handleRegister(w http.ResponseWriter, r *http.Request) {
	// session, errMsg :=
	register(r)
	// setHeaderDefaults(w)
	// if (errMsg != ErrorMsg{}) {
	// 	json.NewEncoder(w).Encode(errMsg)
	// } else {
	// 	json.NewEncoder(w).Encode(session)
	// }
}

func setHeaderDefaults(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
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
	router.HandleFunc("/api/login", handleLogin).Methods("POST")
	router.HandleFunc("/api/register", handleRegister).Methods("POST")

	fmt.Printf("Listening and Serving on port %v...", port)
	log.Fatal(http.ListenAndServe(port, handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}
