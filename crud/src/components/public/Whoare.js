import React from 'react'

export default function Whoare(props) {
    let { dama } = props.logos;

    return (
        <>
            <div className='bg-dark py-4 text-light'>
                <h1 className='text-center '>Who are</h1>
            </div>

            <div className='d-flex justify-content-around flex-xxl-row flex-sm-column flex-column container' >
                <div className='m-4 '>
                    <figure className='text-end'>
                        <img width="500" className='rounded-5 d-grid gap-2' src={dama}></img>
                        <figcaption className='text-secondary'><b>Damarys Cordova</b></figcaption>
                        <span className='text-secondary'><small>Commercial Director</small></span>
                    </figure>
                </div>
                <div className='m-4 border rounded-5  border-3 p-5'>
                    <h2>Stack your navigation by changing the flex</h2>
                    <p>Stack your navigation by changing the flex item direction with the .flex-column utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., .flex-sm-column).</p>
                    <p>Stack your navigation by changing the flex item direction with the .flex-column utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., .flex-sm-column).</p>
                    <p>Stack your navigation by changing the flex item direction with the .flex-column utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., .flex-sm-column).</p>
                    <p>Stack your navigation by changing the flex item direction with the .flex-column utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., .flex-sm-column).</p>
                </div>
            </div>
        </>
    )
}
