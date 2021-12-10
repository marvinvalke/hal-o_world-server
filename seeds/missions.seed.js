require('../db') 
const mongoose = require('mongoose')

let MissionModel = require('../models/Mission.model')

//3rd insert data in the model
MissionModel.insertMany([
    {name: 'Mercury', 
    description: "Goals are: To orbit a manned spacecraft around Earth; To investigate man's ability to function in space; To recover both man and spacecraft safely " , 
    image: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/62ma6-55.jpg', 
    duration: 24, 
    difficulty: 'Easy-Peasy', 
   
    },

    {name: 'Gemini', 
    description: "Goals are: To orbit a manned spacecraft around Earth; To investigate man's ability to function in space; To recover both man and spacecraft safely " , 
    image: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/7-s66-54706-b.jpg', 
    duration: 24, 
    difficulty: 'Easy-Peasy', 
    
    },

    {name: 'Apollo', 
    description: "Goals are: To establish the technology to meet other national interests in space; Achieve preeminence in space for the United States; Carry out a program of scientific exploration of the Moon; Develop human capability to work in the lunar environment." , 
    image: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/as16-113-18339.jpg', 
    duration: 120, 
    difficulty: 'Out of this world madness', 
    
    },
    {name: 'Skylab', 
    description: "In orbit, the crew conducts solar astronomy and Earth resources experiments, medical studies and five student experiments. The goal is to install a solar shield 'parasol' from scientific airlock, release solar array wing on EVA, double previous length of time in space." , 
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Skylab_%28SL-4%29.jpg',
    duration: 18, 
    difficulty: 'Childplay', 
    
    },
    {name: 'Apollo-Soyuz', 
    description: "Designed to test the compatibility of rendezvous and docking systems and the possibility of an international space rescue, the nine-day Apollo-Soyuz mission brought together two former spaceflight rivals: the United States and the Soviet Union. Goals are to teach USA and Soviet Union to just be friends and deal with their differences." , 
    image: 'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/astp_crew_photo_s75-22410.jpg?itok=rJ-HvZIW', 
    duration: 5, 
    difficulty: 'Stratospheric-Impossibro', 
    
    },
    {name: 'Space Shuttle', 
    description: "Goals are: to carry people into orbit repeatedly, launch, recover and repair satellites, conduct cutting-edge research and build the largest structure in space, the International Space Station" , 
    image: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/sts082-711-067_orig.jpg', 
    duration: 36, 
    difficulty: 'Medium-Rare beef', 
    
    },
    {name: 'Shuttle-Mir', 
    description: "Goals are: Conduct experiments designed to answer vital questions about how humans, animals and plants function in space, how our solar system originated and developed, how we can build better technology in space and how we can build future space stations" , 
    image: 'https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/sts071-s-072_large.jpg', 
    duration: 30, 
    difficulty: 'Medium-Rare beef', 
   
    },
    {name: 'International Space Station', 
    description: "Goals are to enable long-term exploration of space and provide benefits to people on Earth. With six state-of-the-art laboratories, the Space Station will be the premiere research facility in space, four times larger and more capable than any previous space station." , 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZi4VMgH3NjLMAaNzXhsn85hYp6cq2CLkxNQ&usqp=CAU', 
    duration: 1000, 
    difficulty: 'Ultra Nerd level', 
    
    },
    {name: 'Commercial Crew', 
    description: "This program represents a revolutionary approach to government and commercial collaborations for the advancement of space exploration. In the case of commercial crew, the need centered around a safe, reliable, and cost-effective means of getting humans to low-Earth orbit, including the International Space Station, and return safely to Earth. " , 
    image: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss066e023948.jpg', 
    duration: 12, 
    difficulty: 'Easy-Peasy', 
    
    },
    {name: 'Artemis', 
    description: "We’re going back to the Moon for scientific discovery, economic benefits, and inspiration for a new generation of explorers: the Artemis Generation. Goals are to build an Artemis Base Camp that will allow our robots and astronauts to explore more and conduct more science than ever before." , 
    image: 'https://www.nasa.gov/specials/artemis/img/how.jpg', 
    duration: 35, 
    difficulty: 'Stratospheric-Impossibro', 
    
    }
])
    .then(() => {
        console.log('Data inserted')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Error', err)
        mongoose.connection.close()
    })


    //4th close terminal to run seed file with node!!!     node seeds/Todo.seed.js
    // MISSIONS SEEDED !!
