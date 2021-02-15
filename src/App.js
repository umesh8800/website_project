import React from 'react'
import './index.css';
import Main from './Main'
import Cards from './Cards';
import Heading from './Heading';
import Button from './Button';
import Login from './Login';
import Card2 from './Card2'
import OurTeam from './OurTeam';

function App( props) {
  return (
    <div className="App">
     <Main/>
     {/* <Heading/> */}
     <Cards  intro=" Umesh Shakya CEO"image="https://cdn.pixabay.com/photo/2021/01/08/07/52/trees-5899195__340.jpg" text="Pramath Bakliwal is a graduate in chemical engineering (B.Tech) from Regional Engineering College, Trichy and DBF (Diploma in Business Finance) from Institute of Chartered Financial Analysts Of India, Hyderabad. Having worked for EID Parry India Ltd. for 4 years, he gained deep insight in production and maintenance processes and project executions. He is responsible for redefining business development strategies, forging strategic Indian and offshore, technical and marketing alliances, taking leverage of technical expertise areas of the company. He is also responsible for infusing value-addition in the services offered.

He has led the growth of Empower with his strong business acumen and managerial capabilities. He is responsible for giving directions to the organizational strategy and growth and driving the sales efforts besides designing project analysis, quality assurance and projects management systems. The entire management synchronization rests on his shoulders. When he is not strategizing for his passion Empower Solutions, he loves playing badminton and gaining insights into the world economy."/>
     <Cards intro=" Prabhakar Shakya CEO" image=" https://cdn.pixabay.com/photo/2020/12/23/08/00/bow-lake-5854210__340.jpg" text="She is an engineering graduate in electronics and telecommunications and post graduate in Business Management. Besides this she holds Microsoft Certifications in Visual Basic.NET, ASP.NET and Windows NT. As a software architect she is experienced in: distributed applications framework development, cloud computing and network and web based systems. She has successfully led international & national projects of very high repute.

She currently manages multiple projects running at Empower, while maintaining deadlines. She steers the development life cycle of commercial software, and mentors the research and implementation of innovative software tools and components. She is also responsible for new technology assimilation and adoption in the company by evaluating, approving and percolating the usage of new technologies and software for different phases of development. She is action-oriented, capable of independently solving complex technical problems and is able to communicate clearly and effectively to both technical and business audience. When she is not working on the latest technologies, she loves reading fiction and current affairs. She also has a working knowledge of French and German." />

     <Cards intro=" Amarpal Shakya CEO" image="https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg" text=" Darshit is a distinguished technology leader with over 15 yrs of experience in defining complex software architectures, designing products and innovative solutions for the enterprises. Darshit has worked in the capacity of a Principal Technical Architect, Technical Specialist and Systems Analyst in the past. He has been an immensely experienced Security Consultant and was involved in building various security products & processes, viz. Antivirus, Anti-spam, Exchange Server security, Security Products Integration platform, Data Center Security & Compliance, Security Domain modeling and Security Analytics. He is also highly conversant with AWS, Big Data and NoSQL technologies and has an in-depth knowledge of Performance Engineering aspects of product and application .

Darshit has always focused on excellence right from his academic days. He was in the state merit list during his schooling and was ranked second in the university during his Engineering. In his leisure time he likes to play Chess and has been a national level chess player and also plays the guitar."/>

     <Cards intro=" Bijender Shakya CEO" image="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" text="The essay ‘Universitas?’ by George Steiner, a text that he gave us as a friend of the Nexus Institute, then argues for the true university as a place where — in contrast to academia and the countless institutions that so shamelessly dare to call themselves universities — still cultivates the universitas ideal and where aristocracy of the spirit can be acquired. Ingrid Rowland takes us with her to the two Greek patriarchs of the aristocracy of the spirit, philosopher Plato and poet Sophocles, who with their work attempted to liberate humanity from a timeless lockdown, that dark cavern of soullessness." />

     
     {/* <Button/> 
     <Login/> */}
     <OurTeam/>
     <Card2/>
    </div>
  );
}

export default App;
