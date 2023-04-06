import "./App.css";
import Profile from "./Component/Profile/Profil";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div className="App">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <div class="card p-3 py-4">
             
              <Profile
                fullName="YASSINE BOUA"
                bio="I am a software engineer."
                profession="React Developer"
                handleName={handleName}
              ></Profile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
