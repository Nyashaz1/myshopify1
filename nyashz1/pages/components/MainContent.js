import React, {useCallback, useState} from "react"
import {Heading, Page, DatePicker} from "@shopify/polaris"


export default function MainContent() {

    class MainContent extends React.Component {
        render() {
          return (
            <div style={{height: '100px'}}>
        <Button disclosure="select" onClick={() => console.log('Open Popover')}>
          Select options
        </Button>
      </div>
          );
        }
      }


const [{month, year}, setDate] = useState({month: 1, year: 2021});
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Jan 07 2021 00:00:00 GMT-0500 (EST)'),
    end: new Date('Sat Jan 10 2022 00:00:00 GMT-0500 (EST)'),
  });

 const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );



return (
    <page>  
       <div>
           
           
           </div> 
        
    </page>	


    )

}