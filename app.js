const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "Child" }, [
        React.createElement("h1", {}, "Iam h1 tag"),
        React.createElement("h2", {}, "Iam h3 tag"),
    ]),
    React.createElement("div", { id: "Child2 " }, [
        React.createElement("h1", {}, "Iam h1 tag"),
        React.createElement("h2", {}, "Iam h3 tag"),
    ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);