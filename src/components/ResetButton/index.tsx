import Button from '@mui/material/Button';

interface ButtonProps {
    resetData: any;
}

const ResetButton: React.FC<ButtonProps>  = ({ resetData }) => {
    return (
        <Button variant="contained" onClick={() => {resetData(true)}}>Reset</Button>
    );
};
  
export default ResetButton;