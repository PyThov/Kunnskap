import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      this.post("/login", (_, request) => {
        const attrs = JSON.parse(request.requestBody).user
        const date = new Date();

        date.setDate(date.getDate() + 1);

        if (attrs.email && attrs.password) {
          return {
            "user": "MockUser",
            "token": "q1w2e3r4t5y6",
            "expires": date,
            "error": attrs.password !== "asdf" ? "Incorrect password" : "",
            "errorField": attrs.password !== "asdf" ? "password" : "",
          }
        } else {
          return new Response(
            400,
            {
              "error": "mock error",
              "errorField": "email",
            }
          )
        }
      })

      this.post("/register", (_, request) => {
        const attrs = JSON.parse(request.requestBody).user
        console.log("request", request);
        console.log("attrs", attrs);
        
        for (const [key, value] of Object.entries(attrs)) {
          console.log(key, value);
        }
      })

    },
  })


  return server
}