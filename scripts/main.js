console.log("you rock :)")

import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getOfficers, useOfficers } from "./officers/OfficerProvider.js"
import { OfficerList } from "./officers/OfficerList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { alibiButtonFunction } from "./criminals/AlibiList.js"
import { renderWitnessButton } from "./witnesses/WitnessButton.js";
import { WitnessList } from "./witnesses/WitnessList.js";
import { getFacilities } from "./facilities/FacilityProvider.js"
import { getCriminalFacilities } from "./facilities/CriminalFacilityProvider.js"
import { renderFacilityButton } from "./facilities/FacilitiesButton.js"
import "./facilities/FacilityList.js"
import { renderHideNoteFormButton } from "./notes/NoteFormButton.js"
import { renderCriminalButton } from "./criminals/CriminalListButton.js"
import { renderHideNoteListButton } from "./notes/NoteListButton.js"

getCriminals()
useCriminals()
CriminalList()
OfficerList()
ConvictionSelect()
OfficerSelect()
NoteForm()
NoteList()
alibiButtonFunction()
renderWitnessButton()
WitnessList()
getFacilities()
getCriminalFacilities()
renderFacilityButton()
renderHideNoteFormButton()
renderCriminalButton()
renderHideNoteListButton()