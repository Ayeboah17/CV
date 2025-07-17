'use client'

import { useState } from "react";
import { Button,Card, Divider,Typography,Space,Row,Col,Avatar,Tag,FloatButton,Progress,List,Grid} from "antd";
import { DownloadOutlined, GlobalOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, CodeOutlined, ToolOutlined, StarOutlined} from '@ant-design/icons';
import Image from "next/image";
import { translations } from "./Data/Translation.js";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function Home() {
  const [lang, setLang] = useState(navigator.language?.includes('cs') ? 1 : 0);
  const screens = useBreakpoint();

  const skillsData = [
    {
      title: translations[lang].programmingFrameworks,
      icon: <CodeOutlined />,
      skills: [
        { name: 'JavaScript', level: 70 },
        { name: 'HTML & CSS', level: 80 },
        { name: 'React', level: 75 },
        { name: 'React Native', level: 60 },
        { name: 'PHP', level: 40 },
      ]
    },
    {
      title: translations[lang].toolsPlatforms,
      icon: <ToolOutlined />,
      skills: [
        { name: 'Firebase', level: 60 },
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'WordPress', level: 85 },
        { name: 'MS Office', level: 90 },
      ]
    }
  ];

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      padding: screens.xs ? '16px' : '32px',
      backgroundColor: '#fafafa'
    }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: screens.md ? 'row' : 'column',
        alignItems: 'center',
        gap: '32px',
        marginBottom: '48px',
        padding: '32px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <Avatar 
          size={screens.md ? 180 : 120} 
          src={
            <Image
              src={'/cv_pic.png'}
              alt="Augustine Kwasi Yeboah"
              width={180}
              height={180}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          }
          style={{ border: '4px solid #1890ff' }}
        />
        
        <div style={{ flex: 1 }}>
          <Title level={2} style={{ margin: 0, color: '#1a1a1a' }}>Augustine Kwasi Yeboah</Title>
          <Text strong style={{ 
            fontSize: '18px', 
            color: '#1890ff',
            display: 'block',
            margin: '8px 0 16px'
          }}>
            {translations[lang].position}
          </Text>
          
          <Space size="large" wrap style={{ marginBottom: '16px' }}>
            <Space>
              <EnvironmentOutlined style={{ color: '#666' }} />
              <Text>Praha, Czechia</Text>
            </Space>
            <Space>
              <PhoneOutlined style={{ color: '#666' }} />
              <Text>+420 776 213 425</Text>
            </Space>
            <Space>
              <MailOutlined style={{ color: '#666' }} />
              <Text>ayeboahjnr@outlook.cz</Text>
            </Space>
          </Space>
          
          <Space>
            <Button 
              onClick={() => setLang(0)} 
              type={lang === 0 ? 'primary' : 'text'}
              shape="round"
            >
              English
            </Button>
            <Button 
              onClick={() => setLang(1)} 
              type={lang === 1 ? 'primary' : 'text'}
              shape="round"
            >
              Čeština
            </Button>
          </Space>
        </div>
      </div>

      {/* Two Column Layout */}
      <Row gutter={[32, 32]}>
        {/* Left Column */}
        <Col xs={24} md={16}>
          {/* About Section */}
          <Card
            bordered={false}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Title level={4} style={{ color: '#1a1a1a' }}>About Me</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {translations[lang].aboutMe}
            </Paragraph>
          </Card>

          {/* Experience Section */}
          <Card
            bordered={false}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Title level={4} style={{ color: '#1a1a1a' }}>{translations[lang].experience}</Title>
            <List
              dataSource={translations[lang].experienceDetails}
              renderItem={(item, index) => (
                <List.Item key={index} style={{ padding: '12px 0' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: '#1890ff10',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <StarOutlined style={{ color: '#1890ff', fontSize: '20px' }} />
                    </div>
                    <div>
                      <Text strong style={{ display: 'block', marginBottom: '4px' }}>{item}</Text>
                      <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>{item} • {item}</Text>
                      <Text>{item}</Text>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={8}>
          {/* Education Section */}
          <Card
            bordered={false}
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Title level={4} style={{ color: '#1a1a1a' }}>{translations[lang].education}</Title>
            <div style={{ marginBottom: '20px' }}>
              <Text strong style={{ display: 'block' }}>{translations[lang].universityName}</Text>
              <Text type="secondary">{translations[lang].universityPeriod}</Text>
              <Paragraph>{translations[lang].universityField}</Paragraph>
            </div>
            <div>
              <Text strong style={{ display: 'block' }}>{translations[lang].schoolName}</Text>
              <Text type="secondary">{translations[lang].schoolPeriod}</Text>
              <Paragraph>{translations[lang].schoolProgram}</Paragraph>
            </div>
          </Card>

          {/* Skills Section */}
          <Card
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Title level={4} style={{ color: '#1a1a1a' }}>{translations[lang].technicalSkills}</Title>
            {skillsData.map((skillGroup, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <Space size="small" style={{ marginBottom: '12px' }}>
                  {skillGroup.icon}
                  <Text strong>{skillGroup.title}</Text>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  {skillGroup.skills.map((skill, i) => (
                    <div key={i}>
                      <Text style={{ display: 'block', marginBottom: '4px' }}>{skill.name}</Text>
                      <Progress 
                        percent={skill.level} 
                        showInfo={false} 
                        strokeColor="#1890ff"
                        trailColor="#f0f0f0"
                      />
                    </div>
                  ))}
                </Space>
              </div>
            ))}
            
            <div>
              <Text strong style={{ display: 'block', marginBottom: '12px' }}>
                {translations[lang].other}
              </Text>
              <Space size={[8, 8]} wrap>
                {translations[lang].otherSkills.map((skill, index) => (
                  <Tag key={index} style={{ 
                    borderRadius: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#1890ff10',
                    color: '#1890ff',
                    border: 'none'
                  }}>
                    {skill}
                  </Tag>
                ))}
              </Space>
            </div>
          </Card>

          {/* Languages Section */}
          <Card
            bordered={false}
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Title level={4} style={{ color: '#1a1a1a' }}>🌐 {translations[lang].languages}</Title>
            <div style={{ marginBottom: '16px' }}>
              <Text strong style={{ display: 'block' }}>English</Text>
              <Text type="secondary">{translations[lang].english}</Text>
            </div>
            <div>
              <Text strong style={{ display: 'block' }}>Czech</Text>
              <Text type="secondary">{translations[lang].czech}</Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Projects Links */}
      <Card
        style={{ 
          marginTop: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}
      >
        <Space wrap>
          <Button 
            type="primary" 
            href="https://www.ghanaunion.cz" 
            target="_blank"
            icon={<GlobalOutlined />}
            shape="round"
            size="large"
          >
            Ghana Union
          </Button>
          <Button 
            type="primary" 
            href="https://www.lighthousesda.cz" 
            target="_blank"
            icon={<GlobalOutlined />}
            shape="round"
            size="large"
          >
            Lighthouse Church
          </Button>
        </Space>
      </Card>

      {/* Download Button */}
      <FloatButton
        type="primary"
        href={`./yeboah_cv.pdf`}
        download
        icon={<DownloadOutlined />}
        tooltip={translations[lang].downloadCV}
        style={{ right: screens.xs ? '16px' : '32px', bottom: screens.xs ? '16px' : '32px' }}
      />
    </div>
  );
}