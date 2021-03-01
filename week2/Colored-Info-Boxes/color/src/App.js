import React from "react"
import Boxes from "./components/Boxes"



const App = () => {
    return (
        <div> 
            <Boxes 
                title="The Lion"
                subtitle="King of the Jungle"
                information="It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. "
            />
            <Boxes 
            
                title="The Monkey"
                subtitle="Simiiformes"
                information="he term is applied descriptively to groups of primates, such as families of New World monkeys and Old World monkeys."
            />
            <Boxes
                title="The Elephant"
                subtitle=" Elephantidae "
                information="The largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order"
            />
            <Boxes 
                title="The Rhinoceros"
                subtitle="Rhinocerotidae"
                information=". They have a herbivorous diet, small brains (400–600 g) for mammals of their size, one or two horns, and a thick (1.5–5 cm) protective skin formed from layers of collagen positioned in a lattice structure. "
            />
            <Boxes 
                title="The Tiger"
                subtitle="Genus Panthera"
                information=" It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator,"
            />
            <Boxes 
                title="The Honey Badger"
                subtitle="Mellivora Capensis"
                information="Despite its name, the honey badger does not closely resemble other badger species; instead, it bears more anatomical similarities to weasels. It is primarily a carnivorous species and has few natural predators because of its thick skin, strength and ferocious defensive abilities."
            />
            <Boxes 
                title="The Bald Eagle"
                subtitle="Haliaeetus leucocephalus"
                information="The bald eagle is an opportunistic feeder which subsists mainly on fish, which it swoops down and snatches from the water with its talons."
            />
            <Boxes 
                title="The Polar Bear"
                subtitle="Ursus maritimus"
                information=" is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore."
            />
            <Boxes 
                title="The Alligator"
                subtitle="Alligatoridae"
                information="Adult alligators are black or dark olive-brown with white undersides, while juveniles have bright yellow or whitish stripes which sharply contrast against their dark hides, providing them additional camouflage amongst reeds and wetland grasses"
            />
            <Boxes 
                title="The Giant Panda"
                subtitle="Ailuropoda melanoleuca"
                information="the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.  It is characterised by large, black patches around its eyes, over the ears, and across its round body"
            />
        </div>
    )
}
export default App