import {Container, Row, ColLeft, ColRight} from './Comps';
import React from 'react';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleErrors = () => {
        const resultLabels = document.getElementsByClassName('resultLabels');
        for(let i = 0; i < resultLabels.length; i++) {
            resultLabels[i].innerHTML = '';
        }
        var errorLabel = document.getElementById('error');
        if(document.getElementById('age').value === "") {
            errorLabel.innerHTML = "Please enter your age!"
            return 0;
        }
        if(this.props.propState.weightMeas === "lbs") {
            if(document.getElementById('weightLbs').value === "") {
                errorLabel.innerHTML = "Please enter your weight!"
                return 0;
            };
        }
        else {
            if(document.getElementById('weightKg').value === "") {
                errorLabel.innerHTML = "Please enter your weight!"
                return 0;
            };
        }
        if(this.props.propState.heightMeas === "cm") {
            if(document.getElementById('heightCm').value === "") {
                errorLabel.innerHTML = "Please enter your height!"
                return 0;
            }
        }
        else {
            if(document.getElementById('heightFt').value === ""
            || document.getElementById('heightInch').value === "") {
                errorLabel.innerHTML = "Please enter your height!"
                return 0;
            }
        }
        this.props.calculate();
    }

    render() {
        return (
        <div id="main">
            <Container>
            <h1 style={{margin: 'auto', marginTop: "20px"}}>Calorie Calculator</h1>
                <Row style={{marginTop: "10px"}}>
                <ColLeft className="leftLabels"><label /> Gender</ColLeft>
                <ColRight ><select className="items" onChange={this.props.updateState} id="gender" name="gender" type='radio'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </ColRight>
                </Row>
                <Row>
                <ColLeft className="leftLabels"><label/> Age</ColLeft>
                <ColRight><input id="age" placeholder="Years" 
                type='text'style={{width: 70}}/></ColRight>
                </Row>
                <Row>
                <ColLeft className="leftLabels"><label/> Weight</ColLeft>
                <ColRight><select onChange={this.props.updateState} id="weightMeas" name="weightMeas" type='radio'>
                    <option value="kg">Kg</option>
                    <option value="lbs">Lbs</option>
                    </select>
                    {this.props.propState.weightMeas === "kg" ? 
                    <input id="weightKg" name="weightInfo" placeholder="Kg" type='text'style={{width: 65}}/>
                    : <input id="weightLbs" name="weightInfo" placeholder="Lbs" type='text'style={{width: 65}}/>}
                </ColRight>
                </Row>
                <Row>
                <ColLeft className="leftLabels"><label/> Height</ColLeft>
                <ColRight><select onChange={this.props.updateState} name="heightMeas" id="heightMeas" type='radio'>
                        <option value="cm">Cm</option>
                        <option value="ft">Ft</option>
                    </select>
                    {this.props.propState.heightMeas === "cm" ?
                    <input placeholder="Cm" name="heightInfo" id="heightCm" type='text' style={{width: 65}}/>
                    : <div>
                    <input placeholder="Ft" name="heightInfo" id="heightFt" type='text' style={{width: 65}}/>
                    <input placeholder="Inches" id="heightInch" type='text' style={{width: 65}}/>
                    </div>}
                    </ColRight>
                </Row>
                <Row lh="1.5">
                <ColLeft className="leftLabels"><label/> Activity Level</ColLeft>
                <ColRight style={{display: 'flex', flexDirection: 'column'}}>
                    <input  style={{width: "100%"}}  type="range" id="activity" 
                    name="activity" defaultValue="5" onClick={this.props.updateState} min="0" max="10"></input>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <label>Sedentary</label>
                        <label>Athlete</label>
                    </div>
                </ColRight>
                </Row>
                <Row>
                    <button style={{width: "100px", borderRadius: "1rem"}} id="confirm" onClick={this.handleErrors}>Confirm</button>
                </Row>
                <Row style={{display: "flex", flexDirection: 'column', textAlign: 'center', margin: 'auto',
                            width: "70%", lineHeight: 1, borderStyle: "solid", borderRadius: "10px", 
                            marginBottom: "10px", marginTop: "10px", backgroundColor: 'white'}}>
                    <label className="resultLabels" style={{color: "red"}} id="slowLoss"></label>
                    <label className="resultLabels" style={{color: "red"}} id="modLoss"></label>
                    <label className="resultLabels" style={{color: 'blue'}} id="maintain"></label>
                    <label className="resultLabels" style={{color: 'green'}} id="slowGain"></label>
                    <label className="resultLabels" style={{color: 'green'}} id="modGain"></label>
                    <label id="error" style={{color: 'red', fontWeight: "bold", fontSize: "20px"}}>Remember to choose your activity level!</label>
                </Row>
                <label style={{marginLeft: "10%"}}>Background made by <a style={{color: "white", textDecoration: "none"}} 
                onMouseOver={() => {document.getElementById("madeBy").style.color = "red"}}
                onMouseOut={() => {document.getElementById("madeBy").style.color = "white"}} id="madeBy" href="pixelshape.nl">Ries van Geffen</a></label>
            </Container>
        </div>
        );
    }
  }
  
  export default MainLayout;