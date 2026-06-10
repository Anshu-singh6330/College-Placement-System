import { useNavigate } from "react-router-dom";
import "./CompanyCard.css";
function CompanyCard({ company }) {
    const navigate = useNavigate();
    return (
        <div className="company-card">
            <h3>{company.name}</h3>
            <p>{company.role}</p>
        <p>{company.Location}</p>
        <p>{company.salary}</p>
    


<button onClick={() => navigate("/apply", {state: { companyName: company.name }})}>Apply</button>
</div>
    );
}
export default CompanyCard;
