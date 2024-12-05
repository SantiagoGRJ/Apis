

type Props = {}

function SectionOne({}: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Nuestra Plataforma</h1>
        <p className="text-lg mb-6">
          Explora datos fascinantes y útiles mediante nuestras API integradas. 
          Te ofrecemos una experiencia única con información accesible y organizada.
        </p>
        {/* <button className="bg-white text-blue-600 hover:text-blue-800 px-6 py-3 rounded-md font-semibold">
          Descubre Más
        </button> */}
      </div>
    </section>
  )
}

export default SectionOne