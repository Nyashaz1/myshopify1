
import React, {useCallback, useState} from "react"
import {Heading, Page, DatePicker, Card, List} from "@shopify/polaris"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import {Button, Popover, Select, Modal, Scrollable, TextContainer} from '@shopify/polaris';
import Butto from "./components/Butto"
import datepic1 from "./components/datepic1"
import Test1 from "./components/Test1"
import Test2 from "./components/Test2"
import AddDatel from "./components/AddDatel"
import createApp from '@shopify/app-bridge'; 
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import Nav1 from "./components/Nav1"


export default function Index() {
  const { useState } = React;
return (
    <page>  
        <heading>
            Shopify Range date Madondo
        </heading>
             <div>
             <AddDatel />
             <Butto/>  
             <MainContent/>  
            
            
            
                <Card
  title="K9 Madondo"
  secondaryFooterActions={[{content: 'Cancel ', destructive: true}]}
  primaryFooterAction={{content: 'Next'}}
>
  <Card.Section title="Items">
    <List>
      <List.Item>Sales </List.Item>
      <List.Item>Orders</List.Item>
    </List>
  </Card.Section>
</Card>

                <Footer/>

                
        
            </div>
       
      
    </page>	


    )

}