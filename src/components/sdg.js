import React from 'react'
import img1 from '../img/sdg_logo.png'
import backimage from '../img/earth.png'
import img2 from '../img/target.png'
import Footer from './footer'

export default function Sdg() {
  return (
    <div className='sdg' style={{ backgroundImage: `url(${backimage})` }}>
      <br /><br /><br /><br />
      <h1 style={{ color: 'transparent', WebkitTextStroke: '2px orange', textShadow: '10px 0px 20px orange', textAlign: 'center', textDecoration: 'underline' }}>All about SDG 13</h1><br />
      <div className="first_writing"><br /><br /><br />
        <div className="first_img">
          <img src={img1} alt="" className='a' />
        </div>
        <div className="first_details">
          <h1 className='heading6'>Introduction:</h1>
          <p className='detail' style={{ fontFamily: 'Times New Roman', fontWeight: "400", textAlign: 'center', color: 'white', fontSize: '20px' }}>SDG 13, or Sustainable Development Goal 13, is one of the 17 global goals set by the United Nations as part of the 2030 Agenda for Sustainable Development. SDG 13 specifically focuses on "Climate Action." Its aim is to take urgent action to combat climate change and its impacts, recognizing that climate change is a global challenge that affects every aspect of life on Earth.

            Climate change poses a significant threat to the planet, causing rising temperatures, extreme weather events, sea-level rise, and disruptions to ecosystems and livelihoods. SDG 13 calls for ambitious efforts to mitigate greenhouse gas emissions, adapt to the impacts of climate change, and build resilience to climate-related disasters.</p>
        </div>
      </div><br /><br /><br />
      <div className="first_writing">
        <div className="first_details">
          <h1 className='heading4'>Key targets of SDG13:</h1><br />
          <ul style={{ fontFamily: 'Times New Roman', fontWeight: "400", color: 'white', textAlign: 'left', fontSize: '20px' }}>
            <li>Mitigation: Strengthening resilience and adaptive capacity to climate-related hazards and natural disasters.</li>
            <li>Adaptation: Integrating climate change measures into national policies, strategies, and planning.</li>
            <li>Awareness: Promoting education, awareness-raising, and capacity-building on climate change mitigation, adaptation, impact reduction, and early warning.</li>
            <li>Finance: Mobilizing financial resources to support climate action, including through international cooperation.</li>
            <li>International Cooperation: Enhancing international cooperation to implement the UN Framework Convention on Climate Change and other related agreements.</li>
          </ul>
        </div>
        <div className="first_img">
          <img src={img2} alt="" className='a' />
        </div>
      </div><br /><br /><br />
      <div style={{ fontFamily: 'Times New Roman', margin: 'auto auto', color: 'white', fontSize: '20px' }} className='d'>
        <h1 className='heading2'>More about SDG 13</h1><br />
        Achieving SDG 13 requires collaborative efforts from governments, businesses, civil society, and individuals worldwide. It calls for bold action to transition to low-carbon economies, invest in renewable energy and sustainable infrastructure, protect ecosystems, and promote sustainable consumption and production patterns.

        Addressing climate change is essential not only for environmental sustainability but also for achieving other development goals, such as poverty eradication, health, food security, and economic growth. SDG 13 emphasizes the urgency of collective action to safeguard the planet for current and future generations. Many climate change impacts are already felt at the current 1.2 °C (2.2 °F) level of warming. Additional warming will increase these impacts and can trigger tipping points, such as the melting of the Greenland ice sheet. Under the 2015 Paris Agreement, nations collectively agreed to keep warming "well under 2 °C". However, with pledges made under the Agreement, global warming would still reach about 2.7 °C (4.9 °F) by the end of the century.
        Reducing emissions requires generating electricity from low-carbon sources rather than burning fossil fuels. This change includes phasing out coal and natural gas fired power plants, vastly increasing use of wind, solar, and other types of renewable energy, and reducing energy use.During the COVID-19 pandemic, there was a reduction in economic activity. This resulted in a 6% drop in greenhouse gas emissions from what was initially projected for 2020, however these improvements were only temporary. Greenhouse gas emissions rebounded later in the pandemic as many countries began lifting restrictions, with the direct impact of pandemic policies having a negligible long-term impact on climate change. A rebound in transport pollution has occurred since restrictions of government lockdown policies have been lifted. Transport pollution accounts for roughly 21% of global carbon emissions due to it being still 95% dependent on oil.Post pandemic, there is a rush for governments globally to stimulate local economies by putting money towards fossil fuel production and in turn economic stimulation. Funding for economic policies will likely divert the emergency funds usually afforded to climate funding like The Green Climate Fund and other sustainable policies, unless an emphasis is put on green deals in the redirection of monetary funds.
        The Russian invasion of Ukraine and the resulting trade sanctions had a further adverse effect on SDG 13, as some countries responded to the crisis by increasing domestic oil production.
      </div><br />
      <Footer />
    </div>
  )
}
