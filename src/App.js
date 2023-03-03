import {
  EditProfile,
  NavBar 
 } from './ui-components';
 import {
  MarketingFooter 
 } from './ui-components';
 import {
  ProfileCardnew 
 } from './ui-components';
import './App.css';
import { useState } from 'react';
import { Button, Flex } from '@aws-amplify/ui-react';
function App() {
  const [createMode, setCreateMode] = useState();
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
{createMode? 
     <Flex justifyContent={"center"}>
<div className='form-wrapper-inner'>
<EditProfile onCancel={() => setCreateMode(false)} onSuccess={() => setCreateMode(false)}/>
</div>
     </Flex>
     :
        

   
<Button onClick={() => setCreateMode(true)}>Click here</Button>}

      <MarketingFooter  width={"100vw"}  />
    

    </div> 
  ); 
}

export default App;
