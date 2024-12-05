

import { apis } from "../../Mocks/Apis.mock";
import Card from "./Card";

function SectionTwo() {
  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Explora nuestras APIs
        </h2>
        <p id="text" className="text-gray-600 mt-4">
          Descubre la variedad de datos que puedes consultar y aprovechar en tus
          aplicaciones.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap gap-4">
        
        {apis.map(({id,name,description,image,link}) => (
          <Card key={id} name={name} description={description} image={image} link={link} />
        ))}
      </div>
    </section>
  );
}

export default SectionTwo;
