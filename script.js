// PROJECTS
function openProject(id){
  let content="";

  if(id==="p1"){
    content=`
    <h2>Electrospun Scaffolds for tissue regeneration</h2>
     <p>
     OVERVIEW: 
     Electrospun polymeric scaffolds mimic the extracellular matrix (ECM), providing a fibrous structure that supports cell growth,
     nutrient diffusion, and tissue regeneration. This project uses electrospinning to create nanofiber scaffolds that aid in healing
     and tissue integration.
     </p>

     <p>
     MATERIALS USED:
     1.PVA (Polyvinyl Alcohol): Provides structural strength and uniform fibers
     2.Xanthan Gum: Improves hydrophilicity and cell adhesion
     3.Hydroxyapatite (HA): Adds bioactivity and supports bone growth
     </p>

     <p>
     EXPECTED OUTPUT:
     A biocompatible scaffold that promotes cell growth, enhances tissue regeneration, provides mechanical support,
     and gradually degrades while supporting healing.
     </p>
     
     <img src="electrospun.jpg" width="300">
     `;
  }

  if(id==="p2"){
    content=`<h2>Orthopaedic Implants using calcium alloy for osseo-integration</h2>
    <p>
    OVERVIEW:
    Orthopaedic implants using calcium alloys are designed to improve osseointegration, ensuring strong bonding between
    the implant and bone. This project uses polymer coatings on calcium alloy surfaces to enhance biocompatibility and
    promote better tissue integration.
    </p>

    <p>
    MATERIALS USED:
    1.Calcium Alloy (Ca): Provides strength and supports bone growth
    2.PHBV: Enables controlled biodegradability
    3.PCL: Adds flexibility and mechanical stability
    4.Chloroform: Used to prepare the polymer solution
    5.Spin Coating: Technique for uniform thin-layer coating
    </p>

    <p>
    EXPECTED OUTPUT:
    A biocompatible implant that enhances bone bonding, supports cell growth, reduces rejection, and improves 
    long-term stability in orthopaedic applications.
    </p>

    <img src="implant.jpg" width="300">
    `;
  }

  if(id==="p3"){
    content=`<h2>surgical tremor cancellation device for precision intrument control</h2>
    <p>
    OVERVIEW:
    A surgical tremor cancellation device is designed to assist surgeons by reducing involuntary hand movements
    during delicate procedures. It improves precision in microsurgeries, orthopaedics, and neurosurgery by stabilizing surgical instruments.
    </p>

    <p>
    MATERIALS USED:
    1.Motion Sensors: Detect hand movements and tremors
    2.Control Algorithms: Filter unwanted oscillations
    3.Actuators/Robotics: Stabilize surgical tools
    4.Feedback System: Ensures continuous precision
    </p>

    <p>
    EXPECTED OUTPUT:
    A precise and reliable system that reduces surgical errors, enhances control, improves patient outcomes,
    and supports safer minimally invasive procedures.
    </p>
    
    <img src="tremor.jpg" width="300">
    `;
  }

  if(id==="p4"){
    content=`<h2>hormone profile kit</h2>
    <p>
    OVERVIEW:
    A simple kit to test hormone levels (like estrogen, cortisol, thyroid) using blood, saliva, or urine.
    It is easy to use and works for both home and clinical testing.
    </p>
    
    <p>
    MATERIALS USED:
    1.Sample collection tools (lancet, tubes)
    2.Test strips / lateral flow devices
    3.Chemical reagents (hormone-specific)
    4.Result indicator (color change or digital)
    </p>

    <p>
    EXPECTED OUTCOME:
    Quick and accurate results
    Detects hormone imbalance early
    Helps in treating thyroid, fertility, and metabolic issues
    Portable and affordable
    </p>

    <img src="hormone.jpg" width="300">
    `;
  }

  if(id==="p5"){
    content=`<h2>kidney function test</h2>
    <p>
    OVERVIEW:
    The Kidney Function Test project focuses on evaluating renal health by analyzing key biochemical and 
    physiological parameters. It helps in early detection of kidney dysfunction, which is crucial to prevent chronic
    kidney disease and ensure proper body function.
    </p>

    <p>
    MATERIALS REQUIRED:
    1.Biomarkers: Creatinine, urea, and GFR for assessing kidney function
    2.Sensors: Detect changes in biochemical levels
    3.Dipstick / Analyzer: Provides quick and reliable results
    4.Data Analysis: Correlates biochemical and physiological data
    </p>

    <p>
    EXPECTED OUTCOME:
    A compact and user-friendly diagnostic system that enables early detection, continuous monitoring, and 
    effective management of kidney-related disorders.
    </p>
    
    <img src="kidney.jpg" width="300">
    `;
  }

  document.getElementById("project-details").innerHTML=content;
}

// HEALTHCARE (YOUR CONTENT GOES HERE)

function openHealth(id){

  let content="";

  if(id==="h1"){
    content=`<h2>Disease Prediction System</h2>

      <p>
      Artificial Intelligence has significantly transformed the field of disease prediction by enabling early diagnosis
      and preventive healthcare. The Disease Prediction System project focuses on using Machine Learning algorithms to analyze patient data 
      such as symptoms, medical history, lifestyle habits, and genetic information. By identifying patterns within large datasets,
      AI models can predict the likelihood of diseases such as diabetes, heart disease, and cancer.
      </p>

      <p>
      This system typically uses classification algorithms like Decision Trees, Random Forest, and Logistic Regression.
      These models are trained on large medical datasets and can provide predictions based on user input.
      For example, if a patient inputs symptoms like fatigue, high blood pressure, and irregular heart rate, 
      the system can analyze these features and predict possible cardiovascular conditions.
      </p>
      
      <p>
      One of the key advantages of AI-based disease prediction is its ability to detect diseases at an early stage.
      Early detection improves treatment success rates and reduces healthcare costs. Additionally, such systems assist doctors 
      by providing a second opinion, reducing the chances of human error.
      </p>

      <p>
      However, challenges include data privacy, the need for high-quality datasets, and ensuring that the model is unbiased.
      Despite these challenges, AI-powered disease prediction systems are becoming an essential tool in modern healthcare.
      </p>

      <img src="disease_prediction.jpg" width="250">
      <img src="disease_prediction2.jpg" width="250">
      <img src="disease_prediction3.jpg" width="250">

      <h3>Technologies Used:</h3>
      <ul>
        <li>Machine Learning</li>
        <li>Data Analysis</li>
      </ul>

      <h3>Research Papers:</h3>
      <ul>
        <li><a href="https://ieeexplore.ieee.org/document/8253594">AI-based Disease Prediction</a></li>
        <li><a href="https://www.sciencedirect.com/science/article/pii/S153204641830182X">ML in Clinical Diagnosis</a></li>
      </ul>
    `
   ;
  }

  if(id==="h2"){
    content=`
    <h2>Medical Imaging AI</h2>

      <p>
      Medical imaging is one of the most impactful applications of Artificial Intelligence in healthcare. 
      This project focuses on using Deep Learning techniques, particularly Convolutional Neural Networks (CNNs), 
      to analyze medical images such as X-rays, CT scans, and MRIs. These AI models are capable of detecting abnormalities
      like tumors,fractures, infections, and organ damage with high accuracy.
      </p>

      <p>
      CNNs work by extracting features from images through multiple layers, identifying patterns such as edges, textures, 
      and shapes. These features are then used to classify images as normal or abnormal. For instance, in cancer detection,
      AI can highlight suspicious regions in a scan, assisting radiologists in diagnosis.
      </p>

      <p>
      The use of AI in medical imaging significantly reduces the time required for analysis. In busy hospitals, where thousands 
      of scans are generated daily, AI helps prioritize critical cases. Studies have shown that AI can match or even exceed human
      performance in certain diagnostic tasks.
      </p>

      <p>
      Another advantage is consistency. Unlike humans, AI does not suffer from fatigue, ensuring reliable results over time.
      However, the technology still requires human supervision, especially in critical cases.
      Overall, AI in medical imaging represents a major step toward automated and efficient healthcare systems, improving both accuracy 
      and speed of diagnosis.
      </p>

      <img src="medical_imaging.jpg" width="300">
      <img src="medical_imaging1.jpg" width="300">
      <img src="medical_imaging2.jpg" width="300">

      <h3>Technologies Used:</h3>
      <ul>
        <li>Deep Learning</li>
        <li>Computer Vision</li>
      </ul>

      <h3>Research Papers:</h3>
      <ul>
        <li><a href="https://www.nature.com/articles/s41591-018-0107-6">Deep Learning in Radiology</a></li>
        <li><a href="https://ieeexplore.ieee.org/document/8634105">Medical Image Analysis using CNN</a></li>
      </ul>
    `;
  }

  if(id==="h3"){
    content=`
    <h2>Smart Health Monitoring System</h2>

      <p>
      The Smart Health Monitoring System project integrates Artificial Intelligence with wearable technology to enable
      continuous monitoring of patient health. Devices such as smartwatches and fitness trackers collect real-time data 
      including heart rate, oxygen levels, physical activity, and sleep patterns. This data is then analyzed using AI 
      algorithms to detect abnormalities and predict potential health issues.
      </p>

      <p>
      One of the primary benefits of such systems is real-time monitoring. Patients, especially those with chronic conditions,
      can be continuously observed without needing to stay in hospitals. AI models analyze trends in the data and can generate 
      alerts if unusual patterns are detected, such as irregular heartbeats or sudden drops in oxygen levels.
      </p>
      
      <p>
      This system is particularly useful in remote healthcare and telemedicine. Patients in rural or remote areas can receive
      quality healthcare without frequent hospital visits. Doctors can access patient data remotely and make informed decisions.
      </p>

      <p>
      Another advantage is preventive healthcare. Instead of treating diseases after they occur, AI helps identify risks early,
      promoting a proactive approach to health management.
      However, challenges include data security, battery limitations of devices, and ensuring accuracy of sensors. Despite these issues, 
      wearable AI systems are rapidly evolving and are expected to become a standard part of healthcare in the future.
      </p>

      <img src="wearable_health.jpg" width="300">
      <img src="wearable_health1.jpg" width="300">
      <img src="wearable_health2.jpg" width="300">

      <h3>Technologies Used:</h3>
      <ul>
        <li>IoT Devices</li>
        <li>AI Analytics</li>
      </ul>

      <h3>Research Papers:</h3>
      <ul>
        <li><a href="https://ieeexplore.ieee.org/document/8956245">Wearable Health Monitoring</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7085680/">AI in Remote Healthcare</a></li>
      </ul>
      `;
  }

  if(id==="h4"){
    content=`
    <h2>AI in Disease Diagnosis</h2>

      <p>
      Artificial Intelligence has revolutionized the process of disease diagnosis by enabling faster and more accurate
      analysis of medical data. AI systems can process vast amounts of patient information, including medical records, 
      lab results, and imaging data, to identify patterns that indicate specific diseases.
      </p>

      <p>
      One of the key applications of AI in diagnosis is in detecting complex diseases such as cancer, neurological disorders,
      and cardiovascular conditions. AI models trained on large datasets can recognize subtle signs that may not be easily
      visible to human doctors. For example, AI can detect early-stage cancer in imaging scans with high precision.
      </p>

      <p>
      AI-based diagnostic systems also reduce the workload on healthcare professionals. In hospitals where patient volume
      is high, AI can assist in prioritizing cases and providing preliminary analysis. This improves efficiency and
      ensures timely treatment.
      </p>

      <p>
      Another advantage is consistency and reliability. Unlike humans, AI systems do not get tired or distracted,
      leading to more consistent results. However, AI should not replace doctors but rather assist them in decision-making.
      </p>

      <p>
      Despite its benefits, challenges such as data privacy, ethical concerns, and algorithm bias must be addressed.
      Overall, AI in disease diagnosis is a powerful tool that enhances the quality of healthcare services.
      </p>

      <img src="ai_diagnosis.jpg" width="300">
      <img src="ai_diagnosis1.jpg" width="300">
      <img src="ai_diagnosis2.jpg" width="300">

      <h3>Benefits:</h3>
      <ul>
        <li>Early detection</li>
        <li>Improved accuracy</li>
        <li>Faster diagnosis</li>
      </ul>
      `;
  }

  if(id==="h5"){
    content=`
    <h2>Robotic Surgery</h2>

    <p>
    Robotic surgery is one of the most advanced applications of Artificial Intelligence in modern healthcare. 
    It involves the use of AI-powered robotic systems to assist surgeons in performing complex surgical procedures 
    with extreme precision and control. These systems are designed to enhance the capabilities of human surgeons 
    rather than replace them.
    </p>

    <p>
    One of the most well-known systems is the Da Vinci Surgical System, which allows surgeons to operate using 
    robotic arms controlled through a console. The system translates the surgeon’s hand movements into smaller, 
    more precise actions, enabling minimally invasive procedures.
    </p>

    <p>
    AI enhances robotic surgery by providing real-time data analysis, image guidance, and predictive insights. 
    It helps in identifying critical areas, avoiding damage to surrounding tissues, and improving surgical accuracy.
    </p>

    <div class="gallery">
      <img src="robotic1.jpg">
      <img src="robotic2.jpg">
      <img src="robotic3.jpg">
    </div>

    <h3>Advantages:</h3>
    <ul>
      <li>High precision and accuracy</li>
      <li>Reduced blood loss</li>
      <li>Minimally invasive procedures</li>
      <li>Faster recovery time</li>
    </ul>

    <h3>Research Papers:</h3>
    <ul>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7349114/">AI in Robotic Surgery</a></li>
      <li><a href="https://ieeexplore.ieee.org/document/8461773">Medical Robotics Overview</a></li>
    </ul>`;
  }

  if(id==="h6"){
    content=`
    <h2>AI in Drug Discovery</h2>

    <p>
    Drug discovery is a complex and time-consuming process that traditionally takes several years and billions of dollars. 
    Artificial Intelligence is transforming this field by accelerating the identification and development of new drugs.
    </p>

    <p>
    AI models analyze large datasets of chemical compounds, biological data, and disease mechanisms to predict how 
    different molecules will interact with the human body. This helps researchers identify potential drug candidates 
    much faster than traditional methods.
    </p>

    <p>
    Deep learning techniques are used to simulate molecular structures and predict drug effectiveness, toxicity, and 
    side effects. AI also helps in repurposing existing drugs for new diseases, which became especially important 
    during global health crises like COVID-19.
    </p>

    <div class="gallery">
      <img src="drug1.jpg">
      <img src="drug2.jpg">
      <img src="drug3.jpg">
    </div>

    <h3>Benefits:</h3>
    <ul>
      <li>Faster drug development</li>
      <li>Reduced research costs</li>
      <li>Improved success rates</li>
      <li>Better understanding of diseases</li>
    </ul>

    <h3>Research Papers:</h3>
    <ul>
      <li><a href="https://www.nature.com/articles/s41586-020-2649-2">AI in Drug Discovery</a></li>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S135964462030527X">Deep Learning in Drug Design</a></li>
    </ul>
    `;
  }

  document.getElementById("health-details").innerHTML=content;
}