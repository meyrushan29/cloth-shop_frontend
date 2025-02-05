
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-16">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="w-full">
          <img 
            src={assets.about_img} 
            alt="About Us" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6 text-lg">
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus maiores consequuntur unde nemo natus iusto blanditiis mollitia impedit dolorum. Ad, reprehenderit accusantium. Optio at temporibus ipsam quas ipsum modi ducimus!
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus eos, ea excepturi deserunt, similique recusandae sed atque quis error modi fuga eum sit? Vero, blanditiis veritatis reprehenderit fugit eveniet quisquam.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 pt-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque debitis repudiandae voluptatem at officia explicabo quidem expedita, dolore vel nostrum distinctio laborum cupiditate, quam magni, ad quaerat. Molestiae, rerum fugiat.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Quality Assurance",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, esse nulla odit maiores numquam, ipsam similique consectetur quos asperiores maxime veniam. Repellendus ea facilis, velit dolorum saepe commodi corporis dignissimos."
          },
          {
            title: "Convenience",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, esse nulla odit maiores numquam, ipsam similique consectetur quos asperiores maxime veniam. Repellendus ea facilis, velit dolorum saepe commodi corporis dignissimos."
          },
          {
            title: "Exceptional Customer Service",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, esse nulla odit maiores numquam, ipsam similique consectetur quos asperiores maxime veniam. Repellendus ea facilis, velit dolorum saepe commodi corporis dignissimos."
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />
    </div>
  );
};

export default About;