
import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {editmovie} from '../Action/Action'
import { connect } from 'react-redux'
 class Modaledit extends Component {
    state={
        show:false,
        name:"",
        image:"",
        rate:""
    }
    namechange=(e)=>this.setState({[e.target.name]:e.target.value}) 
    handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
     getMovie=()=>{
        this.setState({
          name:this.props.movie.name,
          image:this.props.movie.image,
          rate:this.props.movie.rate
        })
      }
      setMovie=(id)=>{
          let newMovie={name:this.state.name,
        image:this.state.image,
        rate:this.state.rate
        }
        this.props.saveMovie(id,newMovie)
      }

    render() {
        return (
            <div>
                <>
        <Button variant="primary" onClick={()=>{this.getMovie();this.handleShow()}}>
         Edit
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          
         
          <input type="text" name="name" value={this.state.name} onChange={this.namechange}/>
          <input type="text" name="image" value={this.state.image} onChange={this.namechange}/>
          <input type="text" name="rate" value={this.state.rate} onChange={this.namechange}/>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button onClick={()=>this.setMovie(this.props.id)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
  saveMovie:(id,payload)=>dispatch(editmovie(id,payload))
})


export default connect(null,mapDispatchToProps)(Modaledit)
