import React, { Component } from 'react';


import ScrollAnimation from 'react-animate-on-scroll';
import * as firebase from 'firebase'

class OmOss extends Component {
  constructor(props){
    super(props);
    this.state = {
      OmOssFirstHeader: '', 
      OmOssText: '',
      OmOssNedreRubrik: '',
      
    }
    
  }

    componentDidMount(){
    const db = firebase.database()
    const OmOssFirstHeader=db.ref().child('OmOssFirstHeader');
    const OmOssText=db.ref().child('OmOssText');
    const OmOssNedreRubrik=db.ref().child('OmOssNedreRubrik');
    OmOssFirstHeader.on('value', snapshot=>{
      console.log('snapshotomoss OmOssFirstHeader',snapshot.val())
      this.setState({
        OmOssFirstHeader: snapshot.val()
      })
    })
    
    OmOssText.on('value', snapshot=>{
      console.log('snapshotomoss scndfield',snapshot.val())
      this.setState({
        OmOssText: snapshot.val()
      })
    })

     OmOssNedreRubrik.on('value', snapshot=>{
      console.log('OmOssNedreRubrik',snapshot.val())
      this.setState({
        OmOssNedreRubrik: snapshot.val()
      })
    })
    
  }
  render() {
   
    return (
    <div className="ContentWrapper">
     

{/*          <img className="maxBildHeight" src={snyggbild} alt="hmm" />
*/}        <div className="ContentOne">
     		<ScrollAnimation animateIn="fadeIn">
       	   <div className="Texth2">
             <h2>{this.state.OmOssFirstHeader}</h2>
             <p>
            {this.state.OmOssText}
         		</p>
       		</div>
        </ScrollAnimation>
          
           {/*<img src={snyggbild} className="head" alt="omsoss" />*/}
          
       
      </div>
      {/*<div className="ContentTwo">*/}
     
         
        
          
          
       
      {/*</div>*/}



      <div className="ContentThree">
{/*      <img className="maxBildHeight" src={godMat} alt="hmm" />
*/}	     		
        <ScrollAnimation animateIn="fadeInUp">
          <div className="Texth22">
		         <h2>{this.state.OmOssNedreRubrik}</h2>
		         {/*<p style={{fontSize: '18px', textAlign: 'left'}}>
		     			Drömkombon

		     		</p>*/}
	     		</div>
        </ScrollAnimation>
          
          
       
    
         
          
           
          
       
      </div>

    </div>

    );
  }
}

export default OmOss;
