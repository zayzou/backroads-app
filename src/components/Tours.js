import Title from "./Title"
import {tours} from "../data"

const Tours = () => {
    return (<section className="section" id="tours">
        <Title word1="featured" word2="tours"></Title>
        <div className="section-center featured-center">
            {tours.map((tour) => {
                return (<article className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour.image} className="tour-img" alt={tour.title}/>
                        <p className="tour-date">{tour.date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>{tour.title}</h4>
                        </div>
                        <p>
                            {tour.text}
                        </p>
                        <div class="tour-footer">
                            <p>
                                <span><i class="fas fa-map"></i></span> {tour.location}
                            </p>
                            <p>{tour.duration}</p>
                            <p>{tour.price}</p>
                        </div>
                    </div>
                </article>)
            })}
        </div>
    </section>)
}

export default Tours