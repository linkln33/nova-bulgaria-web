package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Serve static files from the web directory
	fs := http.FileServer(http.Dir("web"))
	http.Handle("/", fs)

	// Serve assets
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("web/assets"))))

	log.Printf("Starting web server on port %s...\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
