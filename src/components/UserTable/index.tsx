import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { User } from '../../store/types/userTypes';
import { getUsers } from '../../store/actions/userActions';
import { useDispatch} from "react-redux";
import './index.css';

interface UserTableProps {
  users: User[];
  search: string;
  isLoading: boolean;
  isReset: boolean;
  resetData: any;
  updateOpen: any
}

const UserTable: React.FC<UserTableProps> = ({ users, search, isLoading, isReset, resetData, updateOpen }) => {
    const [data, setData] = useState<User[]>([]);
    const [rows, setRows] = useState<User[]>([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(()=>{
        let arr: User[] = [];
        for (let i=0; i < users.length-1; i++){
            arr.push(createData(users[i].name, users[i].username, users[i].email, users[i].address, users[i].company));
        }
        setData(arr);
        setRows(arr);
    },[users]);

    useEffect(() => {
        if(data.length){
           setRows(data); 
           resetData(false)
        }
    }, [isReset]);

    function createData(
        name: string,
        username: string,
        email: string,
        address: { street: string, suite: string, city: string },
        company: { name: string },
    ) {
        return { name, username, email, address, company };
    }

    function searchData(param: string){      
        if(!search.length){
            return "white"
        }else if(param.toLowerCase().indexOf(search.toLowerCase()) != -1){
            return "blue"
        }else{
            return "white"
        }
    }

    function deleteRow(row: string){
        let arr = [...rows];

        for (let i=0; i < arr.length; i++){
            if(arr[i].name == row){
                arr.splice(i,1)
            }
        }
        setRows(arr);
    }

    return(
        <>
            {isLoading ? 
            (
                <p>Loading...</p>
            )
            :
            (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        onClick={() => updateOpen({company: row.company, address: row.address, open: true})}
                        >
                            <TableCell component="th" scope="row" className = {searchData(row.name)}>{row.name}</TableCell>
                            <TableCell align="right"  className = {searchData(row.username)}>{row.username}</TableCell>
                            <TableCell align="right" className = {searchData(row.email)}>{row.email}</TableCell>
                            <TableCell align="right" onClick = {(event: React.MouseEvent) => {event.stopPropagation(); deleteRow(row.name)}}>X</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            )}
        </>
    )
}

export default UserTable;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}