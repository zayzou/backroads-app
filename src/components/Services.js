import Title from "./Title"
import Service from "./Service"
import {services} from "../data"

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title word1="Our" word2="Services"></Title>
            <div className="section-center services-center">
                {services.map(({id, icon, title, text}) =>
                    <Service key={id} icon={icon} title={title} text={text}></Service>
                )}

            </div>
        </section>
    )
}
export default Services