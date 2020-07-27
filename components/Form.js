class Form extends React.Component {
    constructor(props) {
        super (props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return(
            <form>
            <div className='form-group'>
                <label for = 'city'>City</label>
                <input type='text' className='form-control' onChange={this.handleChange}/>    
            </div>
            <button type='submit' className="btn btn-primary" value="Submit" onSubmit={this.handleSubmit}>Enter</button>
            </form>
        )
    }
}
export default Form