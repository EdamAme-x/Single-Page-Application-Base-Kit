class Router {
    constructor(target) {
        this.target = target;
    }

    to(path) {
        location.hash = path;
        if (!this.routes[path]) return;
        // TODO: * :id URLPattern
        fetch(this.routes[path]).then(res => res.text()).then(data => {
            this.target.innerHTML = data;
        })
    }

    get() {
        return location.hash;
    }

    routes = {};

    route(path, html, script) {
        if (script) {
            Function(script)();
        }
        this.routes[path] = html;
        return this;
    }
}