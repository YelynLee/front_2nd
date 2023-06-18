import PropTypes from "prop-types";
import styles from "./Button.module.css";
//create-react-app는 ~.module.css 파일의 코드를 'styles'라는 java object로 변환시켜줌(styles의 모듈화)
//따라서 해당 css 파일을 전부 import해서 전역으로 적용할 필요 없이, 
//object의 property(css 파일 내 class명)로서 세부 적용이 가능

function Button({ text }) {
    return <button className={styles.btn}> {text} </button>;
    //css 파일의 .btn 내용을 '특정'해서 '이곳에서만' 사용
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;