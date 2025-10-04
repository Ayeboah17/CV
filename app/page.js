'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Button, Typography, Space, Row, Col, Avatar, Card } from "antd";
import { DownloadOutlined, GlobalOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, CodeOutlined, ToolOutlined,
  DatabaseOutlined, CalendarOutlined, ProjectOutlined } from '@ant-design/icons';
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import { translations } from "./Data/Translation.js";

const { Title, Text, Paragraph } = Typography;

export default function Home() {
  const [lang, setLang] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Section detection for active nav
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark color scheme
  const colorPrimary = '#6366f1';
  const colorSecondary = '#8b5cf6';
  const colorAccent = '#ec4899';
  const colorDark = '#0f172a';
  const colorCard = '#1e293b';
  const colorText = '#e2e8f0';

  const skillsData = [
    {
      title: translations[lang].programmingFrameworks,
      icon: <CodeOutlined />,
      color: colorPrimary,
      skills: [
        { name: 'JavaScript', icon: '🟨' },
        { name: 'React/Next', icon: '⚛️' },
        { name: 'React Native', icon: '📱' },
        { name: 'TypeScript', icon: '🔷' },
      ]
    },
    {
      title: translations[lang].toolsPlatforms,
      icon: <ToolOutlined />,
      color: colorSecondary,
      skills: [
        { name: 'Git', icon: '📝' },
        { name: 'VS Code', icon: '💻' },
        { name: 'WordPress', icon: '🔌' },
        { name: 'MS Office', icon: '📊' },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <DatabaseOutlined />,
      color: colorAccent,
      skills: [
        { name: 'Firebase', icon: '🔥' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
      ]
    },
  ];

  const navItems = [
    { id: 'home', label: translations[lang].home },
    { id: 'about', label: translations[lang].about },
    { id: 'skills', label: translations[lang].skills },
    { id: 'experience', label: translations[lang].experience },
    { id: 'education', label: translations[lang].education },
    { id: 'contact', label: translations[lang].contact },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colorDark, color: colorText }}>
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '16px 0',
        backgroundColor: isScrolled ? colorCard : 'transparent',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? `1px solid rgba(255,255,255,0.1)` : 'none'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Text strong style={{ fontSize: '20px', color: colorPrimary }}>AKY</Text>
            </Col>
            <Col>
              <Space size="middle">
                {navItems.map(item => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    style={{
                      color: activeSection === item.id ? colorPrimary : colorText,
                      textDecoration: 'none',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      transition: 'color 0.3s',
                      fontSize: '15px'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <Space>
                  <Button 
                    size="small" 
                    type={lang === 0 ? 'primary' : 'default'}
                    onClick={() => setLang(0)}
                    style={{ 
                      backgroundColor: lang === 0 ? colorPrimary : 'transparent',
                      borderColor: colorPrimary,
                      color: lang === 0 ? '#fff' : colorText
                    }}
                  >
                    EN
                  </Button>
                  <Button 
                    size="small" 
                    type={lang === 1 ? 'primary' : 'default'}
                    onClick={() => setLang(1)}
                    style={{ 
                      backgroundColor: lang === 1 ? colorPrimary : 'transparent',
                      borderColor: colorPrimary,
                      color: lang === 1 ? '#fff' : colorText
                    }}
                  >
                    CZ
                  </Button>
                </Space>
              </Space>
            </Col>
          </Row>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        background: `linear-gradient(135deg, ${colorDark} 0%, #1e293b 100%)`,
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(${colorPrimary}33, transparent 70%)`,
          opacity: 0.3
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(${colorSecondary}33, transparent 70%)`,
          opacity: 0.3
        }}></div>
        
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px', width: '100%', position: 'relative', zIndex: 1 }}>
          <Zoom>
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={12}>
                <div style={{ padding: '20px' }}>
                  <Text style={{ color: colorPrimary, fontWeight: 600, fontSize: '18px' }}>{translations[lang].welcome}</Text>
                  <Title level={1} style={{ margin: '10px 0', fontSize: '3.5rem', fontWeight: 700, color: colorText }}>
                    Augustine Kwasi Yeboah
                  </Title>
                  <Title level={2} style={{ color: colorPrimary, fontWeight: 400, marginBottom: 24 }}>
                    {translations[lang].position}
                  </Title>
                  <Paragraph style={{ fontSize: '18px', marginBottom: 32, color: '#94a3b8' }}>
                    {translations[lang].intro}
                  </Paragraph>
                  <Space size="middle">
                    <Button 
                      type="primary" 
                      size="large" 
                      icon={<DownloadOutlined />}
                      href={`./cv_${lang === 0 ? 'en' : 'cz'}.pdf`}
                      download
                      style={{ 
                        backgroundColor: colorPrimary, 
                        borderColor: colorPrimary,
                        height: '50px',
                        padding: '0 25px',
                        fontWeight: 600
                      }}
                    >
                      {translations[lang].downloadCV}
                    </Button>
                    <Button 
                      size="large"
                      href="#contact"
                      style={{ 
                        color: colorText, 
                        borderColor: colorPrimary,
                        height: '50px',
                        padding: '0 25px',
                        fontWeight: 600
                      }}
                    >
                      {translations[lang].contactMe}
                    </Button>
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${colorPrimary}, ${colorSecondary})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: `0 20px 40px rgba(99, 102, 241, 0.3)`
                  }}>
                    <Zoom>
                      <Avatar 
                        size={320} 
                        src={
                          <Image
                            src={'/cv_pic.jpg'}
                            alt="Augustine Kwasi Yeboah"
                            width={320}
                            height={320}
                            style={{ objectFit: 'cover' }}
                          />
                        }
                      />
                    </Zoom>
                  </div>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '100px 20px', backgroundColor: colorCard }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Zoom>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 64, color: colorText }}>
              {translations[lang].aboutMe}
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card 
                  style={{ 
                    textAlign: 'center', 
                    border: 'none', 
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{ fontSize: 48, color: colorPrimary, marginBottom: 16 }}>
                    <EnvironmentOutlined />
                  </div>
                  <Title level={4} style={{ color: colorText }}>Location</Title>
                  <Text style={{ color: '#94a3b8' }}>Praha, Czechia</Text>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card 
                  style={{ 
                    textAlign: 'center', 
                    border: 'none', 
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{ fontSize: 48, color: colorSecondary, marginBottom: 16 }}>
                    <CalendarOutlined />
                  </div>
                  <Title level={4} style={{ color: colorText }}>Experience</Title>
                  <Text style={{ color: '#94a3b8' }}>3+ Years</Text>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card 
                  style={{ 
                    textAlign: 'center', 
                    border: 'none', 
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{ fontSize: 48, color: colorAccent, marginBottom: 16 }}>
                    <ProjectOutlined />
                  </div>
                  <Title level={4} style={{ color: colorText }}>Projects</Title>
                  <Text style={{ color: '#94a3b8' }}>5+ Completed</Text>
                </Card>
              </Col>
            </Row>
            <div style={{ marginTop: 64, textAlign: 'center' }}>
              <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: '#94a3b8' }}>
                {translations[lang].aboutDetail}
              </Paragraph>
            </div>
          </Zoom>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '100px 20px', backgroundColor: colorDark }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 64, color: colorText }}>
            {translations[lang].technicalSkills}
          </Title>
          
          {skillsData.map((skillGroup, index) => (
            <div key={index} style={{ marginBottom: 60 }}>
              <Zoom>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
                  <div style={{ 
                    width: 50, 
                    height: 60, 
                    borderRadius: '12px', 
                    backgroundColor: skillGroup.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                    fontSize: '20px'
                  }}>
                    {React.cloneElement(skillGroup.icon, { style: { color: 'white' } })}
                  </div>
                  <Title level={3} style={{ color: colorText, margin: 0 }}>
                    {skillGroup.title}
                  </Title>
                </div>
              </Zoom>
              
              <Card 
                style={{ 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: colorCard,
                  padding: '20px'
                }}
              >
                <Row gutter={[16, 16]}>
                  {skillGroup.skills.map((skill, i) => (
                    <Col xs={12} sm={8} md={6} key={i}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        cursor: 'pointer',
                        border: `1px solid rgba(255, 255, 255, 0.1)`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      >
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                          {skill.icon}
                        </div>
                        <Text style={{ 
                          color: colorText, 
                          textAlign: 'center',
                          fontWeight: 500
                        }}>
                          {skill.name}
                        </Text>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '100px 20px', backgroundColor: colorCard }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 64, color: colorText }}>
            {translations[lang].experience}
          </Title>
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            {translations[lang].experienceDetails.map((exp, index) => (
              <Card 
                key={index} 
                style={{ 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.7)'
                }}
              >
                <Row gutter={[16, 16]} align="middle">
                  <Col xs={24} md={3}>
                    <div style={{
                      width: 60,
                      height: 60,
                      borderRadius: '12px',
                      backgroundColor: colorPrimary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                  </Col>
                  <Col xs={24} md={21}>
                    <Title level={4} style={{ margin: 0, color: colorText }}>{exp.role}</Title>
                    <Text strong style={{ color: colorPrimary, display: 'block', margin: '4px 0' }}>
                      {exp.company} • {exp.period}
                    </Text>
                    <Paragraph style={{ marginTop: 8, color: '#94a3b8' }}>{exp.description}</Paragraph>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: '100px 20px', backgroundColor: colorDark }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 64, color: colorText }}>
            {translations[lang].education}
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card 
                style={{ 
                  height: '100%', 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: colorCard
                }}
              >
                <Title level={4} style={{ color: colorText }}>{translations[lang].universityName}</Title>
                <Text style={{ color: colorPrimary, display: 'block', marginBottom: '8px' }}>
                  {translations[lang].universityPeriod}
                </Text>
                <Paragraph style={{ color: '#94a3b8' }}>{translations[lang].universityField}</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                style={{ 
                  height: '100%', 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: colorCard
                }}
              >
                <Title level={4} style={{ color: colorText }}>{translations[lang].schoolName}</Title>
                <Text style={{ color: colorPrimary, display: 'block', marginBottom: '8px' }}>
                  {translations[lang].schoolPeriod}
                </Text>
                <Paragraph style={{ color: '#94a3b8' }}>{translations[lang].schoolProgram}</Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 20px', backgroundColor: colorCard }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 64, color: colorText }}>
            {translations[lang].contact}
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card 
                style={{ 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.7)'
                }}
              >
                <Title level={3} style={{ color: colorText }}>Get in Touch</Title>
                <Paragraph style={{ color: '#94a3b8' }}>
                  {translations[lang].contactText}
                </Paragraph>
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                  <Space>
                    <MailOutlined style={{ color: colorPrimary, fontSize: 20 }} />
                    <Text  style={{ color: colorText }}>gegeyeboah@gmail.com</Text>
                  </Space>
                  <Space>
                    <PhoneOutlined style={{ color: colorPrimary, fontSize: 20 }} />
                    <Text style={{ color: colorText }}>+420 776 213 425</Text>
                  </Space>
                  <Space>
                    <EnvironmentOutlined style={{ color: colorPrimary, fontSize: 20 }} />
                    <Text style={{ color: colorText }}>Praha, Czechia</Text>
                  </Space>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                style={{ 
                  border: 'none', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.7)'
                }}
              >
                <Title level={3} style={{ color: colorText }}>My Projects</Title>
                <Paragraph style={{ color: '#94a3b8' }}>
                  Check out some of my recent work:
                </Paragraph>
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                  <Button 
                    type="primary" 
                    href="https://www.ghanaunion.cz" 
                    target="_blank"
                    icon={<GlobalOutlined />}
                    block
                    size="large"
                    style={{ 
                      backgroundColor: colorPrimary, 
                      borderColor: colorPrimary,
                      height: '50px'
                    }}
                  >
                    Ghana Union Czech Republic
                  </Button>
                  <Button 
                    type="primary" 
                    href="https://www.lighthousesda.cz" 
                    target="_blank"
                    icon={<GlobalOutlined />}
                    block
                    size="large"
                    style={{ 
                      backgroundColor: colorPrimary, 
                      borderColor: colorPrimary,
                      height: '50px'
                    }}
                  >
                    Lighthouse Church
                  </Button>

                  <Button 
                    type="primary" 
                    href="https://todo-list-react-alpha-ten.vercel.app/" 
                    target="_blank"
                    icon={<GlobalOutlined />}
                    block
                    size="large"
                    style={{ 
                      backgroundColor: colorPrimary, 
                      borderColor: colorPrimary,
                      height: '50px'
                    }}
                  >
                    Vehicle Maintenence App
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 20px', 
        backgroundColor: colorDark,
        color: 'white',
        textAlign: 'center',
        borderTop: `1px solid rgba(255,255,255,0.1)`
      }}>
        <Text style={{ color: '#94a3b8' }}>
          © {new Date().getFullYear()} Augustine Kwasi Yeboah.
        </Text>
      </footer>
    </div>
  );
}