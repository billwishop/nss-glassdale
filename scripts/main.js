console.log("Main module")


import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"

getCriminals()

useCriminals()



const contentElement = document.querySelector(".criminalsContainer")
contentElement.innerHTML += CriminalList()