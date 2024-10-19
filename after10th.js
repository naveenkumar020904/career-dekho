// scripts.js

// Course details
// Course details
const courseDetails = {
    "Intermediate": {
        description: "Intermediate courses prepare students for higher education, offering foundational knowledge in various subjects.",
        duration: "2 years",
        subcourses: "Science Stream: Physics, Chemistry, Mathematics, Biology, Computer Science; Commerce Stream: Economics, Business Studies, Accountancy, Mathematics, Computer Science; Arts/Humanities Stream: History, Geography, Political Science, Psychology, Sociology, Economics.",
        entranceExams: "None (direct admission based on 10th grade performance)",
        rating: "4.0/5",
        jobs: "Various undergraduate courses, including B.Sc, B.Com, and B.A."
    },
    "Polytechnic": {
        description: "Polytechnic courses provide practical skills and technical knowledge in specific engineering fields.",
        duration: "3 years",
        subcourses: "Mechanical Engineering: Machine Design, Thermodynamics, Fluid Mechanics, Manufacturing Processes; Civil Engineering: Construction Technology, Surveying, Structural Engineering, Geotechnical Engineering; Electrical Engineering: Electrical Machines, Circuit Theory, Power Systems, Control Systems; Computer Engineering: Data Structures, Operating Systems, Database Management, Web Development; Automobile Engineering: Automobile Systems, Vehicle Dynamics, Engine Technology, Auto Electronics; Electronics and Communication Engineering: Digital Electronics, Microprocessors, Telecommunication Systems, Embedded Systems.",
        entranceExams: "Polytechnic Entrance Test (PET)",
        rating: "4.2/5",
        jobs: "Junior Engineer, Technician in various fields."
    },
    "Diploma in Engineering": {
        description: "This diploma offers specialized training in various engineering disciplines, blending theoretical and practical learning.",
        duration: "3 years",
        subcourses: "Mechanical Engineering: Manufacturing Technology, Fluid Mechanics, Machine Design, CAD/CAM; Electrical Engineering: Electrical Machines, Power Generation, Electrical Circuits, Renewable Energy; Civil Engineering: Building Construction, Surveying, Transportation Engineering, Structural Analysis; Computer Science Engineering: Data Structures, Algorithms, Operating Systems, Software Engineering; Electronics Engineering: Analog Circuits, Digital Communication, Signal Processing, VLSI Design.",
        entranceExams: "Diploma Entrance Test (DET), JEE (some states)",
        rating: "4.5/5",
        jobs: "Junior Engineer, Technician, CAD Designer, Supervisor in manufacturing or IT industries."
    },
    "Diploma in Hotel Management": {
        description: "This course equips students with skills for the hospitality industry, focusing on management and operational tasks.",
        duration: "3 years",
        subcourses: "Front Office Operations: Customer Service, Reception, Guest Management; Housekeeping Management: Cleaning Techniques, Inventory Management, Laundry Operations; Food & Beverage Service: Restaurant Management, Bar Operations, Banquet Service; Food Production: Culinary Techniques, Bakery and Confectionery, Menu Planning; Event Management: Event Planning, Conference Management, Hospitality Law.",
        entranceExams: "NCHM JEE, other institute-specific tests",
        rating: "4.3/5",
        jobs: "Hotel Manager, Chef, Front Office Executive, Housekeeping Supervisor."
    },
    "Diploma in Animation": {
        description: "Students learn animation techniques and software to create visual effects and animations for various media.",
        duration: "1-3 years",
        subcourses: "2D Animation: Character Design, Storyboarding, Animation Principles; 3D Animation: Modeling, Texturing, Rigging, Lighting; Visual Effects (VFX): Compositing, Special Effects, Green Screen, Rotoscoping; Motion Graphics: Typography, Graphic Design, Animation for Videos; Game Design: Game Development, 3D Modeling, Animation for Games, Concept Art.",
        entranceExams: "None (varies by institute)",
        rating: "4.1/5",
        jobs: "Animator, Graphic Designer, 3D Modeler, Visual Effects Artist."
    },
    "Diploma in Pharmacy": {
        description: "This course prepares students for a career in the pharmaceutical industry, covering drug regulations and pharmacy management.",
        duration: "2 years",
        subcourses: "Pharmaceutical Chemistry: Organic Chemistry, Inorganic Chemistry, Pharmaceutical Analysis; Pharmaceutics: Drug Formulation, Pharmaceutical Technology, Biopharmaceutics; Pharmacology: Human Anatomy, Drug Interactions, Therapeutics; Pharmacognosy: Herbal Drugs, Natural Products, Plant Anatomy; Hospital and Clinical Pharmacy: Patient Counseling, Drug Dispensing, Pharmacy Practice.",
        entranceExams: "D.Pharm Entrance Exam (varies by institute)",
        rating: "4.4/5",
        jobs: "Pharmacist, Pharmacy Technician, Medical Representative."
    },
    "ITI": {
        description: "ITI courses provide vocational training in various trades, equipping students with practical skills for the workforce.",
        duration: "1-2 years",
        subcourses: "Electrician: Wiring Systems, Motor Winding, Circuit Design, Power Distribution; Fitter: Machine Fitting, Pipe Fitting, Tools and Equipment, Safety Measures; Turner: Lathe Operations, Machine Tool Technology, Measurement Techniques; Welder: Arc Welding, Gas Welding, MIG Welding, Welding Safety; Mechanic: Diesel Mechanics, Auto Repair, Engine Overhauling, Transmission Systems; Plumber: Pipe Laying, Plumbing Systems, Sanitation, Water Supply.",
        entranceExams: "None (based on merit or direct admission)",
        rating: "4.0/5",
        jobs: "Skilled Technician, Electrician, Plumber, Mechanic in industries or self-employed."
    },
    "Vocational": {
        description: "Vocational courses offer hands-on training in specific trades, preparing students for immediate employment.",
        duration: "Varies by course",
        subcourses: "Beauty and Wellness: Hair Styling, Skincare, Makeup Artistry, Salon Management; Fashion Designing: Textile Design, Garment Construction, Fashion Illustration, Pattern Making; Interior Designing: Space Planning, Furniture Design, Lighting Design, CAD for Interiors; Healthcare: Nursing Assistance, Medical Lab Technology, Geriatric Care, Patient Care Assistant; Tourism and Travel Management: Travel Planning, Ticketing, Tour Operations, Customer Service in Tourism; Retail Management: Store Operations, Inventory Control, Visual Merchandising, Customer Relationship Management.",
        entranceExams: "None (based on merit or direct admission)",
        rating: "4.2/5",
        jobs: "Small business owner, Technician, Computer Operator, Beautician."
    }
};


// Modal Elements
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const descriptionElement = document.getElementById("description");
const durationElement = document.getElementById("duration");
const  subcoursesElement = document.getElementById("sub-courses");
const entranceExamsElement = document.getElementById("entrance-exams");
const ratingElement = document.getElementById("rating");
const jobsElement = document.getElementById("jobs");
const modalTitle = document.getElementById("modal-course-title");

// Show modal with course details
document.querySelectorAll(".details-button").forEach(button => {
    button.addEventListener("click", () => {
        const course = button.getAttribute("data-course");
        const details = courseDetails[course];

        modalTitle.innerText = course;
        descriptionElement.innerText = details.description;
        durationElement.innerText = details.duration;
        subcoursesElement.innerText = details.subcourses;
        entranceExamsElement.innerText = details.entranceExams;
        ratingElement.innerText = details.rating;
        jobsElement.innerText = details.jobs;

        modal.style.display = "block";

        // Animation on modal display
        modal.classList.add('modal-show');
    });
});

// Close modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove('modal-show');
});

// Close modal on outside click
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.classList.remove('modal-show');
    }
});
