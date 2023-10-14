import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title word1="featured" word2="tours"></Title>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
