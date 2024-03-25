import './Calendar.css'
import SystemTime from './SystemTime/SystemTime'
import SystemDate from './SystemDate'
import DateMonth from './DateMonth'
import GridCalendar from './GridCalendar'
import ButtonCanlendar from './ButtonCanlendar'
import DaysWeeks from './DaysWeek'
import EventDate from './EventDate'
import {PubSub} from '../services/pubsub'
import CalendarContext from '../services/calendarcontex'
import { ACTIONS } from '../services/actions'
// const pubsub = new PubSub() se invocaria 1 vez (global)
export default function Calendar(){
    const pubsub = new PubSub() // se invoca3 veces (3 calendars) contexto LOCAL/ estado a nivel instancia ) - - de cada calendar
    return (
        <div className='calendar'>
            <CalendarContext.Provider value={pubsub}>                                                             
                <SystemDate/>                
                <SystemTime/>
                <div className='separator'>
                    <div className='header'>
                        <div className='datemonth'>
                            <DateMonth/>
                        </div>                    
                        <ButtonCanlendar action = {ACTIONS.UP}/>
                        <ButtonCanlendar action = {ACTIONS.DOWN}/>
                    </div>
                    <DaysWeeks/>
                    <GridCalendar/>                   
                </div>
                <EventDate />
               
            </CalendarContext.Provider>
        </div>
    )
}