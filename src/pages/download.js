import React from "react";

function Download(props) {
    return (
        <div>
            <h1>Download</h1>
            {
                props.convertedFile !== "" ? <a href={URL.createObjectURL(props.convertedFile)} download="convertedFile.srt">Download</a> : <div></div>
            }

        </div>
    )
}
export default Download;