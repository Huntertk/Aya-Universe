import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        _id: uuidv4(),
        image:[
            "https://i.postimg.cc/mZQBH3K9/2.jpg",
            "https://i.postimg.cc/CM6HbDDF/21.jpg",
            "https://i.postimg.cc/Wz48Twky/13.jpg",
            "https://i.postimg.cc/xTnYyJS4/4.jpg"
        ],
        title:"General Ticket",
        desc:"Aya Universe is a captivating space-themed attraction in Dubai, offering immersive experiences and interactive exhibits that transport visitors on a thrilling journey through the cosmos.",
        type:"bookTypeOne",
        preference:[
            {
                title:"General",
                price:{
                   general: 106
                },
                details:[
                    "General (3 to 99 years old)"
                ]
            },
        ]
    },
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/4dWvLHSQ/19.jpg",
        title:"Virtual Reality Adventures",
        desc:"Step into incredible virtual worlds where you can be a superhero, explore ancient ruins, or even travel through space—all without leaving the building!"
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/9F6dnhJK/AYA-Universe-Dubai-1-1.jpg",
        title:"Augmented Reality Experiences",
        desc:"See the world around you come to life with augmented reality. Interact with virtual creatures, solve puzzles, and discover hidden treasures as you explore"
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/ZqGz90cj/3.jpg",
        title:"Interactive Art Installations",
        desc:"Get lost in mesmerizing art installations that respond to your movements and gestures. It's like stepping into a painting and becoming part of the art work!"
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/rmVCNNQp/18.jpg",
        title:"Gaming Zones",
        desc:"Test your skills in state-of-the-art gaming zones. Whether you're into classic arcade games or the latest virtual reality adventures, there's something for every gamer here."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/hPz8sjbV/caption-2.jpg",
        title:"Live Performances",
        desc:"Be dazzled by live performances featuring cutting-edge technology and mind-blowing special effects. From futuristic dance shows to immersive theatre experiences, there's always something exciting happening at Aya Universe."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/L6DSy996/7.jpg",
        title:"Tech Workshops",
        desc:"Learn from the experts in hands-on tech workshops where you can try your hand at coding, robotics, and more. Who knows? You might discover your inner tech genius!"
    },
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Experience interactive exhibits bringing the universe to life, offering tactile education for all ages.",
        image: "https://i.postimg.cc/ZR6t6Zsm/1.jpg"
    },
    {
        id: uuidv4(),
        desc:"Join expert-led presentations and workshops for insights into astronomy and space exploration.",
        image: "https://i.postimg.cc/4dWvLHSQ/19.jpg"
    },
    {
        id: uuidv4(),
        desc:"Experience simulations unveiling distant celestial wonders in stunning detail.",
        image: "https://i.postimg.cc/L6DSy996/7.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Sunday to Thursday: 10am - 10pm",
            "Friday & Saturday: 10am - 12am",
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Child below 3 years old enter for Free",
            "Adult age above 12 years old",
            "People of determination enter for Free"
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Information",
        ans:[
            "No outside food and drinks allowed inside",
            "Sealed water bottle only allowed",
            "Comfortable and appropriate attire",
            "Flash photography is prohibited inside the attraction",
            "Participants are obligated to keep a valid ID or passport on their personat all times.",
            "The park is not suitable for guest who have light sensitivity or photosensitive epilepsy"
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date"
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"What is the operation hours for Aya Universe ?",
        ans:"Sunday to Thursday open from 10am to 10pm while on Friday and Saturday open until 12am. Last entry to the park is 1 hour before closing"
    },
    {
        id: uuidv4(),
        ques:"Where is Aya Universe located ?",
        ans:"Level One of Wafi City Mall's Main Atrium in Dubai"
    },
    {
        id: uuidv4(),
        ques:"Which metro station is closest to Aya Universe ?",
        ans:"The closest metro station to Aya is The Dubai Healthcare City"
    },
    {
        id: uuidv4(),
        ques:"Can I get discount if am I disabled ?",
        ans:"Yes, For people of determination, you may enter for Free"
    },
    {
        id: uuidv4(),
        ques:"Is there parking available ?",
        ans:"Yes, Covered parking available at the Wafi City Mall"
    },
    {
        id: uuidv4(),
        ques:"Is Aya Universe wheelchair-accessible ?",
        ans:"Yes it is"
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Websitein accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = []