import CompanyCard from "../components/CompanyCard";
import "./Companies.css";
function Companies () {
    const companies = [
        {id: 1, name: "TCS", role:"Software Engineer", salary: "5 LPA", Location: "Bangalore"},
        {id: 2, name: "Infosys", role: "Web Developer" , salary: "10 LPA", Location: "Noida"},
        {id: 3, name: "Google", role: "MERN Developer" ,salary: "8 LPA", Location: "Bangalore"},
        {id: 4, name: "Amazon", role: "Full Stack Web Developer" , salary: "6 LPA", Location: "Gurgaon"},
        {id: 5, name: "Wipro", role: "Project Engineer" , salary: "8 LPA", Location: "Bangaluru"},
        {id: 6, name: "Tech Mahindra", role: "Frontend Developer" , salary: "4 LPA", Location: "Noida"},
        {id: 7, name: "Cognizant", role: "Full Stack Web Developer" , salary: "10 LPA", Location: "Chennai Tamil Nadu"},
        {id: 8, name: "Accenture", role: "Application Development Associate" , salary: "5.5LPA", Location: "Gurugram"},
        {id: 9, name: "Deloitte", role: "Analyst" , salary: "5.0 LPA", Location: "Hyderabad"},
        {id: 10, name: "Capgemini", role: "Analyst Programmer" , salary: "4.5 LPA", Location: "Navi Mumbai" }

    ];

    return(
        <div>
            <h2 className="Companies-title">Companies</h2>

            <div
            className="company-container">
            {companies.map((company) => (
                <CompanyCard key = {company.id}
                company={company} />
            ))}
            </div>
        </div>
    );
}

export default Companies;
