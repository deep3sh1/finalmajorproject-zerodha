import React from 'react';

function Createticket() {
    return (
        <div className='w-100 py-5' style={{ backgroundColor: "#f1f5f9" }}> {/* Full width + light bg */}
            <div className="container text-center">
                <h2 className="mb-3 fw-bold">Need help? Create a ticket</h2>
                <p className="mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
                    If you can't find an answer below, raise a support ticket — we will respond within 48 hours.
                </p>
                <button 
                    className="btn btn-lg" 
                    style={{ 
                        backgroundColor: "#1a73e8", 
                        color: "white", 
                        padding: "12px 30px", 
                        fontWeight: "500",
                        borderRadius: "6px",
                        border: "none"
                    }}
                >
                    Create Ticket
                </button>
            </div>
        </div>
    );
}

export default Createticket;
