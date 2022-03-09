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
          if (attrs.password !== "asdf") {
            return {
              "error": "Incorrect Password",
              "errorField": "password",
            }
          }
          return {
            "user": "MockUser",
            "token": "q1w2e3r4t5y6",
            "expires": date,
          }
        } else {
          return {
              "error": "mock error",
              "errorField": "email",
            }
        }
      })

      this.post("/register", (_, request) => {
        const attrs = JSON.parse(request.requestBody).user
        const date = new Date();

        date.setDate(date.getDate() + 1);
        
        for (const [key, value] of Object.entries(attrs)) {
          switch (key){
            case "email":
              if(value === "used@gmail.com") {
                return {
                    "error": "Email already in use",
                    "errorField": "email",
                  }
              }
              break;
          }
        }

        return {
            "user": "MockUser",
            "token": "q1w2e3r4t5y6",
            "expires": date,
          }
      })

    },
  })


  return server
}