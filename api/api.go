package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello API!")
}

func main() {
	port := ":4000"

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	fmt.Printf("Listening and Serving on port %v...", port)
	log.Fatal(http.ListenAndServe(port, router))
}
