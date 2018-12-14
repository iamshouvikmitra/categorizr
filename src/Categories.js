import React, { Component } from 'react'

class Categories extends Component {
    state = {
        items: null
    }

    render() {
        let items = this.props.items
        console.log(items)
        let data = items ? (
            items.map(item=>{
                return(
                    <div className="chip" key={item.id}>
                    {item.name}
                    </div>      
                )
            })
        ) : (
            <div className="chip">
            No Data
            </div>
            )
        return (
            <div className="container">
                {data}
            </div>
        )
    }
}

export default Categories;