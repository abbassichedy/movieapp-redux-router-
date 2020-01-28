import React from 'react'
import { connect } from 'react-redux'
import {filtername} from '../Action/Action'
 function Recherche(props) {
    return (
        <div>
            <input text="seach" placeholder=" search .....  film" onChange={(e)=>{props.search(e.target.value)}}></input>
            <button>recherche</button>
        </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return{
    search:(searchname)=>dispatch(filtername(searchname)),
    }
  }

  export default connect(null,mapDispatchToProps)(Recherche)