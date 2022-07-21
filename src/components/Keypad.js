// Code Keypad Component Here
const logChange = () => {
  console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
        <label>KEYPAD</label>
        <input onChange={logChange} id="keypad" type="password"/>
        </div>
    )
}

export default Keypad;