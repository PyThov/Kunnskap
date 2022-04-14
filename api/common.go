package main

import "time"

func getToken() string {
	return "q1w2e3r4t5y6u7i8o9p0"
}

func getExpires() time.Time {
	return time.Now().Add(1 * time.Hour)
}
