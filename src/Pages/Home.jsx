import React, { useEffect } from 'react'
import axios from 'axios';
import Section1 from '../Components/StorySections/Section1';
import Section2 from '../Components/StorySections/Section2';
import Section3 from '../Components/StorySections/Section3';
import Section4 from '../Components/StorySections/Section4';
import Section5 from '../Components/StorySections/Section5';
import SectionEnd from '../Components/StorySections/SectionEnd';






export default function Home() {

 
  return (
    <>
        <>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <SectionEnd></SectionEnd>
        </>
    </>
  )
}
