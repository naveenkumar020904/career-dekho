const courseDetails = {
    Science: {
        description: "Courses under the Science stream include B.Sc., B.E./B.Tech, MBBS, and BDS.",
        duration: "3-5 years",
        subCourses: "B.Sc., B.E./B.Tech, MBBS, BDS",
        entranceExams: "JEE, NEET, etc.",
        rating: "★★★★☆",
        jobs: "Research Scientist, Software Engineer, Doctor, Dentist, etc."
    },
    Commerce: {
        description: "Courses under the Commerce stream include B.Com, BBA, CA, CS, and CMA.",
        duration: "3-4 years",
        subCourses: "B.Com, BBA, CA, CS, CMA",
        entranceExams: "CPT, IPMAT, etc.",
        rating: "★★★★☆",
        jobs: "Accountant, Business Manager, Chartered Accountant, Legal Advisor, etc."
    },
    Arts: {
        description: "Courses under the Arts stream include LLB, B.A. in various subjects.",
        duration: "3-5 years",
        subCourses: "LLB, B.A.",
        entranceExams: "CLAT, LSAT, etc.",
        rating: "★★★★☆",
        jobs: "Lawyer, Teacher, Social Worker, Journalist, etc."
    }
};

const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const detailsButtons = document.querySelectorAll(".details-button");
const courseTitle = document.getElementById("modal-course-title");
const descriptionCell = document.getElementById("description");
const durationCell = document.getElementById("duration");
const subCoursesCell = document.getElementById("sub-courses");
const entranceExamsCell = document.getElementById("entrance-exams");
const ratingCell = document.getElementById("rating");
const jobsCell = document.getElementById("jobs");

detailsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const course = button.getAttribute("data-course");
        const details = courseDetails[course];

        courseTitle.textContent = course + " Stream";
        descriptionCell.textContent = details.description;
        durationCell.textContent = details.duration;
        subCoursesCell.textContent = details.subCourses;
        entranceExamsCell.textContent = details.entranceExams;
        ratingCell.textContent = details.rating;
        jobsCell.textContent = details.jobs;

        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
