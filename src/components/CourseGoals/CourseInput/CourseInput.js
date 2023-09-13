import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// CSS module kullanılacağı için yoruma alındı
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  //Ekleme yapıldığında bir ger bildirim göndermek
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //stil özelliklerini sıfırlamak için (en kolay yöntemlerden biri olarak) işlemin yapıldığı bu noktada giriş değerini state ile güncelleyerek değerlerin değişmesini sağlamaktır.
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Boş bir ekleme yapmaması için kontrol bloğu
    if (enteredValue.trim().length === 0) {
      setIsValid(false); //boş girildiğinde geçersiz olacağından false olarak ayarlanır.
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className="form-control"> */}
      {/* Burada stili dinamik olarak değiştirmenin bir yöntemi kullanıldı.  */}
      {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}

      {/* CSS sınıflarını dinamik olarak ayarlayarak stil değiştirmek.  
      Bunun içinj tamplate literal özelliği kullanılır. (backtick kullanılır. ``)
      Burada kullanılan her ifade bir dizi olarak ele alınır. 
      Ayrıca dinamik değerler de eklenebilir. Bunu eklemek için ${} ifadesi içeriisinde yazılır. 
      Bu ifade içerisine istenilenJavaScript ifadesi eklenebilir.

      Bu Şekilde DOM günellenir.
      */}

      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/*bu divi yoruma aldım çünkü artık eski haliyle yazmak yerine bu ifadeyi styled component kullanarak oluşturduk.  */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/** styled['form-control' kısmı css ismi farklı olduğu için bu şekilde ifade edildi.*/}
        {/* bu div önceden form kontrol olarak kullanıldı. ancak CSS module için div olarak değiştirildi. */}
        {/* Bu ifade sonunda boş değer girildiğinde aynı şekilde hata renk değişimi alınır. */}
        {/* yukarıdaki Css kısmında props ile veriler güncellendiği için aynı şekilde çalışacaktır. */}
        <label> Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </div> */}
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
