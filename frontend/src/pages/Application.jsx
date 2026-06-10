import { useState } from "react"

function Application() {
    const [applications] = useState([
        {
            id: 1, company: "TCs", status: "Pending"
        },
        {id: 2, company: "Infosys", status: "Approved"},
    ]);
    return (
        <div style = {{padding:"20px" }}>
            <h2>My Applications</h2>
            {applications.length === 0 ? (
                <p>No Applications yet</p>
            ) : (
                applications.map((app) => (
                    <div 
                    key ={app.id}
                    style= {{
                        border: "1px solid gray",
                        padding: "10px",
                        margin: "10px 0"
                    }}
                    >
                        <h4>{app.company}</h4>
                        <p>Status: {app.status}</p>
                        </div>
                ))
            
            )}
        </div>
    );
}

export default Application;
