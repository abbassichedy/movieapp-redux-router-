import React, { Component } from 'react'
import Liste from './Liste'
import { connect } from 'react-redux'
import './Movieredux.css'


 class Movieredux extends Component {
   
    render() {
        return (
            <div className="box">
                {this.props.movies.filter(el=>(el.name.toUpperCase().includes(this.props.search.toUpperCase()))).map((el,i)=>(
        
                <Liste key={el.id}  movie={el} id={i}/>
                
                 

                ))}
               
                
            </div>
        )
    }
}
const mapState=state=>({
    movies:state.movies,
    search:state.searchname
})
export default connect(mapState)(Movieredux)
