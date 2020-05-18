import React, { useContext, useState } from 'react'
import QlikContext from '../context/QlikContext' 

const Page = () => {
    const { app }  = useContext(QlikContext) 
    app.getObject('selectionbar', 'CurrentSelections' ) 

    app.getObject('obj1', 'MEAjCJ') 
    app.visualization.create( 
        'linechart', ['Product Group Desc', '=Sum([Sales Margin Amount])']
    ).then(viz => {
       viz.show('obj1') 
    })
  


    return (
        <div>
            <div id="selectionbar"></div> 
            <br />
            <div id="obj1" style={{ height: '500px', width: '800px'}}></div>
        </div>
    )
}

export default Page

 





