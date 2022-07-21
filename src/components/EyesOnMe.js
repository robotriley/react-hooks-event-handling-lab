// Code EyesOnMe Component Here
const good = () => {
  console.log("Good!")
}

const hey = () => {
  console.log("Hey! Eyes on me!")
}

const EyesOnMe = () => {
  return (
    <div>
      <button onFocus={ good } onBlur={ hey } >Eyes on me</button>
    </div>
  )
}


export default EyesOnMe;