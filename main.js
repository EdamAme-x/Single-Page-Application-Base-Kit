// feat

SPA = new Router(document.getElementById("app"))
        .route("/sub", "./sub.html")
        .route("/sub2", "./sub2.html")
        .route("/users/:id", "./user.html", getUser)
        .route("/admin/*", "./admin.html", Verify)