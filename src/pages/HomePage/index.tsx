import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserTable from "../../components/UserTable";
import SearchBar from "../../components/Searchbar";
import ResetButton from "../../components/ResetButton";
import Modal from '../../components/Modal'
import './index.css';

interface Open {
  open: boolean;
  company: string;
  address: { street: string; suite: string; city: string };
}

const HomePage = () => {
  const [search, setSearch] = React.useState('');
  const [isReset, setIsReset] = React.useState(false);
  const [open, setOpen] = React.useState<Open>({open: false, company: '', address: {street: '', suite: '', city: ''}});
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const updateData = (value: string): any => {
    setSearch(value);
  }

  const resetData = (value: boolean): any => {
    setIsReset(value);
  }

  const updateOpen = (value: boolean | any): any => {
    if(value == false){
      let arr = {...open};
      arr.open = value;
      setOpen(arr);
    }else{
      setOpen(value);
    }
  }

  return (
    <div>
        {error && <p>{error}</p>}
        <Modal open={open} updateOpen={updateOpen}/>
        <div className='flex'>
          <SearchBar updateData={updateData}/>
          <ResetButton resetData={resetData}/>
        </div>
        <UserTable users={users} search={search} isLoading={loading} isReset={isReset} resetData={resetData} updateOpen={updateOpen}/>
    </div>
  );
};

export default HomePage;
