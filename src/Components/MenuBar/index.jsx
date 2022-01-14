
import { useState } from 'react';
import './Menubar.css'
import DatePicker from 'sassy-datepicker';

export default function Menubar() {

    const [date, setDate] = useState(new Date());
    const onChange = newDate => {
        console.log(`New date selected - ${newDate.toString()}`);
        setDate(newDate);
      };
      window.process = {
        env: {
          NODE_ENV: 'development',
       },
     };


    return (
        <div className="Menubar">
                fdfafassasa
                <DatePicker className="Datapicker" onChange={onChange} selected={date} />
        </div>
    )
}
