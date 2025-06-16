'use client'

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { use, useState } from "react";
import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import {translations} from "./Data/Translation.js";
import { DownloadOutlined } from '@ant-design/icons';
import FloatButtonGroup from "antd/es/float-button/FloatButtonGroup";
import FloatButton from "antd/es/float-button/FloatButton";

export default function Home() {


const [lang,setLang] = useState(navigator.language?.includes('cs') ? 1 : 0);
console.log(navigator.language);

  return (
  <div className="container">
<section className="section">
    <Image
      src={'/cv_pic.jpg'}
      alt="Augustine Kwasi Yeboah"
      width={150}
      height={150}
      className="profile-image"
      style={{ borderRadius: '50%' }}
    />
    <h1>Augustine Kwasi Yeboah</h1>
    <p className="contact-info">📍 Praha, Czechia &nbsp;|&nbsp; 📞 +420 776 213 425 &nbsp;|&nbsp; ✉️ ayeboahjnr@outlook.cz</p>
</section>    

     <ButtonGroup  className="language-toggle">
      <Button onClick={() => setLang(0)}>English</Button>
      <Button onClick={() => setLang(1)}>Čeština</Button>
    </ButtonGroup>

      <section className="section">
      <h2>{translations[lang].education}</h2>
      <p><span className="highlight">{translations[lang].schoolName}</span><br />
        {translations[lang].schoolPeriod}<br />
        {translations[lang].schoolProgram}
      </p>
      <p><span className="highlight">{translations[lang].universityName}</span><br />
        {translations[lang].universityPeriod}<br />
        {translations[lang].universityField}
      </p>
    </section>

    <section className="section">
      <h2>{translations[lang].technicalSkills}</h2>
      <div className="skills-grid">
        <div className="skill-block">
          <h3>{translations[lang].programmingFrameworks}</h3>
          <ul>
            <li>JavaScript ⭐⭐⭐</li>
            <li>HTML & CSS ⭐⭐⭐</li>
            <li>React ⭐⭐⭐</li>
            <li>React Native ⭐⭐</li>
            <li>PHP ⭐</li>
          </ul>
        </div>
        <div className="skill-block">
          <h3>{translations[lang].toolsPlatforms}</h3>
          <ul>
            <li>Firebase ⭐⭐</li>
            <li>Git ⭐⭐⭐</li>
            <li>VS Code ⭐⭐⭐</li>
            <li>WordPress ⭐⭐⭐</li>
            <li>MS Office (Word, Excel, PowerPoint) ⭐⭐⭐</li>
          </ul>
        </div>
        <div className="skill-block">
          <h3>{translations[lang].other}</h3>
          <ul>
            {translations[lang].otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>


    <section className="section">
      <h2>🌐 {translations[lang].languages}</h2>
      <p>{translations[lang].english}</p>
      <p>{translations[lang].czech}</p>
    </section>

    <section className="section">
      <h2>{translations[lang].experience}</h2>
      <ul>
        {translations[lang].experienceDetails.map((item, index) => (
          <><li key={index}>{item}</li> <br/></>
        ))}
      </ul>
    </section>

    <section className="section">
      <div id="links">
      <Button type="default" href="https://www.ghanaunion.cz" rel="noopener noreferrer" target="_blank">Ghana Union Czech Republic</Button>
      <Button type="default" href="https://www.lighthousesda.cz" rel="noopener noreferrer" target="_blank"> Lighthouse Church</Button>
      
      </div>
    </section>

    <FloatButton type="primary" href={`./cv_${lang}.pdf`}  download icon={<DownloadOutlined />} size="medium">{translations[lang].downloadCV}</FloatButton>


    
  </div>
  );
}
