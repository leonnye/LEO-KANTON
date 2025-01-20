export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-purple-200">
            About Leo Kanton
          </h1>
          
          <div className="space-y-8 text-lg text-purple-100">
            <p>
              Founded in 2020, Leo Kanton Website Development has been at the forefront of creating innovative digital solutions for businesses worldwide. Our passion for technology and design drives us to deliver exceptional web experiences that help our clients succeed in the digital landscape.
            </p>

            <div className="bg-black border border-purple-300/10 rounded-lg p-6 md:p-8 shadow-lg shadow-purple-900/5">
              <h2 className="text-2xl font-semibold mb-4 text-violet-200">Our Mission</h2>
              <p>
                To empower businesses with cutting-edge web solutions that drive growth, enhance user engagement, and create lasting digital impressions. We believe in combining creativity with technical excellence to deliver websites that not only look stunning but also perform exceptionally.
              </p>
            </div>

            <div className="bg-black border border-purple-300/10 rounded-lg p-6 md:p-8 shadow-lg shadow-purple-900/5">
              <h2 className="text-2xl font-semibold mb-4 text-violet-200">Our Approach</h2>
              <ul className="space-y-4">
                <li>
                  <strong className="text-violet-300">User-Centric Design:</strong> We prioritize user experience in every project, ensuring intuitive navigation and engaging interfaces.
                </li>
                <li>
                  <strong className="text-violet-300">Technical Excellence:</strong> Our team stays ahead of the latest web technologies and best practices to deliver modern, efficient solutions.
                </li>
                <li>
                  <strong className="text-violet-300">Collaborative Process:</strong> We work closely with our clients, ensuring their vision and goals are reflected in every aspect of their website.
                </li>
                <li>
                  <strong className="text-violet-300">Continuous Support:</strong> Our relationship with clients extends beyond launch, providing ongoing maintenance and updates.
                </li>
              </ul>
            </div>

            <div className="bg-black border border-purple-300/10 rounded-lg p-6 md:p-8 shadow-lg shadow-purple-900/5">
              <h2 className="text-2xl font-semibold mb-4 text-violet-200">Our Team</h2>
              <p>
                Our diverse team of designers, developers, and digital strategists brings together years of experience in creating successful web solutions. We're passionate about what we do and committed to delivering excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}