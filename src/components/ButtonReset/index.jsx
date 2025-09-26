import { ButtonReset } from './styles';

function ResetButton({ onClick }) {
  return (
    <ButtonReset type="button" onClick={onClick}>
      {"\u21BA"}
    </ButtonReset>
  );
}

export default ResetButton;
