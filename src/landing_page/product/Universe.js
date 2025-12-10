import React from 'react';

function Universe() {
  return (
    <div className="container mt-5 text-center">


      {/* Logo Grid below */}
      <div className="row justify-content-center">
        <div className="col-4 col-md-2 p-4">
          <img src="media/images/smallcaseLogo.png" style={{ width: "55%" }} alt="Smallcase" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 col-md-2 p-4">
          <img src="media/images/streakLogo.png" style={{ width: "55%" }} alt="Streak" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 col-md-2 p-4">
          <img src="media/images/sensibullLogo.svg" style={{ width: "55%" }} alt="Sensibull" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 col-md-2 p-4">
          <img src="media/images/zerodhaFundhouse.png" style={{ width: "55%" }} alt="Zerodha Fundhouse" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 col-md-2 p-4">
          <img src="media/images/goldenpiLogo.png" style={{ width: "55%" }} alt="Golden Pi" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 col-md-2 p-4">
          <img src="media/images/dittoLogo.png" style={{ width: "55%" }} alt="Ditto" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
      </div>
       <div className="mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <button
          className="btn btn-primary fs-5 mt-3"
          style={{ width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
