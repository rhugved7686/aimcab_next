'use client'; // Make sure it's a client-side component

export default function Footer() {
  return (
    <div className="bg-black text-yellow-400 py-12">
      {/* Footer content area started */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h5 className="text-white text-xl flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src="https://www.aimcabbooking.com/images/address.png"
                alt="Address Icon"
              />
              ADDRESS:
            </h5>
            <p className="mt-2">
              Office No. 009, wing-A <br />
              Downtown CityVista, Kharadi, Pune-14 <br />
              <img
                className="w-8 h-8 inline-block mt-2"
                src="https://www.aimcabbooking.com/images/call.png"
                alt="Phone Icon"
              />
              +91 9130030054 <br />
              <img
                className="w-8 h-8 inline-block mt-2"
                src="https://www.aimcabbooking.com/images/call.png"
                alt="Phone Icon"
              />
              +91 2041295329
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="text-white text-xl">SERVICES</h5>
            <ul className="mt-2">
              <li>→ <a href="/LuxuryCarsBooking" className="text-yellow-400 hover:text-white">Luxury Cars</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/luxury-cars-booking.php" className="text-yellow-400 hover:text-white">Self Drive</a></li>
              <li>→ <a href="tel:9130030054" className="text-yellow-400 hover:text-white">Corporate</a></li>
              <li>→ <a href="tel:9130030054" className="text-yellow-400 hover:text-white">Daily Pickup & Drop</a></li>
              <li>→ <a href="tel:9130030054" className="text-yellow-400 hover:text-white">Out Station Cab</a></li>
              <li>→ <a href="tel:9130030054" className="text-yellow-400 hover:text-white">Airport Transport</a></li>
            </ul>
          </div>

          {/* States Section */}
          <div>
            <h5 className="text-white text-xl">STATES</h5>
            <ul className="mt-2">
              <li>→ <a href="https://www.aimcabbooking.com/Maharashtra" className="text-yellow-400 hover:text-white">Maharashtra (current)</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/Goa" className="text-yellow-400 hover:text-white">Goa</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/delhi" className="text-yellow-400 hover:text-white">Delhi</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/Gujarat" className="text-yellow-400 hover:text-white">Gujarat</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/Karnataka" className="text-yellow-400 hover:text-white">Karnataka</a></li>
              <li>→ <a href="https://www.aimcabbooking.com/Rajasthan" className="text-yellow-400 hover:text-white">Rajasthan</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h5 className="text-white text-xl">ABOUT US</h5>
            <p className="mt-2">
              <b>
                Aimcab is a well-established cab and car rental service provider company in India specialized in
                rendering comprehensive long and short term car rental solutions. The attributes of our services
                assure safety, comfort, and reliability to every customer.
              </b>
            </p>
            <form className="mt-4">
              <input
                type="email"
                className="w-full p-2 text-black"
                placeholder="Enter email"
              />
              <button type="submit" className="mt-4 w-full bg-yellow-400 text-black p-2">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Popular Cities Section */}
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <b>Popular Cities:</b>
          <div className="flex flex-wrap justify-center mt-2">
            <a href="https://www.aimcabbooking.com/pune/" className="text-yellow-400 hover:text-white mx-2">Pune</a>
            <a href="https://www.aimcabbooking.com/mumbai/" className="text-yellow-400 hover:text-white mx-2">Mumbai</a>
            <a href="https://www.aimcabbooking.com/Goa/" className="text-yellow-400 hover:text-white mx-2">Goa City</a>
            <a href="https://www.aimcabbooking.com/mahabaleshwar/" className="text-yellow-400 hover:text-white mx-2">Mahabaleshwar</a>
            <a href="https://www.aimcabbooking.com/lonavala" className="text-yellow-400 hover:text-white mx-2">Lonavala</a>
            <a href="https://www.aimcabbooking.com/panchgani" className="text-yellow-400 hover:text-white mx-2">Panchgani</a>
            <a href="https://www.aimcabbooking.com/solapur" className="text-yellow-400 hover:text-white mx-2">Solapur</a>
            <a href="https://www.aimcabbooking.com/kolhapur" className="text-yellow-400 hover:text-white mx-2">Kolhapur</a>
            <a href="https://www.aimcabbooking.com/sangamner" className="text-yellow-400 hover:text-white mx-2">Sangamner</a>
            <a href="https://www.aimcabbooking.com/alibag" className="text-yellow-400 hover:text-white mx-2">Alibag</a>
            <a href="https://www.aimcabbooking.com/shirdi" className="text-yellow-400 hover:text-white mx-2">Shirdi</a>
            <a href="https://www.aimcabbooking.com/nashik" className="text-yellow-400 hover:text-white mx-2">Nashik</a>
            <a href="https://www.aimcabbooking.com/nagpur" className="text-yellow-400 hover:text-white mx-2">Nagpur</a>
            <a href="https://www.aimcabbooking.com/karad" className="text-yellow-400 hover:text-white mx-2">Karad</a>
            <a href="https://www.aimcabbooking.com/sangli" className="text-yellow-400 hover:text-white mx-2">Sangli</a>
            <a href="https://www.aimcabbooking.com/satara" className="text-yellow-400 hover:text-white mx-2">Satara</a>
            <a href="https://www.aimcabbooking.com/miraj" className="text-yellow-400 hover:text-white mx-2">Miraj</a>
            <a href="https://www.aimcabbooking.com/jalna" className="text-yellow-400 hover:text-white mx-2">Jalna</a>
            <a href="https://www.aimcabbooking.com/latur" className="text-yellow-400 hover:text-white mx-2">Latur</a>
            <a href="https://www.aimcabbooking.com/shrirampur" className="text-yellow-400 hover:text-white mx-2">Shrirampur</a>
            <a href="https://www.aimcabbooking.com/mapusa" className="text-yellow-400 hover:text-white mx-2">Mapusa</a>
            <a href="https://www.aimcabbooking.com/panaji" className="text-yellow-400 hover:text-white mx-2">Panaji</a>
            <a href="https://www.aimcabbooking.com/surat" className="text-yellow-400 hover:text-white mx-2">Surat</a>
            <a href="https://www.aimcabbooking.com/ahmedabad" className="text-yellow-400 hover:text-white mx-2">Ahmedabad</a>
            <a href="https://www.aimcabbooking.com/ahmednagar" className="text-yellow-400 hover:text-white mx-2">Ahmednagar</a>
            <a href="https://www.aimcabbooking.com/aurangabad" className="text-yellow-400 hover:text-white mx-2">Aurangabad</a>
            <a href="https://www.aimcabbooking.com/vadodra" className="text-yellow-400 hover:text-white mx-2">Vadodra</a>
            <a href="https://www.aimcabbooking.com/panchgani" className="text-yellow-400 hover:text-white mx-2">Belgaum(Belagavi)</a>
            <a href="https://www.aimcabbooking.com/panchgani" className="text-yellow-400 hover:text-white mx-2">Banglore(Bengaluru)</a>
            <a href="https://www.aimcabbooking.com/panchgani" className="text-yellow-400 hover:text-white mx-2">Vijayapura(Bijapur)</a>





            {/* Add other cities here */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 text-center text-white">
        <b>QUICK LINKS:</b>
        <div className="mt-2">
          <a href="https://aimcabbooking.com/" className="text-yellow-400 hover:text-white mx-2">HOME</a>
          <a href="https://aimcabbooking.com/" className="text-yellow-400 hover:text-white mx-2">UPDATES</a>
          <a href="https://aimcabbooking.com/#about" className="text-yellow-400 hover:text-white mx-2">ABOUT</a>
          <a href="https://aimcabbooking.com/#service" className="text-yellow-400 hover:text-white mx-2">SERVICES</a>
          <a href="https://aimcabbooking.com/#contact" className="text-yellow-400 hover:text-white mx-2">CONTACT US</a>
          <a href="https://aimcabbooking.com/careers.php" className="text-yellow-400 hover:text-white mx-2">CAREER</a>
          <a href="https://aimcabbooking.com/faq.php" className="text-yellow-400 hover:text-white mx-2">FAQ's</a>
          <a href="https://aimcabbooking.com/privacy-policy.php" className="text-yellow-400 hover:text-white mx-2">PRIVACY POLICY</a>
          <a href="https://aimcabbooking.com/terms-conditions.php" className="text-yellow-400 hover:text-white mx-2">TERMS & CONDITIONS</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Designed by Section */}
      <div className="container mx-auto px-4 text-center text-white">
        <h4>Designed by Cobaztech</h4>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 text-right mt-6">
        <span>
          <a href="https://wa.me/9130030054" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/whstapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/Aimcab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@AimCab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/youtube.png" alt="YouTube" />
          </a>
          <a href="https://twitter.com/aim_cab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aim-cab-77356b208/" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/linked-in.png" alt="LinkedIn" />
          </a>
          <a href="https://join.skype.com/invite/sRT2FTyb7d1H" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/skype.png" alt="Skype" />
          </a>
          <a href="https://www.instagram.com/aimcabs/" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/linstagram.png" alt="Instagram" />
          </a>
        </span>
      </div>
    </div>
  );
}
