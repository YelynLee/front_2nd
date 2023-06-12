import React, {useEffect} from 'react'

useEffect( function, deps )

// 항상 실행
console.log("i run all the time");

// 처음 render 될 때만 딱 한 번 실행
useEffect(() => {
  console.log("I run only once.");
}, []);

// keyword 가 변할 때마다 실행
useEffect(() => {
  console.log("I run when 'keyword' changes.");
}, [keyword]);

// counter 가 변할 때마다 실행
useEffect(() => {
  console.log("I run when 'counter' changes.");
}, [counter]);

// keyword, counter 가 변할 때마다 실행
useEffect(() => {
  console.log("I run when 'keyword & counter' changes.");
}, [keyword, counter]);

// 조건문을 이용해 특정 조건에 맞게 변경했을 때만 실행
useEffect(() => {
  if (keyword !== "" && keyword.length > 5) {
    console.log("Search For", keyword);
  }
}, [keyword]);