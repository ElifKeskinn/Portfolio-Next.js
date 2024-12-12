import styles from './About.module.css'


const About = () => {
  return (

    <div className="container">
      
      <h2>About Me</h2>

      <section className={styles.profile}>
        <h3 className={styles.heading}>Profile</h3>
        <p><strong>Name:</strong> Elif Keskin</p>
        <p><strong>Title:</strong> Software Developer</p>
        <p><strong>Email:</strong> <a href="mailto:elif.keskin233@gmail.com">elif.keskin233@gmail.com</a></p>
        <p><strong>Address:</strong> 7090 Kepez/Antalya</p>
        <p>
          I am a computer engineering student eager to learn new information anytime and in any field. In addition to my technical software skills, I also know theoretical issues such as data structures, and algorithms. I am a creative practical solution-oriented person. Since I am good at human relations, I also feel confident in teamwork. I think I can add different visions to my colleagues and company with the ideas and perspectives that I try to develop every day.
        </p>
      </section>

      <section className={styles.employment}>
        <h3>Employment</h3>
        <div className={styles.job}>
          <h4>Full Stack Developer</h4>
          <p><strong>Oct 2024 - Present</strong></p>
          <p>Akdeniz University, Antalya, Turkey</p>
          <p>
            I develop backend systems with ASP.NET and create dynamic frontend interfaces using PHP. 
            I manage SQL databases and handle API development to improve university workflows and efficiency.
          </p>
        </div>
        <div className={styles.job}>
          <h4>Software Developer Intern</h4>
          <p><strong>Jul 2024 - Sep 2024</strong></p>
          <p>OBSS Technology, Istanbul, Turkey</p>
          <p>
            I developed web applications using React, Node.js, and MongoDB technologies. 
            Gained experience in building backend APIs, managing databases, and designing user-friendly interfaces.
          </p>
        </div>
      </section>

      <section className={styles.education}>
        <h3>Education</h3>

        <div className={styles.school}>
          <h4>Akdeniz University, Antalya</h4>
          <p>Computer Science Engineering (100% English)</p>
        </div>

        <div className={styles.school}>
          <h4>Doga College Science High School, Elazığ</h4>
        </div>

        <div className={styles.school}>
          <h4>Harvard Language Schools, Elazığ</h4>
          <p>Studied the English language. Received C2 level certificate and graduated.</p>
        </div>

        <div className={styles.school}>
          <h4>AcunMedya Akademi, Istanbul, Turkey</h4>
          <p>React Front-End Development Expert Bootcamp</p>
        </div>

      </section>


      <section className={styles.languages}>
        <h3>Language</h3>
        <p>English (C1)</p>
        <p>Turkish (Native)</p>
      </section>

      <section className={styles.skills}>
        <h3>Skills</h3>
        <ul>
          <li>Front-End Technologies: React.js, Javascript, HTML, CSS</li>
          <li>Back-end Technologies: Node.js, Next.js, .Net Core, Python, Java</li>
          <li>Programs: Microsoft Office, Figma, Balsamiq, MatLab, Octave GNU, Proteus, Arduino, Cisco Packet Tracer</li>
          <li>Linux System Administration</li>
          <li>Cloud Computing Systems: Microsoft Azure</li>
          <li>Version Control: Git, GitHub</li>
          <li>Good at teamwork</li>
          <li>Problem Solving</li>
          <li>Successful communication</li>
        </ul>
      </section>

      <section className={styles.certificates}>
        <h3>Certificates</h3>
        <p>Advanced Front-end Development Certificate (AcunMedya Academy Nişantaşı University) </p>
        <p>Harvard Language Schools - C2 level English graduation certificate</p>
        <p>Red Hat System Administration I (RH124)</p>
        <p>Advanced Web Development Certificate (Udemy)</p>
        <p>Akdeniz University Technology and Entrepreneurship Summit (ATGZ) participation certificate</p>
      </section>

      <section className={styles.personal}>
        <h3>Personal Information</h3>
        <p><strong>Birthday:</strong> September 8, 2003</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Nationality:</strong> Turkish</p>
      </section>

      <section className={styles.hobbies}>
        <h3>Hobbies</h3>
        <ul>
          <li>Programming</li>
          <li>Reading scientific essays</li>
          <li>Camping and discovering nature</li>
          <li>Learning new languages</li>
          <li>Playing guitar and violin</li>
          <li>Court Tennis</li>
         
        </ul>
      </section>

      <section className={styles.references}>
        <h3>References</h3>
        <div className={styles.reference}>
          <p><strong>Orhan Ekici</strong></p>
          <p>AcunMedya Academy, Istanbul, Turkey</p>
          <a href="mailto:orhanekici@gmail.com">orhanekici@gmail.com</a>
        </div>
        <div className={styles.reference}>
          <p><strong>Furkan Özay</strong></p>
          <p>AcunMedya Academy, Istanbul, Turkey</p>
          <a href="mailto:furkanczay@gmail.com">furkanczay@gmail.com</a>
        </div>
      </section>

      <section className={styles.cvDownload}>
        <h3>Resume (CV)</h3>
        <a href="/cv.pdf" download className={styles.downloadButton}>
          Download Resume
        </a>
        &nbsp;
        <a href="/CVElifKes.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
          View Resume
        </a>
      </section>
    </div>
  )
}

export default About
