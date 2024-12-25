import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import SearchBar from "@/components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Slider />
      <SearchBar />
    </div>
  );
};

export default HomePage;
