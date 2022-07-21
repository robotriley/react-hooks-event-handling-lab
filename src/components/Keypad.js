// Code Keypad Component Here
const logChange = () => {
  console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
        <label for="#keypad">KEYPAD</label>
        <input onChange={logChange} id="keypad" type="password"/>
        </div>
    )
}

export default Keypad;