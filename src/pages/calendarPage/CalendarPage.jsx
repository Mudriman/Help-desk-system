import React, { useState } from 'react';
import './calendarPage.scss';
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ruLocale from '@fullcalendar/core/locales/ru';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";



const CalendarPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Вы точно желаете удалить событие? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };


  return (
    <div className='mainContent'>
      <div className='marginer'></div>
      <div className='rightCase'>
        <div className="calendarHeader">
          КАЛЕНДАРЬ
        </div>
        <Box m="20px">
          <Box display="flex" justifyContent="space-between">
            {/* CALENDAR SIDEBAR */}
            <Box
              flex="1 1 20%"
              backgroundColor={colors.primary[400]}
              p="15px"
              borderRadius="5px"
            >
              <Typography variant="h5" >События</Typography>
              <List>
                {currentEvents.map((event) => (
                  <ListItem
                    key={event.id}
                    sx={{
                      backgroundColor: '#146db76e',
                      margin: "10px 0",
                      borderRadius: "3px",
                    }}
                  >
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <Typography>
                          {formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* CALENDAR */}
            <Box flex="1 1 100%" ml="15px">
              <FullCalendar
                height="75vh"
                locale={ruLocale}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin,
                ]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                  {
                    id: "12315",
                    title: "All-day event",
                    date: "2024-05-14",
                  },
                  {
                    id: "5123",
                    title: "Timed event",
                    date: "2024-05-24",
                  },
                ]}
              />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CalendarPage;
