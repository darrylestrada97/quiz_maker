import Navbar from "@/app/Components/Navbar";
import QuizzesArea from "@/app/Components/QuizzesArea";

export default function Home() {
  return (
    <div>
      <header>
          <Navbar />
      </header>
        <QuizzesArea />
    </div>
  );
}
