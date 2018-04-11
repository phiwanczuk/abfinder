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

                </form>
            </div>
        )
    }
}

export default AddBuddy