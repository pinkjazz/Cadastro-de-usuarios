import { Button } from './styles';


function DefaultButton({children, theme, ...rest}) {
    return (
       <Button {...rest} theme={theme}>{children}</Button>
    );
}

export default DefaultButton;