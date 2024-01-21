import React, { useState } from 'react'
import FooterBox from './FooterBox';
import FooterBoxList from './FooterBoxList';
import FooterBoxImage from './FooterBoxImage';

export default function Footer() {
    const [info, setInfo] = useState(() => {
        return init()
    })
 
    function init(){
        const myInfo = [
            {
                title : 'Trending',
                items : [
                    {
                    name: "Ukraine War",
                    link: 4
                    },
                    {
                    name: "US Elections",
                    link: 6
                    },
                    {
                    name: "G20 Summit",
                    link: 14
                    },
                    {
                    name: "World War Once",
                    link: 93
                    },
                    {
                    name: "US Riots",
                    link: 112
                    },
                    {
                    name: "Hawaii Wildfires",
                    link: 117
                    }
                ]
            },
            {
                title : 'Food',
                items : [
                    {
                    name: "Caramel Pancakes",
                    link: 46
                    },
                    {
                    name: "Creamy Pasta",
                    link: 48
                    },
                    {
                    name: "Japanese Noodles",
                    link: 50
                    },
                    {
                    name: "Neapoltian Pizza",
                    link: 51
                    },
                    {
                    name: "Cheese",
                    link: 53
                    },
                    {
                    name: "Oyakodon",
                    link: 57
                    }
                ]
            },
            {
                title : 'Travel',
                items : [
                    {
                    name: "Switzerland",
                    link: 63
                    },
                    {
                    name: "Amsterdam",
                    link: 65
                    },
                    {
                    name: "Alaska",
                    link: 66
                    },
                    {
                    name: "Spain",
                    link: 73
                    },
                    {
                    name: "Vienna",
                    link: 62
                    },
                    {
                    name: "Greece",
                    link: 61
                    }
                ]
            },
            {
                title : 'Business',
                items : [
                    {
                    name: "Apple",
                    link: 76
                    },
                    {
                    name: "Google",
                    link: 77
                    },
                    {
                    name: "Oil",
                    link: 79
                    },
                    {
                    name: "Amazon",
                    link: 81
                    },
                    {
                    name: "Fortune 500",
                    link: 83
                    },
                    {
                    name: "Tesla",
                    link: 87
                    }
                ]
            },
            {
                title : 'World',
                items : [
                    {
                    name: "The Pope's Gathering",
                    link: 104
                    },
                    {
                    name: "4th July US",
                    link: 98
                    },
                    {
                    name: "Japan's Population Crisis",
                    link: 97
                    },
                    {
                    name: "China Floods",
                    link: 101
                    },
                    {
                    name: "Rhinos Becoming Extinct",
                    link: 99
                    },
                    {
                    name: "Climate Change",
                    link: 94
                    }
                ]
            },
            {
                title : 'Sports',
                items : [
                    {
                    name: "Baseball",
                    link: 41
                    },
                    {
                    name: "NFL",
                    link: 40
                    },
                    {
                    name: "Tiger Woods",
                    link: 35
                    },
                    {
                    name: "Horse Racing",
                    link: 33
                    },
                    {
                    name: "Ice Hockey",
                    link: 32
                    },
                    {
                    name: "Olympic Games",
                    link: 31
                    }
                ]
            },
            {
                title : 'Science',
                items : [
                    {
                    name: "Artificial Intelligence",
                    link: 24
                    },
                    {
                    name: "Sustainable Agriculture",
                    link: 23
                    },
                    {
                    name: "Volcanic Activity",
                    link: 21
                    },
                    {
                    name: "Lion Conservation",
                    link: 18
                    },
                    {
                    name: "Vaccinology",
                    link: 17
                    },
                    {
                    name: "Deer Mating",
                    link: 16
                    }
                ]
            }
        ]
        return myInfo
    }

  return (
    <div className="footer">
        <div className="footer-title">Panaroma Express</div>
        <div className="footer-wrapper">

            <div className="footer-first">
                <div className="footer-first-top footer-row">
                    <FooterBox items={info[0]}></FooterBox>
                    <div className="footer-vertical-line"></div>
                    <FooterBoxList items={info[1]}></FooterBoxList>
                    <div className="footer-vertical-line"></div>
                    <FooterBox items={info[2]}></FooterBox>
                </div>
                <div className="footer-horizontal-line"></div>
                <div className="footer-first-bottom footer-row">
                    <FooterBox items={info[3]}></FooterBox>
                    <div className="footer-vertical-line"></div>
                    <FooterBox width={true} items={info[4]}></FooterBox>
                </div>
            </div>
            <div className="footer-second">
                <div className="footer-second-top">
                    <FooterBoxImage></FooterBoxImage>
                </div>
                <div className="footer-horizontal-line"></div>
                <div className="footer-second-bottom footer-row">
                    <FooterBoxList items={info[5]}></FooterBoxList>
                    <div className="footer-vertical-line"></div>
                    <FooterBoxList items={info[6]}></FooterBoxList>
                </div>
            </div>
        </div>
    </div>
  )
}
