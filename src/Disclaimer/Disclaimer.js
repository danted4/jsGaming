import React from 'react';


const Disclaimer = (props) =>{

    return <React.Fragment>
        <div style={{'marginTop':"50px",lineHeight:'0.6rem'}}>
            <h2>Disclaimer !</h2>
            <p>Above game has been created for learning purpose only,
              I have no obligation to maintain / update the above code </p><p>and I am not the owner of the said titles, therefore, I hold no responsibilty
              caused by legal damages due to, but not limited to, any </p><p>unauthorized publishing & monetization of this source code and / or any modified source code without
              the concent of original owners of the respective titles.</p>
              <h5><strong>Controls</strong>: 
              { props.displayControls === 'brick' ? <span>
                &nbsp;Left, Right arrow keys [ <span className='red'>MOVEMENT</span> ]
              </span> : null}
              { props.displayControls === 'snake' ? <span>
                &nbsp;Left, Right, Top, Down arrow keys [ <span className='red'>MOVEMENT</span> ]
              </span> : null}
              { props.displayControls === 't90' ? <span>
                &nbsp;Left, Right, Top, Down arrow keys [ <span className='red'>MOVEMENT</span> ],  Space Bar [ <span className='red'>FIRE</span> ]
              </span> : null}
              </h5>
        </div>
    </React.Fragment>

}

export default Disclaimer;