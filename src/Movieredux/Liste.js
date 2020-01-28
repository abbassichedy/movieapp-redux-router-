import React, { Component } from 'react'
import './Liste.css'
import {removemovie,editmovie} from '../Action/Action'
import { connect } from 'react-redux'
import Modaledit from '../modal/Modaledit'
import { Link } from 'react-router-dom'


 class Liste extends Component {
     state={
         namechange:"",
         imagechange:"",
         ratechange:"",
         nameedit:"",
         imageedit:"",
         rateedit:"",
     }
    render() {
        const {movie}=this.props
        const Rating = (count) => {
            let stars = []
          if  (count <=5 ) 
          {
           for (let i = 0; i < 5; i++) {
                if(i < count) {
                    stars.push(<span >★</span>)
                }
                else {
                    stars.push(<span >☆</span>)
                }
            }
            return (
                <div className="movieRating">{stars}</div>
            )
          }
            
        }
        return (
            <div className="boxfilm">
                <img className="boximage" src={movie.image}/>
                <p>{Rating(movie.rate)}</p>
                <p>{movie.name}</p> 
                <div>
        <Link to={"/"+movie.id} >  <button>description</button></Link> 
                <button onClick={()=>this.props.remove(movie.id)}>x</button>
                <Modaledit movie={movie} id={this.props.id}/>
                </div> 
                
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    remove:(id)=>dispatch(removemovie(id)),
    edit:(inputedit,id)=>dispatch(editmovie(inputedit,id))
  })

  export default connect(null,mapDispatchToProps)(Liste)
