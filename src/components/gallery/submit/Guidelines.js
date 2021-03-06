import React from "react";

export default function Guidelines() {
  const rules = [
    <>
      Pieces must be <b>created and submitted by applicant</b>.
    </>,
    <>
      Artwork must be <b>scanned or photographed</b> and uploaded for
      submission. Videos must be in the form of a{" "}
      <b>Google Drive or YouTube link</b>.
    </>,
    <>
      The submission <b>must not contain</b> material that is obscene, hateful,
      defamatory or otherwise objectionable.
    </>,
    <>
      The submission <b>must not contain</b> material that violates the laws or
      regulations of the United States or of any jurisdiction where the
      Submission is created.
    </>,
  ];
  return (
    <div className="guidelines gray-bg">
      <div className="section-header">
        <h1>Guidelines</h1>
      </div>
      <div className="container text-center">
        <div className="row pb-5 justify-content-center">
          <div className="col-12 mb-3">
            <p className="lead-p">
              <b>No purchase necessary</b> to enter.
              <br />
              Rules that do not follow guidelines <b>will not be shown</b>.
            </p>
          </div>
          <div className="col-11 col-md-9   rules text-md-left text-center">
            <div className="container-fluid p-0 m-0">
              {rules.map((rule, index) => (
                <div className="row no-gutters p-0 m-0" key={index}>
                  <div className="col-md-1 text-md-center mt-3 mt-sm-2 mt-md-0">
                    <span className="number">{index + 1}. </span>
                  </div>
                  <div className="col-md-11 col-12 text-center">{rule}</div>
                  <div className="w-100 mb-4 mb-md-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
