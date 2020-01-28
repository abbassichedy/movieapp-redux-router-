
import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {addmovie} from '../Action/Action'
import { connect } from 'react-redux'
 class Modale extends Component {
    state={
        show:false,
        inputname:"",
        inputimage:"",
        inputrate:""
    }
    namechange=(e)=>this.setState({[e.target.name]:e.target.value}) 
    handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
   


    render() {
        return (
            <div>
                <>
        <Button variant="primary" onClick={this.handleShow}>
         ADD
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          
         
          <input  name="inputname" value={this.state.inputname} onChange={this.namechange}/>
          <input  name="inputimage" value={this.state.inputimage} onChange={this.namechange}/>
          <input  name="inputrate" value={this.state.inpputrate} onChange={this.namechange}/>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.add({id:Date.now(),name:this.state.inputname,image:this.state.inputimage,rate:this.state.inputrate});this.handleClose()}}>
            {/* <Button variant="primary" onClick={()=>{this.props.add(this.state);this.handleClose()}}> 2iem solution:best practice */}
              ADD 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
  add:(newMovie)=>dispatch(addmovie(newMovie))
})


export default connect(null,mapDispatchToProps)(Modale)
