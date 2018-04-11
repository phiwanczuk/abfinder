import React from 'react'

class AddBuddy extends React.Component{

    state = {
        buddyName: '',
        buddyFreeTime: '',
        buddyMaxDrink: '',
        isChosen: false
}

handleInputChange = event => this.setState({
    [event.target.name]: event.target.value
})

    handleSubmit = event => {
        event.preventDefault();
            this.props.addBuddyDetails(this.state)
        alert('Buddy added')
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}
                >
                    <input
                        name='buddyName'
                        value={this.state.buddyName}
                        placeholder='Buddy name...'
                        type='text'
                        onChange={this.handleInputChange}
                    />
                    <input
                        pattern="[0-9]{1,2}"
                        name='buddyFreeTime'
                        type='text'
                        placeholder='buddy free time, from ... to ...'
                        value={this.state}
                    />
                    <input
                    pattern="(?<=^| )\d+(\.\d+)?(?=$| )"
                    name='carFuelConsumption'
                    type='text'
                    placeholder='car fuel consumption...'
                    value={this.state.carFuelConsumption}
                    onChange={this.handleInputChange}
                />



                </form>
            </div>
        )
    }
}

export default AddBuddy