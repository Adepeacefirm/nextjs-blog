import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="px-3">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
