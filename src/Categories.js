import React, { Component } from 'react'

class Categories extends Component {
    state = {
        items: null
    }

    render() {
        let items = this.props.items
        let data = items ? (
            items.map(item=>{
                return(
                    <div className="chip" key={item.id} onClick={()=>{this.props.handleClick(item.id)}} dangerouslySetInnerHTML={{__html: item.name}}>
                    </div>      
                )
            })
        ) : (
            <div className="chip">
            No Categories Yet
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