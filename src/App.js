import React, { Component } from 'react';
import logo from './pics/cafekvarnholmenlogo-White.png';
import './App.css';
import {Menu} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';
import hem from './pages/hem';
import OmOss from './pages/omoss';
import {config} from './components/fireBase'




class App extends Component {
  constructor(props){
    super(props);
    this.state = { activeItem: ''}
  }
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    console.log('data',this.state.firstField)
    const { activeItem } = this.state
    return (
      <div className="App">
       
        <div className="App-header">
        <Link as={Link} to='/'>
           <img src={logo} className="App-logo" alt="logo" />
         </Link>
           <section>
            
            <div className="oppettider" style={{fontSize: '100%'}}>
              
              <div>Mån-fre 8-17</div>
              <div>Lördag 9-16</div>
              <div>Söndag 10-16</div>
              <div><i>Öppettider</i></div>
              <div><i>kan variera.</i></div>
            </div>
           
            <div style={{fontSize: '80%', display: 'flex', flexDirection: 'column', maxWidth: 105, top: 20, left: 5, position: 'absolute'}}>
              <a style={{color: 'white'}}without rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Caf%C3%A9-Kvarnholmen-1699075110372070/">
                <i style={{fontSize: '40px'}} class="facebook icon"></i>
              </a>
              <a style={{color: 'white'}}without rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/cafekvarnholmen/">
                <i style={{fontSize: '40px'}} class="instagram icon"></i>
              </a>
            </div>
      
              <Menu inverted={true}stackable={true}style={{borderColor: '#009e92', borderTop: '0',borderLeft:'0', borderRight: '0'}} pointing secondary compact={true}>
                <Menu.Item as={Link} to='/' name='Hem' active= {activeItem === 'Hem'} onClick={this.handleItemClick} ><i style={{fontSize: '25px', paddingRight: '5px'}} class="fa fa-home" aria-hidden="true"></i> Hem</Menu.Item>
                <Menu.Item as={Link} to='/OmOss' name='Om oss' active={activeItem === 'Om oss'} onClick={this.handleItemClick}><i style={{fontSize: '25px', paddingRight: '5px'}} class="fa fa-users" aria-hidden="true"></i> Om oss</Menu.Item>
                {/*<Menu.Item as={Link} to='/oppettider'  name='Öppettider' active={activeItem === 'Öppettider'} onClick={this.handleItemClick}>Öppettider</Menu.Item>
                <Menu.Item as={Link} to='/kontakt'  name='Kontakt' active={activeItem === 'Kontakt'} onClick={this.handleItemClick}>Kontakt</Menu.Item>*/}
              </Menu>  
          </section>
        </div>
        
        <main className="Pages">
        
        
           <Route path="/" exact component={hem}/>
           <Route path="/OmOss" exact component={OmOss}/>
           {/*<Route path="/oppettider" exact component={oppettider}/>
           <Route path="/kontakt" exact component={kontakt}/>*/}
        
        </main>
        
          <div className="footer">
                <section>
                  <div>Mån-fre 8-17</div>
                  <div>Lör-sön 9-16</div>
                </section>
                
                  
                <section>
                  <div>Kvarnholmsvägen 87</div>
                  <div>131 31 Nacka</div>
                  <div>+46735738750</div>
                  <div>info@kvarnholmen.se</div>
                </section>

               <div>Café Kvarnholmen &#x24B8; 2016-2017 </div>
               <div>Made by <a style={{color: 'lightblue', fontSize: '130%'}} href="http://www.rasmusarvidsson.nu/">RasmusArvidsson.nu</a></div>
          </div>
          
        
      </div>
    );
  }
}

export default App;
