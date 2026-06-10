import { useState } from "react";


function AdminDashboard () {
    const [companies, setCompanies] =
    useState([
        {id: 1, name: "TCS" },
        {id: 2, name: "Infosys"},

    ]);

    const addCompany= () => {
        const newCompany = {
            id: companies.length + 1,
            name: "New Company",
        } ;
        setCompanies([...AdminDashboard.companies, newCompany]);

    };

    return (
        <div style = {{ padding: "20px"}}>
            <h2>Admin Dashboard</h2>
            <button onClick={addCompany}>Add Company</button>
            <h3>Company List</h3>
            {companies.map((company) => (
                <div
                key= {company.id}
                style = {{
                    border: "1px solid gray",
                    padding: "10px",
                    margin: "10px 0",
                }}
                >
                    {company.name}
                    </div>
            ))}
        </div>
    );
}

export default AdminDashboard;
