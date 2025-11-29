import "./AboutStyles.css";

function AboutSection({ 
  title, 
  content, 
  image, 
  layout = "image-left",
  extraImages = []
}) {
  return (
    <div className={`about-container ${layout}`}>
      {layout === "title-top" && <h1>{title}</h1>}

      <div className="about-content">
        {layout === "image-left" && image && (
          <img src={image} alt={title} className="about-image" />
        )}

        <div className="about-text">
          {layout !== "title-top" && <h1>{title}</h1>}
          {Array.isArray(content)
            ? content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            : <p>{content}</p>}
        </div>

        {layout === "image-right" && image && (
          <img src={image} alt={title} className="about-image" />
        )}
      </div>
       {extraImages.length > 0 && (
        <div className="extra-images">
          {extraImages.map((img, i) => (
            <img key={i} src={img} alt={`${title} dodatna ${i+1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutSection;
