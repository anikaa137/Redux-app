import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (
        <div className="App">
        <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">Redux</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  ms-auto me-5">
        <li class="nav-item">
        <Link class="nav-link active me-5 fw-bold" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active me-5 fw-bold" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active me-5 fw-bold" to="/users">Users</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/product/:id">
            <ProductDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
    );
}

export default App;

