import "./App.css";
import Footer from "./components/footer";
import MatkulCard from "./components/matkulcard";
import Navbar from "./components/navbar";
import TambahKuliah from "./components/tambahkuliah";
import matkuls from "./data/matkul.json";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-24 px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <TambahKuliah />
          <div>
            {matkuls.map((matkul) => {
              return <MatkulCard matkul={matkul} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
