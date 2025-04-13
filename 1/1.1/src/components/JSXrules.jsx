import React from 'react'

const JSXrules = () => {
  return (
    <div>
      <h1>JSX Rules :-</h1>
      <p>1) anytime we are working with jsx then this is the first rule to keep in mind that from 1component we are only allowed to return 1 div </p>
      <p>2) in jsx we have to close every tags that we use</p>
      <p>3) vanytime you are working with classes you are not allowded to provide a class with class keyword instead of that you have to write className</p>
      <p>4) anytime you are working with forms in such situations we have to provide 'htmlFor' instead of 'for' because 'for' keyword is preserved for javascript</p>
    </div>
  )
}

export default JSXrules
