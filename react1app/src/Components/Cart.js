import React, { Component } from 'react'

class Cart extends Component {

    constructor(){
        super()

        this.state = {
            isClose:false,
            text:'close',
            data:'no',
            name :'var'
        }
    }

    addopen = (e) => {
        this.setState({
            text: !this.state.text ,
            isClose: !this.state.isClose,
            data: !this.state.data,
            name: !this.state.name

        })
    }
  render() {
    const {firstname} = this.props
    const {name,id,salary} = this.props
    return (
      <div className='col-lg-3 mt-3'>
        <div className="card">
            <div className='cart-header text-end'>
                <span onClick={this.addopen}>{this.state.text ? 'open' : 'close'} {this.state.data ? 'data var' : 'data yoxdur'}</span>
                <h4>{firstname}</h4>
            </div>
                {
                    this.state.isClose ? null :<div className="card-body">
                    <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li style={salary > 666 ? {color : 'red'} : {color : 'orange'}}>{salary}</li>
                    </ul>
                </div>
                }
       </div>
     </div>
    )
  }
}

export default Cart