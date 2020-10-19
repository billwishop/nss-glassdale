console.log("Main module")


import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getOfficers, useOfficers } from "./officers/OfficerProvider.js"
import { OfficerList } from "./officers/OfficerList.js"

getCriminals()

useCriminals()

CriminalList()

OfficerList()