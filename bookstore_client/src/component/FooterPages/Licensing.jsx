import React from "react";

const Licensing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Licensing Agreement</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              This Licensing Agreement is all set for the Online Bookstore named Bibliomart.
              By accessing and using our online bookstore website, you agree to comply with and be bound by the terms and conditions 
              of this Agreement. If you do not agree with any part of this Agreement, you must not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Grant of License</h2>
            <p className="text-gray-600">
              The Licensor grants the Licensee a non-exclusive, non-transferable license to access and use the materials available 
              on the online bookstore website for personal, non-commercial purposes only. Any other use of the materials, including 
              commercial use, reproduction, modification, distribution, or republication, without prior written consent from the 
              Licensor, is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, including but not limited to text, graphics, logos, images, and software, provided on the online 
              bookstore website is the property of the Licensor or its content suppliers and is protected by applicable copyright, 
              trademark, and other intellectual property laws. The Licensee acknowledges that they do not acquire any ownership 
              rights by accessing or using the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Restrictions</h2>
            <p className="text-gray-600">
              The Licensee agrees not to:
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Use the website for any illegal or unauthorized purpose.</li>
                <li>Attempt to gain unauthorized access to any part of the website or its related systems or networks.</li>
                <li>Engage in any activity that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.</li>
                <li>Use any automated means, such as robots or spiders, to access the website.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Termination</h2>
            <p className="text-gray-600">
              The Licensor reserves the right to terminate or suspend the Licensee's access to the website, without notice, for 
              conduct that the Licensor believes violates this Agreement or is harmful to other users of the website, the Licensor, 
              or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              The website and its content are provided on an "as is" and "as available" basis. The Licensor makes no representations 
              or warranties of any kind, express or implied, as to the operation of the website or the information, content, 
              materials, or products included on the website. The Licensee expressly agrees that their use of the website is at their 
              sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the fullest extent permitted by applicable law, the Licensor shall not be liable for any damages of any kind arising 
              from the use of the website or from any information, content, materials, or products included on or otherwise made 
              available to the Licensee through the website, including but not limited to direct, indirect, incidental, punitive, and 
              consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              This Agreement shall be governed by and construed in accordance with the laws of [Your Country/State], without regard 
              to its conflict of law principles. Any legal action or proceeding arising under this Agreement will be brought 
              exclusively in the federal or state courts located in [Your Jurisdiction], and the parties hereby irrevocably consent 
              to the personal jurisdiction and venue therein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to the Agreement</h2>
            <p className="text-gray-600">
              The Licensor reserves the right to modify this Agreement at any time. Any changes will be effective immediately upon 
              posting on the website. The Licensee's continued use of the website following the posting of any changes constitutes 
              acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about this Agreement, please contact us at:
              <br />
              <strong>Email:</strong> [Your Email]
              <br />
              <strong>Address:</strong> [Your Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
