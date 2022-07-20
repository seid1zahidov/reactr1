import React, { Component } from 'react'
import Cart from './Cart'

class Cartlist extends Component {
  render() {
    const {userlis} = this.props
    return (
        <div className='container'>
            <div className='row'>
                {
                    userlis.map( x => {
                        return(
                            <Cart 
                                key={x.id}
                                id = {x.id}
                                name = {x.username}
                                salary = {x.salary}
                            />
                        )
                        
                    })
                }
           </div>
        </div>

    )
  }
}

export default Cartlist