import { Page, Layout, Card, Tag, Stack, TextField, Button} from "@shopify/polaris"

export default function Index() {
 
return (
            <Page title="Matrix 1 K9 Development stage1">
                <Layout>
                    <Layout.Section oneHalf>
                    <Card title="Online store dashboard">
                                <Card.Section>
                                    <Stack>
                                        <Tag onRemove={ () => console.log("Hello Mad1")}>
                                            Test
                                        </Tag>
                                        <Tag onRemove={ () => console.log("Hello Mad1")}>
                                            Test
                                        </Tag>
                                    </Stack>
                                        
                                </Card.Section>

                                <Card.Section>
                                    <Stack distribution="equalSpacing" >
                                        <TextField />
                                        <Button primary>Press1</Button>
                                    </Stack>                                    
                                </Card.Section>
                                </Card>
                                
                    </Layout.Section>
                    <Layout.Section oneHalf>
                        <Card title="Sales Table" sectioned>
                            <p>Table1</p> 
                                                                                                  
                        </Card>
                    </Layout.Section>
                    
                 </Layout>
            </Page>





        )
        
   
    
}