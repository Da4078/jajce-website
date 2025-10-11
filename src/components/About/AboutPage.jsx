import { useParams } from "react-router-dom";
import AboutSection from "./AboutSection";
import { aboutPages } from "./AboutData";

function AboutPage() {
  const { pageId } = useParams();
  
  const pageData = aboutPages[pageId];

  if (!pageData) {
    return <div>Stranica nije pronađena</div>;
  }

  return (
    <AboutSection 
      title={pageData.title}
      content={pageData.content}
      image={pageData.image}
      layout={pageData.layout}
    />
  );
}

export default AboutPage;