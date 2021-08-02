import React from 'react';
import { Container } from './styles';

export const Steppers = () => (
   <Container>
       <div className="step-number">Step 1 of 3</div>
       <div className="step-icons">
           <div className="step-active"></div>
           <div className="step"></div>
           <div className="step"></div>
       </div>
   </Container> 
)
