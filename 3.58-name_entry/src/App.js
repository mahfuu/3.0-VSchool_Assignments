import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            listedItem: "",
            list: []
        }
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.setState(prevState => ({
            list: [...prevState.list, prevState.listedItem],
            listedItem: ""
        }))
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const items = this.state.list.map(item => {return(<li>{item}</li>)})
        return(
            <div>  
                <form>
                    <input 
                        type="text"
                        name="listedItem"
                        value={this.state.listedItem}
                        placeholder="Enter your listed item here."
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <br/>
                    <br/>
                    <h1>{this.state.listedItem}</h1>
                    <button onClick={this.handleSubmit}>Add Item</button>
                </form>
                <ol>{items}</ol>
            </div>
        )
    }
}

export default App