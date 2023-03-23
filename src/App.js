
import CryptoJS from "crypto-js";
import { useState } from "react";

function App() {

  // const convert = require('amrhextotext')
  // const hex = require('string-hex');

  // var aesjs = require('aes-js');

  const [text, setText] = useState("");
  const [screen, setScreen] = useState("encrypt");

  const [encrptedData, setEncrptedData] = useState("");
  const [decrptedData, setDecrptedData] = useState("");

  const secretPass = "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5";

  const encryptData = () => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(text),
      secretPass
    ).toString();

    setEncrptedData(data);
  };

  const decryptData = () => {
    // const bytes = CryptoJS.AES.decrypt(text, secretPass);
    // const data = JSON.stringify(bytes.toString(CryptoJS.enc.Utf8));

  //   var ciphertext = CryptoJS.AES.encrypt('my message', secretPass);
  // var cypherString = ciphertext.toString(CryptoJS.format.Hex);

  //   const bytes = CryptoJS.AES.decrypt(cypherString, secretPass, {format: CryptoJS.format.Hex });
  //   const data = JSON.stringify(bytes);


//  const data= hex(secretPass)

const hexToDecimal = hex => parseInt(hex, 16);
const data = hexToDecimal(secretPass);
 setDecrptedData(data);

// var hash = CryptoJS.SHA256(secretPass);
   
//     setDecrptedData(hash);
  };

  const switchScreen = (type) => {
    setText("");
    setEncrptedData("");
    setDecrptedData("");
    setScreen(type);
  };

  const handleClick = () => {
    if (!text) return;

    if (screen === "encrypt") encryptData();
    else decryptData();
  };

  return (
    <div className="container">
      <div>
        <button
          className="btn btn-left"
          style={{
            backgroundColor: screen === "encrypt" ? "#5e35b1" : "#5e35b130",
          }}
          onClick={() => {
            switchScreen("encrypt");
          }}
        >
          Encrypt
        </button>

        <button
          className="btn btn-right"
          style={{
            backgroundColor: screen === "decrypt" ? "#1e88e5" : "#1e88e530",
          }}
          onClick={() => {
            switchScreen("decrypt");
          }}
        >
          Decrypt
        </button>
      </div>

      <div className="card">
        <input
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
          name="text"
          type="text"
          placeholder={
            screen === "encrypt" ? "Enter Text" : "Enter Encrypted Data"
          }
        />

        <button className="btn submit-btn" onClick={handleClick}>
          {screen === "encrypt" ? "Encrypt" : "Decrypt"}
        </button>
      </div>

      {encrptedData || decrptedData ? (
        <div className="content">
          <label>{screen === "encrypt" ? "Encrypted" : "Decrypted"} Data</label>
          <p>{screen === "encrypt" ? encrptedData : decrptedData}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;





// import { useState } from "react";
// import './App.css';
// import crypto from "crypto-js";


// function App() {

//   const [aes_hashed_text,setAesHashedText] = useState("");
// const [md5_hashed_text,setMd5HashedText] = useState("");
// const [sha512_hashed_text,setSha512HashedText] = useState("");
// const [sha256_hashed_text,setSha256HashedText] = useState("");
// const [sha3_hashed_text,setSha3HashedText] = useState("");

//     // user input text
//     const [plain_text, setPlainText] = useState("");

//     // submit handler
//     const onSubmit = (e) => {
//       e.preventDefault();
  
//       // md5
//       setMd5HashedText(
//           crypto.MD5(plain_text).toString()
//       );
  
//       // sha512
//       setSha512HashedText(
//           crypto.SHA512(plain_text).toString()
//       );
  
//       // sha256
//       setSha256HashedText(
//           crypto.SHA256(plain_text).toString()
//       );
  
//       //sha3
//       setSha3HashedText(
//           crypto.SHA3(plain_text).toString()
//       );
  
//   }

//     return (
//         <div className="App">

//             <form className="form" onSubmit={onSubmit}>

//                 <div className="form-content">
//                 {
//     md5_hashed_text ? (
//         <div className="form-group">
//             <label>md5</label>
//             <div className="hashed-data-content">
//                 <input type='text' readOnly value={md5_hashed_text} />
//                 {/* <button type="button" onClick={() => copyToClipboard(md5_hashed_text)}>copy</button> */}
//             </div>
//         </div>
//     ) : null
// }

// {
//     sha512_hashed_text ? (
//         <div className="form-group">
//             <label>SHA512</label>
//             <div className="hashed-data-content">
//                 <input type='text' readOnly value={sha512_hashed_text} />
//                 {/* <button type="button" onClick={() => copyToClipboard(sha512_hashed_text)}>copy</button> */}
//             </div>
//         </div>
//     ) : null
// }

// {
//     sha256_hashed_text ? (
//         <div className="form-group">
//             <label>SHA256</label>
//             <div className="hashed-data-content">
//                 <input type='text' readOnly value={sha256_hashed_text} />
//                 {/* <button type="button" onClick={() => copyToClipboard(sha256_hashed_text)}>copy</button> */}
//             </div>
//         </div>
//     ) : null
// }

// {
//     sha3_hashed_text ? (
//         <div className="form-group">
//             <label>SHA3</label>
//             <div className="hashed-data-content">
//                 <input type='text' readOnly value={sha3_hashed_text} />
//                 {/* <button type="button" onClick={() => copyToClipboard(sha3_hashed_text)}>copy</button> */}
//             </div>
//         </div>
//     ) : null
// }

//                     <div className="form-group">
//                         <label>
//                             Sample text
//                         </label>
//                         <input type="text" placeholder="Enter any text" value={plain_text} onChange={
//                             (e) => setPlainText(e.target.value)
//                         } />
//                     </div>


//                     <div className="form-group">
//                         <button className="submit-btn" type="submit">
//                             Generate hashed
//                         </button>
//                     </div>

//                 </div>

//             </form>

//         </div>
//     );
// }
// export default App;