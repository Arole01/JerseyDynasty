import React from "react"
import "./SizeGuide.css"


export const SizeGuide = () => {
    return (
        <div className="page-container">
            <h1>Size Guide</h1>

            <p className="size-notes">
        Choosing the right size ensures comfort and confidence. Please refer to
        the images below for guidance. If you’re between sizes, we recommend
        sizing up for a relaxed fit.
        </p>


        <div className="size-images">
            <div className="size-images">
                <img src="https://res.cloudinary.com/de91sxsp3/image/upload/v1769545997/sizeguide2_esrbdl.jpg" alt="size chart"/>
            </div>

            <div className="size-images">
                <img src="https://res.cloudinary.com/de91sxsp3/image/upload/v1769545997/sizeguide_pdbxsr.jpg" alt="size chart"/>
            </div>

        </div>
        </div>

    
    )
}