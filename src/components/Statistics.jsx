// import React from 'react'

export const Statistics = () => {
  return (
    <section className="gray-bg">
        <div className="container | padding-block-700 text-center">
            <div className="list-header | padding-block-700">
              <h1 className='secondary-heading'>Advanced Statistics</h1>
              <p>Track how your links are performing across the web with our
              advanced statistics dashboard.</p>
            </div>
            <div>
              <ul className="list-items">
                <li>
                  <div className="list-li-container">
                    <img src="../src/assets/icon-brand-recognition.svg" alt="" />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t 
                      mean a thing. Branded links help instil confidence in your content.</p>
                  </div>
                </li>
                <li>
                  <div className="list-li-container">
                    <img src="../src/assets/icon-detailed-records.svg" alt="" />
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where 
                      people engage with your content helps inform better decisions.</p>
                  </div>
                </li>
                <li>
                  <div className="list-li-container">
                    <img src="../src/assets/icon-fully-customizable.svg" alt="" /> 
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable 
                      links, supercharging audience engagement.</p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}
