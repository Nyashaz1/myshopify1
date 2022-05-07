
import React, {useCallback, useState} from "react"
import {Heading, Page, DatePicker, Card, List} from "@shopify/polaris"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import {Button, Popover, Select, Modal, Scrollable, TextContainer} from '@shopify/polaris';
import Butto from "./components/Butto"
import datepic1 from "./components/datepic1"
import Test1 from "./components/Test1"
import Test2 from "./components/Test2"
import AddDepModal from "./components/AddDatel"
import Datep1 from "./components/Datep1"
import Table1 from "./components/Table1";
import { Router } from "next/router";



export default function Index() {

return (
    
    <page>  
        <BrowserRouter>
    <div className="container">

        <switch>
            <Router path='/'components={Home} exact/>
            <Router path='/Datep1' components={Datep1}/>
            <Router path='/Table1' components={Table1}/>

        </switch>
    </div>
    </BrowserRouter>
        <heading>
            Shopify Madondo
        </heading>
             <div>
                 <Datep1/>
               



                 <Footer/>
            </div>
       
      
    </page>	


    )

}