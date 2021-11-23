import React from 'react'
import Watch from './Watch'
import Title from './Title'

class App extends React.Component{
    render()
    {
        return (
            <div>
                <Title/>
                <Watch/>
            </div>
        )
    }
}

export default App;