import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface SearchBarProps {
    updateData: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ updateData }) => {
    const [name, setName] = React.useState('');

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-controlled"
                label="Search"
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    updateData(event.target.value);
                    setName(event.target.value);
                }}
            />
        </Box>
    );
};
  
export default SearchBar;